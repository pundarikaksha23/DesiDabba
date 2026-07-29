import { routeConfig } from './routes'

export type NavigationLink = {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = Object.values(routeConfig)
  .filter((route) => route.footerVisibility === 'navigation')
  .map((route) => ({
    label: route.navigationLabel,
    href: route.path,
  }))
