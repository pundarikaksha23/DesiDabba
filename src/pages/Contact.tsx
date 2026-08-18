import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { InputField, SelectField, TextareaField } from '../components/FormField'
import { Section } from '../components/Section'
import { WhatsappIcon } from '../components/WhatsappIcon'
import { FaqSection } from '../components/sections/FaqSection'
import { SplitHero } from '../components/sections/SplitHero'
import { contactFaq, openingHours } from '../data/contact'
import { useContactForm } from '../hooks/useContactForm'
import { site } from '../config/site'

export default function Contact() {
  const { values, errors, isLoading, isSuccess, isError, submitMessage, updateValue, handleSubmit } = useContactForm()

  return (
    <>
      <SplitHero
        eyebrow="Contact"
        title="Tell us what you need, and we will help shape the right food experience."
        description="Weekly meals, catering, private chef experiences, grazing platters or a custom event plan — start with the details you already have and we will help with the rest."
        imageAlt="Guests gathered around a Desi Dabba event table"
        imagePosition="54% center"
        imageSrc={pageHeroImages.contact}
      />

      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Badge>Start Here</Badge>
            <h2 className="display-lg mt-5 text-brown">A simple message is enough to get started.</h2>
          </div>
          <div className="body-lg space-y-6 text-brown/72">
            <p>
              Some people already know the exact service they want. Others only know the date, guest count or delivery
              area. Both are a good place to begin.
            </p>
            <p>
              The first conversation is about understanding the occasion, practical requirements and any food
              preferences that matter.
            </p>
            <p>
              Share what you know now and we will help with the next steps, whether that means weekly delivery, a
              catered gathering, a private chef dinner or a custom menu plan.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-5 md:grid-cols-2">
          <Card className="h-full bg-maroon text-cream-50">
            <Mail className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Email</p>
            <h2 className="heading-md mt-3 text-cream-50">For menus, dates, and detailed enquiries.</h2>
            <p className="body-sm mt-4 text-cream-50/72">
              Best when you want to share event notes, dietary details, venue context, or a more considered brief.
            </p>
            <a className="body-sm mt-6 block text-cream-50 hover:text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </Card>

          <Card className="h-full bg-green text-cream-50">
            <Phone className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Phone & WhatsApp</p>
            <h2 className="heading-md mt-3 text-cream-50">For quick confirmations and faster back-and-forth.</h2>
            <p className="body-sm mt-4 text-cream-50/72">
              Best for weekly meal questions, availability checks, delivery clarifications, or urgent event timing.
            </p>
            <a className="body-sm mt-6 block text-cream-50 hover:text-gold" href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </Card>
        </Container>
      </Section>

      <Section tone="green">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Where We Work</p>
            <h2 className="display-lg mt-3 text-cream-50">Tallinn-based, with planning shaped around your event or delivery area.</h2>
            <p className="body-lg mt-5 text-cream-50/72">
              Visits and tastings are arranged by appointment so the kitchen can stay focused on prep, packing, and
              service. We primarily serve Tallinn and selected events across Estonia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={site.maps}>Open map</Button>
              <Button to={site.whatsapp} variant="ghost">
                <WhatsappIcon className="size-4" />
                Ask about your area
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
              <MapPin className="size-5 text-gold" aria-hidden />
              <p className="mt-4 font-serif text-2xl font-semibold leading-snug">{site.address}</p>
            </div>
            <div className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50">
              <Clock className="size-5 text-gold" aria-hidden />
              <p className="mt-4 font-serif text-2xl font-semibold leading-snug">{site.serviceArea}</p>
            </div>
            <div className="rounded-lg border border-cream-50/12 bg-cream-50/8 p-5 text-cream-50 sm:col-span-2">
              <Phone className="size-5 text-gold" aria-hidden />
              <p className="mt-4 font-serif text-2xl font-semibold leading-snug">We confirm availability, address fit, and event flow before booking.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Send className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-5">Opening Hours</p>
            <h2 className="display-lg mt-3 text-brown">Reply hours and planning time.</h2>
            <p className="body-lg mt-5 text-brown/72">
              We reply as quickly as we can while keeping enough time for cooking, packing and event preparation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {openingHours.map(([day, time]) => (
              <Card key={day}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{day}</p>
                <p className="mt-4 font-serif text-3xl font-semibold text-green">{time}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Contact Form</p>
            <h2 className="display-lg mt-3 text-brown">Share the useful details.</h2>
            <p className="body-lg mt-5 text-brown/72">
              A few clear notes help us reply with the right menu direction, timing questions, and next steps.
            </p>
          </div>

          <form className="card-padded" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Name"
                name="name"
                value={values.name}
                error={errors.name}
                onChange={(event) => updateValue('name', event.target.value)}
                placeholder="Your name"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(event) => updateValue('email', event.target.value)}
                placeholder="you@desidabba.ee"
              />
              <InputField
                label="Phone"
                name="phone"
                value={values.phone}
                error={errors.phone}
                onChange={(event) => updateValue('phone', event.target.value)}
                placeholder="Optional"
              />
              <SelectField
                label="I'm interested in"
                name="interest"
                value={values.interest}
                error={errors.interest}
                options={['Weekly Meals', 'Corporate Catering', 'Wedding Catering', 'Private Chef', 'Grazing Platters']}
                onChange={(event) => updateValue('interest', event.target.value)}
              />
            </div>
            <div className="mt-5">
              <TextareaField
                label="Message"
                name="message"
                value={values.message}
                error={errors.message}
                onChange={(event) => updateValue('message', event.target.value)}
                placeholder="Tell us about dates, guest count, dietary needs, delivery area, or the feeling you want the meal to carry."
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
              {isLoading ? 'Sending...' : 'Send message'}
              <Send className="size-4" aria-hidden />
            </button>
          </form>
        </Container>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title="A few useful answers before you write."
        description="These are the practical things people often want to know before starting the conversation."
        items={contactFaq}
        icon={<Mail className="size-8 text-gold" aria-hidden />}
      />

      <Section tone="maroon">
        <Container className="text-center">
          <p className="eyebrow">Large CTA</p>
          <h2 className="display-lg mx-auto mt-3 max-w-3xl text-cream-50">
            One message is enough to start the plan.
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl text-cream-50/72">
            Send what you know now. We will ask the practical questions and help shape the rest.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={site.whatsapp}>
              <WhatsappIcon className="size-4" />
              WhatsApp Desi Dabba
            </Button>
            <Button to={`mailto:${site.email}`} variant="ghost">
              Email {site.email}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
