import { Heart, Leaf, PackageCheck, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

export const aboutTimeline = [
  {
    year: 'Memory',
    title: 'The first reference point was home.',
    copy: 'Not a trend, not a format: just the feeling of opening a steel dabba and knowing someone had thought about your whole day.',
  },
  {
    year: 'Practice',
    title: 'Menus became quieter and more intentional.',
    copy: 'We tested what holds warmth, what travels gracefully, and what still tastes alive after a commute, a meeting, or a long table conversation.',
  },
  {
    year: 'Desi Dabba',
    title: 'A modern service formed around an old kind of care.',
    copy: 'The food stayed rooted. The experience became more composed: clear menus, polished packing, honest portions, and hospitality without noise.',
  },
]

export const aboutValues: Array<{
  title: string
  copy: string
  icon: IconComponent
}> = [
  {
    title: 'Cooked With Memory',
    copy: 'Recipes begin with remembered textures: the softness of dal, the brightness of chutney, the comfort of rice that smells like a kitchen you trust.',
    icon: Heart,
  },
  {
    title: 'Balanced By Design',
    copy: 'Every meal needs contrast: richness and acid, heat and relief, softness and crunch. Accompaniments are part of the architecture.',
    icon: Sparkles,
  },
  {
    title: 'Packed With Respect',
    copy: 'A dabba should arrive with dignity. We think about temperature, portioning, lids, labels, and the small pause before someone opens it.',
    icon: PackageCheck,
  },
  {
    title: 'Seasonal Where It Matters',
    copy: 'Freshness is not decoration. Herbs, vegetables, pickles, and lighter dishes shift with the season so the menu never feels automatic.',
    icon: Leaf,
  },
]

export const whyDesiDabba = [
  'Because Indian food can be premium without becoming precious.',
  'Because convenience should not flatten culture.',
  'Because a weekday meal deserves the same care as a celebration table.',
  'Because hospitality can be calm, clear, and deeply personal.',
]
