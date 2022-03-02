import { resolve } from 'path';
import { readdirSync } from 'fs';

import { plugins } from './src/plugins';

import { defineConfig, UserConfig } from 'vite';

const config: UserConfig = {
  plugins,
  build: {
    outDir: resolve(__dirname, '../back/local/templates/leader'),
    rollupOptions: {
      input: {}
    }
  }
};

const targetExt = '.html'

readdirSync(__dirname)
  .forEach(file => {
    if (!file.endsWith(targetExt)) { return; }
    const key = file.substring(0, file.length - targetExt.length)
    config.build.rollupOptions.input[key] = resolve(__dirname, file)
  });

export default defineConfig(config)
