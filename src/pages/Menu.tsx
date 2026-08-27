import { motion } from 'framer-motion'
import { Check, Mail, PackageCheck, Truck } from 'lucide-react'
import { pageHeroImages, serviceImages } from '../assets/images/selected-images'
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
      />

      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <motion.figure
              className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[22px] border border-brown/10 bg-cream-50 shadow-soft lg:mx-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
            >
              <img
                src={serviceImages.healthyMealPlans}
                alt="Warm weekly meal service with vibrant curry trays"
                width="1200"
                height="1800"
                className="aspect-[5/4] w-full object-cover"
                style={{ objectPosition: '50% 44%' }}
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw"
                loading="lazy"
                decoding="async"
              />
            </motion.figure>
            <div className="max-w-2xl">
              <p className="eyebrow">Weekly Meals</p>
              <h2 className="display-lg mt-3 text-brown">Fresh, comforting and balanced meals for busy weekdays.</h2>
              <p className="body-lg mt-5 text-brown/70">
                Life in Tallinn is busy. Cooking fresh meals every day is not always possible. Desi Dabba prepares a
                rotating weekly menu with Indian and Asian flavours, seasonal ingredients and home-style care,
                delivered Monday to Friday.
              </p>
            </div>
          </div>
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-3"
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
          <p className="eyebrow text-center">Weekly Rotating Menu</p>
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
                <li key={detail} className="flex items-start gap-3 border-b border-brown/10 pb-3 text-sm font-semibold leading-6 text-green last:border-0 last:pb-0">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green-700/12">
                    <Check className="size-3.5 text-green-700" strokeWidth={2.4} aria-hidden />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-brown/70">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/18">
                <WhatsappIcon className="size-3 text-maroon" />
              </span>
              <p className="m-0">
                For weekly menu details, special preferences or questions, customers can contact us by WhatsApp or
                email.
              </p>
            </div>
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
            <Button to={site.whatsapp}>
              <WhatsappIcon className="size-4" />
              WhatsApp
            </Button>
            <Button to={`mailto:${site.email}`} variant="ghost">
              <Mail className="size-4" />
              Email us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
