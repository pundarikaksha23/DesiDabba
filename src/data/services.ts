import {
  cateringGalleryImages,
  pageHeroImages,
  privateChefGalleryImages,
  serviceImages,
} from '../assets/images/selected-images'

export type ServicePriceBox = {
  label: string
  value?: string
  note?: string
  detail: string
  highlight?: boolean
}

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
  price?: ServicePriceBox
  priceCards?: ServicePriceBox[]
  image: string
  imageAlt: string
  reverse: boolean
}

export const serviceHeroAnchors = [
  { label: 'Weekly Meals', href: '#weekly-meals' },
  { label: 'Event Catering', href: '#event-catering' },
  { label: 'Private Chef', href: '#private-chef' },
  { label: 'Elegant Platters', href: '#platters' },
] as const

export const detailedServices: DetailedService[] = [
  {
    id: 'weekly-meals',
    number: '01',
    eyebrow: 'Weekly Meal Subscription',
    title: 'Fresh weekly meals, delivered Monday to Friday in Tallinn.',
    lead: 'Fresh, comforting and balanced meals for busy weekdays.',
    body: [
      'Life in Tallinn is busy. Cooking fresh meals every day is not always possible. Desi Dabba prepares a rotating weekly menu with Indian and Asian flavours, seasonal ingredients and home-style care, delivered Monday to Friday.',
      'Our weekly meals are suitable for working professionals, families, students and anyone looking for fresh, comforting food during the week.',
    ],
    benefits: [
      'Fresh weekly meals delivered Monday to Friday',
      'Rotating weekly menu',
      'Vegetarian, vegan and non-vegetarian options',
      'Non-vegetarian meal served once a week',
      'Delivery in Tallinn and nearby areas, based on availability',
    ],
    price: {
      label: 'Starting from',
      value: '€85 / week',
      note: '- including delivery and VAT',
      detail: 'Final price varies by meal type, dietary preference and delivery area. Custom plans available on request.',
      highlight: true,
    },
    image: pageHeroImages.weeklyMeals,
    imageAlt: 'Weekly dinner dabba with rice, curry, bread, and fresh accompaniments',
    reverse: false,
  },
  {
    id: 'event-catering',
    number: '02',
    eyebrow: 'Event Catering',
    title: 'Custom catering for gatherings, celebrations and events.',
    lead: 'Thoughtfully prepared food for birthdays, weddings, office events, private celebrations and cultural gatherings.',
    body: [
      'Food is an important part of every event. At Desi Dabba, we create catering menus based on your occasion, guest count, dietary needs and preferred food style.',
      'Our catering can include Indian warmth, Asian flavours and global food experiences, with options for vegetarian, vegan and non-vegetarian menus.',
      'We support small get-togethers, birthdays, weddings, office lunches, corporate events, private dinners and larger celebrations.',
    ],
    chips: [
      'Birthdays',
      'Weddings',
      'Anniversaries',
      'Office events',
      'Corporate lunches',
      'Cultural events',
      'Private dinners',
      'Community events',
    ],
    benefits: [
      'Custom menus designed around your event and guests',
      'Buffet-style meals, sharing tables and grazing platters',
      'Vegetarian, vegan and non-vegetarian options',
      'Fusion, comfort food and seasonal menu options',
      'Food display, platter styling and basic setup can be discussed',
      'Suitable for small gatherings and larger events',
    ],
    priceCards: [
      {
        label: 'Pricing',
        detail: 'Per-head or package · Customised based on guest count, menu, service style and event requirements.',
      },
      {
        label: 'Advance booking',
        detail: '5-7 days minimum · For large events, weddings and corporate, 2 to 4 weeks preferred.',
      },
    ],
    image: cateringGalleryImages[0],
    imageAlt: 'Catering spread event photo',
    reverse: true,
  },
  {
    id: 'private-chef',
    number: '03',
    eyebrow: 'Private Chef',
    title: 'A personal dining experience, created around you.',
    lead: 'Private dining for homes, venues and special occasions.',
    body: [
      'Some meals deserve a more personal setting. Whether you are planning an intimate dinner, a birthday, a family gathering or a special celebration, Desi Dabba brings a warm and thoughtful food experience to your table.',
      'Our private chef service is built around your occasion, guest count, dietary needs and preferred food style. Menus can include Indian warmth, Asian flavours, fusion dishes, vegetarian, vegan and non-vegetarian options.',
    ],
    benefits: [
      'Private chef for home or venue dining',
      'Custom menu designed around your event',
      'Live cooking or interactive food stations can be discussed',
      'Indian, Asian and global flavours',
      'Festive and celebration menus',
      'Vegetarian, vegan and allergen-aware menus on request',
    ],
    chips: ['Home-style meals', 'Asian flavours', 'Fusion menus', 'Festive menus', 'Live cooking', 'Tasting menus', 'Vegan & vegetarian options'],
    price: {
      label: 'Pricing',
      detail:
        'Customised per event - based on guest count, menu selection, preparation time, service duration, location and live cooking requirements. Share your vision and we will create a tailored quote.',
    },
    image: privateChefGalleryImages[2],
    imageAlt: 'Chef at live counter photo',
    reverse: false,
  },
  {
    id: 'platters',
    number: '04',
    eyebrow: 'Grazing Platters',
    title: 'Beautiful platters, made to be shared.',
    lead: 'Styled sharing platters for gatherings, office events, celebrations and private hosting.',
    body: [
      'Our grazing platters are designed for moments when you want food to look beautiful, feel generous and be easy to share.',
      'Each platter is prepared with fresh ingredients and arranged with care. Platters can include savoury bites, sweets, snacks, fusion finger food, vegetarian and vegan options, and seasonal additions.',
      'They are suitable for small get-togethers, birthdays, office events, cultural gatherings, private celebrations and larger events.',
    ],
    benefits: [
      'Styled grazing platters for events and private hosting',
      'Vegetarian, vegan and fusion finger food options',
      'Sweet and savoury sharing selections',
      'Suitable for small gatherings and larger events',
      'Custom platter design based on dietary needs and occasion',
      'Indian warmth, Asian flavours and global food experiences',
    ],
    chips: ['Savoury bites', 'Sweets', 'Snacks', 'Fusion finger food', 'Vegetarian options', 'Vegan options', 'Celebration platters'],
    price: {
      label: 'Pricing',
      detail: 'Customised by size and selection - depends on number of guests, items selected and dietary requirements. Contact us for a quote.',
    },
    image: serviceImages.premiumPlatters,
    imageAlt: 'Styled South Asian sharing platter with colorful appetizers',
    reverse: true,
  },
] as const

export const servicesFaq = [
  {
    question: 'Can I combine services for one event?',
    answer:
      'Absolutely. Many of our clients combine catering with grazing platters, or add a private chef experience to a larger event. Get in touch and we will put together a package that works for you.',
  },
  {
    question: 'Do you serve clients outside Tallinn?',
    answer:
      'For catering and private chef services, we can discuss events in other parts of Estonia depending on the event size and requirements. Contact us with your details and we will do our best to accommodate.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply message us on WhatsApp or send an email. Share what you have in mind - the service, your date, guest count and any preferences - and we will come back to you with everything you need.',
  },
] as const
