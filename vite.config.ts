import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const shouldAnalyze = process.env.ANALYZE
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: !!shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })] : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    react(),
    VitePWA(),
    ViteWebfontDownload(),
    checker({
      typescript: true,
      overlay: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"' // for example, lint .ts & .tsx
      }
    })
  ]
})
