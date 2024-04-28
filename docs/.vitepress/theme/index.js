import DefaultTheme from "vitepress/theme";
import { inBrowser } from 'vitepress/client';
import "../../../packages/eeeyou-web-ui/dist/index.css";
import WebUi from "../../../packages/eeeyou-web-ui/index.js";

export default {
  extends: DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (inBrowser) {
      app.use(WebUi, { baseURL: '/mock' });
    }
  },
};

/**
 * import WebUi from "../../../packages/eeeyou-web-ui/index.js";
 * app.use(WebUi);
 * npm run docs:dev 开发的时候没问题
 * npm run docs:build 打包的时候报错  window is not defined
 * 
 * 原因：当打包时因为引入的 web-ui库 内部会用到window,但vitepress打包的时候,会在node中执行(为了服务端渲染的场景),node中没有window
 * 
 * 解决方案
 * import { inBrowser } from 'vitepress/client';
 * if (inBrowser) {
 *   app.use(WebUi);
 * }
 */