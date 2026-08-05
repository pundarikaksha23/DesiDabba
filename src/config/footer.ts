import { routeConfig, routes } from './routes'

export const footerServiceLinks = [
  { label: 'Weekly Meals', href: routes.weeklyMeals },
  { label: 'Corporate Catering', href: routes.catering },
  { label: 'Wedding Catering', href: routes.catering },
  { label: 'Private Chef', href: routes.privateChef },
  { label: 'Glazing Platters', href: `${routes.services}#platters` },
]

export const footerLegalLinks = Object.values(routeConfig)
  .filter((route) => route.footerVisibility === 'legal')
  .map((route) => ({
    label: route.navigationLabel,
    href: route.path,
  }))
