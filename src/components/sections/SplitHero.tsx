import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pageHeroImages } from '../../assets/images/selected-images'
import { Container } from '../Container'
import { Section } from '../Section'

type SplitHeroProps = {
  eyebrow: string
  title: string
  description: string
  imageAlt: string
  imagePosition: string
  actions?: ReactNode
  imageSrc?: string
  imageHeightClass?: string
  columnsClass?: string
  imageSizes?: string
  imageWidth?: number
  imageHeight?: number
}

/**
 * Shared premium intro layout for content pages that pair story copy with
 * the brand food image. Keep this intentionally narrow so page-specific
 * sections remain responsible for their own content.
 */
export function SplitHero({
  eyebrow,
  title,
  description,
  imageAlt,
  imagePosition,
  actions,
  imageSrc = pageHeroImages.services,
  imageHeightClass = 'h-80 w-full object-cover sm:h-[31rem]',
  columnsClass = 'lg:grid-cols-[0.95fr_1.05fr]',
  imageSizes = '(min-width: 1024px) 48vw, 100vw',
  imageWidth = 1200,
  imageHeight = 1800,
}: SplitHeroProps) {
  return (
    <Section className="page-offset overflow-hidden" spacing="tight">
      <Container className={`grid items-center gap-10 ${columnsClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl mt-3 text-brown">{title}</h1>
          <p className="body-lg mt-5 max-w-2xl text-brown/72">{description}</p>
          {actions}
        </motion.div>

        <motion.figure
          className="card overflow-hidden bg-maroon p-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={imageHeightClass}
            style={{ objectPosition: imagePosition }}
            sizes={imageSizes}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.figure>
      </Container>
    </Section>
  )
}
