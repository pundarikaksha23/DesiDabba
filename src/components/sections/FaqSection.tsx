import { ChevronDown } from 'lucide-react'
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl font-semibold leading-snug text-brown">
                <span>{item.question}</span>
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-brown/10 text-brown/60 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="size-4" strokeWidth={2.2} aria-hidden />
                </span>
              </summary>
              <p className="body-sm mt-3 text-brown/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
