import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const {resolve} = require('path')
const _resolve = (dir: string) => resolve(__dirname, dir)
console.debug('源码src物理路径:' + _resolve('src'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':_resolve('src')
    }
  }
})
