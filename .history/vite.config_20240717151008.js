import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "vit"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
