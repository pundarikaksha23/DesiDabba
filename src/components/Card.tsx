import type { ReactNode } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { premiumEase } from '../utils/motion'

type CardProps = Omit<HTMLMotionProps<'article'>, 'className' | 'children'> & {
  padded?: boolean
  className?: string
  children?: ReactNode
  interactive?: boolean
}

/**
 * Shared premium card surface. It preserves the global card styling and applies
 * a subtle hover lift; callers provide only content and rare visual modifiers.
 */
export function Card({ padded = true, className = '', children, interactive = false, style, ...props }: CardProps) {
  const reduceMotion = useReducedMotion()
  const hoverAnimation = reduceMotion || !interactive
    ? undefined
    : {
        y: -8,
        scale: 1.012,
        rotateY: 14,
        boxShadow: '0 28px 54px rgba(43,27,20,0.2)',
      }

  return (
    <motion.article
      className={`${interactive ? 'group/card cursor-pointer' : ''} ${padded ? 'card-padded' : 'card'} ${className}`}
      style={{ transformPerspective: 1200, transformStyle: 'preserve-3d', ...style }}
      whileHover={hoverAnimation}
      whileTap={reduceMotion || !interactive ? undefined : { scale: 0.995, y: -4 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: premiumEase }}
      {...props}
    >
      {interactive ? (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.34),rgba(255,255,255,0)_42%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-[-22%] top-0 z-[1] h-px -translate-x-full bg-[linear-gradient(90deg,rgba(206,154,58,0),rgba(206,154,58,0.95),rgba(206,154,58,0))] opacity-0 transition-[transform,opacity] duration-700 group-hover/card:translate-x-[85%] group-hover/card:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 z-[1] h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(206,154,58,0.24),rgba(206,154,58,0)_72%)] opacity-0 blur-xl transition-opacity duration-500 group-hover/card:opacity-100"
          />
        </>
      ) : null}
      <div className="relative z-[2]">{children}</div>
    </motion.article>
  )
}
