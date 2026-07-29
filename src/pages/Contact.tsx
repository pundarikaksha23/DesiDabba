import { Mail, MapPin, MessageCircle, Phone, Send, Clock, HelpCircle } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { InputField, SelectField, TextareaField } from '../components/FormField'
import { Section } from '../components/Section'
import { FaqSection } from '../components/sections/FaqSection'
import { contactFaq, openingHours } from '../data/contact'
import { useContactForm } from '../hooks/useContactForm'
import { site } from '../config/site'

export default function Contact() {
  const { values, errors, isLoading, isSuccess, isError, submitMessage, updateValue, handleSubmit } = useContactForm()

  return (
    <>
      <Section className="page-offset" spacing="tight">
        <Container className="grid items-end gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-xl mt-3 text-brown">Tell us what kind of meal you are imagining.</h1>
            <p className="body-lg mt-5 max-w-2xl text-brown/72">
              Weekly dabbas, corporate lunches, private chef evenings, wedding tables, or something still taking shape.
              Start with the details you have, and we will help shape the rest.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={site.whatsapp}>
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </Button>
              <Button to={`mailto:${site.email}`} variant="secondary">
                Email Us
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card padded={false} className="overflow-hidden sm:col-span-2">
              <img
                src={pageHeroImages.contact}
                alt="Guests gathered around a Desi Dabba event table"
                width="1200"
                height="1800"
                className="h-56 w-full object-cover"
                style={{ objectPosition: '54% center' }}
                sizes="(min-width: 1024px) 48vw, 100vw"
                loading="eager"
                decoding="async"
              />
            </Card>
            <Card>
              <Mail className="size-7 text-gold" aria-hidden />
              <h2 className="heading-md mt-4 text-brown">Email</h2>
              <a className="body-sm mt-2 block text-brown/70 hover:text-gold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </Card>
            <Card>
              <Phone className="size-7 text-gold" aria-hidden />
              <h2 className="heading-md mt-4 text-brown">Phone</h2>
              <a className="body-sm mt-2 block text-brown/70 hover:text-gold" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <Card className="bg-green text-cream-50">
            <MapPin className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-6">Business Address</p>
            <h2 className="heading-md mt-3 text-cream-50">{site.address}</h2>
            <p className="body-sm mt-3 text-cream-50/72">
              Visits and tastings are arranged by appointment so the kitchen can stay focused on prep, packing, and service.
            </p>
          </Card>

          <div className="grid min-h-80 place-items-center rounded-lg border border-brown/10 bg-cream-50 p-6 text-center shadow-soft">
            <div>
              <MapPin className="mx-auto size-10 text-gold" aria-hidden />
              <h2 className="heading-md mt-4 text-brown">Google Map Placeholder</h2>
              <p className="body-sm mx-auto mt-3 max-w-md text-brown/70">
                Embedded map will appear here once the live Google Maps embed URL is connected.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Clock className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-5">Opening Hours</p>
            <h2 className="display-lg mt-3 text-brown">Kitchen rhythm, reply windows, and planning time.</h2>
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
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Send className="size-8 text-gold" aria-hidden />
            <p className="eyebrow mt-5">Contact Form</p>
            <h2 className="display-lg mt-3 text-brown">Share the useful details.</h2>
            <p className="body-lg mt-5 text-brown/72">
              A few clear notes help us reply with the right menu direction, timing questions, and next steps.
            </p>
          </div>

          <form className="card-padded bg-cream-50" onSubmit={handleSubmit} noValidate>
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
                options={['Weekly Meals', 'Corporate Catering', 'Wedding Catering', 'Private Chef', 'Premium Platters']}
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
        title="Helpful answers before you reach out."
        items={contactFaq}
        icon={<HelpCircle className="size-8 text-gold" aria-hidden />}
      />

      <Section tone="maroon">
        <Container className="text-center">
          <p className="eyebrow">Large CTA</p>
          <h2 className="display-lg mx-auto mt-3 max-w-3xl text-cream-50">
            One message can become the first meal, menu, or table plan.
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl text-cream-50/72">
            Send what you know now. We will ask the right questions and help shape the rest with care.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={site.whatsapp}>WhatsApp Desi Dabba</Button>
            <Button to={`mailto:${site.email}`} variant="ghost">
              Email {site.email}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
