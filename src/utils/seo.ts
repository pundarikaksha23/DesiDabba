import { site } from '../config/site'

export type SeoOptions = {
  title: string
  description?: string
  canonicalPath?: string
  canonicalUrl?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export type ResolvedSeoMetadata = {
  title: string
  fullTitle: string
  description: string
  canonicalUrl: string
  imageUrl: string
  type: 'website' | 'article'
  noindex: boolean
}

const trimTrailingSlash = (value: string) => (value.length > 1 ? value.replace(/\/+$/, '') : value)

export function normalizePath(path = '/') {
  if (!path || path === '/') {
    return '/'
  }

  return `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`
}

export function getCanonicalUrl(path = '/') {
  const baseUrl = trimTrailingSlash(site.url)
  const normalizedPath = normalizePath(path)

  return `${baseUrl}${normalizedPath === '/' ? '' : normalizedPath}`
}

export function getAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  return `${trimTrailingSlash(site.url)}${normalizePath(pathOrUrl)}`
}

export function resolveSeoMetadata({
  title,
  description = site.description,
  canonicalPath,
  canonicalUrl,
  image = site.openGraphImage,
  type = 'website',
  noindex = false,
}: SeoOptions): ResolvedSeoMetadata {
  const fullTitle = `${title} | ${site.name}`

  return {
    title,
    fullTitle,
    description,
    canonicalUrl: canonicalUrl ?? getCanonicalUrl(canonicalPath),
    imageUrl: getAbsoluteUrl(image),
    type,
    noindex,
  }
}

function upsertPropertyMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }

  element.content = content
}

function upsertMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.appendChild(element)
  }

  element.content = content
}

function removeMeta(name: string) {
  document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.remove()
}

function upsertCanonical(url: string) {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }

  canonical.href = url
}

export function applySeoMetadata(options: SeoOptions) {
  const metadata = resolveSeoMetadata(options)

  document.title = metadata.fullTitle
  upsertCanonical(metadata.canonicalUrl)
  upsertMeta('description', metadata.description)

  if (metadata.noindex) {
    upsertMeta('robots', 'noindex, nofollow')
  } else {
    removeMeta('robots')
  }

  upsertPropertyMeta('og:title', metadata.fullTitle)
  upsertPropertyMeta('og:description', metadata.description)
  upsertPropertyMeta('og:type', metadata.type)
  upsertPropertyMeta('og:url', metadata.canonicalUrl)
  upsertPropertyMeta('og:site_name', site.name)
  upsertPropertyMeta('og:image', metadata.imageUrl)
  upsertPropertyMeta('og:image:alt', site.openGraphImageAlt)
  upsertPropertyMeta('og:locale', site.locale)

  upsertMeta('twitter:card', 'summary_large_image')
  upsertMeta('twitter:title', metadata.fullTitle)
  upsertMeta('twitter:description', metadata.description)
  upsertMeta('twitter:image', metadata.imageUrl)
  upsertMeta('twitter:image:alt', site.openGraphImageAlt)
}
