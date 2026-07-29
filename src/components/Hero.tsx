import { motion } from 'framer-motion'
import { Leaf, PackageCheck, Star } from 'lucide-react'
import { pageHeroImages } from '../assets/images/selected-images'
import { Button } from './Button'
import { Container } from './Container'

const stats = [
  { label: 'Seasonal menus', value: '18+' },
  { label: 'Reusable dabba flow', value: 'Low-waste' },
  { label: 'Catering guests', value: '160' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-maroon-900 text-cream-50">
      <div className="absolute inset-0">
        <img
          src={pageHeroImages.home}
          alt="Premium Indian passed appetizer platter arranged for a Desi Dabba event"
          width="1200"
          height="1800"
          className="h-full w-full object-cover object-[58%_54%] opacity-62"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(53,17,15,0.96),rgba(72,24,21,0.74)_46%,rgba(53,17,15,0.16))]" />
      </div>

      <Container className="relative flex min-h-[86svh] flex-col justify-center pb-16 pt-28 sm:min-h-[92svh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="inline-flex max-w-full items-center gap-2 rounded-md border border-cream-50/20 bg-cream-50/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream-50/90 backdrop-blur sm:rounded-full sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            <Star className="size-4 text-gold" aria-hidden />
            Premium Indian tiffin, cooked daily
          </p>
          <h1 className="display-xl mt-7 text-cream-50">
            Simple. Sustainable. Soulful.
          </h1>
          <p className="body-lg mt-6 max-w-xl text-cream-50/82">
            Desi Dabba brings premium Indian comfort food to modern tables with seasonal weekly meals,
            elegant catering, and private chef experiences rooted in home-style cooking.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="#services">Explore Services</Button>
            <Button to="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 text-sm text-cream-50/80 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2">
              <Leaf className="size-4 text-gold" aria-hidden />
              Seasonal, small-batch menus
            </span>
            <span className="inline-flex items-center gap-2">
              <PackageCheck className="size-4 text-gold" aria-hidden />
              Packed beautifully, delivered fresh
            </span>
          </div>
        </motion.div>
      </Container>

      <div className="relative mx-4 -mt-10 grid max-w-5xl grid-cols-1 border border-brown/10 bg-cream-50/95 text-center text-brown shadow-card sm:mx-auto sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="px-3 py-5 even:border-x even:border-brown/10">
            <p className="font-serif text-3xl font-semibold text-green">{stat.value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-brown/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
