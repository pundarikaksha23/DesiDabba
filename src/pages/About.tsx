import { motion, useReducedMotion } from 'framer-motion'
import { FlameKindling, UtensilsCrossed } from 'lucide-react'
import { pageHeroImages, storytellingImages } from '../assets/images/selected-images'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SplitHero } from '../components/sections/SplitHero'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <SplitHero
        eyebrow="About Desi Dabba"
        title="Food that travels well without losing its soul."
        description="Desi Dabba began with a private kind of longing: for Indian food that could move through modern life and still feel close to the hands, memories, and rituals that made it meaningful."
        imageAlt="Portrait of the Desi Dabba founder holding a plated dish"
        imagePosition="50% 18%"
        imageSrc={pageHeroImages.about}
        imageWidth={1800}
        imageHeight={1200}
      />

      <Section tone="cream">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.figure
            className="overflow-hidden rounded-[28px] shadow-card"
            initial={reduceMotion ? false : { opacity: 0, x: -18, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' }}
          >
            <img
              src={storytellingImages.aboutPageFeature}
              alt="The Desi Dabba team together at a celebration"
              width="1800"
              height="1200"
              className="h-[280px] w-full object-cover object-[50%_42%] sm:h-[380px] lg:h-[440px]"
              sizes="(min-width: 1024px) 42vw, 100vw"
              loading="lazy"
              decoding="async"
            />
          </motion.figure>

          <div>
            <Badge>Our Story</Badge>
            <h2 className="display-lg mt-5 text-brown">Our Story</h2>
            <motion.div
              className="body-lg mt-6 space-y-6 text-brown/72"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p variants={fadeUp}>
                Desi Dabba creates warm, thoughtful food experiences for everyday meals, gatherings, and celebrations in
                Tallinn.
              </motion.p>
              <motion.p variants={fadeUp}>
                We bring Indian warmth, Asian flavours, and global food experiences to homes, offices, and events.
              </motion.p>
              <motion.p variants={fadeUp}>
                Weekly meals, catering menus, private chef experiences, and grazing platters are all prepared with care,
                balance, and quality.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Card className="h-full bg-maroon text-cream-50">
              <FlameKindling className="size-8 text-gold" aria-hidden />
              <p className="eyebrow mt-6">Mission</p>
              <h2 className="heading-md mt-3 text-cream-50">
                To create warm, thoughtful food experiences for everyday meals, gatherings and celebrations in Tallinn.
              </h2>
              <p className="body-sm mt-4 text-cream-50/72">
                Desi Dabba brings Indian warmth, Asian flavours and global food experiences to homes, offices and
                events. We prepare weekly meals, catering menus, private chef experiences and grazing platters with
                care, balance and quality.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
          >
            <Card className="h-full bg-green text-cream-50">
              <UtensilsCrossed className="size-8 text-gold" aria-hidden />
              <p className="eyebrow mt-6">Vision</p>
              <h2 className="heading-md mt-3 text-cream-50">
                To become a trusted food experience brand in Tallinn, known for warm hospitality, fresh menus and
                thoughtful service.
              </h2>
              <p className="body-sm mt-4 text-cream-50/72">
                We want Desi Dabba to grow as a reliable and personal food brand for everyday meals and special
                occasions. Our focus is simple: good food, clear communication, careful planning and food experiences
                people remember.
              </p>
            </Card>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
