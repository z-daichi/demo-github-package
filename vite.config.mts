import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'demo-github-package',
      fileName: (format) => `demo-github-package.${format}.js`
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
  }
})
