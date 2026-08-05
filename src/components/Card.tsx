import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

type CardProps = Omit<HTMLMotionProps<'article'>, 'className'> & {
  padded?: boolean
  className?: string
}

/**
 * Shared premium card surface. It preserves the global card styling and applies
 * a subtle hover lift; callers provide only content and rare visual modifiers.
 */
export function Card({ padded = true, className = '', children, ...props }: CardProps) {
  return (
    <motion.article
      className={`group/card ${padded ? 'card-padded' : 'card'} ${className}`}
      {...props}
    >
      {children}
    </motion.article>
  )
}
