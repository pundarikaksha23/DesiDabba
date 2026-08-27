import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { site } from '../config/site'
import { detailedServices, serviceHeroAnchors, servicesFaq } from '../data/services'

function Benefit({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green-700/15">
        <Check className="size-3.5 text-green-700" strokeWidth={2.2} aria-hidden />
      </span>
      <span className="text-[15px] leading-[1.5] text-brown-700/82">{children}</span>
    </div>
  )
}

function ServiceImage({ src, alt, minHeightClass }: { src: string; alt: string; minHeightClass: string }) {
  return (
    <div className="flex min-w-0 flex-[1_1_360px] self-stretch">
      <figure className={`relative w-full overflow-hidden rounded-[16px] border border-brown-700/8 ${minHeightClass}`}>
        <img
          src={src}
          alt={alt}
          width="1200"
          height="1800"
          className="absolute inset-0 h-full w-full object-cover object-[50%_52%]"
          style={{ width: '100%', height: '100%' }}
          sizes="(min-width: 1024px) 42vw, 100vw"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  )
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="surface-cream min-h-screen overflow-x-hidden text-brown-700">
      <section id="top" className="mx-auto max-w-[960px] px-8 pb-16 pt-[88px] text-center">
        <div className="mb-[22px] text-[12px] font-bold uppercase tracking-[4px] text-gold-600">Our Services</div>
        <h1 className="mx-auto mb-[26px] mt-0 font-serif text-[clamp(38px,6vw,66px)] font-bold leading-[1.08] text-brown-700 text-balance">
          Every service, made with the same care.
        </h1>
        <p className="mx-auto mb-10 max-w-[680px] text-[clamp(16px,2vw,19px)] leading-[1.65] text-brown-700/72">
          From weekly meals to private celebrations, Desi Dabba brings Indian warmth, Asian flavours and global food
          experiences to every table.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {serviceHeroAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="rounded-full border border-brown-700/14 bg-white px-[22px] py-[11px] text-sm font-semibold text-brown-700 no-underline shadow-[0_1px_3px_rgba(28,10,0,0.05)]"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </section>

      <div id="services" />

      {detailedServices.map((service, index) => (
        <div key={service.id}>
          <section id={service.id} className="mx-auto max-w-[1200px] scroll-mt-[90px] px-8 py-14">
            <div className="border-l-4 border-maroon-700 pl-[clamp(20px,4vw,48px)]">
              <div
                className={`flex flex-wrap items-center gap-[clamp(36px,5vw,72px)] ${
                  service.reverse ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="min-w-0 flex-[1_1_400px]">
                  <div className="mb-2 font-serif text-[clamp(56px,9vw,104px)] font-bold leading-[0.9] text-gold-600/28">
                    {service.number}
                  </div>
                  <div className="mb-[14px] text-xs font-bold uppercase tracking-[3px] text-gold-600">{service.eyebrow}</div>
                  <h2 className="mb-4 mt-0 font-serif text-[clamp(28px,4vw,42px)] font-bold leading-[1.12] text-brown-700">
                    {service.title}
                  </h2>
                  <p className="mb-5 text-[17px] font-medium leading-[1.5] text-maroon-700">{service.lead}</p>
                  {service.body.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraph}
                      className={`text-[15.5px] leading-[1.7] text-brown-700/72 ${
                        paragraphIndex === service.body.length - 1
                          ? service.id === 'weekly-meals'
                            ? 'mb-[28px]'
                            : 'mb-6'
                          : 'mb-4'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {service.chips?.length ? (
                    <div className="mb-[26px] flex flex-wrap gap-2">
                      {service.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`rounded-full px-[14px] py-[7px] text-[13px] ${
                            service.id === 'private-chef'
                              ? 'bg-gold-600/16 font-semibold text-[#8a5a10]'
                              : 'bg-green-700/10 font-medium text-green-700'
                          }`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {service.benefits?.length ? (
                    <div className={`flex flex-col gap-3 ${service.id === 'weekly-meals' ? 'mb-[28px]' : 'mb-[26px]'}`}>
                      {service.benefits.map((benefit) => (
                        <Benefit key={benefit}>{benefit}</Benefit>
                      ))}
                    </div>
                  ) : null}

                </div>
                <ServiceImage
                  src={service.image}
                  alt={service.imageAlt}
                  minHeightClass={
                    service.id === 'weekly-meals'
                      ? 'min-h-[460px]'
                      : service.id === 'platters'
                        ? 'min-h-[480px]'
                        : 'min-h-[520px]'
                  }
                />
              </div>
            </div>
          </section>
          {index < detailedServices.length - 1 ? (
            <div className="mx-auto max-w-[1080px] px-8">
              <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(200,134,26,0.4),transparent)]" />
            </div>
          ) : null}
        </div>
      ))}

      <section className="mx-auto max-w-[820px] px-8 pb-10 pt-[72px]">
        <h2 className="mb-9 mt-0 text-center font-serif text-[clamp(28px,4vw,42px)] font-bold leading-[1.14] text-brown-700">
          Still have questions? We have got you covered.
        </h2>
        <div className="flex flex-col gap-3.5">
          {servicesFaq.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <div key={faq.question} className="overflow-hidden rounded-[14px] border border-brown-700/10 bg-white">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-[22px] text-left font-serif text-[19px] font-semibold text-brown-700"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-brown-700/10 text-maroon-700 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="size-4" strokeWidth={2.2} aria-hidden />
                  </span>
                </button>
                {isOpen ? <div className="px-6 pb-6 text-[15.5px] leading-[1.65] text-brown-700/70">{faq.answer}</div> : null}
              </div>
            )
          })}
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-10">
        <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl bg-maroon-700 px-[clamp(28px,6vw,72px)] py-[clamp(48px,7vw,80px)] text-center">
          <div className="pointer-events-none absolute right-[-30px] top-[-40px] font-serif text-[200px] font-bold leading-none text-gold-600/10">
            ✳
          </div>
          <h2 className="relative mb-5 mt-0 font-serif text-[clamp(30px,4.5vw,48px)] font-bold leading-[1.12] text-cream-50">
            Not sure which service is right for you?
          </h2>
          <p className="relative mx-auto mb-9 max-w-[620px] text-[clamp(15px,2vw,18px)] leading-[1.65] text-cream-50/80">
            Tell us a little about what you are looking for and we will help you figure out the best option. There is no
            pressure - just a friendly conversation about food.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3.5">
            <a href={site.whatsapp} className="inline-flex items-center gap-2.5 rounded-full bg-green-700 px-[30px] py-[15px] text-[15.5px] font-semibold text-cream-50 no-underline shadow-[0_6px_18px_rgba(0,0,0,0.2)]">
              <WhatsappIcon className="size-5" />
              WhatsApp Desi Dabba
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-cream-50/50 px-[29px] py-[14px] text-[15.5px] font-semibold text-cream-50 no-underline">
              Email {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
