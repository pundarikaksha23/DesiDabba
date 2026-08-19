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
        title="Food that travels well without losing its soul."
        description="Desi Dabba began with a private kind of longing: for Indian food that could move through modern life and still feel close to the hands, memories, and rituals that made it meaningful."
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
            <h2 className="display-lg mt-5 text-brown">A dabba is never just a container.</h2>
          </div>
          <motion.div
            className="body-lg space-y-6 text-brown/72"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp}>
              It is timing, care, appetite, memory, and someone quietly asking: will this meal still make you feel
              looked after when you open it later?
            </motion.p>
            <motion.p variants={fadeUp}>
              That question became the heart of Desi Dabba. We were not trying to make Indian food more modern by
              removing its warmth. We were trying to make the service around it more graceful, more dependable, and more
              in tune with the way people actually eat now.
            </motion.p>
            <motion.p variants={fadeUp}>
              So we built around dishes that hold their character: slow gravies, fragrant rice, soft breads, sharp
              pickles, cooling raita, and sweets that feel like a final note rather than an obligation.
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
              <h2 className="heading-md mt-3 text-cream-50">To make everyday Indian food feel intentionally cared for.</h2>
              <p className="body-sm mt-4 text-cream-50/72">
                We cook for people who want nourishment with memory in it: meals that are balanced, beautifully packed,
                and easy to bring into a workday, family rhythm, or gathering without losing emotional texture.
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
                To become the most trusted modern Indian table for ordinary weeks and important days.
              </h2>
              <p className="body-sm mt-4 text-cream-50/72">
                Not by becoming bigger for the sake of it, but by becoming more precise: better menus, warmer service,
                calmer planning, and food that people remember for how personally it landed.
              </p>
            </Card>
          </motion.div>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionHeader
            eyebrow="Brand Philosophy"
            title="Rooted food. Restrained service. Real warmth."
            description="Our philosophy is to let Indian cooking keep its depth while editing the surrounding experience with care. Nothing should feel overexplained, overstyled, or stripped of feeling."
            align="left"
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Soul before spectacle', 'Detail before decoration', 'Hospitality before performance', 'Memory before novelty'].map(
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
            <h2 className="display-lg mt-3 text-brown">For people who can taste when food was thought through.</h2>
            <p className="body-lg mt-5 text-brown/72">
              Desi Dabba exists in the space between home cooking and formal catering: personal enough to feel familiar,
              polished enough to trust for the moments that matter.
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
            title="The path was less launch story, more kitchen truth."
            description="Desi Dabba took shape through repetition: cook, pack, carry, open, taste, adjust, and listen."
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
            description="These are the quiet choices we come back to when deciding what belongs in a box, on a platter, or at a private dinner."
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
