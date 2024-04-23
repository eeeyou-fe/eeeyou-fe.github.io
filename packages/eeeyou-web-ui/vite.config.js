import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; // 设置name属性

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // css 文件名
        assetFileNames: 'index.css',
        // 指定导出模式
        exports: 'named',
      },
    },
    lib: {
      entry: './index.js',
      fileName: 'web-ui',
      name: 'web-ui',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~/index.scss";`,
        // 目前sass版本是 @import 语法，后续版本会 @use 'xxx.scss' as *; 代替 @import 'xxx.scss';
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
