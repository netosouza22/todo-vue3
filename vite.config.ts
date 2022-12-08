import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "src/assets/styles/_variables.scss";
        @import "src/assets/styles/_typography.scss"; 
        @import "src/assets/styles/_breakpoints.scss";`
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: path.resolve(__dirname, './src')
      },
    ]
  },
  plugins: [vue(), eslintPlugin()],
});
