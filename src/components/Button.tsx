import type { ReactNode } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { premiumEase } from '../utils/motion'

type ButtonProps = Omit<HTMLMotionProps<'a'>, 'href' | 'children' | 'className'> & {
  children: ReactNode
  to: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const MotionLink = motion.create(Link)

/**
 * Brand link-button used for both router links and native links. It centralizes
 * CTA styling and restrained motion so pages do not hand-roll button behavior.
 */
export function Button({ children, to, variant = 'primary', className = '', ...props }: ButtonProps) {
  const reduceMotion = useReducedMotion()
  const classes = `btn ${variants[variant]} ${className}`
  const isNativeLink = to.startsWith('#') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('http')
  const motionProps = {
    whileHover: reduceMotion ? undefined : { y: -2, scale: 1.015 },
    whileTap: reduceMotion ? undefined : { scale: 0.985 },
    transition: { duration: reduceMotion ? 0 : 0.2, ease: premiumEase },
  }

  if (isNativeLink) {
    return (
      <motion.a href={to} className={classes} {...motionProps} {...props}>
        {children}
        <motion.span
          aria-hidden
          className="inline-flex"
          initial={false}
          whileHover={reduceMotion ? undefined : { x: 2 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <ArrowRight className="size-4" />
        </motion.span>
      </motion.a>
    )
  }

  return (
    <MotionLink
      to={to}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
      <motion.span
        aria-hidden
        className="inline-flex"
        initial={false}
        whileHover={reduceMotion ? undefined : { x: 2 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
      >
        <ArrowRight className="size-4" />
      </motion.span>
    </MotionLink>
  )
}
