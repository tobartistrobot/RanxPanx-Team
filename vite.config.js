import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Este archivo es el "traductor" que le dice a Vercel cómo leer tu código de React
export default defineConfig({
  plugins: [react()],
})
