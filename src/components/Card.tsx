import type { HTMLMotionProps } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { premiumEase } from '../utils/motion'

type CardProps = Omit<HTMLMotionProps<'article'>, 'className'> & {
  padded?: boolean
  className?: string
}

/**
 * Shared premium card surface. It preserves the global card styling and applies
 * a subtle hover lift; callers provide only content and rare visual modifiers.
 */
export function Card({ padded = true, className = '', children, ...props }: CardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`${padded ? 'card-padded' : 'card'} ${className}`}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.006 }}
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: premiumEase }}
      {...props}
    >
      {children}
    </motion.article>
  )
}
