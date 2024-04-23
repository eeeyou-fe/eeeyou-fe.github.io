import { createApp } from 'vue';
import App from './App.vue';

import WebUi from '@eeeyou/web-ui';
import '@eeeyou/web-ui/dist/index.css';

import routes from '/@/router/index';

const app = createApp(App);
const WHITE_LIST = ['/login'];
const proxy = app.config.globalProperties;

app.use(WebUi, {
  routes: routes,
  headers: {
    token: () => {
      return localStorage.getItem('token');
    },
    yyid: 'yy6cT9wX2dG5nB4i',
  },
  beforeEach: (to, form, next) => {
    if (WHITE_LIST.indexOf(to.path) == -1 && localStorage.getItem('token')) {
      next();
    } else if (WHITE_LIST.indexOf(to.path) > -1) {
      if (localStorage.getItem('token')) {
        next({ path: '/home' });
      } else {
        next();
      }
    } else {
      next({ path: '/login' });
    }
  },
  transformResponse: (res) => {
    if (res instanceof Blob) {
      return res; // 文件流
    } else {
      if (res.code == 20000) {
        return res;
      } else if (res.code == 40001 || res.code == 40002 || res.code == 41005) {
        proxy.$message.error(res.message);
        localStorage.removeItem('token');
        proxy.$router.push('/login');
        window.location.reload();
      } else {
        proxy.$message.error(res.message);
        throw res;
      }
    }
  },
});

app.mount('#app');
