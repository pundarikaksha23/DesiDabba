import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from '../data/gallery'
import { fadeUp, viewportOnce } from '../utils/motion'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

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
        <Container>
          <SectionHeader
            eyebrow="Gallery"
            title="Food, tables, and kitchen moments with quiet detail."
            description="Filter through dabbas, buffets, events, platters, and the behind-the-scenes rhythm that shapes the Desi Dabba experience."
            titleAs="h1"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  className={`min-h-11 rounded-md border px-4 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 ${
                    isActive
                      ? 'border-gold bg-gold text-cream-50 shadow-gold'
                      : 'border-brown/12 bg-cream-50 text-brown hover:-translate-y-0.5 hover:border-gold hover:text-gold-600'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="tight">
        <Container>
          <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.figure
                  layout
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="card group mb-5 break-inside-avoid overflow-hidden p-0"
                >
                  <button
                    type="button"
                    className="block w-full text-left"
                    onClick={() => setActiveItem(item)}
                    aria-label={`Open ${item.title}`}
                  >
                    <div className={`relative overflow-hidden ${item.height}`}>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-brown/56 via-brown/6 to-transparent opacity-84 transition group-hover:opacity-70" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-cream-50">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                          {item.category}
                        </p>
                        <figcaption className="mt-2 font-serif text-2xl font-semibold leading-snug">
                          {item.title}
                        </figcaption>
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
            className="fixed inset-0 z-[70] grid place-items-center bg-brown/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-cream-50 shadow-card"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
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
              <div className="p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{activeItem.category}</p>
                <h2 className="heading-md mt-2 text-brown">{activeItem.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
