import { HandPlatter, Leaf, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import type { FaqItem, GalleryImage, TimelineItem } from '../types/content'

import platterHero from '../assets/images/platters/mixed-canape-platter-table-8f0a4288.jpg'
import platterCanape from '../assets/images/platters/canape-spoon-appetizer-row-8f0a4279.jpg'
import platterSpoons from '../assets/images/platters/canape-spoon-appetizer-row-8f0a4280.jpg'
import platterTower from '../assets/images/platters/fruit-dessert-tower-8f0a4299.jpg'
import platterSkewers from '../assets/images/platters/tandoori-skewer-appetizer-platter-8f0a4331.jpg'

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

export type PlatterNote = {
  title: string
  copy: string
  icon: IconComponent
}

export const platterNotes: PlatterNote[] = [
  {
    title: 'Styled to arrive host-ready',
    copy: 'Every platter is arranged for immediate impact, so the table looks composed before the first guest reaches for a bite.',
    icon: Sparkles,
  },
  {
    title: 'Balanced for mixed preferences',
    copy: 'Vegetarian, vegan, mild, bold, sweet, savory, and celebratory combinations can all live together without the spread feeling crowded.',
    icon: HandPlatter,
  },
  {
    title: 'Fresh, vibrant, and shareable',
    copy: 'We keep the food bright and generous, with textures and colors that make grazing feel abundant rather than repetitive.',
    icon: Leaf,
  },
]

export const platterCollections = [
  {
    name: 'The Casual Gathering',
    serves: '8-15 guests',
    description: 'An easygoing mix of chaat bites, kebabs, breads, dips, and sweets for house visits, birthdays, and office drop-offs.',
    inclusions: ['Savory and sweet balance', 'Vegetarian-first options available', 'Designed for coffee tables and counters'],
  },
  {
    name: 'The Celebration Spread',
    serves: '15-35 guests',
    description: 'A fuller platter story with layered textures, signature garnishes, and a more polished presentation for milestone occasions.',
    inclusions: ['Canapes, skewers, chutneys, and desserts', 'Festive styling and garnish direction', 'Easy serving for larger groups'],
  },
  {
    name: 'The Signature Table',
    serves: '35+ guests',
    description: 'A custom platter-led setup for launches, cultural celebrations, receptions, and hosted events where food doubles as visual decor.',
    inclusions: ['Custom styling by event mood', 'Dietary split planning', 'Optional pairing with catering or dessert table'],
  },
]

export const platterMoments = [
  'Housewarmings and birthdays',
  'Office socials and team lunches',
  'Baby showers and festive pujas',
  'Pre-wedding events and welcome evenings',
  'Gallery launches and intimate receptions',
  'Family visits when hosting should stay light',
]

export const platterGallery: GalleryImage[] = [
  { title: 'Mixed platter table', position: '48% center', imageSrc: platterHero },
  { title: 'Canape row with garnish', position: '54% center', imageSrc: platterCanape },
  { title: 'Spoon appetizers', position: '52% center', imageSrc: platterSpoons },
  { title: 'Dessert tower finish', position: '50% center', imageSrc: platterTower },
]

export const platterProcess: TimelineItem[] = [
  {
    step: '01',
    title: 'Share the occasion',
    description: 'Tell us the date, guest count, dietary needs, and whether the platter should feel playful, festive, polished, or all three.',
  },
  {
    step: '02',
    title: 'Build the selection',
    description: 'We suggest a mix of bites, sweets, colors, and formats that suits the room and the style of hosting.',
  },
  {
    step: '03',
    title: 'Style the spread',
    description: 'Items are finished with garnish, layout, and packaging choices that travel well and still feel considered on arrival.',
  },
  {
    step: '04',
    title: 'Set down and serve',
    description: 'The platter arrives ready to place and share, with clear handling notes if the gathering needs a little staging guidance.',
  },
]

export const platterFaq: FaqItem[] = [
  {
    question: 'Can platters be fully vegetarian or vegan?',
    answer:
      'Yes. Many platter menus are built entirely vegetarian or vegan, and we can still keep them varied, colorful, and generous.',
  },
  {
    question: 'How far ahead should we order?',
    answer:
      'For smaller gatherings, a few days is often enough. For custom styling, larger counts, or dates around festivals and weddings, earlier is always better.',
  },
  {
    question: 'Can platters be paired with catering or desserts?',
    answer:
      'Absolutely. Platters often work beautifully as a welcome spread, cocktail-hour table, or sweet finish alongside a larger catered menu.',
  },
  {
    question: 'Do you customize around allergies and dietary restrictions?',
    answer:
      'Yes. Share allergies, dietary boundaries, and any items to avoid, and we will shape the selection with those needs in mind.',
  },
]

export const platterFeatureImage = platterSkewers
