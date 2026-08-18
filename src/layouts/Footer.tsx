import { Link, useLocation } from 'react-router-dom'
import { BrandLink } from '../components/BrandLink'
import { footerLegalLinks, footerServiceLinks } from '../config/footer'
import { navigationLinks } from '../config/navigation'
import { routes } from '../config/routes'
import { site } from '../config/site'

const websiteHost = new URL(site.url).hostname
const separator = '\u00b7'

function HomeFooter() {
  return (
    <footer className="container-brand bg-cream px-7 pb-10 pt-[clamp(44px,6vw,80px)] text-brown">
      <div className="grid gap-8 border-b border-brown/10 pb-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <BrandLink variant="footer" tone="light" />
          <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.6] text-brown/60">
            Indian warmth, Asian flavours and global food experiences, made with care in {site.address}.
          </p>
        </div>
        <FooterColumn
          tone="light"
          title="Explore"
          links={navigationLinks}
        />
        <FooterColumn
          tone="light"
          title="Services"
          links={footerServiceLinks}
        />
        <FooterColumn
          tone="light"
          title="Get in Touch"
          links={[
            { label: `WhatsApp: ${site.phone}`, href: site.whatsapp },
            { label: `Email: ${site.email}`, href: `mailto:${site.email}` },
            { label: site.address, href: routes.contact },
            { label: 'Instagram', href: site.instagram },
            { label: 'Facebook', href: site.facebook },
          ]}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px] text-brown/50">
        <span>Copyright 2026 Desi Dabba {separator} {site.address}</span>
        <LegalFooterLinks tone="light" />
        <span>Indian warmth {separator} Asian flavours {separator} Global food experiences</span>
      </div>
    </footer>
  )
}

type FooterLink = {
  label: string
  href: string
}

function FooterColumn({ title, links, tone }: { title: string; links: FooterLink[]; tone: 'light' | 'dark' }) {
  const headingTone = tone === 'light' ? 'footer-heading-light' : 'footer-heading-dark'
  const linkColor = tone === 'light' ? 'text-brown/70' : 'text-cream-50/78'
  const linkHoverColor = tone === 'light' ? 'hover:text-maroon' : 'hover:text-gold-600'

  return (
    <div>
      <h2 className={`footer-heading ${headingTone}`}>{title}</h2>
      <div className={`footer-link-stack ${linkColor}`}>
        {links.map((link) =>
          !link.href ? (
            <span key={`${title}-${link.label}`}>{link.label}</span>
          ) : link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
            <a key={`${title}-${link.label}`} href={link.href} className={`transition ${linkHoverColor}`}>
              {link.label}
            </a>
          ) : (
            <Link key={`${title}-${link.label}`} to={link.href} className={`transition ${linkHoverColor}`}>
              {link.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

function LegalFooterLinks({ tone }: { tone: 'light' | 'dark' }) {
  const textTone = tone === 'light' ? 'text-brown/55' : 'text-cream-50/55'
  const hoverTone = tone === 'light' ? 'hover:text-maroon' : 'hover:text-gold-600'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${textTone}`}>
      {footerLegalLinks.map((link) => (
        <Link key={`legal-${link.href}`} to={link.href} className={`transition ${hoverTone}`}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

function DarkFooter() {
  return (
    <footer className="bg-maroon-900 text-cream-50/80">
      <div className="container-brand flex flex-wrap gap-11 px-8 pb-8 pt-16">
        <div className="min-w-0 flex-[1_1_260px]">
          <div className="mb-5">
            <BrandLink variant="footer" tone="dark" />
          </div>
          <p className="text-sm leading-[1.7] text-cream-50/65">
            Indian warmth, Asian flavours and global food experiences,
            <br />
            made with care in {site.address}.
          </p>
        </div>
        <FooterColumn tone="dark" title="Explore" links={navigationLinks} />
        <FooterColumn tone="dark" title="Services" links={footerServiceLinks} />
        <FooterColumn
          tone="dark"
          title="Get in Touch"
          links={[
            { label: `WhatsApp: ${site.phone}`, href: site.whatsapp },
            { label: `Email: ${site.email}`, href: `mailto:${site.email}` },
            { label: site.address, href: routes.contact },
            { label: 'Instagram', href: site.instagram },
            { label: 'Facebook', href: site.facebook },
          ]}
        />
      </div>
      <div className="border-t border-cream-50/10">
        <div className="container-brand flex flex-wrap items-center justify-between gap-2.5 px-8 py-5 text-[13px] text-cream-50/55">
          <span>Copyright 2026 Desi Dabba. All rights reserved.</span>
          <LegalFooterLinks tone="dark" />
          <span>{websiteHost}</span>
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? <HomeFooter /> : <DarkFooter />}
    </>
  )
}
