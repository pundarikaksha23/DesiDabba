import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  homeInstagramImages,
  pageHeroImages,
  serviceImages,
  storytellingImages,
} from '../assets/images/selected-images'
import { routes } from '../config/routes'
import { site } from '../config/site'
import { WhatsappIcon } from '../components/WhatsappIcon'

const MotionCardLink = motion.create(Link)

const marqueeItems = ['Weekly Meals', 'Catering', 'Private Chef', 'Grazing Platters']
const scrollingMarqueeItems = [...marqueeItems, ...marqueeItems]

const serviceCards = [
  {
    title: 'Weekly Meals',
    copy: 'Fresh weekly meals for busy weekdays, with changing menus and vegetarian, vegan, and non-vegetarian options.',
    href: routes.weeklyMeals,
    icon: 'dot',
  },
  {
    title: 'Catering',
    copy: 'Thoughtful catering for gatherings, celebrations, office events, and well-planned occasions in Tallinn.',
    href: routes.catering,
    icon: 'ring',
  },
  {
    title: 'Private Chef',
    copy: 'A personal dining experience for homes and private venues, shaped around your guests, occasion, and pace.',
    href: routes.privateChef,
    icon: 'line-y',
  },
  {
    title: 'Grazing Platters',
    copy: 'Sharing platters with snacks, sweets, and finger food for gatherings, celebrations, and hosted tables.',
    href: routes.glazingPlatters,
    icon: 'line-x',
  },
] as const

