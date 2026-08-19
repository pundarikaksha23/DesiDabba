import { CalendarCheck, HandPlatter, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { FaqSection } from '../components/sections/FaqSection'
import { ImageGalleryGrid } from '../components/sections/ImageGalleryGrid'
import { SplitHero } from '../components/sections/SplitHero'
import { TimelineGrid } from '../components/sections/TimelineGrid'
import { routes } from '../config/routes'
import { site } from '../config/site'
import {
  platterCollections,
  platterFaq,
  platterFeatureImage,
  platterGallery,
  platterMoments,
  platterNotes,
  platterProcess,
} from '../data/glazingPlatters'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export default function GlazingPlatters() {
  return (
    <>
      <SplitHero
        eyebrow="Grazing Platters"
        title="Host-ready platters with South Asian warmth and a polished eye."
        description="Designed for easy sharing and immediate visual impact, our platters bring flavor, abundance, and calm presentation to gatherings of every scale."
        imageAlt="Desi Dabba grazing platter with colorful appetizers and garnishes"
        imagePosition="48% 52%"
        imageSrc={platterFeatureImage}
        imageHeightClass="h-80 w-full object-cover sm:h-[33rem]"
        columnsClass="lg:grid-cols-[0.96fr_1.04fr]"
        actions={
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to={routes.contact}>Plan a platter</Button>
            <Button to={site.whatsapp} variant="secondary">
              <WhatsappIcon className="size-4" />
              WhatsApp
            </Button>
          </div>
        }
      />

      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Why Platters"
            title="The easiest way to make the table feel generous."
            description="Platters are built for hosts who want food to feel abundant, beautiful, and immediately welcoming without managing individual courses."
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {platterNotes.map((item) => {
              const Icon = item.icon

              return (
                <motion.div key={item.title} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                  <Card className="h-full">
                    <Icon className="size-8 text-gold" aria-hidden />
                    <h2 className="heading-md mt-5 text-brown">{item.title}</h2>
                    <p className="body-sm mt-3 text-brown/70">{item.copy}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Collections"
            title="Formats that scale from a small visit to a full celebration."
            description="Each platter collection is a starting point. We adjust item mix, quantity, and styling around the room, the guests, and the mood you want."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {platterCollections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              >
                <Card className={`h-full ${index === 1 ? 'bg-maroon text-cream-50' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{collection.serves}</p>
                  <h2 className={`heading-md mt-4 ${index === 1 ? 'text-cream-50' : 'text-brown'}`}>{collection.name}</h2>
                  <p className={`body-sm mt-3 ${index === 1 ? 'text-cream-50/72' : 'text-brown/70'}`}>
                    {collection.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {collection.inclusions.map((inclusion) => (
                      <li
                        key={inclusion}
                        className={`flex items-start gap-3 text-sm font-semibold leading-6 ${
                          index === 1 ? 'text-cream-50/86' : 'text-green'
                        }`}
                      >
                        <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="Occasions"
            title="For gatherings that need ease without looking effortless."
            description="Platters work beautifully when people are moving, mingling, arriving in waves, or simply sharing a table without the structure of a seated dinner."
            align="left"
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {platterMoments.map((occasion) => (
              <div key={occasion} className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
                <HandPlatter className="size-5 text-gold" aria-hidden />
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug">{occasion}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="A look at the kind of abundance we mean."
        description="Color, garnish, texture, and thoughtful layout all matter. These platters are designed to feel celebratory before the first bite."
        items={platterGallery}
      />

      <TimelineGrid
        eyebrow="How It Works"
        title="A simple process from first message to shared table."
        description="We keep platter planning straightforward: understand the gathering, shape the selection, style the spread, and deliver it ready to enjoy."
        items={platterProcess}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Useful details before you place a platter order."
        description="A few practical answers that help hosts understand timing, customization, and how platters pair with other Desi Dabba services."
        items={platterFaq}
      />

      <Section tone="maroon">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <CalendarCheck className="size-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 max-w-3xl text-cream-50">Tell us the date, the guests, and the kind of table you want.</h2>
            <p className="body-lg mt-4 max-w-2xl text-cream-50/72">
              We will help you choose the right platter format, item mix, and styling direction for the occasion.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button to={routes.contact}>Book grazing platters</Button>
            <Button to={site.whatsapp} variant="ghost">
              <WhatsappIcon className="size-4" />
              WhatsApp
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
