import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`,
        // 或使用 @forward（新版推荐）
        // api: 'modern', // 如果你使用的是 Sass 现代模块系统
      }
    }
  },
  server: {
    allowedHosts: true,
    host: true,
    watch: {
      // Mounted filesystem (e.g. /mnt/d) can miss native FS events.
      // Polling keeps HMR reliable for CSS/Vue edits.
      usePolling: true,
      interval: 150
    }
  }
})
