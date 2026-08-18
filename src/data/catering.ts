import { cateringGalleryImages } from '../assets/images/selected-images'
import type { FaqItem, GalleryImage, TimelineItem } from '../types/content'

export const cateringOccasions = [
  {
    name: 'Small Get-Togethers',
    detail: 'Food for intimate gatherings, house parties, family dinners and relaxed evenings with friends.',
  },
  {
    name: 'Birthdays & Private Celebrations',
    detail: 'Warm and flavourful menus for birthdays, anniversaries, housewarmings and personal milestones.',
  },
  {
    name: 'Weddings & Family Events',
    detail: 'Thoughtful catering for weddings, family functions and larger celebrations, with vegetarian, vegan and non-vegetarian options.',
  },
  {
    name: 'Office & Corporate Events',
    detail: 'Fresh and well-presented food for office lunches, team gatherings, workshops, client meetings and company events.',
  },
]

export const cateringFormats = [
  {
    name: 'Buffet Style',
    description: 'A generous and elegant setup for weddings, office events, birthdays and larger gatherings.',
  },
  {
    name: 'Sharing Table',
    description: 'Beautiful food arranged for relaxed gatherings, family-style meals and private celebrations.',
  },
  {
    name: 'Grazing Platters',
    description: 'Styled platters with snacks, bites, sweets and sharing food for effortless hosting.',
  },
  {
    name: 'Private Dining',
    description: 'A more personal food experience for homes, private venues and special evenings.',
  },
]

export const menuStyles = [
  'Indian and Asian flavours',
  'Vegetarian and vegan menus',
  'Non-vegetarian options',
  'Fusion and comfort food',
  'Chaat, snacks and sharing bites',
  'Buffet-style meals',
  'Sweets, desserts and drinks',
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
    description: 'Tell us the date, guest count, location, occasion and dietary needs.',
  },
  {
    step: '02',
    title: 'Choose the Style',
    description: 'We suggest a menu and service format based on your event.',
  },
  {
    step: '03',
    title: 'Confirm the Details',
    description: 'We confirm the menu, quantity, delivery, setup and final quote.',
  },
  {
    step: '04',
    title: 'Enjoy the Event',
    description: 'Food is prepared with care and delivered or served according to the agreed plan.',
  },
]

export const cateringFaq: FaqItem[] = [
  {
    question: 'How far in advance should we book catering?',
    answer:
      'For small events, please contact us at least a few days in advance. For weddings, corporate events and larger gatherings, earlier booking is recommended.',
  },
  {
    question: 'Do you provide vegetarian and vegan options?',
    answer:
      'Yes. Vegetarian and vegan options are available.',
  },
  {
    question: 'Do you provide non-vegetarian options?',
    answer:
      'Yes. Non-vegetarian options can be included based on the event menu.',
  },
  {
    question: 'Can the menu be customised?',
    answer:
      'Yes. Menus are customised based on the occasion, guest count, dietary needs and preferred food style.',
  },
  {
    question: 'Do you provide setup or staff?',
    answer:
      'Basic setup can be discussed. Service staff and additional support can be arranged depending on the event.',
  },
  {
    question: 'Do you mention prices on the website?',
    answer:
      'No. Pricing should not be shown on the catering page. Each event is quoted separately based on menu, guest count, location, service style and setup needs.',
  },
]
