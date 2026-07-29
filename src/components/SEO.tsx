import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { routeConfig } from '../config/routes'
import { applySeoMetadata, normalizePath } from '../utils/seo'

const routesByPath = new Map(Object.values(routeConfig).map((route) => [normalizePath(route.path), route]))

export function SEO() {
  const location = useLocation()
  const metadata = useMemo(() => {
    const path = normalizePath(location.pathname)
    const route = routesByPath.get(path)

    if (route) {
      return {
        title: route.pageTitle,
        description: route.metaDescription,
        canonicalUrl: route.canonicalUrl,
      }
    }

    return {
      title: 'Page Not Found',
      canonicalPath: path,
      noindex: true,
    }
  }, [location.pathname])

  useEffect(() => {
    applySeoMetadata(metadata)
  }, [metadata])

  return null
}
