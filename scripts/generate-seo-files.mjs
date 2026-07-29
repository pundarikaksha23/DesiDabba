import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const siteSourcePath = path.join(root, 'src/config/site.ts')
const routesSourcePath = path.join(root, 'src/config/routes.ts')

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function normalizePath(value) {
  if (!value || value === '/') {
    return '/'
  }

  return `/${value.replace(/^\/+/, '').replace(/\/+$/, '')}`
}

function canonicalUrl(siteUrl, routePath) {
  const baseUrl = siteUrl.replace(/\/+$/, '')
  const normalizedPath = normalizePath(routePath)

  return `${baseUrl}${normalizedPath === '/' ? '' : normalizedPath}`
}

async function readSiteUrl() {
  const source = await readFile(siteSourcePath, 'utf8')
  const match = source.match(/url:\s*'([^']+)'/)

  if (!match) {
    throw new Error('Unable to read site.url from src/config/site.ts')
  }

  return match[1]
}

async function readRoutePaths() {
  const source = await readFile(routesSourcePath, 'utf8')
  const paths = [...source.matchAll(/path:\s*'([^']+)'/g)].map((match) => match[1])

  return [...new Set(paths)]
}

function buildSitemap(siteUrl, routes) {
  const urls = routes
    .map((routePath) => `    <url><loc>${escapeXml(canonicalUrl(siteUrl, routePath))}</loc></url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function buildRobots(siteUrl) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${canonicalUrl(siteUrl, '/sitemap.xml')}\n`
}

const siteUrl = await readSiteUrl()
const routes = await readRoutePaths()

await mkdir(publicDir, { recursive: true })
await writeFile(path.join(publicDir, 'sitemap.xml'), buildSitemap(siteUrl, routes))
await writeFile(path.join(publicDir, 'robots.txt'), buildRobots(siteUrl))
