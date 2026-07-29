import { Link } from 'react-router-dom'
import { routeConfig } from '../config/routes'

type BrandLinkProps = {
  variant?: 'header' | 'footer'
}

const variants = {
  header: {
    link: 'inline-flex min-w-0 items-start gap-2 text-left',
    title: 'block truncate font-serif text-[26px] font-bold leading-none tracking-[0.01em]',
    tagline: 'sr-only',
  },
  footer: {
    link: 'inline-flex items-start gap-2',
    title: 'block font-serif text-2xl font-bold leading-none',
    tagline: 'sr-only',
  },
}

/**
 * Shared Desi Dabba logo lockup. Header and footer keep their existing sizing
 * through variants while the mark, label, and home route stay centralized.
 */
export function BrandLink({ variant = 'header' }: BrandLinkProps) {
  const classes = variants[variant]

  return (
    <Link to={routeConfig.home.path} className={classes.link} aria-label="Desi Dabba home">
      <span className="min-w-0">
        <span className={classes.title}>Desi Dabba</span>
        <span className={classes.tagline}>Premium Indian Food</span>
      </span>
      {variant === 'header' && (
        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#CE9A3A]" aria-hidden />
      )}
    </Link>
  )
}
