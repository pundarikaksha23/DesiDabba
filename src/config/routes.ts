import { getCanonicalUrl } from '../utils/seo'

export type RouteId =
  | 'home'
  | 'menu'
  | 'about'
  | 'story'
  | 'services'
  | 'weeklyMeals'
  | 'catering'
  | 'privateChef'
  | 'glazingPlatters'
  | 'gallery'
  | 'contact'
  | 'privacyPolicy'
  | 'terms'

export type FooterVisibility = 'navigation' | 'legal' | 'hidden'

export type RouteConfig = {
  path: string
  pageTitle: string
  metaDescription: string
  canonicalUrl: string
  navigationLabel: string
  footerVisibility: FooterVisibility
}

export const routeConfig = {
  home: {
    path: '/',
    pageTitle: 'Simple Sustainable Soulful Indian Food',
    metaDescription:
      'Desi Dabba creates premium Indian weekly meals, catering, and private chef experiences with Scandinavian simplicity and South Asian warmth.',
    canonicalUrl: getCanonicalUrl('/'),
    navigationLabel: 'Home',
    footerVisibility: 'navigation',
  },
  menu: {
    path: '/menu',
    pageTitle: 'Weekly Meals',
    metaDescription:
      'Explore Desi Dabba weekly rotating Indian meal plans, subscription details, delivery information, benefits, and FAQs.',
    canonicalUrl: getCanonicalUrl('/menu'),
    navigationLabel: 'Menu',
    footerVisibility: 'hidden',
  },
  about: {
    path: '/about',
    pageTitle: 'About',
    metaDescription:
      'The story, mission, vision, philosophy, timeline, and values behind Desi Dabba premium Indian meals and catering.',
    canonicalUrl: getCanonicalUrl('/about'),
    navigationLabel: 'About',
    footerVisibility: 'navigation',
  },
  story: {
    path: '/story',
    pageTitle: 'About',
    metaDescription:
      'The story, mission, vision, philosophy, timeline, and values behind Desi Dabba premium Indian meals and catering.',
    canonicalUrl: getCanonicalUrl('/story'),
    navigationLabel: 'Story',
    footerVisibility: 'hidden',
  },
  services: {
    path: '/services',
    pageTitle: 'Premium Services',
    metaDescription:
      'Explore Desi Dabba weekly meals, corporate catering, wedding catering, private chef dinners, fusion experiences, premium platters, and healthy meal plans.',
    canonicalUrl: getCanonicalUrl('/services'),
    navigationLabel: 'Services',
    footerVisibility: 'navigation',
  },
  weeklyMeals: {
    path: '/weekly-meals',
    pageTitle: 'Weekly Meals',
    metaDescription:
      'Explore Desi Dabba weekly rotating Indian meal plans, subscription details, delivery information, benefits, and FAQs.',
    canonicalUrl: getCanonicalUrl('/weekly-meals'),
    navigationLabel: 'Weekly Meals',
    footerVisibility: 'hidden',
  },
  catering: {
    path: '/catering',
    pageTitle: 'Catering',
    metaDescription:
      'Book Desi Dabba premium Indian catering for corporate lunches, weddings, private celebrations, buffet packages, and elegant hosted events.',
    canonicalUrl: getCanonicalUrl('/catering'),
    navigationLabel: 'Catering',
    footerVisibility: 'hidden',
  },
  privateChef: {
    path: '/private-chef',
    pageTitle: 'Private Chef',
    metaDescription:
      'Book a premium Desi Dabba private chef experience for intimate Indian dinners, regional tasting menus, and elegant hosted evenings.',
    canonicalUrl: getCanonicalUrl('/private-chef'),
    navigationLabel: 'Private Chef',
    footerVisibility: 'hidden',
  },
  glazingPlatters: {
    path: '/glazing-platters',
    pageTitle: 'Glazing Platters',
    metaDescription:
      'Explore Desi Dabba glazing platters for celebrations, office gatherings, host-ready sharing menus, and custom South Asian platter styling.',
    canonicalUrl: getCanonicalUrl('/glazing-platters'),
    navigationLabel: 'Glazing Platters',
    footerVisibility: 'hidden',
  },
  gallery: {
    path: '/gallery',
    pageTitle: 'Gallery',
    metaDescription: 'View Desi Dabba food, buffets, events, platters, kitchen moments, and private chef tables.',
    canonicalUrl: getCanonicalUrl('/gallery'),
    navigationLabel: 'Gallery',
    footerVisibility: 'navigation',
  },
  contact: {
    path: '/contact',
    pageTitle: 'Contact',
    metaDescription:
      'Contact Desi Dabba for weekly meals, catering, private chef bookings, delivery details, and custom menus.',
    canonicalUrl: getCanonicalUrl('/contact'),
    navigationLabel: 'Contact',
    footerVisibility: 'navigation',
  },
  privacyPolicy: {
    path: '/privacy-policy',
    pageTitle: 'Privacy Policy',
    metaDescription: 'How Desi Dabba handles enquiry details, contact information, and service preferences.',
    canonicalUrl: getCanonicalUrl('/privacy-policy'),
    navigationLabel: 'Privacy Policy',
    footerVisibility: 'legal',
  },
  terms: {
    path: '/terms',
    pageTitle: 'Terms',
    metaDescription:
      'General service terms for Desi Dabba weekly meals, catering, private chef bookings, and enquiries.',
    canonicalUrl: getCanonicalUrl('/terms'),
    navigationLabel: 'Terms',
    footerVisibility: 'legal',
  },
} satisfies Record<RouteId, RouteConfig>

export const routes = Object.fromEntries(
  Object.entries(routeConfig).map(([key, route]) => [key, route.path]),
) as Record<RouteId, string>

export const routeSegments = Object.fromEntries(
  Object.entries(routeConfig)
    .filter(([, route]) => route.path !== '/')
    .map(([key, route]) => [key, route.path.slice(1)]),
) as Record<Exclude<RouteId, 'home'>, string>

export const getRouteSeo = (routeId: RouteId) => {
  const route = routeConfig[routeId]

  return {
    title: route.pageTitle,
    description: route.metaDescription,
    canonicalUrl: route.canonicalUrl,
  }
}
