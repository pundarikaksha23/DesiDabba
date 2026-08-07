import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../config/site'
import { premiumEase } from '../utils/motion'
import { WhatsappIcon } from './WhatsappIcon'

export function FloatingWhatsappButton() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={site.whatsapp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1F8F4D] text-cream no-underline shadow-[0_10px_24px_rgba(31,143,77,0.32)] sm:bottom-[26px] sm:right-[26px]"
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: premiumEase }}
    >
      <WhatsappIcon className="size-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.16)]" />
    </motion.a>
  )
}
