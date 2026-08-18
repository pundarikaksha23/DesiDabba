import { Link } from 'react-router-dom'
import { routeConfig } from '../config/routes'

type BrandLinkProps = {
  variant?: 'header' | 'footer'
  tone?: 'light' | 'dark'
}

const variants = {
  header: {
    link: 'inline-flex min-w-0 items-baseline gap-[9px] text-left leading-none',
    title: 'brand-link-title block truncate text-[26px]',
    tagline: 'hidden',
  },
  footer: {
    link: 'inline-flex flex-col items-start',
    title: 'brand-link-title block text-2xl',
    tagline: 'brand-link-tagline mt-1 text-[9.5px] tracking-[0.25em]',
  },
}

/**
 * Shared Desi Dabba logo lockup. Header and footer keep their existing sizing
 * through variants while the mark, label, and home route stay centralized.
 */
export function BrandLink({ variant = 'header', tone = 'dark' }: BrandLinkProps) {
  const classes = variants[variant]
  const footerTitleTone = variant === 'footer' ? (tone === 'light' ? 'text-maroon' : 'text-cream-50') : ''

  return (
    <Link to={routeConfig.home.path} className={classes.link} aria-label="Desi Dabba home">
      <span className="min-w-0">
        <span className={`${classes.title} ${footerTitleTone}`.trim()}>Desi Dabba</span>
        <span className={classes.tagline}>Simple Sustainable Thoughtful</span>
      </span>
      {variant === 'header' && (
        <span className="brand-link-dot size-[6px] -translate-y-[3px]" aria-hidden />
      )}
    </Link>
  )
}
