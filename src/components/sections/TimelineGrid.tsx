import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Container } from '../Container'
import { Section } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { viewportOnce } from '../../utils/motion'
import type { TimelineItem } from '../../types/content'

type TimelineGridProps = {
  eyebrow: string
  title: string
  description: string
  items: TimelineItem[]
  tone?: 'cream' | 'green'
  variant?: 'card' | 'dark'
}

/**
 * Reusable process/timeline grid. The dark variant mirrors the private-chef
 * green-section cards; the default variant uses the standard Card component.
 */
export function TimelineGrid({
  eyebrow,
  title,
  description,
  items,
  tone = 'cream',
  variant = 'card',
}: TimelineGridProps) {
  const inverse = tone === 'green'

  return (
    <Section tone={tone}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} inverse={inverse} />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
            >
              {variant === 'dark' ? (
                <article className="h-full rounded-lg border border-cream-50/12 bg-cream-50/8 p-6 text-cream-50">
                  <p className="font-serif text-5xl font-semibold text-gold">{item.step}</p>
                  <h3 className="heading-md mt-5 text-cream-50">{item.title}</h3>
                  <p className="body-sm mt-3 text-cream-50/72">{item.description}</p>
                </article>
              ) : (
                <Card className="h-full">
                  <p className="font-serif text-5xl font-semibold text-gold">{item.step}</p>
                  <h3 className="heading-md mt-5 text-brown">{item.title}</h3>
                  <p className="body-sm mt-3 text-brown/70">{item.description}</p>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
