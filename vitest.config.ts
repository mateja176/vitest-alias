import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths({ projects: ['./tsconfig.json'] })],
  test: {
    alias: {
      '~/divide': './mocks/divide',
      './divide': './mocks/divide',
      'lodash-es': './mocks/divide',
      'lodash-es/divide': './mocks/divide',
    },
  },
});
