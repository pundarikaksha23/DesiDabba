import { cateringGalleryImages } from '../assets/images/selected-images'
import type { FaqItem, GalleryImage, TimelineItem } from '../types/content'

export const cateringOccasions = [
  {
    name: 'Corporate Hosting',
    detail: 'Boardroom lunches, client tables, leadership offsites, and long workshop days that need food to arrive calm and composed.',
  },
  {
    name: 'Weddings & Family Milestones',
    detail: 'Generous menus shaped around ceremony, elders, children, pacing, dietary needs, and the dishes families quietly hope to see.',
  },
  {
    name: 'Private Celebrations',
    detail: 'Birthdays, anniversaries, housewarmings, and intimate evenings where the food should feel personal without making hosting heavy.',
  },
]

export const buffetPackages = [
  {
    name: 'The Polished Lunch',
    serves: '20-60 guests',
    description: 'A refined office-friendly buffet with fragrant rice, two mains, dal, bread, salad, chutneys, and a sweet finish.',
    inclusions: ['Vegetarian and mixed menus', 'Labeled dietary notes', 'Chafing setup available'],
  },
  {
    name: 'The Celebration Table',
    serves: '40-180 guests',
    description: 'A fuller spread for family-style abundance: chaat, kebabs, regional mains, breads, rice, accompaniments, and dessert.',
    inclusions: ['Custom regional direction', 'Dessert and chai add-ons', 'Service staff coordination'],
  },
  {
    name: 'The Signature Feast',
    serves: '60-260 guests',
    description: 'A premium event menu with layered courses, live stations, elevated presentation, and planning for guest flow.',
    inclusions: ['Live station options', 'Menu tasting available', 'Full event planning support'],
  },
]

export const menuHighlights = [
  'Mini masala dosa with coconut chutney',
  'Ajwain paneer tikka with smoked chilli',
  'Lucknowi chicken korma with saffron pulao',
  'Coastal coconut vegetable curry',
  'Dal makhani finished with cumin ghee',
  'Cardamom phirni with pistachio',
]

export const cateringGallery: GalleryImage[] = [
  { title: 'Gold-rimmed family-style table', position: '42% center', imageSrc: cateringGalleryImages[0] },
  { title: 'Office dabba service', position: '55% center', imageSrc: cateringGalleryImages[1] },
  { title: 'Wedding buffet details', position: '68% center', imageSrc: cateringGalleryImages[2] },
  { title: 'Dessert and chai finish', position: '78% center', imageSrc: cateringGalleryImages[3] },
]

export const bookingProcess: TimelineItem[] = [
  {
    step: '01',
    title: 'Share the Occasion',
    description: 'Tell us the date, guest count, setting, dietary needs, and the kind of feeling the meal should leave behind.',
  },
  {
    step: '02',
    title: 'Shape the Menu',
    description: 'We suggest a polished menu direction with courses, formats, service notes, and thoughtful alternatives.',
  },
  {
    step: '03',
    title: 'Confirm the Details',
    description: 'Once timing, quantities, setup, and delivery are aligned, we prepare a clear quote and production plan.',
  },
  {
    step: '04',
    title: 'Serve With Calm',
    description: 'On the day, food arrives labeled, composed, and ready for the table, buffet, or hosted service style.',
  },
]

export const cateringFaq: FaqItem[] = [
  {
    question: 'How far ahead should we book catering?',
    answer:
      'For office lunches, one to two weeks is usually enough. For weddings, large gatherings, or custom regional menus, four to eight weeks gives us better room for planning.',
  },
  {
    question: 'Can you support vegetarian and mixed menus together?',
    answer:
      'Yes. We often design parallel vegetarian and mixed menus so guests feel equally considered rather than treated as an exception.',
  },
  {
    question: 'Do you provide staff and setup?',
    answer:
      'For larger buffets and premium events, we can coordinate setup, chafing, labeling, and service support based on the venue and guest count.',
  },
  {
    question: 'Can the menu be region-specific?',
    answer:
      'Absolutely. We can build around Punjabi, Gujarati, Bengali, South Indian, coastal, or mixed regional references when shared early in planning.',
  },
]
