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
      <Container className={`relative grid items-center gap-10 lg:gap-14 xl:gap-16 ${columnsClass}`}>
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[-3rem] top-[12%] hidden h-28 w-28 rounded-full border border-gold/35 md:block"
            animate={{ y: [0, -10, 0], opacity: [0.35, 0.58, 0.35] }}
            transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[4%] top-[6%] hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(206,154,58,0.2),rgba(206,154,58,0)_74%)] blur-2xl lg:block"
            animate={{ x: [0, 14, -8, 0], y: [0, -12, 10, 0], scale: [1, 1.06, 0.98, 1] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[16%] hidden h-36 w-px bg-[linear-gradient(180deg,rgba(206,154,58,0),rgba(206,154,58,0.5),rgba(206,154,58,0))] lg:block"
            animate={{ scaleY: [0.82, 1.08, 0.82], opacity: [0.22, 0.5, 0.22] }}
            transition={{ duration: 6.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
        </div>
        <motion.div
          className="relative z-[1] max-w-[36rem]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl mt-3 text-brown">{title}</h1>
          <p className="body-lg mt-5 max-w-2xl text-brown/72">{description}</p>
          {actions ? <div className="mt-8">{actions}</div> : null}
        </motion.div>

        <motion.figure
          className="relative z-[1] overflow-hidden rounded-[28px] rounded-t-[180px] border border-brown/8 bg-cream-50/75 p-0 shadow-[0_30px_60px_-34px_rgba(59,42,33,0.5)]"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-18%] top-[-16%] z-[1] h-[34%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),rgba(255,255,255,0)_72%)] blur-2xl"
            animate={{ x: ['-6%', '8%', '-6%'] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={`${imageHeightClass} relative z-0`}
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
