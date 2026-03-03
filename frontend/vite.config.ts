import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = env.VITE_API_TARGET || 'http://10.93.24.247:42001'

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/items': {
          target,
          changeOrigin: true,
          secure: false,
        },
        '/learners': {
          target,
          changeOrigin: true,
          secure: false,
        },
        '/interactions': {
          target,
          changeOrigin: true,
          secure: false,
        },
        '/docs': {
          target,
          changeOrigin: true,
          secure: false,
        },
        '/openapi.json': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})