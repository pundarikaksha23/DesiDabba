import { motion } from 'framer-motion'
import {
  CalendarCheck,
  ChefHat,
  FlameKindling,
  Heart,
  MessageCircle,
  Send,
} from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { ImageGalleryGrid } from '../components/sections/ImageGalleryGrid'
import { TimelineGrid } from '../components/sections/TimelineGrid'
import {
  experienceNotes,
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
      <section className="relative overflow-hidden bg-maroon-900 text-cream-50">
        <div className="absolute inset-0">
          <img
            src={pageHeroImages.privateChef}
            alt="Private chef Indian dinner table with elegant dishes and accompaniments"
            width="1200"
            height="1800"
            className="h-full w-full object-cover object-[48%_56%] opacity-56"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(53,17,15,0.96),rgba(72,24,21,0.78)_48%,rgba(53,17,15,0.20))]" />
        </div>

        <Container className="relative flex min-h-[82svh] flex-col justify-center pb-16 pt-28 sm:min-h-[88svh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="inline-flex max-w-full items-center gap-2 rounded-md border border-cream-50/20 bg-cream-50/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream-50/90 backdrop-blur sm:rounded-full sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <ChefHat className="size-4 text-gold" aria-hidden />
              Private Chef
            </p>
            <h1 className="display-xl mt-7 text-cream-50">A soulful Indian table, cooked close to the people you love.</h1>
            <p className="body-lg mt-6 max-w-xl text-cream-50/82">
              An intimate chef-led experience shaped around memory, pacing, and the quiet pleasure of being fully hosted
              in your own space.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="#booking">Book a private chef</Button>
              <Button to="#sample-menu" variant="ghost">
                View sample menu
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

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
                  <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-card">
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
        variant="dark"
      />

      <Section id="sample-menu" tone="cream">
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
        imageClassName="h-72 w-full object-cover transition duration-700 hover:scale-105"
      />

      <Section tone="cream">
        <Container className="grid gap-5 md:grid-cols-2">
          <Card className="h-full bg-maroon text-cream-50">
            <FlameKindling className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Pricing CTA</p>
            <h2 className="heading-md mt-3 text-cream-50">Private chef evenings are quoted around the table.</h2>
            <p className="body-sm mt-4 text-cream-50/72">
              Pricing depends on guest count, courses, menu direction, prep complexity, staffing, and travel. Share the
              shape of the evening and we will prepare a thoughtful estimate.
            </p>
            <Button to="#booking" className="mt-7">
              Request pricing
            </Button>
          </Card>

          <Card className="h-full">
            <CalendarCheck className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Booking CTA</p>
            <h2 className="heading-md mt-3 text-brown">Start with the date, the guests, and the feeling.</h2>
            <p className="body-sm mt-4 text-brown/70">
              We will help translate that into menu flow, service style, and the practical details that make the night
              feel relaxed.
            </p>
            <Button to="#booking" variant="secondary" className="mt-7">
              Begin booking
            </Button>
          </Card>
        </Container>
      </Section>

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
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
