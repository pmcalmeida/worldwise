import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "vite-plugin-esling"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
