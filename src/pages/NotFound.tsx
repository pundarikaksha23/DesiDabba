import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { routes } from '../config/routes'

export default function NotFound() {
  return (
    <Section className="page-offset grid min-h-[70svh] place-items-center text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="display-lg mt-3 text-brown">This dabba is empty.</h1>
        <p className="body-lg mx-auto mt-4 max-w-md text-brown/70">The page you opened is not on today's route.</p>
        <Button to={routes.home} className="mt-8">
          Back home
        </Button>
      </div>
    </Section>
  )
}
