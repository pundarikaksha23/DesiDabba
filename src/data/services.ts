import { serviceImages } from '../assets/images/selected-images'
import { routes } from '../config/routes'

export type Service = {
  title: string
  label: string
  description: string
  benefits: string[]
  cta: string
  href: string
  imageSrc: string
  imageAlt: string
  imagePosition: string
}

export const services: Service[] = [
  {
    title: 'Weekly Meals',
    label: 'Everyday ritual',
    description:
      'Rotating Indian dabbas cooked in small batches for nourishing workdays, quiet dinners, and families who want beautiful food without the daily planning.',
    benefits: ['Fresh weekly menus', 'Balanced portions', 'Vegetarian-friendly options'],
    cta: 'Start weekly meals',
    href: routes.weeklyMeals,
    imageSrc: serviceImages.weeklyMeals,
    imageAlt: 'Premium Indian weekly meal dabba with rice, curry, bread, and chutney',
    imagePosition: '48% 54%',
  },
  {
    title: 'Corporate Catering',
    label: 'Office ready',
    description:
      'Polished lunch service for team meetings, client hosting, and company celebrations, with menus designed to travel well and serve cleanly.',
    benefits: ['Boxed or buffet formats', 'Dietary planning', 'Reliable timed delivery'],
    cta: 'Plan office catering',
    href: routes.catering,
    imageSrc: serviceImages.corporateCatering,
    imageAlt: 'Elegant Indian catering spread prepared for a corporate lunch',
    imagePosition: '50% 46%',
  },
  {
    title: 'Wedding Catering',
    label: 'Celebration table',
    description:
      'A generous, graceful wedding feast shaped around family traditions, guest comfort, service flow, and the emotional rhythm of the day.',
    benefits: ['Custom regional menus', 'Guest-count planning', 'Dessert and chai service'],
    cta: 'Design the feast',
    href: routes.contact,
    imageSrc: serviceImages.weddingCatering,
    imageAlt: 'Premium Indian wedding catering dishes arranged for a celebration',
    imagePosition: '48% 52%',
  },
  {
    title: 'Private Chef',
    label: 'Chef led',
    description:
      'An intimate restaurant-level Indian dining experience at home, paced and plated with calm service for birthdays, anniversaries, and special evenings.',
    benefits: ['Tailored tasting menus', 'In-home service', 'Elegant plating and pacing'],
    cta: 'Book a chef',
    href: routes.privateChef,
    imageSrc: serviceImages.privateChef,
    imageAlt: 'Private chef Indian tasting menu plated for an intimate dinner',
    imagePosition: '50% 54%',
  },
  {
    title: 'Fusion Experiences',
    label: 'Modern Indian',
    description:
      'Creative Indian menus that pair regional flavors with modern techniques, seasonal produce, and global references for dinners that feel memorable.',
    benefits: ['Concept-led menus', 'Seasonal pairings', 'Interactive tasting moments'],
    cta: 'Create an experience',
    href: routes.contact,
    imageSrc: serviceImages.fusionExperiences,
    imageAlt: 'Modern Indian fusion dish styled for a premium tasting menu',
    imagePosition: '48% 50%',
  },
  {
    title: 'Glazing Platters',
    label: 'Ready to host',
    description:
      'Beautifully arranged platters for gatherings that need instant abundance: snacks, kebabs, breads, chutneys, desserts, and festive finishing touches.',
    benefits: ['Host-ready presentation', 'Mix-and-match selections', 'Perfect for sharing'],
    cta: 'Order platters',
    href: routes.contact,
    imageSrc: serviceImages.premiumPlatters,
    imageAlt: 'Premium Indian platter with snacks, breads, dips, and sweets',
    imagePosition: '52% 48%',
  },
  {
    title: 'Healthy Meal Plans',
    label: 'Clean comfort',
    description:
      'Lighter Indian meal plans built around protein, vegetables, whole grains, and gentle spice, without losing the comfort of home cooking.',
    benefits: ['Macro-conscious choices', 'Seasonal vegetables', 'Low-oil preparation'],
    cta: 'Explore meal plans',
    href: routes.weeklyMeals,
    imageSrc: serviceImages.healthyMealPlans,
    imageAlt: 'Healthy Indian meal plan with vegetables, dal, rice, and fresh accompaniments',
    imagePosition: '50% 46%',
  },
]
