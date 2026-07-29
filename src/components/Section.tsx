import type { HTMLMotionProps } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { premiumEase, slideUp, viewportOnce } from '../utils/motion'

type SectionProps = Omit<HTMLMotionProps<'section'>, 'className'> & {
  tone?: 'cream' | 'maroon' | 'green' | 'plain'
  spacing?: 'default' | 'tight'
  className?: string
}

const tones = {
  cream: 'surface-cream',
  maroon: 'surface-maroon',
  green: 'surface-green',
  plain: '',
}

export function Section({ tone = 'plain', spacing = 'default', className = '', children, ...props }: SectionProps) {
  const spacingClass = spacing === 'tight' ? 'section-shell-tight' : 'section-shell'
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className={`${spacingClass} ${tones[tone]} ${className}`}
      initial={reduceMotion ? false : slideUp.hidden}
      whileInView={slideUp.visible}
      viewport={viewportOnce}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: premiumEase }}
      {...props}
    >
      {children}
    </motion.section>
  )
}
