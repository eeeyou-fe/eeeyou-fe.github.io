import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  entries: ['./src/index'],
  rollup: {
    esbuild: {
      minify: true
    },
    inlineDependencies: true
  },
})