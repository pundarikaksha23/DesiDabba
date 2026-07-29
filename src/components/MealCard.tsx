import type { MenuItem } from '../data/menu'
import { Badge } from './Badge'
import { Card } from './Card'

export function MealCard({ item }: { item: MenuItem }) {
  const Icon = item.icon

  return (
    <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <span className="icon-tile">
          <Icon className="size-5" aria-hidden />
        </span>
        <Badge>{item.tag}</Badge>
      </div>
      <h3 className="heading-md mt-5 text-brown">{item.name}</h3>
      <p className="body-sm mt-3 text-brown/70 lg:min-h-24">{item.description}</p>
      <div className="divider-soft mt-6 flex items-center justify-between border-t pt-4">
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-green">Dabba</span>
        <span className="font-serif text-3xl font-semibold text-gold">{item.price}</span>
      </div>
    </Card>
  )
}
