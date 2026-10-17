import { copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const gradientAsciiCss = fileURLToPath(new URL('./src/components/Gradient ASCIl.css', import.meta.url))

function resolveGradientAsciiCss() {
  return {
    name: 'resolve-gradient-ascii-css',
    resolveId(source, importer) {
      if (source === './GradientASCII.css' && importer?.endsWith('Gradient ASCIl.jsx')) {
        return gradientAsciiCss
      }
    },
  }
}

const docsDir = fileURLToPath(new URL('./docs', import.meta.url))

function publishToDocs() {
  return {
    name: 'publish-to-docs',
    closeBundle() {
      copyFileSync(join(docsDir, 'index.html'), join(docsDir, '404.html'))
      writeFileSync(join(docsDir, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss(), resolveGradientAsciiCss(), publishToDocs()],
})
