# 快速开始

## 安装

### 前置条件

- Nodejs 16 及以上版本

::: code-group

```bash [Npm]
npm create eeeyou
```

```bash [Yarn]
yarn create eeeyou
```

```bash [Pnpm]
pnpm create eeeyou
```

:::

然后按照提示操作即可！

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个web项目，运行:

``` bash
# npm
npm create eeeyou my-vue-web --t web

# yarn
yarn create eeeyou my-vue-web --t web

# pnpm
pnpm create eeeyou my-vue-web --t web
```

目前支持的模板有：web 和 uni

## 文件结构

```
.
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ public
│  └─ favicon.ico
├─ src
│  ├─ api
│  ├─ assets
│  │  ├─ iconfont
│  │  └─ images
│  ├─ components
│  ├─ layouts
│  ├─ router
│  ├─ store
│  ├─ views
│  ├─ App.vue
│  └─ main.js
├─ .gitignore
├─ index.html
├─ package.json
├─ prettier.config.cjs
└─ vite.config.js
```

## 启动并运行

::: code-group

```bash [Npm]
npm install
npm run dev
```

```bash [Yarn]
yarn
yarn dev
```

```bash [Pnpm]
pnpm install
pnpm run dev 
```

:::
