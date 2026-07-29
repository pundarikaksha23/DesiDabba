import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BrandLink } from '../components/BrandLink'
import { navigationLinks } from '../config/navigation'
import { site } from '../config/site'
import { premiumEase } from '../utils/motion'

const drawerVariants = {
  closed: { opacity: 0, x: '100%' },
  open: { opacity: 1, x: 0 },
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

type MotionPreference = {
  reduceMotion: boolean | null
}

function HeaderBrand({ reduceMotion }: MotionPreference) {
  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: premiumEase }}
    >
      <BrandLink />
    </motion.div>
  )
}

function DesktopNavigation({ reduceMotion }: MotionPreference) {
  return (
    <div className="hidden items-center gap-7 text-[16px] font-semibold tracking-normal text-[#3B2A21]/82 min-[720px]:flex">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          end={link.href === '/'}
          aria-label={link.label}
          className="relative transition hover:text-[#5C1A2B]"
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? 'text-[#5C1A2B]' : ''}>{link.label === 'About' ? 'Our Story' : link.label}</span>
              {isActive && (
                <motion.span
                  layoutId="desktop-active-nav"
                  className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#5C1A2B]"
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  )
}

function HeaderLanguageButton({ reduceMotion }: MotionPreference) {
  return (
    <motion.button
      type="button"
      className="inline-flex size-12 items-center justify-center rounded-full border border-[#3B2A21]/15 bg-transparent text-[13px] font-semibold text-[#3B2A21] transition hover:border-[#5C1A2B] hover:text-[#5C1A2B]"
      aria-label="Current language: Estonian"
      whileHover={reduceMotion ? undefined : { y: -1, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: premiumEase }}
    >
      ET
    </motion.button>
  )
}

function HeaderWhatsappButton({ reduceMotion, className = '' }: MotionPreference & { className?: string }) {
  return (
    <motion.a
      href={site.whatsapp}
      className={`inline-flex min-h-10 items-center justify-center rounded-full bg-[#5C6B47] px-[18px] text-[13.5px] font-semibold text-[#F6EFE2] no-underline transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(59,42,33,0.16)] ${className}`}
      aria-label="Chat with Desi Dabba on WhatsApp"
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: premiumEase }}
    >
      WhatsApp
    </motion.a>
  )
}

type MobileMenuButtonProps = MotionPreference & {
  open: boolean
  onClick: () => void
}

function MobileMenuButton({ open, reduceMotion, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      type="button"
      className="grid size-[54px] place-items-center rounded-full border border-[#3B2A21]/15 text-[#3B2A21] transition hover:border-[#5C1A2B] hover:text-[#5C1A2B] min-[720px]:hidden"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-controls="mobile-navigation"
      aria-expanded={open}
      onClick={onClick}
      whileHover={reduceMotion ? undefined : { scale: 1.04 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: premiumEase }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? 'close' : 'menu'}
          initial={reduceMotion ? false : { opacity: 0, rotate: -12, scale: 0.88 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, rotate: 12, scale: 0.88 }}
          transition={{ duration: reduceMotion ? 0 : 0.16, ease: premiumEase }}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

type MobileDrawerProps = MotionPreference & {
  open: boolean
  onClose: () => void
}

function MobileDrawer({ open, reduceMotion, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="fixed inset-x-0 bottom-0 top-[84px] bg-[#3B2A21]/20 min-[720px]:hidden"
            aria-label="Close menu overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={onClose}
          />
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-[84px] z-50 h-[calc(100svh-84px)] w-full max-w-sm border-l border-[#3B2A21]/10 bg-[#F6EFE2] px-5 py-6 shadow-[0_24px_70px_rgba(59,42,33,0.18)] min-[720px]:hidden"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: reduceMotion ? 0 : 0.34, ease: premiumEase }}
          >
            <div className="flex h-full flex-col">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : index * 0.035 }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      aria-label={link.label}
                      className={({ isActive }) =>
                        `flex min-h-12 items-center justify-between rounded-md px-4 text-sm font-bold uppercase tracking-[0.14em] transition ${
                          isActive ? 'bg-[#5C1A2B] text-[#F6EFE2]' : 'text-[#3B2A21]/78 hover:bg-[#EFE6D3] hover:text-[#5C1A2B]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto border-t border-cream-50/10 pt-5">
                <HeaderWhatsappButton reduceMotion={reduceMotion} className="w-full" />
                <p className="body-sm mt-4 text-[#3B2A21]/58">
                  Weekly dabbas, event catering, and private chef bookings.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <motion.header
      className="sticky inset-x-0 top-0 z-50 border-b border-[#3B2A21]/10 bg-[#F6EFE2] text-[#3B2A21] shadow-none transition-colors duration-500"
      initial={false}
      animate={{ y: 0 }}
    >
      <nav className="mx-auto flex h-[84px] max-w-[1220px] items-center justify-between gap-5 px-7" aria-label="Primary navigation">
        <HeaderBrand reduceMotion={reduceMotion} />
        <DesktopNavigation reduceMotion={reduceMotion} />
        <div className="hidden items-center gap-3 min-[720px]:flex">
          <HeaderLanguageButton reduceMotion={reduceMotion} />
        </div>
        <MobileMenuButton open={open} reduceMotion={reduceMotion} onClick={() => setOpen((value) => !value)} />
      </nav>

      <MobileDrawer open={open} reduceMotion={reduceMotion} onClose={() => setOpen(false)} />
    </motion.header>
  )
}
