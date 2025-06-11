import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({

  server: {
    host: true,
    proxy: {
      '/': {
        target: 'http://localhost:4173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/luna/, ''),
      },
    },
    hmr: {
      host: '4173-ino6n7no3exkr5thu6w0z-4ce3b20d.manus.computer',
      protocol: 'wss',
    },
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    cors: true,
    allowedHosts: ['4173-ino6n7no3exkr5thu6w0z-4ce3b20d.manus.computer'],
  },
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


