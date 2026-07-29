import { Check, Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import {
  cateringGalleryImages,
  pageHeroImages,
  privateChefGalleryImages,
  serviceImages,
} from '../assets/images/selected-images'
import { site } from '../config/site'

const heroAnchors = [
  { label: 'Weekly Meals', href: '#weekly-meals' },
  { label: 'Event Catering', href: '#event-catering' },
  { label: 'Private Chef', href: '#private-chef' },
  { label: 'Elegant Platters', href: '#platters' },
]

type ServicePrice = {
  label: string
  value: string
  note?: string
  detail: string
  highlight?: boolean
}

const services = [
  {
    id: 'weekly-meals',
    number: '01',
    eyebrow: 'Weekly Meals',
    title: 'Home-style Indian dinners. Delivered to your door.',
    lead: 'A rotating weekly subscription for busy households who want nourishing, flavourful Indian food without the daily cooking.',
    body: [
      'Our weekly meals are designed for real life: generous portions, comforting flavours and balanced menus that change with the rhythm of the week.',
      'Each subscription includes freshly prepared vegetarian and non-vegetarian options, packed with care and delivered directly to your door.',
    ],
    benefits: [
      'Freshly cooked weekly meals for 2 people',
      'Rotating home-style Indian and South Asian menus',
      'Vegetarian and non-vegetarian options',
      'Delivery included within Tallinn',
      'Pause, restart or adjust with simple WhatsApp communication',
    ],
    price: {
      label: 'Subscription',
      value: '€85 / week',
      note: '— including delivery and VAT',
      detail: 'Includes 3 dinners per week for 2 people. Custom household plans are available on request.',
      highlight: true,
    },
    cta: 'Subscribe via WhatsApp',
    href: `${site.whatsapp}?text=Hi%20Desi%20Dabba%2C%20I'd%20like%20to%20subscribe%20to%20weekly%20meals`,
    image: pageHeroImages.weeklyMeals,
    imageAlt: 'Weekly dinner dabba with rice, curry, bread, and fresh accompaniments',
    reverse: false,
  },
  {
    id: 'event-catering',
    number: '02',
    eyebrow: 'Event Catering',
    title: 'Premium catering for moments that matter.',
    lead: 'Beautiful South Asian-inspired catering for celebrations, company gatherings, private events and cultural occasions.',
    body: [
      'Whether you are hosting a family celebration or a professional gathering, our catering is built around abundance, flavour and ease.',
      'We create menus that feel generous without feeling heavy — food that looks beautiful on the table and tastes like it was cooked with patience.',
    ],
    chips: ['Birthdays', 'Weddings', 'Anniversaries', 'Corporate lunches', 'Office gatherings', 'Cultural events', 'Festive celebrations', 'Private dinners', 'Community events'],
    priceCards: [
      { label: 'Starting from', value: '€22 per person', detail: 'Final pricing depends on guest count, menu selection, service format and delivery needs.' },
      { label: 'Guest range', value: '10–150+ guests', detail: 'Suitable for intimate gatherings, office catering and larger celebrations.' },
    ],
    cta: 'Request a catering quote',
    secondaryCta: 'Send an email enquiry',
    href: `${site.whatsapp}?text=Hi%20Desi%20Dabba%2C%20I'd%20like%20a%20catering%20quote`,
    secondaryHref: `mailto:${site.email}?subject=Catering%20enquiry`,
    image: cateringGalleryImages[0],
    imageAlt: 'Catering spread event photo',
    reverse: true,
  },
  {
    id: 'private-chef',
    number: '03',
    eyebrow: 'Private Chef',
    title: 'A personal dining experience, crafted just for you.',
    lead: 'Bring the warmth of Desi Dabba into your home with a private chef experience designed around your table, your guests and your occasion.',
    body: [
      'This is not restaurant food moved into a house. It is a slower, more personal experience: a menu planned with you, cooked in your space and served with calm attention.',
      'Private chef bookings are ideal for birthdays, anniversaries, intimate celebrations, tasting menus and evenings where you want to be fully present with your guests.',
    ],
    chips: ['Home-style Indian', 'South Asian fusion', 'Festive menus', 'Live cooking', 'Tasting menus', 'Vegan & vegetarian'],
    price: {
      label: 'Pricing',
      value: 'Custom quote',
      detail: 'Based on number of guests, menu complexity, preparation time, travel and service requirements.',
    },
    cta: 'Book a private chef experience',
    href: `${site.whatsapp}?text=Hi%20Desi%20Dabba%2C%20I'd%20like%20to%20book%20a%20private%20chef`,
    image: privateChefGalleryImages[2],
    imageAlt: 'Chef at live counter photo',
    reverse: false,
  },
  {
    id: 'platters',
    number: '04',
    eyebrow: 'Elegant Platters',
    title: 'Beautiful platters. Made to be shared.',
    lead: 'Curated South Asian-inspired food platters for gatherings of any size — thoughtfully prepared, beautifully presented and full of flavour.',
    body: [
      'Food shared is food remembered. Our elegant platters are designed for moments when presentation matters as much as taste — gatherings, celebrations, office events or simply an evening with people you love.',
      'Each platter is carefully prepared using fresh ingredients, inspired by South Asian flavours and styled to look as beautiful as it tastes.',
    ],
    benefits: [
      'South Asian-inspired mezze and sharing platters',
      'Vegetarian, vegan and fusion finger food selections',
      'Festive and celebration platters for cultural events',
      'Gut-friendly ingredients and probiotic drink pairings',
      'Suitable for small gatherings to large events',
      'Custom platter design based on dietary needs and preferences',
    ],
    price: {
      label: 'Pricing',
      value: 'Customised by size and selection',
      detail: 'Depends on number of guests, items selected and dietary requirements. Contact us for a quote.',
    },
    cta: 'Enquire about platters',
    href: `${site.whatsapp}?text=Hi%20Desi%20Dabba%2C%20I'd%20like%20to%20enquire%20about%20platters`,
    image: serviceImages.premiumPlatters,
    imageAlt: 'Styled South Asian sharing platter with colorful appetizers',
    reverse: true,
  },
] as const

const faqs = [
  {
    question: 'Can I combine services for one event?',
    answer:
      'Absolutely. Many of our clients combine catering with elegant platters, or add a private chef experience to a larger event. Get in touch and we will put together a package that works for you.',
  },
  {
    question: 'Do you serve clients outside Tallinn?',
    answer:
      'For catering and private chef services, we can discuss events in other parts of Estonia depending on the event size and requirements. Contact us with your details and we will do our best to accommodate.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply message us on WhatsApp or send an email. Share what you have in mind — the service, your date, guest count and any preferences — and we will come back to you with everything you need.',
  },
]

function Benefit({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#4A6741]/15">
        <Check className="size-3.5 text-[#4A6741]" strokeWidth={2.2} aria-hidden />
      </span>
      <span className="text-[15px] leading-[1.5] text-[#1C0A00]/80">{children}</span>
    </div>
  )
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex min-w-0 flex-[1_1_360px] self-stretch">
      <figure className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#1C0A00]/10 bg-[#efe6d7]">
        <img
          src={src}
          alt={alt}
          width="1200"
          height="1800"
          className="h-full min-h-[480px] w-full object-cover object-[50%_52%]"
          sizes="(min-width: 1024px) 42vw, 100vw"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  )
}

