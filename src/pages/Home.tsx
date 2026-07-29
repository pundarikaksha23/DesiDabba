import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  homeInstagramImages,
  pageHeroImages,
  serviceImages,
  storytellingImages,
} from '../assets/images/selected-images'
import { routes } from '../config/routes'
import { site } from '../config/site'

const marqueeItems = ['Weekly Meals', 'Catering', 'Private Chef', 'Grazing Platters', 'Tallinn · Estonia']

const serviceCards = [
  {
    title: 'Weekly Meals',
    copy: 'Home-style tiffin, rotating each week. Nourishing lunches and dinners, delivered on your schedule.',
    href: routes.weeklyMeals,
    icon: 'dot',
  },
  {
    title: 'Catering',
    copy: 'Generous, beautiful spreads for gatherings — from intimate dinners to celebrations of a hundred.',
    href: routes.catering,
    icon: 'ring',
  },
  {
    title: 'Private Chef',
    copy: 'A chef in your kitchen for the evening. A slow, personal menu cooked and served in your home.',
    href: routes.privateChef,
    icon: 'line-y',
  },
  {
    title: 'Grazing Platters',
    copy: 'Effortless hosting. Abundant platters of chaat, kebabs and sweets, styled and ready to share.',
    href: routes.services,
    icon: 'line-x',
  },
] as const

function HomeServiceIcon({ type }: { type: (typeof serviceCards)[number]['icon'] }) {
  return (
    <div className="relative mb-auto h-11 w-11 rounded-t-[22px] rounded-b-md border-[1.5px] border-[#5C1A2B]">
      {type === 'dot' && <span className="absolute inset-0 m-auto size-1.5 rounded-full bg-[#CE9A3A]" />}
      {type === 'ring' && <span className="absolute inset-0 m-auto size-3.5 rounded-full border-[1.5px] border-[#CE9A3A]" />}
      {type === 'line-y' && <span className="absolute left-1/2 top-2.5 h-5 w-[1.5px] -translate-x-1/2 bg-[#CE9A3A]" />}
      {type === 'line-x' && <span className="absolute inset-0 m-auto h-[1.5px] w-5 bg-[#CE9A3A]" />}
    </div>
  )
}

