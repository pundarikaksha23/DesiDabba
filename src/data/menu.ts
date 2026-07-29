import type { ComponentType } from 'react'
import { Flame, Leaf, Sparkles, Wheat } from 'lucide-react'
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
