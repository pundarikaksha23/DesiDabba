import {
  cateringGalleryImages,
  pageHeroImages,
  privateChefGalleryImages,
  serviceImages,
} from '../assets/images/selected-images'

export type Service = {
  label: string
  title: string
  description: string
  benefits: string[]
  href: string
  cta: string
  imageAlt: string
  imagePosition: string
}

export type DetailedService = {
  id: string
  number: string
  eyebrow: string
  title: string
  lead: string
  body: string[]
  benefits?: string[]
  chips?: string[]
  image: string
  imageAlt: string
  reverse: boolean
}

export const serviceHeroAnchors = [
  { label: 'Weekly Meals', href: '#weekly-meals' },
  { label: 'Event Catering', href: '#event-catering' },
  { label: 'Private Chef', href: '#private-chef' },
  { label: 'Grazing Platters', href: '#platters' },
] as const

export const detailedServices: DetailedService[] = [
  {
    id: 'weekly-meals',
    number: '01',
    eyebrow: 'Weekly Meals',
    title: 'Fresh weekly meals, delivered Monday to Friday in Tallinn.',
    lead: 'Comforting, balanced meals for busy weekdays — with a menu that changes each week and stays easy to enjoy.',
    body: [
      'Life in Tallinn is busy. Cooking a fresh, balanced meal every day is not always possible. That is where Desi Dabba steps in. Each week, we prepare a changing menu of fresh weekday meals with Indian and Asian flavours, seasonal variety and home-style comfort.',
      'Choose a vegetarian, vegan or non-vegetarian plan, confirm before the weekly cutoff and enjoy meals delivered Monday to Friday. The website does not lock you into a fixed restaurant-style list — the menu changes with the week.',
    ],
    benefits: [
      'Fresh weekly menu that changes every week',
      'Vegetarian, vegan and non-vegetarian meal options',
      'Monday to Friday delivery in Tallinn and nearby areas',
      'Friday 5 PM cutoff for the following week',
      'Balanced meals prepared in small batches with care',
    ],
    image: pageHeroImages.weeklyMeals,
    imageAlt: 'Weekly dinner dabba with rice, curry, bread, and fresh accompaniments',
    reverse: false,
  },
  {
    id: 'event-catering',
    number: '02',
    eyebrow: 'Event Catering',
    title: 'Flexible catering for gatherings and events.',
    lead: 'Birthdays, weddings, corporate lunches and private celebrations with warm flavours, clear planning and polished presentation.',
    body: [
      'Desi Dabba creates catering menus around your event, your guests and the way you want food to be served. From intimate family celebrations to larger corporate gatherings, we bring Indian, Asian and global flavours with warm service and polished presentation.',
      'Our catering is designed to feel flexible, international and welcoming in Tallinn — with thoughtful menus for guests who may want familiar Indian favourites, broader Asian influences, or a more global food experience.',
    ],
    chips: [
      'Birthdays',
      'Weddings',
      'Anniversaries',
      'Corporate lunches',
      'Office gatherings',
      'Cultural events',
      'Festive celebrations',
      'Private dinners',
      'Community events',
    ],
    benefits: [
      'Customised menu designed around your event and guests',
      'Buffet-style meals, sharing tables, grazing platters and private dining formats',
      'Vegan, vegetarian and gut-friendly options available',
      'Probiotic drinks and house beverages',
      'Food display, platter styling and basic serving arrangements',
      'Suitable for small gatherings and larger events',
    ],
    image: cateringGalleryImages[0],
    imageAlt: 'Catering spread event photo',
    reverse: true,
  },
  {
    id: 'private-chef',
    number: '03',
    eyebrow: 'Private Chef Hire',
    title: 'Private dining, planned around your guests.',
    lead: 'Bring a dedicated chef, live cooking and a custom menu into your home, venue or private event.',
    body: [
      'Private chef service is ideal for intimate dinners, special occasions and home or venue events where you want something more personal than standard catering.',
      'From Indian tasting menus and live cooking counters to private dining shaped by Asian and global flavours, the menu and service are built around your guests, your space and your preferences.',
      'Every private chef booking is quoted individually based on the menu, guest count, location and service style.',
    ],
    benefits: [
      'Per-event private chef for home or venue dining',
      'Live cooking counters and interactive food stations',
      'Indian tasting menus — curated and personalised',
      'Fusion menus blending Indian, Asian and international flavours',
      'Festive and cultural celebration menus',
      'Vegan, vegetarian and allergen-aware menus on request',
    ],
    chips: ['Home-style Indian', 'Asian fusion', 'Festive menus', 'Live cooking', 'Tasting menus', 'Vegan & vegetarian'],
    image: privateChefGalleryImages[2],
    imageAlt: 'Chef at live counter photo',
    reverse: false,
  },
  {
    id: 'platters',
    number: '04',
    eyebrow: 'Grazing Platters',
    title: 'Grazing platters for easy hosting.',
    lead: 'Grazing platters for gatherings of any size, prepared with care and presented cleanly.',
    body: [
      'Our platters are designed for gatherings, celebrations, office events and casual hosting where presentation matters as much as flavour.',
      'Each platter is prepared with fresh ingredients and shaped by Indian, Asian and global flavours. From vegetarian spreads to fusion finger food and probiotic drink pairings, the selection can be adjusted for the occasion.',
      'Each platter order is quoted based on guest count, selection and dietary requirements.',
    ],
    benefits: [
      'Grazing and sharing platters for warm hosting',
      'Vegetarian, vegan and fusion finger food selections',
      'Festive and celebration platters for cultural events',
      'Gut-friendly ingredients and probiotic drink pairings',
      'Suitable for small gatherings to large events',
      'Custom platter design based on dietary needs and preferences',
    ],
    image: serviceImages.premiumPlatters,
    imageAlt: 'Styled grazing platter with colorful appetizers',
    reverse: true,
  },
] as const

export const servicesFaq = [
  {
    question: 'Can I combine services for one event?',
    answer:
      'Absolutely. Many clients combine catering with grazing platters, or add a private chef experience to a larger event. Get in touch and we will suggest a setup that fits your event.',
  },
  {
    question: 'Do you serve clients outside Tallinn?',
    answer:
      'For catering and private chef services, we can discuss events in other parts of Estonia depending on the event size and requirements. Contact us with your details and we will do our best to accommodate.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply message us on WhatsApp or send an email. Share what you have in mind — the service, your date, guest count and any preferences — and we will come back to you with everything you need.',
  },
] as const