function HomeServiceIcon({ type }: { type: (typeof serviceCards)[number]['icon'] }) {
  const reduceMotion = useReducedMotion()
  const blinkDelay =
    type === 'dot' ? 0 : type === 'ring' ? 0.22 : type === 'line-y' ? 0.44 : 0.66

  return (
    <div className="relative mb-auto h-[44px] w-[48px]">
      <span className="absolute inset-x-0 bottom-[2px] top-[2px] rounded-t-[24px] rounded-b-[8px] border-[1.8px] border-maroon/85" />

      {type === 'dot' && (
        <motion.span
          className="absolute left-1/2 top-[18px] size-[6px] -translate-x-1/2 rounded-full bg-gold"
          animate={reduceMotion ? undefined : { opacity: [1, 0.18, 1], scale: [1, 0.82, 1] }}
          transition={reduceMotion ? undefined : { duration: 1.65, delay: blinkDelay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      )}
      {type === 'ring' && (
        <motion.span
          className="absolute left-1/2 top-[13px] h-[15px] w-[15px] -translate-x-1/2 rounded-full border-[1.8px] border-gold"
          animate={reduceMotion ? undefined : { opacity: [1, 0.2, 1], scale: [1, 0.9, 1] }}
          transition={reduceMotion ? undefined : { duration: 1.65, delay: blinkDelay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      )}
      {type === 'line-y' && (
        <motion.span
          className="absolute left-1/2 top-[10px] h-[22px] w-[1.8px] -translate-x-1/2 rounded-full bg-gold"
          animate={reduceMotion ? undefined : { opacity: [1, 0.18, 1], scaleY: [1, 0.72, 1] }}
          transition={reduceMotion ? undefined : { duration: 1.65, delay: blinkDelay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      )}
      {type === 'line-x' && (
        <motion.span
          className="absolute left-1/2 top-[21px] h-[1.8px] w-[20px] -translate-x-1/2 rounded-full bg-gold"
          animate={reduceMotion ? undefined : { opacity: [1, 0.18, 1], scaleX: [1, 0.72, 1] }}
          transition={reduceMotion ? undefined : { duration: 1.65, delay: blinkDelay, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      )}
    </div>
  )
}

function HomeHeroGraphics() {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-4%] top-[12%] hidden h-32 w-32 rounded-full border border-gold/35 md:block"
        animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 12, 0], opacity: [0.32, 0.55, 0.32] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[34%] top-[18%] hidden h-px w-28 bg-[linear-gradient(90deg,rgba(206,154,58,0),rgba(206,154,58,0.8),rgba(206,154,58,0))] md:block"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], opacity: [0.2, 0.75, 0.2] }}
        transition={reduceMotion ? undefined : { duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[8%] top-[10%] hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(92,107,71,0.16),rgba(92,107,71,0)_72%)] blur-3xl lg:block"
        animate={
          reduceMotion ? undefined : { x: [0, -16, 10, 0], y: [0, 14, -10, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={reduceMotion ? undefined : { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[18%] top-[34%] hidden h-[20rem] w-px bg-[linear-gradient(180deg,rgba(92,26,43,0),rgba(92,26,43,0.36),rgba(92,26,43,0))] lg:block"
        animate={reduceMotion ? undefined : { scaleY: [0.8, 1.08, 0.8], opacity: [0.18, 0.4, 0.18] }}
        transition={reduceMotion ? undefined : { duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="surface-cream overflow-x-hidden">
      <section className="relative mx-auto grid max-w-[1220px] items-center gap-[clamp(28px,4vw,60px)] px-7 pb-[clamp(40px,7vw,88px)] pt-[clamp(28px,6vw,72px)] md:grid-cols-[1.05fr_.95fr]">
        <HomeHeroGraphics />
        <div className="animate-enter">
          <div className="mb-[22px] inline-flex items-center gap-[10px] text-[12.5px] font-semibold uppercase tracking-[0.22em] text-green">
            <span className="h-px w-[26px] bg-gold" />
            <span>Warm · Premium · International</span>
          </div>
          <h1 className="mb-5 mt-0 font-serif text-[clamp(40px,6vw,74px)] font-semibold leading-[1.02] tracking-[-0.01em] text-maroon">
            Indian warmth.
            <br />
            <span className="italic text-brown">Global flavours.</span>
            <br />
            Food made with care in Tallinn.
          </h1>
          <p className="mb-8 mt-0 max-w-[560px] text-[17px] leading-[1.65] text-brown/72">
            Desi Dabba brings warm, thoughtful food experiences to Tallinn — from weekly meals and private dining to
            catering, grazing platters and celebration menus. Rooted in Indian hospitality and inspired by global
            flavours, every menu is made with care, balance and soul.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.whatsapp}
              className="inline-flex items-center gap-2.5 rounded-full bg-maroon px-[26px] py-[15px] text-[15px] font-semibold text-cream no-underline shadow-[0_14px_30px_-18px_rgba(59,42,33,0.6)]"
            >
              <WhatsappIcon className="size-[18px]" />
              Enquire on WhatsApp
            </a>
            <Link to={routes.weeklyMeals} className="font-semibold text-maroon no-underline">
              See this week's menu →
            </Link>
          </div>
        </div>

        <div className="animate-enter relative [animation-delay:100ms]">
          <div className="absolute inset-x-auto -right-[14px] -top-[14px] hidden h-[120px] w-[120px] rounded-full border border-gold/55 md:block" />
          <motion.div
            aria-hidden
            className="absolute inset-x-[-10%] top-[-10%] z-[2] hidden h-[26%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),rgba(255,255,255,0)_72%)] blur-2xl md:block"
            animate={{ x: ['-6%', '6%', '-6%'] }}
            transition={{ duration: 9.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <figure className="relative z-[1] aspect-[4/4.6] overflow-hidden rounded-t-[180px] rounded-b-[20px] bg-cream-100 shadow-[0_30px_60px_-34px_rgba(59,42,33,0.55)]">
            <img
              src={pageHeroImages.home}
              alt="Desi Dabba hero thali and appetizer presentation"
              width="1200"
              height="1800"
              className="h-full w-full object-cover object-center"
              sizes="(min-width: 768px) 48vw, 100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <div className="border-y border-brown/10 bg-cream-100">
        <div className="marquee-fade mx-auto w-full max-w-[920px] overflow-hidden px-7 py-4">
          <div className="animate-marquee flex w-max items-center gap-x-4 font-serif text-xl italic text-maroon/85 will-change-transform sm:gap-x-6">
            {scrollingMarqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex min-w-[220px] shrink-0 items-center justify-center gap-x-4 sm:min-w-[260px] sm:gap-x-6"
              >
                <span>{item}</span>
                <span className="text-gold">✳</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1220px] px-7 py-[clamp(48px,7vw,96px)]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-green">What we do</div>
            <h2 className="m-0 max-w-[16ch] font-serif text-[clamp(30px,4vw,46px)] font-semibold leading-[1.08] text-brown">
              Four ways to bring us to your table.
            </h2>
          </div>
          <Link to={routes.services} className="font-semibold text-maroon no-underline">
            All services →
          </Link>
        </div>
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service, index) => (
            <MotionCardLink
              key={service.title}
              to={service.href}
              className="group/card panel-card relative flex min-h-[290px] flex-col rounded-[18px] border border-brown/10 bg-cream-soft px-6 pb-[30px] pt-[26px] text-inherit no-underline transition-[border-color,background-color] duration-300 hover:border-gold/35"
              aria-label={`Learn more about ${service.title}`}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                      rotate: 0,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                    }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.012,
                      rotateY: 14,
                      boxShadow: '0 28px 54px rgba(59,42,33,0.18)',
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.34),rgba(255,255,255,0)_42%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-[-22%] top-0 z-[1] h-px -translate-x-full bg-[linear-gradient(90deg,rgba(206,154,58,0),rgba(206,154,58,0.95),rgba(206,154,58,0))] opacity-0 transition-[transform,opacity] duration-700 group-hover/card:translate-x-[85%] group-hover/card:opacity-100"
              />
              <HomeServiceIcon type={service.icon} />
              <h3 className="mb-2 mt-[26px] font-serif text-[25px] font-semibold text-maroon">{service.title}</h3>
              <p className="mb-4 text-[14.5px] leading-[1.6] text-brown/65">{service.copy}</p>
              <span className="mt-auto text-[13.5px] font-semibold text-green">
                Learn more →
              </span>
            </MotionCardLink>
          ))}
        </div>
      </section>

      <section className="bg-maroon text-cream-200">
        <div className="mx-auto grid max-w-[1220px] items-center gap-[clamp(28px,5vw,72px)] px-7 py-[clamp(48px,7vw,96px)] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <figure className="aspect-[4/4.7] overflow-hidden rounded-t-[20px] rounded-b-[160px] bg-maroon-600 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
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
            <div className="absolute bottom-10 right-[-10px] h-24 w-24 rounded-full border border-gold/60" />
          </div>
          <div>
            <div className="mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.22em] text-gold">Our Story</div>
            <h2 className="m-0 mb-[22px] font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.22] text-cream">
              “Every meal we create carries warmth, care and flavour inspired by where we come from, and shaped by the
              home we are building here in Tallinn.”
            </h2>
            <p className="m-0 mb-[18px] max-w-[52ch] text-base leading-[1.7] text-cream-200/80">
              Desi Dabba began with a simple idea: food should feel warm, personal and full of care. Rooted in Indian
              hospitality and inspired by global flavours, we create weekly meals, catering menus, private chef
              experiences and grazing platters for homes, offices and celebrations in Tallinn. Every menu is made
              thoughtfully, with fresh ingredients, balanced flavours and a soulful touch.
            </p>
            <div className="mt-[26px] flex flex-wrap items-center gap-4">
              <div className="font-serif text-2xl italic text-gold">Pooja and Team</div>
              <Link
                to={routes.about}
                className="rounded-full border border-cream-200/40 px-5 py-3 text-sm font-semibold text-cream no-underline"
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
            <div className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-green">From the kitchen</div>
            <h2 className="m-0 font-serif text-[clamp(28px,3.6vw,42px)] font-semibold text-brown">Recent food moments</h2>
          </div>
          <Link to={routes.gallery} className="rounded-full bg-cream-100 px-5 py-3 text-sm font-semibold text-maroon no-underline">
            View gallery →
          </Link>
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
        <div className="relative grid items-center gap-9 overflow-hidden rounded-[28px] bg-green p-[clamp(40px,6vw,72px)] text-cream md:grid-cols-[1.2fr_0.8fr]">
          <div className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full border border-cream/30" />
          <div className="animate-soft-float absolute left-[12%] top-[18%] hidden h-20 w-20 rounded-full border border-cream/16 md:block" />
          <div className="animate-drift-slow absolute bottom-[-40px] left-[42%] hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(250,247,242,0.12),rgba(250,247,242,0)_72%)] blur-2xl md:block" />
          <div className="relative z-[1]">
            <h2 className="m-0 mb-4 font-serif text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.06]">
              Let's cook something together.
            </h2>
            <p className="m-0 max-w-[46ch] text-[16.5px] leading-[1.65] text-cream/85">
              Planning a gathering, a weekly rhythm, or a night to remember? Tell us the occasion and we'll take it from
              there — no online ordering, just a warm conversation.
            </p>
          </div>
          <div className="relative z-[1] flex flex-col gap-3.5">
            <a href={site.whatsapp} className="flex items-center justify-center gap-2.5 rounded-full bg-cream px-6 py-4 text-[15.5px] font-semibold text-maroon no-underline">
              <WhatsappIcon className="size-[18px]" />
              Message us on WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="rounded-full border border-cream/50 px-6 py-4 text-center text-[15.5px] font-semibold text-cream no-underline">
              {site.email}
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
