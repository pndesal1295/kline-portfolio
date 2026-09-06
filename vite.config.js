import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '')

  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'absolute-social-preview-url',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_URL__', siteUrl || '.')
        },
      },
    ],
  }
})
