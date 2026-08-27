import { motion } from 'framer-motion'
import { CalendarCheck, Send, Sparkles, UtensilsCrossed } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { InputField, SelectField, TextareaField } from '../components/FormField'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { FaqSection } from '../components/sections/FaqSection'
import { ImageGalleryGrid } from '../components/sections/ImageGalleryGrid'
import { SplitHero } from '../components/sections/SplitHero'
import { TimelineGrid } from '../components/sections/TimelineGrid'
import { useCateringForm } from '../hooks/useCateringForm'
import {
  bookingProcess,
  cateringFormats,
  cateringFaq,
  cateringGallery,
  cateringOccasions,
  menuStyles,
} from '../data/catering'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { site } from '../config/site'

const occasionOptions = ['Small get-together', 'Birthday', 'Wedding', 'Office event', 'Corporate event', 'Private celebration', 'Other']

export default function Catering() {
  const { values, errors, isLoading, isSuccess, isError, submitMessage, updateValue, handleSubmit } = useCateringForm()

  return (
    <>
      <SplitHero
        eyebrow="Catering"
        title="Thoughtful catering for gatherings, celebrations and events in Tallinn."
        description="Desi Dabba creates warm, flavourful and beautifully presented food experiences for small gatherings, birthdays, weddings, office events and private celebrations. Our menus are rooted in Indian hospitality, inspired by Asian and global flavours, and shaped around your occasion."
        imageAlt="Clean buffet-style catering setup with warm, elegant presentation"
        imagePosition="48% 52%"
        imageSrc={pageHeroImages.catering}
        imageHeightClass="h-80 w-full object-cover sm:h-[33rem]"
        columnsClass="lg:grid-cols-[0.94fr_1.06fr]"
        actions={
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#catering-form">Request a Quote</Button>
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
            eyebrow="Occasions"
            title="Catering for every kind of gathering."
            description="Every event has a different mood, guest list and flow. We create menus that feel generous, balanced and easy to enjoy."
          />
          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {cateringOccasions.map((occasion) => (
              <motion.div key={occasion.name} variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <Card className="h-full">
                  <CalendarCheck className="size-8 text-gold" aria-hidden />
                  <h2 className="heading-md mt-5 text-brown">{occasion.name}</h2>
                  <p className="body-sm mt-3 text-brown/70">{occasion.detail}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Formats"
            title="Catering Formats"
            description="Choose the format that suits your event."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cateringFormats.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              >
                <Card className={`h-full ${index === 0 ? 'bg-maroon text-cream-50' : ''}`}>
                  <h2 className={`heading-md ${index === 0 ? 'text-cream-50' : 'text-brown'}`}>{item.name}</h2>
                  <p className={`body-sm mt-4 ${index === 0 ? 'text-cream-50/78' : 'text-brown/70'}`}>{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="Menu Style"
            title="Menus shaped around your guests and occasion."
            description="Our catering menus are custom-made for each event. They can include Indian favourites, Asian flavours, vegetarian and vegan dishes, non-vegetarian options, fusion food, sweets, drinks and seasonal additions."
            align="left"
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {menuStyles.map((item) => (
              <div key={item} className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
                <UtensilsCrossed className="size-5 text-gold" aria-hidden />
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ImageGalleryGrid
        eyebrow="Gallery"
        title="A glimpse of our catering style."
        description="Buffets, dabbas, shared platters, and finishing touches, presented with quiet confidence."
        items={cateringGallery}
      />

      <TimelineGrid
        eyebrow="Booking Process"
        title="Simple catering process."
        description="Planning should feel as considered as the food. We keep the steps clear, paced, and practical."
        items={bookingProcess}
      />

      <FaqSection
        eyebrow="FAQ"
        title="Useful answers before we plan the table."
        description="Catering has many moving parts. The work is to make them feel simple before guests arrive."
        items={cateringFaq}
      />

      <Section id="catering-form" tone="maroon">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Send className="size-8 text-gold" aria-hidden />
            <h2 className="display-lg mt-4 text-cream-50">Planning an event? Let’s create the menu together.</h2>
            <p className="body-lg mt-5 text-cream-50/72">
              Share your date, guest count, occasion, location and dietary needs. We will suggest a suitable catering
              style and prepare a custom quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.whatsapp} className="btn btn-ghost">
                <WhatsappIcon className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form
            id="catering-contact-form"
            className="rounded-lg border border-cream-50/12 bg-cream-50 p-6 shadow-card md:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Name"
                name="name"
                value={values.name}
                error={errors.name}
                onChange={(event) => updateValue('name', event.target.value)}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                error={errors.email}
                onChange={(event) => updateValue('email', event.target.value)}
              />
              <InputField
                label="Phone / WhatsApp"
                name="phone"
                value={values.phone}
                error={errors.phone}
                onChange={(event) => updateValue('phone', event.target.value)}
              />
              <InputField
                label="Event date"
                type="date"
                name="event-date"
                value={values.eventDate}
                error={errors.eventDate}
                onChange={(event) => updateValue('eventDate', event.target.value)}
              />
              <InputField
                label="Guest count"
                type="number"
                name="guest-count"
                min="1"
                value={values.guestCount}
                error={errors.guestCount}
                onChange={(event) => updateValue('guestCount', event.target.value)}
              />
              <InputField
                label="Location"
                name="location"
                value={values.location}
                error={errors.location}
                onChange={(event) => updateValue('location', event.target.value)}
              />
            </div>
            <div className="mt-5">
              <SelectField
                label="Occasion"
                name="occasion"
                options={occasionOptions}
                value={values.occasion}
                error={errors.occasion}
                onChange={(event) => updateValue('occasion', event.target.value)}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Dietary needs"
                name="dietary-needs"
                value={values.dietaryNeeds}
                error={errors.dietaryNeeds}
                onChange={(event) => updateValue('dietaryNeeds', event.target.value)}
              />
            </div>
            <div className="mt-5">
              <TextareaField
                label="Notes / preferred food style"
                rows={5}
                name="notes"
                value={values.notes}
                error={errors.notes}
                onChange={(event) => updateValue('notes', event.target.value)}
                placeholder="Tell us about menu direction, service style, preferred flavours, guest needs, or anything else we should know."
              />
            </div>
            {isSuccess && (
              <p className="mt-5 rounded-md bg-mint px-4 py-3 text-sm font-semibold text-green">
                {submitMessage}
              </p>
            )}
            {isError && submitMessage && (
              <p className="mt-5 rounded-md bg-cream px-4 py-3 text-sm font-semibold text-maroon">
                {submitMessage}
              </p>
            )}
            <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto" disabled={isLoading} aria-busy={isLoading}>
              {isLoading ? 'Sending...' : 'Submit'}
              <Sparkles className="size-4" aria-hidden />
            </button>
          </form>
        </Container>
      </Section>
    </>
  )
}
