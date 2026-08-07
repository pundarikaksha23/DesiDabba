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
          <BrandLink variant="footer" />
          <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.6] text-brown/60">
            Simple, Sustainable, Soulful. Indian & South Asian food, made with care in {site.address}.
          </p>
        </div>
        <FooterColumn
          tone="light"
          title="Explore"
          links={[
            { label: 'Our Story', href: routes.about },
            { label: 'Services', href: routes.services },
            { label: 'Menu', href: routes.weeklyMeals },
            { label: 'Contact', href: routes.contact },
          ]}
        />
        <FooterColumn
          tone="light"
          title="Get in touch"
          links={[
            { label: 'WhatsApp', href: site.whatsapp },
            { label: site.email, href: `mailto:${site.email}` },
            { label: 'Instagram', href: site.instagram },
          ]}
        />
        <div>
          <h2 className="footer-heading footer-heading-light">Language</h2>
          <div className="mt-4 flex gap-2">
            {['EN', 'ET'].map((label) => (
              <button
                key={label}
                type="button"
                className="nav-pill px-3.5 py-2 text-[12.5px] font-semibold"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 pt-6 text-[13px] text-brown/50">
        <span>Copyright 2026 Desi Dabba {separator} {site.address}</span>
        <span>Simple {separator} Sustainable {separator} Soulful</span>
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
          link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
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

function DarkFooter() {
  return (
    <footer className="bg-maroon-900 text-cream-50/80">
      <div className="container-brand flex flex-wrap gap-11 px-8 pb-8 pt-16">
        <div className="min-w-0 flex-[1_1_260px]">
          <div className="brand-link-title text-2xl text-cream-50">Desi Dabba</div>
          <div className="brand-link-tagline mb-5 mt-1 text-[9.5px] tracking-[0.25em] text-gold-600">
            Simple {separator} Sustainable {separator} Soulful
          </div>
          <p className="text-sm leading-[1.7] text-cream-50/65">
            South Asian-inspired food experiences,
            <br />
            made with care in {site.address}.
          </p>
        </div>
        <FooterColumn tone="dark" title="Explore" links={navigationLinks.map((link) => ({
          label: link.label === 'About' ? 'Our Story' : link.label,
          href: link.href,
        }))} />
        <FooterColumn tone="dark" title="Services" links={footerServiceLinks.slice(0, 4).map((link) => ({
          label: link.label.replace('Corporate Catering', 'Event Catering'),
          href: link.href,
        }))} />
        <FooterColumn
          tone="dark"
          title="Get in touch"
          links={[
            { label: `WhatsApp ${separator} ${site.phone}`, href: site.whatsapp },
            { label: site.email, href: `mailto:${site.email}` },
            { label: site.address, href: routes.contact },
            { label: 'Instagram', href: site.instagram },
          ]}
        />
      </div>
      <div className="border-t border-cream-50/10">
        <div className="container-brand flex flex-wrap justify-between gap-2.5 px-8 py-5 text-[13px] text-cream-50/55">
          <span>Copyright 2026 Desi Dabba. All rights reserved.</span>
          <span>{websiteHost}</span>
        </div>
      </div>
    </footer>
  )
}

function PreservedFooterLinks() {
  const hiddenNavigationLinks = navigationLinks.filter((link) =>
    ['Home', 'About', 'Gallery'].includes(link.label),
  )

  return (
    <div className="sr-only">
      <a href={`tel:${site.phone}`}>{site.phone}</a>
      {[...hiddenNavigationLinks, ...footerServiceLinks, ...footerLegalLinks].map((link) => (
        <Link key={`preserved-${link.label}-${link.href}`} to={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

function PreservedNewsletterForm() {
  return (
    <form className="sr-only" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="preserved-footer-email">Email address</label>
      <input id="preserved-footer-email" name="email" type="email" />
      <button type="submit">Join</button>
    </form>
  )
}

export function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? <HomeFooter /> : <DarkFooter />}
      <PreservedNewsletterForm />
      <PreservedFooterLinks />
    </>
  )
}
