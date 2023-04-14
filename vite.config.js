import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^iconify-/.test(tag)
        }
      }
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
