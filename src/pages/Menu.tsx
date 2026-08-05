import { motion } from 'framer-motion'
import { CalendarCheck, PackageCheck, Truck } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { MealCard } from '../components/MealCard'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { FaqSection } from '../components/sections/FaqSection'
import { weeklyMeals } from '../data/menu'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { routes } from '../config/routes'
import { site } from '../config/site'

export default function Menu() {
  return (
    <>
      <Section className="page-offset" spacing="tight">
        <Container className="grid items-end gap-10 lg:grid-cols-[1fr_0.74fr]">
          <div>
            <p className="eyebrow">Weekly Meals</p>
            <h1 className="display-xl mt-3 text-brown">A rotating Indian lunch ritual for weeks that move fast.</h1>
            <p className="body-lg mt-5 max-w-2xl text-brown/72">
              Thoughtful dabbas built around comfort, balance, and the small pleasure of opening a meal that was planned
              with your day in mind.
            </p>
          </div>

          <Card padded={false} className="overflow-hidden bg-maroon text-cream-50">
            <img
              src={pageHeroImages.weeklyMeals}
              alt="Plated Indian weekly meal with curry, rice, and fresh accompaniments"
              width="1200"
              height="1800"
              className="h-64 w-full object-cover object-[48%_54%] opacity-88 sm:h-72"
              sizes="(min-width: 1024px) 38vw, 100vw"
              loading="eager"
              decoding="async"
            />
            <div className="p-7">
              <CalendarCheck className="size-8 text-gold" aria-hidden />
              <p className="eyebrow mt-6">{weeklyMeals.weekOf}</p>
              <p className="body-lg mt-4 text-cream-50/78">{weeklyMeals.intro}</p>
            </div>
          </Card>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Weekly Rotating Menu"
            title="This week's meals, ready to become part of your rhythm."
            description="Meal content is loaded from a JSON file so the menu can be updated later without editing page components."
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {weeklyMeals.meals.map((item) => (
              <motion.div key={item.name} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <MealCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="bg-green text-cream-50">
            <PackageCheck className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Subscription</p>
            <h2 className="heading-md mt-3 text-cream-50">{weeklyMeals.subscription.title}</h2>
            <p className="body-sm mt-4 text-cream-50/72">{weeklyMeals.subscription.description}</p>
            <ol className="mt-7 space-y-4">
              {weeklyMeals.subscription.steps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm font-semibold leading-6 text-cream-50/86">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-gold text-cream-50">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card>
            <Truck className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Delivery</p>
            <h2 className="heading-md mt-3 text-brown">{weeklyMeals.delivery.title}</h2>
            <p className="body-sm mt-4 text-brown/70">{weeklyMeals.delivery.description}</p>
            <ul className="mt-7 space-y-3">
              {weeklyMeals.delivery.details.map((detail) => (
                <li key={detail} className="border-b border-brown/10 pb-3 text-sm font-semibold leading-6 text-green last:border-0 last:pb-0">
                  {detail}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Benefits"
            title="The relief is practical. The feeling is personal."
            description="Weekly meals are meant to remove decision fatigue without making food feel automated."
          />
          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {weeklyMeals.benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-card">
                  <h3 className="heading-md text-maroon">{benefit.title}</h3>
                  <p className="body-sm mt-3 text-brown/70">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title="Questions people ask before the first dabba."
        description="The weekly plan is intentionally simple: choose your rhythm, share your preferences, and let the menu change around you."
        items={weeklyMeals.faq}
      />

      <Section tone="maroon">
        <Container className="text-center">
          <p className="eyebrow">Contact CTA</p>
          <h2 className="display-lg mx-auto mt-3 max-w-3xl text-cream-50">
            Ready to make the week feel a little more cared for?
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl text-cream-50/72">
            Tell us how many meals you need, your preferences, and where the dabbas should arrive. We will help shape
            the first week.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={routes.contact}>Start weekly meals</Button>
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
