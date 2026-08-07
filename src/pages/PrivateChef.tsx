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
        title="A soulful Indian table, cooked close to the people you love."
        description="An intimate chef-led experience shaped around memory, pacing, and the quiet pleasure of being fully hosted in your own space."
        imageAlt="Private chef Indian dinner table with elegant dishes and accompaniments"
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
            description="The private chef experience is built for hosts who want a memorable Indian meal without spending the evening managing the kitchen."
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
            <p className="eyebrow">Sample Menu</p>
            <h2 className="display-lg mt-3 text-brown">One possible evening, shaped with regional warmth.</h2>
            <p className="body-lg mt-5 text-brown/72">
              Every private chef menu is custom, but this gives a sense of the pacing: a graceful beginning, a generous
              middle, and a sweet finish that lingers.
            </p>
          </div>
          <div className="space-y-4">
            {sampleMenu.map((item) => (
              <Card key={item.course} className="grid gap-3 md:grid-cols-[9rem_1fr]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{item.course}</p>
                <p className="font-serif text-2xl font-semibold leading-snug text-brown">{item.dish}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="Small details, quietly elevated."
        description="A private chef evening is made of pacing, plating, fragrance, and the feeling that someone is watching the whole table."
        items={privateChefGallery}
        imageClassName="block h-full w-full object-cover transition duration-700 hover:scale-105"
      />

      <FaqSection
        eyebrow="FAQ"
        title="Useful details before you book the evening."
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
