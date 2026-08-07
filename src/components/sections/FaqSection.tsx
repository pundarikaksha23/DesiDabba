import type { ReactNode } from 'react'
import { Container } from '../Container'
import { Section } from '../Section'
import type { FaqItem } from '../../types/content'

type FaqSectionProps = {
  eyebrow: string
  title: string
  description?: string
  items: readonly FaqItem[]
  icon?: ReactNode
}

/**
 * Consistent FAQ layout used by service pages. Native details/summary keeps it
 * accessible and dependency-free while matching the existing card treatment.
 */
export function FaqSection({ eyebrow, title, description, items, icon }: FaqSectionProps) {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          {icon}
          <p className={icon ? 'eyebrow mt-5' : 'eyebrow'}>{eyebrow}</p>
          <h2 className="display-lg mt-3 text-brown">{title}</h2>
          {description && <p className="body-lg mt-5 text-brown/72">{description}</p>}
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <details key={item.question} className="panel-card card group p-5 open:shadow-card md:p-6">
              <summary className="cursor-pointer list-none font-serif text-2xl font-semibold leading-snug text-brown">
                {item.question}
              </summary>
              <p className="body-sm mt-3 text-brown/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
