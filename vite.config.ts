import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This polyfills the 'process' variable so Amplify doesn't crash
    global: {},
    'process.env': {}
  },
})
