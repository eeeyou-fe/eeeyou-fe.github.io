export default {
  title: "易油互联-FE-Team",
  description: "脚手架说明、开发规范、技术文档",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "FE-Team",
    logo: "/favicon.ico",
    outlineTitle: "目录",
    search: { provider: "local" },
    docFooter: { prev: "上一页", next: "下一页" },
    footer: {
      copyright: "Copyright © 2024 - 易油互联",
    },
    nav: [
      { text: "脚手架", link: "/guide/features", activeMatch: "/guide/" },
      { text: "UI库", link: "/web-ui/features", activeMatch: "/web-ui/" },
      { text: "函数库", link: "/utils/features", activeMatch: "/utils/" },
      { text: "Livekit", link: "/livekit/features", activeMatch: "/livekit/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指引",
          items: [
            { text: "特性", link: "/guide/features" },
            { text: "快速开始", link: "/guide/started" },
          ],
        },
      ],
      "/web-ui/": [
        {
          text: "简介",
          collapsed: false,
          items: [
            { text: "特性", link: "/web-ui/features" },
            { text: "快速上手", link: "/web-ui/started" },
          ],
        },
        {
          text: "组件",
          collapsed: false,
          items: [
            { text: "Card", link: "/web-ui/card" },
            { text: "Dialog", link: "/web-ui/dialog" },
            { text: "Table", link: "/web-ui/table" },
          ],
        },
      ],
      "/utils/": [
        {
          text: "公共方法",
          collapsed: false,
          items: [],
        },
        {
          text: "第三方库",
          collapsed: false,
          items: [
            { text: "dayjs", link: "/utils/dayjs" },
            { text: "lodash", link: "/utils/lodash" },
            { text: "rsa加密", link: "/utils/rsajs" },
          ],
        },
      ],
      "/livekit/": [
        {
          text: "客户端",
          collapsed: false,
          items: [
            { text: "特性", link: "/livekit/features" },
            { text: "快速上手", link: "/livekit/started" },
            { text: "连接到房间", link: "/livekit/connecting" },
            { text: "发布Tracks", link: "/livekit/publishing" },
            { text: "接收Tracks", link: "/livekit/receiving" },
            { text: "数据消息", link: "/livekit/messages" },
            { text: "事件处理", link: "/livekit/events" },
            { text: "配置项", link: "/livekit/options" },
            { text: "附录", link: "/livekit/appendix" },
          ],
        },
      ]
    },
  },
};
