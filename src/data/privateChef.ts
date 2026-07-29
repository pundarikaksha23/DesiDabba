import { ChefHat, Clock, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { privateChefGalleryImages } from '../assets/images/selected-images'
import type { GalleryImage, TimelineItem } from '../types/content'

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
    description: 'We propose a seasonal Indian menu with course flow, plating notes, and thoughtful alternates where needed.',
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

export const sampleMenu = [
  { course: 'Welcome', dish: 'Curry leaf lime spritz with spiced makhana' },
  { course: 'First', dish: 'Mini masala dosa, coconut chutney, tomato podi oil' },
  { course: 'Second', dish: 'Ajwain paneer tikka, smoked chilli, pickled onion' },
  { course: 'Main', dish: 'Lucknowi chicken korma or coastal vegetable curry with saffron pulao' },
  { course: 'Table', dish: 'Dal makhani, soft breads, kachumber, raita, seasonal achar' },
  { course: 'Sweet', dish: 'Cardamom phirni, pistachio, rose, jaggery sesame crisp' },
]

export const privateChefGallery: GalleryImage[] = [
  { title: 'Chef-led tasting table', position: '42% center', imageSrc: privateChefGalleryImages[0] },
  { title: 'Plated regional course', position: '56% center', imageSrc: privateChefGalleryImages[1] },
  { title: 'Private dinner details', position: '68% center', imageSrc: privateChefGalleryImages[2] },
  { title: 'Sweet finish and chai', position: '80% center', imageSrc: privateChefGalleryImages[3] },
]
