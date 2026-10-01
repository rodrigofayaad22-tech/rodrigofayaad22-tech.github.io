import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

const GITHUB_USER = 'rodrigofayaad22-tech'
// Drop this file into /public and rebuild: the "Download CV" button appears automatically.
const RESUME_FILE = 'curriculo-rodrigo-generoso.pdf'

// Pages built as separate HTML entries (multi-page app, no client router needed).
const PAGES = {
  main: 'index.html',
  caseStudy: 'case-study/viver-divino/index.html',
  notFound: '404.html',
}
const SITEMAP_PATHS = ['', 'case-study/viver-divino/']

/** "/", "portfolio", "/portfolio" or "/portfolio/" -> "/" or "/portfolio/" */
function normalizeBase(value) {
  const trimmed = (value || '').trim().replace(/^\/+|\/+$/g, '')
  return trimmed ? `/${trimmed}/` : '/'
}

/**
 * Injects absolute URLs (canonical, Open Graph, JSON-LD) into the HTML pages
 * and emits robots.txt + sitemap.xml on build.
 */
function siteMeta({ siteUrl, base }) {
  return {
    name: 'rg-site-meta',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', siteUrl).replaceAll('__BASE__', base)
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const urls = SITEMAP_PATHS.map(
        (path) => `  <url>\n    <loc>${siteUrl}/${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
      ).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  // BASE_PATH: "/" for https://<user>.github.io, "/<repo>/" for project pages.
  const base = normalizeBase(env.BASE_PATH)
  const siteUrl = (env.SITE_URL || `https://${GITHUB_USER}.github.io${base}`).replace(/\/+$/, '')
  const hasResume = existsSync(resolve(root, 'public', RESUME_FILE))

  return {
    base,
    plugins: [react(), siteMeta({ siteUrl, base })],
    define: {
      __RESUME_FILE__: JSON.stringify(RESUME_FILE),
      __RESUME_AVAILABLE__: JSON.stringify(hasResume),
    },
    build: {
      target: 'es2020',
      assetsInlineLimit: 2048,
      rolldownOptions: {
        input: Object.fromEntries(
          Object.entries(PAGES).map(([name, file]) => [name, resolve(root, file)]),
        ),
        output: {
          // Stable, cacheable vendor chunks + one chunk for code shared by both pages.
          codeSplitting: {
            groups: [
              { name: 'react', test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/, priority: 3 },
              { name: 'gsap', test: /[\\/]node_modules[\\/]gsap[\\/]/, priority: 2 },
              { name: 'shared', test: /[\\/](src|node_modules)[\\/]/, minShareCount: 2, priority: 1 },
            ],
          },
        },
      },
    },
  }
})
