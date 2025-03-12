import { fileURLToPath, URL } from "node:url"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'

dotenv.config()
const apiUrl = process.env.VITE_API_URL

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),  
  ],
  define: {
    __API_URL__: JSON.stringify(apiUrl),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})