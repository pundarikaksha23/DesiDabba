import { CalendarDays, ChefHat, HeartHandshake, Leaf, PackageCheck, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { routes } from '../config/routes'

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

export const homeServices: Array<{
  title: string
  copy: string
  href: string
  icon: IconComponent
}> = [
  {
    title: 'Weekly Meals',
    copy: 'Rotating dabbas for calmer weekdays: balanced portions, regional gravies, soft breads, fragrant rice, and bright accompaniments.',
    href: routes.weeklyMeals,
    icon: CalendarDays,
  },
  {
    title: 'Catering',
    copy: 'Elegant Indian spreads for offices, celebrations, and gatherings where every guest should feel looked after.',
    href: routes.catering,
    icon: HeartHandshake,
  },
  {
    title: 'Private Chef',
    copy: 'A chef-led table at home, shaped around one region, one season, or one family memory worth honoring.',
    href: routes.privateChef,
    icon: ChefHat,
  },
]

export const homeValues: Array<{
  title: string
  copy: string
  icon: IconComponent
}> = [
  { title: 'Simple', copy: 'Clean menus, honest ingredients, and dishes that feel composed without feeling overworked.', icon: Leaf },
  { title: 'Sustainable', copy: 'Mindful portions, seasonal sourcing, and packaging choices made with everyday responsibility.', icon: PackageCheck },
  { title: 'Soulful', copy: 'Recipes built from memory: tempering, slow gravies, hand-finished breads, and the comfort of home.', icon: Sparkles },
]

export const galleryMoments = [
  'Paneer tikka masala dabba',
  'Saffron rice and dal service',
  'Office lunch spread',
  'Private chef tasting table',
]

export const instagramPosts = [
  'Monday dal finished with ghee and cumin.',
  'Fresh rotis wrapped just before dispatch.',
  'A small-batch chutney made bright with mint.',
  'Gold-rimmed thalis for an intimate dinner.',
]
