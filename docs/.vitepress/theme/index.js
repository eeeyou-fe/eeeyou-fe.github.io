import DefaultTheme from "vitepress/theme";
import "../../../packages/eeeyou-web-ui/dist/index.css";
// import WebUi from "../../../packages/eeeyou-web-ui/index.js";

export default {
  ...DefaultTheme,
  NotFound: () => "404",
  enhanceApp: async (ctx) => {
    // app.use(WebUi);
    let { app } = ctx;
    DefaultTheme.enhanceApp(ctx);
    app.mixin({
      async mounted() {
        import('../../../packages/eeeyou-web-ui/index.js').then(module => {
            app.use(module.default);
        })
      },
    });
  },
};

/**
 * 方法1：
 * import WebUi from "../../../packages/eeeyou-web-ui/index.js";
 * app.use(WebUi);
 * npm run docs:dev 开发的时候没问题
 * npm run docs:build 打包的时候报错  window is not defined
 * 
 * 原因：当打包时因为引入的 web-ui组件库 内部会用到window,但vitepress打包的时候,会在node中执行(为了服务端渲染的场景),node中没有window
 * 
 * 方法2：（推荐）
 * app.mixin({
 *   async mounted() {
 *     import('../../../packages/eeeyou-web-ui/index.js').then(module => {
 *       app.use(module.default);
 *     })
 *   },
 * });
 */