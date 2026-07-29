import { CheckCircle2 } from 'lucide-react'
import type { Service } from '../data/services'
import { Button } from './Button'
import { Card } from './Card'

type ServiceCardProps = {
  service: Service
  imageSrc: string
  featured?: boolean
}

export function ServiceCard({ service, imageSrc, featured = false }: ServiceCardProps) {
  return (
    <Card
      padded={false}
      className={`group flex h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="flex h-full w-full flex-col">
        <div className="relative aspect-[4/3] min-h-56 overflow-hidden bg-brown/10">
          <img
            src={imageSrc}
            alt={service.imageAlt}
            width="1200"
            height="1800"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: service.imagePosition }}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/34 via-brown/5 to-transparent opacity-80 transition group-hover:opacity-60" />
          <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-md bg-cream-50/92 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-maroon shadow-soft sm:left-4 sm:top-4 sm:tracking-[0.16em]">
            {service.label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h2 className="heading-md text-brown">{service.title}</h2>
          <p className="body-sm mt-3 text-brown/70">{service.description}</p>

          <ul className="mt-6 space-y-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm font-semibold leading-6 text-green">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Button to={service.href} variant="secondary">
              {service.cta}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
