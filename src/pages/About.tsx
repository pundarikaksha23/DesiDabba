import { motion } from 'framer-motion'
import { FlameKindling, UtensilsCrossed } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SplitHero } from '../components/sections/SplitHero'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export default function About() {
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
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Our Story</Badge>
            <h2 className="display-lg mt-5 text-brown">Our Story</h2>
          </div>
          <motion.div
            className="body-lg space-y-6 text-brown/72"
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
