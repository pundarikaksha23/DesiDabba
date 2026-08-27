import { ChefHat, Clock, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { privateChefGalleryImages } from '../assets/images/selected-images'
import type { FaqItem, GalleryImage, TimelineItem } from '../types/content'

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

export type ExperienceNote = {
  title: string
  copy: string
  icon: IconComponent
}

export const experienceNotes: ExperienceNote[] = [
  {
    title: 'A menu with a point of view',
    copy: 'Built around one region, one season, one memory, or one mood, so the evening feels composed instead of assembled.',
    icon: Sparkles,
  },
  {
    title: 'A kitchen that moves quietly',
    copy: 'Prep, plating, pacing, and reset are handled with calm attention, letting the host stay present at the table.',
    icon: ChefHat,
  },
  {
    title: 'A meal paced for conversation',
    copy: 'Courses arrive with enough ceremony to feel special and enough ease to keep the room warm.',
    icon: Clock,
  },
]

export const privateChefOccasions = [
  'Anniversary dinners',
  'Milestone birthdays',
  'Intimate wedding events',
  'Family reunions',
  'Client hosting at home',
  'Regional tasting evenings',
]

export const privateChefProcess: TimelineItem[] = [
  {
    step: '01',
    title: 'Tell us the room',
    description: 'Share the guest count, kitchen setup, dietary needs, occasion, and the tone you want the evening to carry.',
  },
  {
    step: '02',
    title: 'Shape the menu',
    description: 'We propose a seasonal menu with Indian warmth, Asian flavours and global food experiences, plus course flow, plating notes, and thoughtful alternates where needed.',
  },
  {
    step: '03',
    title: 'Prepare with precision',
    description: 'Ingredients, prep, timing, and service details are planned before the chef arrives, so the evening can feel effortless.',
  },
  {
    step: '04',
    title: 'Serve and settle',
    description: 'The chef cooks, plates, and closes the service with the kind of care that lets the host return to the table.',
  },
]

export const privateChefMenuStyles = [
  'Indian favourites',
  'Asian flavours',
  'Indo-Chinese dishes',
  'Chaat counters',
  'Desserts',
  'Healthy meals',
  'Gut-friendly food',
  'Vegetarian options',
  'Vegan options',
  'Non-vegetarian options',
  'Custom celebration menus',
] as const

export const sampleMenu = [
  {
    course: 'Welcome',
    lines: [
      'Curry leaf lime spritz with roasted makhana',
      'or',
      'House-made probiotic drink with herbs and citrus',
    ],
  },
  {
    course: 'First Bite',
    lines: [
      'Mini paneer tikka with mint yoghurt',
      'or',
      'Crispy vegetable wonton with chilli-garlic dip',
    ],
  },
  {
    course: 'Second Bite',
    lines: [
      'Tandoori-style cauliflower with pickled onion',
      'or',
      'Asian cucumber salad with sesame and ginger',
    ],
  },
  {
    course: 'Main Plate',
    lines: [
      'Lucknowi chicken korma or coastal vegetable curry with saffron pulao',
      'or',
      'Indo-Chinese chilli paneer / tofu with fragrant rice',
    ],
  },
  {
    course: 'For the Table',
    lines: ['Dal, soft breads, seasonal salad, raita, fresh chutneys and light pickles'],
  },
  {
    course: 'Healthy Finish',
    lines: [
      'Cardamom phirni with pistachio',
      'or',
      'Fresh fruit with spiced yoghurt and jaggery crumble',
    ],
  },
]

export const privateChefGallery: GalleryImage[] = [
  { title: 'Chef-led tasting table', position: '42% center', imageSrc: privateChefGalleryImages[0] },
  { title: 'Plated regional course', position: '56% center', imageSrc: privateChefGalleryImages[1] },
  { title: 'Private dinner details', position: '68% center', imageSrc: privateChefGalleryImages[2] },
  { title: 'Sweet finish and chai', position: '80% center', imageSrc: privateChefGalleryImages[3] },
]

export const privateChefFaq: FaqItem[] = [
  {
    question: 'How many guests is private chef service best for?',
    answer:
      'Private chef service is best for small and medium private gatherings. The final guest count depends on the menu, kitchen setup and service style.',
  },
  {
    question: 'Can the menu be customised?',
    answer:
      'Yes. Every menu is customised based on your taste, comfort, dietary needs, spice level and occasion.',
  },
  {
    question: 'Can you include vegetarian, vegan or non-vegetarian options?',
    answer:
      'Yes. Menus can include vegetarian, vegan and non-vegetarian dishes.',
  },
  {
    question: 'Do you also do desserts and chaat counters?',
    answer:
      'Yes. We can include desserts, chaat counters, fusion bites, healthy dishes and gut-friendly food as part of the menu.',
  },
  {
    question: 'Do you cook everything on site?',
    answer:
      'Some preparation may be done in advance, and final cooking, plating or service can be done at the location depending on the menu and setup.',
  },
  {
    question: 'What do you need before booking?',
    answer:
      'Please share the date, guest count, location, kitchen setup, dietary needs and the kind of food experience you want.',
  },
]
