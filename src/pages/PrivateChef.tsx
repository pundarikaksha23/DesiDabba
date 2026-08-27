import { motion } from 'framer-motion'
import {
  Heart,
  Send,
} from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
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
import {
  experienceNotes,
  privateChefFaq,
  privateChefGallery,
  privateChefMenuStyles,
  privateChefOccasions,
  privateChefProcess,
  sampleMenu,
} from '../data/privateChef'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { site } from '../config/site'
import { routes } from '../config/routes'

export default function PrivateChef() {
  return (
    <>
      <SplitHero
        eyebrow="Private Chef"
        title="Private dining for homes, venues and special occasions."
        description="Bring a warm, thoughtful food experience into your home, venue or private event - with a custom menu created around your occasion."
        imageAlt="Private chef dinner table with elegant dishes and accompaniments"
        imagePosition="48% 56%"
        imageSrc={pageHeroImages.privateChef}
        imageHeightClass="h-80 w-full object-cover sm:h-[33rem]"
        columnsClass="lg:grid-cols-[0.94fr_1.06fr]"
        actions={
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#booking">Begin booking</Button>
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
            eyebrow="Experience"
            title="Restaurant polish without the room losing its intimacy."
            description="The private chef experience is built for hosts who want a memorable meal without spending the evening managing the kitchen."
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {experienceNotes.map((item) => {
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
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="eyebrow">Occasions</p>
            <h2 className="display-lg mt-3 text-brown">For evenings that deserve more than a reservation.</h2>
            <p className="body-lg mt-5 text-brown/72">
              We cook for moments where the setting matters: familiar rooms, close guests, and food that should feel
              personal from the first sip to the last sweet bite.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {privateChefOccasions.map((occasion) => (
              <div key={occasion} className="rounded-lg border border-brown/10 bg-cream-50 p-5 shadow-soft">
                <Heart className="size-5 text-gold" aria-hidden />
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-maroon">{occasion}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <TimelineGrid
        eyebrow="How It Works"
        title="A calm process for a beautifully paced evening."
        description="The planning is clear, the menu is personal, and the service is designed to feel quietly handled."
        items={privateChefProcess}
        tone="green"
      />

      <Section id="sample-menu">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">A Possible Evening</p>
            <h2 className="display-lg mt-3 text-brown">A private dining experience shaped around your taste, comfort and dietary needs.</h2>
            <p className="body-lg mt-5 text-brown/72">
              Every private chef menu is personalised. We can create a full spread from many different dishes,
              depending on your occasion, guest preferences and food style.
            </p>
            <p className="body-lg mt-4 text-brown/72">
              Menus can include Indian warmth, Asian flavours, fusion dishes, healthy meals, vegetarian and vegan
              options, non-vegetarian dishes, desserts, chaat counters and gut-friendly food.
            </p>
            <p className="body-lg mt-4 text-brown/72">
              Everything is cooked with care and adjusted to your comfort, spice level, allergies and dietary needs.
            </p>
            <p className="eyebrow mt-7">Menu can include</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {privateChefMenuStyles.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-gold/30 bg-cream-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-maroon shadow-[0_12px_24px_-18px_rgba(59,42,33,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {sampleMenu.map((item) => (
              <Card key={item.course}>
                <div className="grid gap-3 md:grid-cols-[9rem_minmax(0,1fr)] md:items-start">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{item.course}</p>
                  <div className="min-w-0 space-y-2">
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className={
                          line === 'or'
                            ? 'text-sm font-semibold uppercase tracking-[0.16em] text-gold'
                            : 'font-serif text-2xl font-semibold leading-snug text-brown'
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
            <p className="body-sm px-2 text-brown/72">
              Menus can be made lighter, vegetarian, vegan, gut-friendly or more festive depending on the occasion and
              guest preferences.
            </p>
          </div>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="A glimpse of private dining."
        description="Private chef experiences can include plated dishes, sharing tables, live cooking moments, desserts, drinks and small finishing details."
        items={privateChefGallery}
        imageClassName="block h-full w-full object-cover transition duration-700 hover:scale-105"
      />

      <FaqSection
        eyebrow="FAQ"
        title="Useful details before you book."
        description="A few answers that help hosts understand fit, menu direction, and what the service needs from the room."
        items={privateChefFaq}
      />

      <Section id="booking" tone="maroon">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Send className="size-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 max-w-3xl text-cream-50">Tell us about the evening you want to host.</h2>
            <p className="body-lg mt-4 max-w-2xl text-cream-50/72">
              Send the date, guest count, kitchen setup, dietary needs, and any family or regional references we should
              understand.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button to={routes.contact}>Book private chef</Button>
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
