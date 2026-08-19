import { motion } from 'framer-motion'
import { CalendarCheck, PackageCheck, Truck } from 'lucide-react'
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
import { weeklyMeals, weeklyMealsGallery } from '../data/menu'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { routes } from '../config/routes'
import { site } from '../config/site'

export default function Menu() {
  return (
    <>
      <SplitHero
        eyebrow="Weekly Meals"
        title="Fresh weekly meals, delivered Monday to Friday in Tallinn."
        description="Desi Dabba weekly meals are made for busy weekdays when you want fresh, comforting and balanced food without cooking every day. Our weekly menu includes Indian and Asian flavours, along with seasonal and home-style dishes prepared with care."
        imageAlt="Plated Indian weekly meal with curry, rice, and fresh accompaniments"
        imagePosition="48% 54%"
        imageSrc={pageHeroImages.weeklyMeals}
        actions={
          <div className="max-w-[27rem] rounded-[20px] border border-brown/10 bg-cream-50/78 px-6 py-5 shadow-[0_20px_40px_-30px_rgba(59,42,33,0.42)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-maroon text-gold">
                <CalendarCheck className="size-5" aria-hidden />
              </span>
              <div>
                <p className="eyebrow">Weekly Menu: {weeklyMeals.weekOf}</p>
                <p className="mt-3 text-[15.5px] leading-[1.68] text-brown/74">{weeklyMeals.intro}</p>
              </div>
            </div>
          </div>
        }
      />

      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="Why Weekly Meals"
            title="Why Choose Weekly Meals?"
            description="Weekly meals are made to make weekdays easier, while still keeping food fresh, comforting and personal."
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
                <Card className="h-full">
                  <h3 className="heading-md text-maroon">{benefit.title}</h3>
                  <p className="body-sm mt-3 text-brown/70">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Weekly Rotating Menu"
            title={`Weekly Menu: ${weeklyMeals.weekOf}`}
            description=""
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {weeklyMeals.menuDays.map((item) => (
              <motion.div key={item.day} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <Card className="h-full">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{item.day}</p>
                  <ul className="mt-5 space-y-3">
                    {item.dishes.map((dish) => (
                      <li key={dish} className="border-b border-brown/10 pb-3 font-medium leading-6 text-brown/78 last:border-0 last:pb-0">
                        {dish}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {weeklyMeals.mealOptions.map((option) => (
              <motion.div key={option.title} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <Card className="h-full">
                  <h3 className="heading-md text-maroon">{option.title}</h3>
                  <p className="body-sm mt-3 text-brown/70">{option.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section tone="green">
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
            <p className="mt-6 text-sm leading-6 text-brown/70">
              For weekly menu details, special preferences or questions, customers can contact us by WhatsApp or email.
            </p>
          </Card>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="A glimpse of the kind of weekday comfort we mean."
        description="Freshly packed dabbas, warm mains, and balanced plates designed to fit real household rhythm."
        items={weeklyMealsGallery}
      />

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
            Ready to Start Your Weekly Meals?
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl text-cream-50/72">
            Tell us your meal preference, delivery area and any dietary notes. We will share the latest weekly menu and
            help you choose the right plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={routes.contact}>Start Weekly Meals</Button>
                        <Button to={site.whatsapp} variant="ghost">
              <WhatsappIcon className="size-4" />
              WhatsApp
            </Button>
          </div>
          <p className="mt-6 text-sm text-cream-50/72">
            WhatsApp: {site.phone} {` `}
            <span className="mx-2">|</span>
            Email: {site.email}
          </p>
        </Container>
      </Section>
    </>
  )
}
