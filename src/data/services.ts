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
    title: 'Home-style Indian dinners. Delivered to your door.',
    lead: 'A warm, wholesome dinner waiting for you every evening — made fresh, delivered on time, no fuss.',
    body: [
      'Life in Tallinn is busy. Cooking a fresh, balanced meal every evening is not always possible. That is where Desi Dabba steps in. Each week, we prepare a rotating menu of home-style Indian dinners — made from quality ingredients, cooked with care, and delivered warm to your door between 18:00 and 20:00, Monday to Friday.',
      'Whether you are a working professional, a family craving something different, or an expat missing the flavours of home — our weekly subscription brings the comfort of a home-cooked South Asian meal, right to your table.',
    ],
    benefits: [
      'One fresh home-style dinner per day, Monday to Friday',
      'Rotating weekly menu — curry, dal, rice, bread and sides',
      'Vegetarian, selected non-vegetarian and vegan options',
      'Delivery between 18:00 and 20:00 in Tallinn',
      'Designed for working professionals, families and expats craving comfort food',
    ],
    price: {
      label: 'Starting from',
      value: '€85 / week',
      note: '— including delivery and VAT',
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
    title: 'Premium catering for moments that matter.',
    lead: 'Birthdays, weddings, corporate lunches, cultural celebrations — we bring South Asian flavour and elegant presentation to every event.',
    body: [
      'Food is at the heart of every great gathering. At Desi Dabba, we design catering experiences that go beyond a buffet — each menu is crafted around your event, your guests and the story you want to tell. From intimate family celebrations to large corporate gatherings, we bring Indian and South Asian-inspired cuisine with the warmth, care and presentation it deserves.',
      'We are proud to be one of the first dedicated South Asian catering brands in Estonia — offering flavours, concepts and food experiences that many guests in Tallinn may be discovering for the very first time.',
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
      'Premium buffet-style meals, elegant platters and fusion options',
      'Vegan, vegetarian and gut-friendly options available',
      'Probiotic drinks and South Asian-inspired beverages',
      'Food display, platter styling and basic serving arrangements',
      'Events from 10–15 guests to large gatherings — fully scalable',
    ],
    priceCards: [
      {
        label: 'Pricing',
        detail: 'Per-head or package · Customised based on guest count, menu, service style and event requirements.',
      },
      {
        label: 'Advance booking',
        detail: '5–7 days minimum · For large events, weddings and corporate, 2 to 4 weeks preferred.',
      },
    ],
    image: cateringGalleryImages[0],
    imageAlt: 'Catering spread event photo',
    reverse: true,
  },
  {
    id: 'private-chef',
    number: '03',
    eyebrow: 'Private Chef Hire',
    title: 'A personal dining experience, crafted just for you.',
    lead: 'Bring the magic of South Asian cuisine into your home, venue or private event — with a dedicated chef, live cooking and a menu built around you.',
    body: [
      'Some meals deserve more than a restaurant. Whether you are hosting an intimate dinner, celebrating a special occasion or simply craving a truly personal food experience — our private chef service brings the kitchen to you.',
      'From South Asian tasting menus and live cooking counters to bespoke private dining experiences, every detail is designed around what you love. This is food as hospitality — personal, thoughtful and unlike anything you have experienced before.',
    ],
    benefits: [
      'Per-event private chef for home or venue dining',
      'Live cooking counters and interactive food stations',
      'South Asian tasting menus — curated and personalised',
      'Fusion menus blending Indian, South Asian and international flavours',
      'Festive and cultural celebration menus',
      'Vegan, vegetarian and allergen-aware menus on request',
    ],
    chips: ['Home-style Indian', 'South Asian fusion', 'Festive menus', 'Live cooking', 'Tasting menus', 'Vegan & vegetarian'],
    price: {
      label: 'Pricing',
      detail:
        'Customised per event — based on guest count, menu selection, preparation time, service duration, location and live cooking requirements. Share your vision and we will create a tailored quote.',
    },
    image: privateChefGalleryImages[2],
    imageAlt: 'Chef at live counter photo',
    reverse: false,
  },
  {
    id: 'platters',
    number: '04',
    eyebrow: 'Elegant Platters',
    title: 'Beautiful platters. Made to be shared.',
    lead: 'Curated South Asian-inspired food platters for gatherings of any size — thoughtfully prepared, beautifully presented and full of flavour.',
    body: [
      'Food shared is food remembered. Our elegant platters are designed for moments when presentation matters as much as taste — gatherings, celebrations, office events or simply an evening with people you love.',
      'Each platter is carefully prepared using fresh ingredients, inspired by South Asian flavours and styled to look as beautiful as it tastes. From vibrant vegetarian spreads to fusion finger food and probiotic drink accompaniments, Desi Dabba platters bring something truly different to any table.',
    ],
    benefits: [
      'South Asian-inspired mezze and sharing platters',
      'Vegetarian, vegan and fusion finger food selections',
      'Festive and celebration platters for cultural events',
      'Gut-friendly ingredients and probiotic drink pairings',
      'Suitable for small gatherings to large events',
      'Custom platter design based on dietary needs and preferences',
    ],
    price: {
      label: 'Pricing',
      detail: 'Customised by size and selection — depends on number of guests, items selected and dietary requirements. Contact us for a quote.',
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
      'Absolutely. Many of our clients combine catering with glazing platters, or add a private chef experience to a larger event. Get in touch and we will put together a package that works for you.',
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
