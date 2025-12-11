import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // <-- ensures correct paths in the built files
  plugins: [react()],
})
