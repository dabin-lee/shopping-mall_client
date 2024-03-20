import { defineConfig } from 'vite'
import withReactRouter from 'vite-plugin-next-react-router'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react(), withReactRouter()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx', '.css'],
  },
})
