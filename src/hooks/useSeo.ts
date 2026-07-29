import { useEffect } from 'react'
import { getRouteSeo, type RouteId } from '../config/routes'
import { applySeoMetadata, type SeoOptions } from '../utils/seo'

export function useSeo({ title, description, canonicalPath, canonicalUrl, image, type, noindex }: SeoOptions) {
  useEffect(() => {
    applySeoMetadata({ title, description, canonicalPath, canonicalUrl, image, type, noindex })
  }, [canonicalPath, canonicalUrl, description, image, noindex, title, type])
}

export function useRouteSeo(routeId: RouteId) {
  useSeo(getRouteSeo(routeId))
}
