import { Link } from 'react-router-dom'
import { routeConfig } from '../config/routes'

type BrandLinkProps = {
  variant?: 'header' | 'footer'
}

const variants = {
  header: {
    link: 'inline-flex min-w-0 items-start gap-2 text-left',
    title: 'block truncate font-serif text-[30px] font-bold leading-none tracking-[0.01em] text-[#5C1A2B]',
    tagline: 'mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.23em] text-[#CE9A3A] sm:block',
  },
  footer: {
    link: 'inline-flex flex-col items-start',
    title: 'block font-serif text-2xl font-bold leading-none',
    tagline: 'mt-1 text-[9.5px] font-semibold uppercase tracking-[0.25em] text-[#CE9A3A]',
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
        <span className={classes.tagline}>Simple Sustainable Soulful</span>
      </span>
      {variant === 'header' && (
        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#CE9A3A]" aria-hidden />
      )}
    </Link>
  )
}
