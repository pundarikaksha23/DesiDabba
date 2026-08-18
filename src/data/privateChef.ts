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
    title: 'A menu with clear direction',
    copy: 'Menus can be shaped around a region, season, family preference or occasion so the meal feels consistent from start to finish.',
    icon: Sparkles,
  },
  {
    title: 'A kitchen that runs smoothly',
    copy: 'Prep, plating, pacing and reset are handled carefully, so the host can stay with guests instead of managing service.',
    icon: ChefHat,
  },
  {
    title: 'A meal paced for conversation',
    copy: 'Courses are timed to keep the evening relaxed, comfortable and easy to enjoy.',
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
    description: 'Share the guest count, kitchen setup, dietary needs, occasion and the kind of meal you want to host.',
  },
  {
    step: '02',
    title: 'Shape the menu',
    description: 'We propose an Indian menu with course flow, service details and suitable alternatives where needed.',
  },
  {
    step: '03',
    title: 'Prepare with precision',
    description: 'Ingredients, prep, timing and service details are planned before the chef arrives, so the evening runs smoothly.',
  },
  {
    step: '04',
    title: 'Serve and settle',
    description: 'The chef cooks, plates and wraps up service so the host can stay focused on the guests.',
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

export const privateChefFaq: FaqItem[] = [
  {
    question: 'How many guests is private chef service best for?',
    answer:
      'Private chef service works best for intimate groups, but the right size depends on the menu, kitchen setup and service style you want.',
  },
  {
    question: 'Can the menu be built around one region or family preference?',
    answer:
      'Yes. We can shape the menu around a region, family favourites, spice comfort and dietary needs.',
  },
  {
    question: 'Do you cook everything on site?',
    answer:
      'Some preparation happens in advance, but the final cooking, plating and service are planned around your space.',
  },
  {
    question: 'What do you need from the host before booking?',
    answer:
      'The most useful starting details are the date, guest count, kitchen setup, dietary needs and the kind of meal you want to host.',
  },
]
