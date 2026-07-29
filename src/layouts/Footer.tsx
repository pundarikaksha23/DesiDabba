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
    <footer className="mx-auto max-w-[1220px] bg-[#F6EFE2] px-7 pb-10 pt-[clamp(44px,6vw,80px)] text-[#3B2A21]">
      <div className="grid gap-8 border-b border-[#3B2A21]/10 pb-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <BrandLink variant="footer" />
          <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.6] text-[#3B2A21]/60">
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
            { label: 'Instagram', href: 'https://instagram.com' },
          ]}
        />
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#5C6B47]">Language</h2>
          <div className="mt-4 flex gap-2">
            {['EN', 'ET'].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-full border border-[#3B2A21]/20 px-3.5 py-2 text-[12.5px] font-semibold text-[#3B2A21]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 pt-6 text-[13px] text-[#3B2A21]/50">
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
  const headingColor = tone === 'light' ? 'text-[#5C6B47]' : 'text-[#C8861A]'
  const linkColor = tone === 'light' ? 'text-[#3B2A21]/70' : 'text-[#FAF7F2]/78'
  const linkHoverColor = tone === 'light' ? 'hover:text-[#5C1A2B]' : 'hover:text-[#C8861A]'

  return (
    <div>
      <h2 className={`text-xs font-bold uppercase tracking-[0.14em] ${headingColor}`}>{title}</h2>
      <div className={`mt-4 flex flex-col gap-2.5 text-[14.5px] ${linkColor}`}>
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
    <footer className="bg-[#3A1119] text-[#FAF7F2]/80">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-11 px-8 pb-8 pt-16">
        <div className="min-w-0 flex-[1_1_260px]">
          <div className="font-serif text-2xl font-bold text-[#FAF7F2]">Desi Dabba</div>
          <div className="mb-5 mt-1 text-[9.5px] font-semibold uppercase tracking-[0.25em] text-[#C8861A]">
            Simple {separator} Sustainable {separator} Soulful
          </div>
          <p className="text-sm leading-[1.7] text-[#FAF7F2]/65">
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
          label: link.label.replace('Corporate Catering', 'Event Catering').replace('Premium Platters', 'Elegant Platters'),
          href: link.href,
        }))} />
        <FooterColumn
          tone="dark"
          title="Get in touch"
          links={[
            { label: `WhatsApp ${separator} ${site.phone}`, href: site.whatsapp },
            { label: site.email, href: `mailto:${site.email}` },
            { label: site.address, href: routes.contact },
            { label: `Instagram ${separator} Facebook`, href: 'https://instagram.com' },
          ]}
        />
      </div>
      <div className="border-t border-[#FAF7F2]/10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2.5 px-8 py-5 text-[13px] text-[#FAF7F2]/55">
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