export default function Home() {
  return (
    <div className="reference-home overflow-x-hidden bg-[#F6EFE2] font-sans text-[#3B2A21]">
      <section className="mx-auto grid max-w-[1220px] items-center gap-[clamp(28px,4vw,60px)] px-7 pb-[clamp(40px,7vw,88px)] pt-[clamp(28px,6vw,72px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#5C6B47]">
            <span className="h-px w-6 bg-[#CE9A3A]" />
            <span>Simple · Sustainable · Soulful</span>
          </div>
          <h1 className="m-0 font-serif text-[clamp(40px,6vw,74px)] font-semibold leading-[1.02] tracking-[-0.01em] text-[#5C1A2B]">
            South Asian warmth,
            <br />
            <span className="italic text-[#3B2A21]">Estonian soul.</span>
          </h1>
          <p className="mb-8 mt-5 max-w-[440px] text-[17px] leading-[1.65] text-[#3B2A21]/70">
            Slow-cooked Indian and South Asian food for weekly meals, gatherings, and quiet celebrations — cooked with
            care in Tallinn, and shared like family.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={site.whatsapp}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#5C1A2B] px-[26px] py-[15px] text-[15px] font-semibold text-[#F6EFE2] no-underline"
            >
              <MessageCircle className="size-[18px]" aria-hidden />
              Enquire on WhatsApp
            </a>
            <Link to={routes.weeklyMeals} className="font-semibold text-[#5C1A2B] no-underline">
              See this week's menu →
            </Link>
          </div>
        </div>

        <div className="relative min-h-[min(640px,70vh)]">
          <div className="absolute -right-10 top-0 hidden h-[220px] w-[220px] rounded-full border border-[#CE9A3A]/40 md:block" />
          <figure className="relative h-full min-h-[520px] overflow-hidden rounded-t-[220px] rounded-b-[22px] bg-[#EFE6D3] shadow-[0_34px_80px_-48px_rgba(59,42,33,0.55)]">
            <img
              src={pageHeroImages.home}
              alt="Desi Dabba hero thali and appetizer presentation"
              width="1200"
              height="1800"
              className="h-full min-h-[520px] w-full object-cover object-[50%_54%]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <div className="border-y border-[#3B2A21]/10 bg-[#EFE6D3]">
        <div className="mx-auto flex max-w-[1220px] flex-wrap justify-center gap-x-10 gap-y-3 px-7 py-4 font-serif text-xl italic text-[#5C1A2B]/85">
          {marqueeItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1220px] px-7 py-[clamp(48px,7vw,96px)]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#5C6B47]">What we do</div>
            <h2 className="m-0 max-w-[16ch] font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.08] text-[#3B2A21]">
              Four ways to bring us to your table.
            </h2>
          </div>
          <Link to={routes.services} className="font-semibold text-[#5C1A2B] no-underline">
            All services →
          </Link>
        </div>
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[290px] flex-col rounded-[18px] border border-[#3B2A21]/10 bg-[#FBF6EC] px-6 pb-[30px] pt-[26px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(59,42,33,0.10)]"
            >
              <HomeServiceIcon type={service.icon} />
              <h3 className="mb-2 mt-[26px] font-serif text-[25px] font-semibold text-[#5C1A2B]">{service.title}</h3>
              <p className="mb-4 text-[14.5px] leading-[1.6] text-[#3B2A21]/65">{service.copy}</p>
              <Link to={service.href} className="mt-auto text-[13.5px] font-semibold text-[#5C6B47] no-underline">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#5C1A2B] text-[#F3E7D4]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-[clamp(28px,5vw,72px)] px-7 py-[clamp(48px,7vw,96px)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <figure className="aspect-[4/4.7] overflow-hidden rounded-t-[20px] rounded-b-[160px] bg-[#642333] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
              <img
                src={storytellingImages.contactGathering}
                alt="Warm Desi Dabba founder and guest moment"
                width="1200"
                height="1800"
                className="h-full w-full object-cover object-[50%_45%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="absolute bottom-10 right-[-10px] h-24 w-24 rounded-full border border-[#CE9A3A]/60" />
          </div>
          <div>
            <div className="mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#CE9A3A]">Our Story</div>
            <h2 className="m-0 mb-[22px] font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.22] text-[#F6EFE2]">
              “Every dabba we pack carries a little of the home we grew up in — and a lot of the one we've built here in
              Tallinn.”
            </h2>
            <p className="m-0 mb-[18px] max-w-[52ch] text-base leading-[1.7] text-[#F3E7D4]/80">
              Desi Dabba began at a family table — a longing for the food we missed, cooked slowly and shared
              generously. Today we bring that same spirit to Estonian kitchens: seasonal, sustainable, and made by hand.
              No shortcuts, no fuss. Just food with soul.
            </p>
            <div className="mt-[26px] flex flex-wrap items-center gap-4">
              <div className="font-serif text-2xl italic text-[#CE9A3A]">Aisha & team</div>
              <Link
                to={routes.about}
                className="rounded-full border border-[#F3E7D4]/40 px-5 py-3 text-sm font-semibold text-[#F6EFE2] no-underline"
              >
                Read our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-7 py-[clamp(48px,7vw,90px)]">
        <div className="mb-[30px] flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#5C6B47]">From the kitchen</div>
            <h2 className="m-0 font-serif text-[clamp(28px,3.6vw,42px)] font-semibold text-[#3B2A21]">@desidabba</h2>
          </div>
          <a href="https://instagram.com" className="rounded-full bg-[#EFE6D3] px-5 py-3 text-sm font-semibold text-[#5C1A2B] no-underline">
            Follow on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[serviceImages.weeklyMeals, serviceImages.corporateCatering, serviceImages.fusionExperiences, serviceImages.premiumPlatters, ...homeInstagramImages.slice(0, 2)].map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`Desi Dabba Instagram kitchen moment ${index + 1}`}
              width="1200"
              height="1800"
              className="aspect-square rounded-xl object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-2 max-w-[1220px] px-7">
        <div className="relative grid items-center gap-9 overflow-hidden rounded-[28px] bg-[#5C6B47] p-[clamp(40px,6vw,72px)] text-[#F6EFE2] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full border border-[#F6EFE2]/30" />
          <div className="relative z-[1]">
            <h2 className="m-0 mb-4 font-serif text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.06]">
              Let's cook something together.
            </h2>
            <p className="m-0 max-w-[46ch] text-[16.5px] leading-[1.65] text-[#F6EFE2]/85">
              Planning a gathering, a weekly rhythm, or a night to remember? Tell us the occasion and we'll take it from
              there — no online ordering, just a warm conversation.
            </p>
          </div>
          <div className="relative z-[1] flex flex-col gap-3.5">
            <a href={site.whatsapp} className="flex items-center justify-center gap-2.5 rounded-full bg-[#F6EFE2] px-6 py-4 text-[15.5px] font-semibold text-[#5C1A2B] no-underline">
              <MessageCircle className="size-[18px]" aria-hidden />
              Message us on WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="rounded-full border border-[#F6EFE2]/50 px-6 py-4 text-center text-[15.5px] font-semibold text-[#F6EFE2] no-underline">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <a
        href={site.whatsapp}
        aria-label="WhatsApp"
        className="fixed bottom-[22px] right-[22px] z-[80] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#5C6B47] text-[#F6EFE2] shadow-[0_14px_30px_-10px_rgba(59,42,33,0.55)]"
      >
        <MessageCircle className="size-[30px]" aria-hidden />
      </a>
    </div>
  )
}
