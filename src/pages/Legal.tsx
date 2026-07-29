import { Link, useLocation } from 'react-router-dom'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { routeConfig, routes, type RouteId } from '../config/routes'

const content = {
  '/privacy-policy': {
    sections: [
      'We collect only the details needed to respond thoughtfully: name, contact information, service interest, event notes, dietary preferences, and delivery context.',
      'We use enquiry details to plan menus, confirm availability, coordinate delivery or service, and reply to your message.',
      'We do not sell personal information. If a third-party tool is used for email, messaging, delivery, or payments, it is used only to support the service you requested.',
      'To update or remove enquiry details, contact us directly and we will handle the request with care.',
    ],
  },
  '/terms': {
    sections: [
      'Menus, pricing, delivery windows, and availability are confirmed before an order or event booking is finalized.',
      'Catering and private chef bookings may require deposits, guest-count deadlines, and cancellation terms based on the scale of the event.',
      'Dietary needs should be shared before confirmation. We will explain what can be accommodated safely before accepting a booking.',
      'Images and sample menus are representative. Final dishes may vary based on seasonality, sourcing, and the agreed menu.',
    ],
  },
}

export default function Legal() {
  const { pathname } = useLocation()
  const page = content[pathname as keyof typeof content] ?? content['/privacy-policy']
  const routeId: RouteId = pathname === routeConfig.terms.path ? 'terms' : 'privacyPolicy'

  return (
    <Section className="page-offset">
      <Container className="max-w-4xl">
        <p className="eyebrow">Desi Dabba</p>
        <h1 className="display-xl mt-3 text-brown">{routeConfig[routeId].pageTitle}</h1>
        <p className="body-lg mt-5 text-brown/72">{routeConfig[routeId].metaDescription}</p>
        <div className="mt-10 space-y-4">
          {page.sections.map((section) => (
            <div key={section} className="card-padded">
              <p className="body-sm text-brown/72">{section}</p>
            </div>
          ))}
        </div>
        <Link to={routes.contact} className="btn btn-secondary mt-8">
          Contact Desi Dabba
        </Link>
      </Container>
    </Section>
  )
}
