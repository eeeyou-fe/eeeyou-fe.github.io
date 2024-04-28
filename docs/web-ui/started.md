# 快速上手

## 安装

::: code-group

```bash [Npm]
npm i @eeeyou/web-ui
```

```bash [Yarn]
yarn add @eeeyou/web-ui
```

```bash [Pnpm]
pnpm add @eeeyou/web-ui
```

:::

## 使用

```js
import { createApp } from 'vue';
import App from './App.vue';

import WebUi from '@eeeyou/web-ui';
import '@eeeyou/web-ui/dist/index.css';

const app = createApp(App);

app.use(WebUi, options); // 具体如下

app.mount('#app');
```

## options 对象

参数 | 说明 | 备注
-- | -- | --
base | 基准路径 | vue-router 配置
routes | 初始路由列表 | vue-router 配置
afterEach | 全局后置钩子 | vue-router 配置
beforeEach | 全局前置守卫 | vue-router 配置
baseURL | 接口地址前缀（全局） | axios 配置
headers | 接口请求headers（全局） | axios 配置
transformRequest | 接口请求拦截器（全局） | axios 配置
transformResponse | 接口返回拦截器（全局） | axios 配置

- axios参考：https://axios-http.com/zh/
- vue-router参考：https://router.vuejs.org/zh/
