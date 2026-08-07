import type { ComponentType } from 'react'
import { Flame, Leaf, Sparkles, Wheat } from 'lucide-react'
import { homeGalleryImages, pageHeroImages, serviceImages } from '../assets/images/selected-images'
import type { GalleryImage, TimelineItem } from '../types/content'
import weeklyMealsData from './weeklyMeals.json'

export type MenuItem = {
  name: string
  description: string
  price: string
  tag: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}

const icons = {
  flame: Flame,
  leaf: Leaf,
  sparkles: Sparkles,
  wheat: Wheat,
}

export const weeklyMeals = {
  ...weeklyMealsData,
  meals: weeklyMealsData.meals.map((meal) => ({
    ...meal,
    icon: icons[meal.icon as keyof typeof icons],
  })),
}

export const signatureDabbas: MenuItem[] = weeklyMeals.meals.slice(0, 4)

export const menuSections = [
  {
    title: 'Small Plates',
    items: ['Ajwain paneer tikka', 'Mini masala dosas', 'Corn bhel tartlets', 'Methi chicken skewers'],
  },
  {
    title: 'Mains',
    items: ['Dum biryani', 'Baingan bharta', 'Malai kofta', 'Railway mutton curry'],
  },
  {
    title: 'Sweets',
    items: ['Saffron phirni', 'Gulab jamun cheesecake', 'Pistachio kulfi', 'Cardamom chocolate truffles'],
  },
]

export const weeklyMealsGallery: GalleryImage[] = [
  { title: 'Balanced dabba close-up', position: '50% center', imageSrc: pageHeroImages.weeklyMeals },
  { title: 'Handheld plated meal', position: '50% center', imageSrc: homeGalleryImages[0] },
  { title: 'Rice and sides service', position: '50% center', imageSrc: homeGalleryImages[1] },
  { title: 'Curry and biryani spread', position: '50% center', imageSrc: serviceImages.healthyMealPlans },
]

export const weeklyMealsProcess: TimelineItem[] = [
  {
    step: '01',
    title: 'Choose your rhythm',
    description: 'Tell us how many meals you need, your preferred cadence, and any dietary needs or household preferences.',
  },
  {
    step: '02',
    title: 'Receive the menu',
    description: 'We share the weekly menu direction so you know what is coming and can adjust around allergies, spice level, or routine.',
  },
  {
    step: '03',
    title: 'We cook and pack',
    description: 'Meals are prepared fresh, portioned with care, and packed to travel well without losing comfort or warmth.',
  },
  {
    step: '04',
    title: 'Dinner arrives ready',
    description: 'Your dabba arrives on time, ready to heat, plate, and fold easily into the evening without extra decision-making.',
  },
]
