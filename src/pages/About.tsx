import { motion } from 'framer-motion'
import { FlameKindling, UtensilsCrossed } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { SplitHero } from '../components/sections/SplitHero'
import { aboutTimeline, aboutValues, whyDesiDabba } from '../data/about'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'

export default function About() {
  return (
    <>
      <SplitHero
        eyebrow="About Desi Dabba"
        title="Warm food experiences, made with care in Tallinn."
        description="Desi Dabba brings weekly meals, catering, private chef experiences and grazing platters together under one food brand rooted in Indian hospitality, global flavours and thoughtful service."
        imageAlt="Desi Dabba meal with Indian dishes arranged with care"
        imagePosition="52% center"
        imageSrc={pageHeroImages.about}
        imageWidth={1800}
        imageHeight={1200}
      />

      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Our Story</Badge>
            <h2 className="display-lg mt-5 text-brown">A food brand built around warmth, care and practical hospitality.</h2>
          </div>
          <motion.div
            className="body-lg space-y-6 text-brown/72"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp}>
              Desi Dabba began with a simple idea: food should feel warm, personal and full of care. Rooted in Indian
              hospitality and inspired by global flavours, we create weekly meals, catering menus, private chef
              experiences and grazing platters for homes, offices and celebrations in Tallinn. Every menu is made
              thoughtfully, with fresh ingredients, balanced flavours and a soulful touch.
            </motion.p>
            <motion.p variants={fadeUp}>
              That same care shapes how we think about delivery, catering, private dining and shared tables across
              Tallinn, with menus designed to feel clear, balanced and genuinely welcoming.
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
              <h2 className="heading-md mt-3 text-cream-50">To create warm, thoughtful food experiences people can trust.</h2>
              <p className="body-sm mt-4 text-cream-50/72">
                We want weekly meals, catering and private dining to feel well-planned, balanced and genuinely cared for,
                without becoming complicated or overly formal.
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
                To become a trusted food-experience brand for ordinary weeks and important days in Tallinn.
              </h2>
              <p className="body-sm mt-4 text-cream-50/72">
                We want the brand to feel warm, premium, flexible and international, with menus that can move naturally
                from weekday meals to celebrations and custom events.
              </p>
            </Card>
          </motion.div>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeader
            eyebrow="Brand Philosophy"
            title="Rooted food, clear service, real warmth."
            description="Our approach is simple: keep the food full of flavour, keep the service thoughtful, and make the whole experience easy to understand."
            align="left"
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Warmth before noise', 'Care before shortcuts', 'Clarity before fuss', 'Flavour before trends'].map(
              (line) => (
                <div key={line} className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
                  <p className="font-serif text-2xl font-semibold leading-snug">{line}</p>
                </div>
              ),
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Why Desi Dabba</p>
            <h2 className="display-lg mt-3 text-brown">Made for people who want food to feel personal and well considered.</h2>
            <p className="body-lg mt-5 text-brown/72">
              Desi Dabba sits between home-style comfort and premium event food: familiar enough to feel welcoming,
              polished enough to trust for important occasions.
            </p>
          </div>
          <motion.div
            className="grid gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {whyDesiDabba.map((point) => (
              <motion.div key={point} variants={fadeUp}>
                <Card>
                  <p className="font-serif text-2xl font-semibold leading-snug text-maroon">{point}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Timeline"
            title="How the brand took shape."
            description="Desi Dabba grew through practical testing, careful cooking and a better understanding of what people want from everyday meals and hosted events."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              >
                <Card className="h-full">
                  <p className="font-serif text-5xl font-semibold text-gold">{item.year}</p>
                  <h3 className="heading-md mt-5 text-brown">{item.title}</h3>
                  <p className="body-sm mt-3 text-brown/70">{item.copy}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Values"
            title="The standards behind the table."
            description="These are the standards we come back to when shaping weekly meals, platters, catering and private dining."
          />
          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {aboutValues.map((value) => {
              const Icon = value.icon

              return (
                <motion.div key={value.title} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                  <Card className="h-full">
                    <span className="icon-tile">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="heading-md mt-5 text-brown">{value.title}</h3>
                    <p className="body-sm mt-3 text-brown/70">{value.copy}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
