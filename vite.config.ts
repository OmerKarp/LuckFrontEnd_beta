import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'  // Import resolve from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),  // Resolve the path to index.html
        staking: resolve(__dirname, 'staking/index.html'), 
      }
    }
  }
})
