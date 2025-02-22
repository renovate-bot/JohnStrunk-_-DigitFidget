/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // https://vite.dev/guide/static-deploy.html#github-pages
  base: '/DigitFidget/',
  define: {
    // https://vitest.dev/guide/in-source.html#production-build
    'import.meta.vitest': 'undefined',
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    // Enable in-source testing
    // https://vitest.dev/guide/in-source.html#setup
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
  },
})