function PriceBox({ price }: { price: ServicePrice }) {
  const isHighlight = price.highlight

  return (
    <div className={`${isHighlight ? 'bg-[linear-gradient(135deg,#FBEFD6,#F6E2BE)] border-[#C8861A]/35' : 'bg-white border-[#1C0A00]/10'} mb-5 rounded-[14px] border px-6 py-[22px]`}>
      <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.125em] text-[#6B1E2E]">{price.label}</div>
      <div className="mb-2 font-serif text-[28px] font-bold text-[#1C0A00]">
        {price.value}{' '}
        {price.note ? (
          <span className="text-base font-medium text-[#1C0A00]/60">{price.note}</span>
        ) : null}
      </div>
      <div className="text-[14.5px] leading-[1.6] text-[#1C0A00]/70">{price.detail}</div>
    </div>
  )
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF7F2] font-sans text-[#1C0A00]">
      <section id="top" className="mx-auto max-w-[960px] px-8 pb-16 pt-[88px] text-center">
        <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-[#C8861A]">Desi Dabba Services</div>
        <h1 className="mx-auto mb-[26px] mt-0 max-w-[13ch] font-serif text-[clamp(38px,6vw,66px)] font-bold leading-[1.08] text-[#1C0A00]">
          Every service, made with the same care.
        </h1>
        <p className="mx-auto mb-10 max-w-[680px] text-[clamp(16px,2vw,19px)] leading-[1.65] text-[#1C0A00]/70">
          From your weekly dinner to your most memorable celebration — Desi Dabba brings South Asian warmth, premium
          presentation and home-style flavour to every experience we create.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {heroAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="rounded-full border border-[#1C0A00]/15 bg-white px-[22px] py-[11px] text-sm font-semibold text-[#1C0A00] no-underline shadow-[0_1px_3px_rgba(28,10,0,0.05)]"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </section>

      <div id="services" />

      {services.map((service, index) => (
        <div key={service.id}>
          <section id={service.id} className="mx-auto max-w-[1200px] scroll-mt-[90px] px-8 py-14">
            <div className="border-l-4 border-[#6B1E2E] pl-[clamp(20px,4vw,48px)]">
              <div className={`flex flex-wrap items-center gap-[clamp(36px,5vw,72px)] ${service.reverse ? 'flex-row-reverse' : ''}`}>
                <div className="min-w-0 flex-[1_1_400px]">
                  <div className="mb-2 font-serif text-[clamp(56px,9vw,104px)] font-bold leading-[0.9] text-[#C8861A]/30">
                    {service.number}
                  </div>
                  <div className="mb-3.5 text-xs font-bold uppercase tracking-[3px] text-[#C8861A]">{service.eyebrow}</div>
                  <h2 className="mb-4 mt-0 font-serif text-[clamp(28px,4vw,42px)] font-bold leading-[1.12] text-[#1C0A00]">
                    {service.title}
                  </h2>
                  <p className="mb-5 text-[17px] font-medium leading-[1.5] text-[#6B1E2E]">{service.lead}</p>
                  {service.body.map((paragraph) => (
                    <p key={paragraph} className="mb-4 text-[15.5px] leading-[1.7] text-[#1C0A00]/70">
                      {paragraph}
                    </p>
                  ))}

                  {'benefits' in service && service.benefits ? (
                    <div className="mb-[26px] flex flex-col gap-3">
                      {service.benefits.map((benefit) => (
                        <Benefit key={benefit}>{benefit}</Benefit>
                      ))}
                    </div>
                  ) : null}

                  {'chips' in service && service.chips ? (
                    <div className="mb-[26px] flex flex-wrap gap-2.5">
                      {service.chips.map((chip) => (
                        <span key={chip} className={`rounded-full px-3.5 py-2 text-[13px] font-semibold ${service.id === 'private-chef' ? 'bg-[#C8861A]/15 text-[#8a5a10]' : 'bg-[#4A6741]/10 text-[#4A6741]'}`}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {'priceCards' in service && service.priceCards ? (
                    <div className="mb-[26px] flex flex-wrap gap-3.5">
                      {service.priceCards.map((card) => (
                        <div key={card.label} className="flex-[1_1_220px] rounded-xl border border-[#1C0A00]/10 bg-white px-5 py-[18px]">
                          <div className="mb-1 text-xs font-bold uppercase tracking-[0.125em] text-[#6B1E2E]">{card.label}</div>
                          <div className="mb-1.5 font-serif text-[24px] font-bold text-[#1C0A00]">{card.value}</div>
                          <div className="text-[14px] leading-[1.55] text-[#1C0A00]/65">{card.detail}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {'price' in service && service.price ? <PriceBox price={service.price} /> : null}

                  <div className="flex flex-wrap gap-3.5">
                    <a
                      href={service.href}
                      className="inline-block rounded-full bg-[#6B1E2E] px-7 py-3.5 text-[15px] font-semibold text-[#FAF7F2] no-underline shadow-[0_4px_14px_rgba(107,30,46,0.25)]"
                    >
                      {service.cta}
                    </a>
                    {'secondaryCta' in service && service.secondaryCta ? (
                      <a
                        href={service.secondaryHref}
                        className="inline-block rounded-full border-[1.5px] border-[#6B1E2E] px-[27px] py-[13px] text-[15px] font-semibold text-[#6B1E2E] no-underline"
                      >
                        {service.secondaryCta}
                      </a>
                    ) : null}
                  </div>
                </div>
                <ServiceImage src={service.image} alt={service.imageAlt} />
              </div>
            </div>
          </section>
          {index < services.length - 1 && (
            <div className="mx-auto max-w-[1080px] px-8">
              <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(200,134,26,0.4),transparent)]" />
            </div>
          )}
        </div>
      ))}

      <section className="mx-auto max-w-[820px] px-8 pb-10 pt-[72px]">
        <h2 className="mb-9 mt-0 text-center font-serif text-[clamp(28px,4vw,42px)] font-bold leading-[1.14] text-[#1C0A00]">
          Still have questions? We have got you covered.
        </h2>
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <div key={faq.question} className="overflow-hidden rounded-[14px] border border-[#1C0A00]/10 bg-white">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-[22px] text-left font-serif text-[19px] font-semibold text-[#1C0A00]"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-[26px] font-normal leading-none text-[#6B1E2E]">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen && <div className="px-6 pb-6 text-[15.5px] leading-[1.65] text-[#1C0A00]/70">{faq.answer}</div>}
              </div>
            )
          })}
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-10">
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-[#6B1E2E] px-[clamp(28px,6vw,72px)] py-[clamp(48px,7vw,80px)] text-center">
          <div className="pointer-events-none absolute right-[-30px] top-[-40px] font-serif text-[200px] font-bold leading-none text-[#C8861A]/10">
            ✳
          </div>
          <h2 className="relative mb-5 mt-0 font-serif text-[clamp(30px,4.5vw,48px)] font-bold leading-[1.12] text-[#FAF7F2]">
            Not sure which service is right for you?
          </h2>
          <p className="relative mx-auto mb-9 max-w-[620px] text-[clamp(15px,2vw,18px)] leading-[1.65] text-[#FAF7F2]/80">
            Tell us a little about what you are looking for and we will help you figure out the best option. There is no
            pressure — just a friendly conversation about food.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3.5">
            <a href={site.whatsapp} className="inline-flex items-center gap-2.5 rounded-full bg-[#4A6741] px-[30px] py-[15px] text-[15.5px] font-semibold text-[#FAF7F2] no-underline shadow-[0_6px_18px_rgba(0,0,0,0.2)]">
              <Phone className="size-5" aria-hidden />
              Message on WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#FAF7F2]/50 px-[29px] py-3.5 text-[15.5px] font-semibold text-[#FAF7F2] no-underline">
              <Mail className="size-5" aria-hidden />
              Send us an email
            </a>
          </div>
          <div className="relative mt-[26px] text-sm text-[#FAF7F2]/70">
            {site.phone} &nbsp;·&nbsp; {site.email}
          </div>
        </div>
      </section>

      <a
        href={site.whatsapp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[26px] right-[26px] z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white no-underline shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
      >
        <MessageCircle className="size-8" aria-hidden />
      </a>
    </div>
  )
}
