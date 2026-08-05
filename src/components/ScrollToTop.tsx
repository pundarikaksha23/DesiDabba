import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduceMotion ? 'auto' : 'smooth'

    if (!hash) {
      window.scrollTo({ top: 0, behavior })
      return
    }

    const elementId = decodeURIComponent(hash.slice(1))
    let frameId = 0
    let attempts = 0

    const scrollToHashTarget = () => {
      const target = document.getElementById(elementId)

      if (target) {
        target.scrollIntoView({ block: 'start', behavior })
        return
      }

      if (attempts >= 24) {
        window.scrollTo({ top: 0, behavior })
        return
      }

      attempts += 1
      frameId = window.requestAnimationFrame(scrollToHashTarget)
    }

    frameId = window.requestAnimationFrame(scrollToHashTarget)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [pathname, hash])

  return null
}
