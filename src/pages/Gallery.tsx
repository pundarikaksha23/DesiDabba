import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { galleryItems, type GalleryItem } from '../data/gallery'
import { fadeUp, viewportOnce } from '../utils/motion'

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    if (!activeItem) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveItem(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [activeItem])

  return (
    <>
      <Section className="page-offset" spacing="tight">
        <Container className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-8 top-0 h-36 w-36 rounded-full bg-gold/12 blur-3xl animate-soft-float" />
          <div
            className="pointer-events-none absolute -left-10 top-14 h-28 w-28 rounded-full bg-green/10 blur-3xl animate-soft-float"
            style={{ animationDelay: '1.6s' }}
          />
          <SectionHeader
            eyebrow="Gallery"
            title="Food, tables, and kitchen moments with quiet detail."
            description="A visual collection of dabbas, buffets, events, platters, and the behind-the-scenes rhythm that shapes the Desi Dabba experience."
            titleAs="h1"
          />
        </Container>
      </Section>

      <Section tone="cream" spacing="tight">
        <Container>
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item, index) => (
                <motion.figure
                  layout
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.42, ease: 'easeOut', delay: (index % 3) * 0.05 }}
                  className="card group overflow-hidden p-0 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(43,27,20,0.14)]"
                >
                  <button
                    type="button"
                    className="block w-full"
                    onClick={() => setActiveItem(item)}
                    aria-label={`Open ${item.title}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        width="1200"
                        height="1800"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        style={{ objectPosition: item.position }}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brown/38 via-brown/10 to-transparent opacity-74 transition duration-500 group-hover:opacity-44" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%)] opacity-72 transition duration-500 group-hover:opacity-95" />
                      <div className="absolute left-4 top-4 rounded-full border border-cream-50/30 bg-brown/22 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-cream-50/92 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                        View
                      </div>
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="absolute inset-x-[18%] top-6 h-px bg-gradient-to-r from-transparent via-cream-50/72 to-transparent" />
                      </div>
                    </div>
                  </button>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[radial-gradient(circle_at_top,rgba(206,154,58,0.18),rgba(28,10,0,0.90)_42%)] p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[20px] bg-cream-50 shadow-[0_30px_70px_rgba(28,10,0,0.30)]"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-brown/18 to-transparent" />
              <button
                type="button"
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-md bg-cream-50/92 text-brown shadow-soft transition hover:bg-gold hover:text-cream-50"
                aria-label="Close gallery image"
                onClick={() => setActiveItem(null)}
              >
                <X className="size-5" aria-hidden />
              </button>
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                width="1200"
                height="1800"
                className="max-h-[74svh] w-full object-cover"
                style={{ objectPosition: activeItem.position }}
                sizes="min(100vw, 64rem)"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
