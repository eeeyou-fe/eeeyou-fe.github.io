import polyfill from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import fs from 'node:fs';

export default () => {
  const arr = [];
  const files = fs.readdirSync('./lib');
  files.forEach((file) => {
    arr.push({
      input: 'lib/' + file,
      output: {
        file: 'dist/' + file,
        inlineDynamicImports: true,
      },
      context: 'window',
      plugins: [resolve(), polyfill(), commonjs(), terser()],
    });
  });
  return [
    ...arr,
    {
      input: 'src/index.js',
      output: {
        file: 'dist/index.js',
      },
      plugins: [terser()],
    },
  ];
};
// 参考：https://www.rollupjs.com/
// https://blog.csdn.net/DreamFJ/article/details/93878528  https://blog.csdn.net/qq_38519358/article/details/132366605  https://blog.csdn.net/DreamFJ/article/details/93876688
