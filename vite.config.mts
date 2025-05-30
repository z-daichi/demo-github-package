import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), libInjectCss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'index',
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      // 外部依存を指定
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'TailwindCSS'
        }
      }
    }
  },
})

