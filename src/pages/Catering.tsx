import { motion } from 'framer-motion'
import { CalendarCheck, CheckCircle2, Send, Sparkles, UtensilsCrossed } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { InputField, SelectField, TextareaField } from '../components/FormField'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { FaqSection } from '../components/sections/FaqSection'
import { ImageGalleryGrid } from '../components/sections/ImageGalleryGrid'
import { SplitHero } from '../components/sections/SplitHero'
import { TimelineGrid } from '../components/sections/TimelineGrid'
import {
  bookingProcess,
  buffetPackages,
  cateringFaq,
  cateringGallery,
  cateringOccasions,
  menuHighlights,
} from '../data/catering'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { site } from '../config/site'

const occasionOptions = ['Corporate hosting', 'Wedding or milestone', 'Private celebration', 'Other catered gathering']

export default function Catering() {
  return (
    <>
      <SplitHero
        eyebrow="Catering"
        title="Indian catering with the poise of a beautifully hosted table."
        description="We design catering around flow, memory, and guest comfort: menus that feel generous without becoming crowded, service that feels polished without losing warmth."
        imageAlt="Premium Indian catering dishes arranged for a hosted event"
        imagePosition="48% 52%"
        imageSrc={pageHeroImages.catering}
        imageHeightClass="h-80 w-full object-cover sm:h-[33rem]"
        columnsClass="lg:grid-cols-[0.94fr_1.06fr]"
        actions={
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="#catering-form">Request a quote</Button>
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
            eyebrow="Occasions"
            title="Menus shaped around why people are gathering."
            description="A catered meal should understand the room before it reaches the table: the pace, the guests, the mood, and the memories in play."
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {cateringOccasions.map((occasion) => (
              <motion.div key={occasion.name} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-card">
                  <CalendarCheck className="size-8 text-gold" aria-hidden />
                  <h2 className="heading-md mt-5 text-brown">{occasion.name}</h2>
                  <p className="body-sm mt-3 text-brown/70">{occasion.detail}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Buffet Packages"
            title="Elegant formats for different scales of hosting."
            description="Each package is a starting point. We refine the dishes, portions, and service details around your venue and guest list."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {buffetPackages.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              >
                <Card className={`h-full ${index === 1 ? 'bg-maroon text-cream-50' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{item.serves}</p>
                  <h2 className={`heading-md mt-4 ${index === 1 ? 'text-cream-50' : 'text-brown'}`}>{item.name}</h2>
                  <p className={`body-sm mt-3 ${index === 1 ? 'text-cream-50/72' : 'text-brown/70'}`}>
                    {item.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {item.inclusions.map((inclusion) => (
                      <li
                        key={inclusion}
                        className={`flex items-start gap-3 text-sm font-semibold leading-6 ${
                          index === 1 ? 'text-cream-50/86' : 'text-green'
                        }`}
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
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
            eyebrow="Menu Highlights"
            title="Dishes with presence, balance, and memory."
            description="Menus may move across regions, but the standard stays steady: fragrance, contrast, generosity, and a final detail guests notice."
            align="left"
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {menuHighlights.map((item) => (
              <div key={item} className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
                <UtensilsCrossed className="size-5 text-gold" aria-hidden />
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="A glimpse of how the table can feel."
        description="Buffets, dabbas, shared platters, and finishing touches, presented with quiet confidence."
        items={cateringGallery}
      />

      <TimelineGrid
        eyebrow="Booking Process"
        title="A calm timeline from first note to final plate."
        description="Planning should feel as considered as the food. We keep the steps clear, paced, and practical."
        items={bookingProcess}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Useful answers before we plan the table."
        description="Catering has many moving parts. The work is to make them feel simple before guests arrive."
        items={cateringFaq}
      />

      <Section id="catering-form" tone="maroon">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Send className="size-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 text-cream-50">Tell us the table you're setting.</h2>
            <p className="body-lg mt-5 text-cream-50/72">
              Share the date, guest count, occasion, dietary needs, and anything personal we should understand before
              suggesting a menu.
            </p>
            <a href={site.whatsapp} className="btn btn-ghost mt-8">
              <WhatsappIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </div>

          <form
            className="rounded-lg border border-cream-50/12 bg-cream-50 p-6 shadow-card md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Name" name="name" />
              <InputField label="Email" type="email" name="email" />
              <InputField label="Event Date" type="date" name="event-date" />
              <InputField label="Guest Count" type="number" name="guest-count" min="1" />
            </div>
            <div className="mt-5">
              <SelectField label="Occasion" name="occasion" options={occasionOptions} />
            </div>
            <div className="mt-5">
              <TextareaField
                label="Notes"
                rows={5}
                name="notes"
                placeholder="Tell us about dietary needs, service style, regional preferences, or the feeling you want the meal to carry."
              />
            </div>
            <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
              Send enquiry
              <Sparkles className="size-4" aria-hidden />
            </button>
          </form>
        </Container>
      </Section>
    </>
  )
}
