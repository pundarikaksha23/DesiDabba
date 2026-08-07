import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { AmbientBackdrop } from '../components/AmbientBackdrop'
import { Footer } from './Footer'
import { Header } from './Header'
import { FloatingWhatsappButton } from '../components/FloatingWhatsappButton'
import { SEO } from '../components/SEO'
import { pageTransition, premiumEase } from '../utils/motion'

export function SiteLayout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const transition = { duration: reduceMotion ? 0 : 0.32, ease: premiumEase }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream isolate">
      <AmbientBackdrop />
      <SEO />
      <div className="relative z-[1]">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={reduceMotion ? false : pageTransition.initial}
            animate={pageTransition.animate}
            exit={reduceMotion ? undefined : pageTransition.exit}
            transition={transition}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
      <FloatingWhatsappButton />
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  )
}
