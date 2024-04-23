import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'https://draft.eeeyou.cn:8000/',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: resolve(process.cwd(), '.', 'src') + '/',
      },
    ],
  },
  plugins: [vue()],
});
