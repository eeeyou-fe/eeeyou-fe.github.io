import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default (options) => {
  NProgress.configure({ showSpinner: false });

  const router = createRouter({
    history: createWebHistory(options.base || '/'),
    routes: options.routes || [],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });

  router.beforeEach((to, from, next) => {
    NProgress.start();
    if (options.beforeEach) {
      options.beforeEach(to, from, next);
    } else {
      next();
    }
  });

  router.afterEach((to, from) => {
    NProgress.done();
    if (options.afterEach) {
      options.afterEach(to, from);
    }
  });

  return router;
};
