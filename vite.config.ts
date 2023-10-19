import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import * as path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
