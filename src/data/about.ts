import { Heart, Leaf, PackageCheck, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

export const aboutTimeline = [
  {
    year: 'Start',
    title: 'The first idea was simple.',
    copy: 'Food should feel warm, personal and dependable, whether it is part of a busy week or a special gathering.',
  },
  {
    year: 'Practice',
    title: 'Menus became more thoughtful.',
    copy: 'We tested what travels well, what stays balanced, and what still feels fresh and enjoyable after delivery or setup.',
  },
  {
    year: 'Desi Dabba',
    title: 'A broader food brand took shape.',
    copy: 'The result is a warm, flexible brand for weekly meals, catering, private chef experiences and grazing platters in Tallinn.',
  },
]

export const aboutValues: Array<{
  title: string
  copy: string
  icon: IconComponent
}> = [
  {
    title: 'Warm Hospitality',
    copy: 'We want every meal and event to feel welcoming, personal and thoughtfully prepared from the first message to the final dish.',
    icon: Heart,
  },
  {
    title: 'Balanced Flavours',
    copy: 'Menus are shaped to feel comforting, fresh and well-rounded, with flavour and balance built in from the start.',
    icon: Sparkles,
  },
  {
    title: 'Thoughtful Delivery',
    copy: 'We think carefully about packing, delivery, setup and service so the food arrives in good condition and feels easy to enjoy.',
    icon: PackageCheck,
  },
  {
    title: 'Fresh Ingredients',
    copy: 'Seasonal ingredients, lighter touches and fresh accompaniments help the menus feel lively rather than repetitive.',
    icon: Leaf,
  },
]

export const whyDesiDabba = [
  'Because weekly meals should feel fresh and cared for, not routine.',
  'Because catering can feel warm, flexible and premium at the same time.',
  'Because private dining should be personal without becoming complicated.',
  'Because a food brand can feel rooted in Indian hospitality while still feeling international.',
]
