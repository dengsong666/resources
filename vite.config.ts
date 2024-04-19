// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // 指定打包输出目录
    lib: {
      name: 'words', // 指定打包后的文件名
      entry: 'main.ts', // 指定入口文件
      formats: ['es', 'iife']
    }
  },
});