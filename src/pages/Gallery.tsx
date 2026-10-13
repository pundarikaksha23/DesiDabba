import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { galleryItems, type GalleryItem } from '../data/gallery'

type GalleryCardProps = {
  item: GalleryItem
  index: number
  onSelect: (item: GalleryItem) => void
}

function GalleryCard({ item, index, onSelect }: GalleryCardProps) {
  const reduceMotion = useReducedMotion()
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 })

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === 'touch') {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    rotateX.set((y - 0.5) * 12)
    rotateY.set((0.5 - x) * 12)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: reduceMotion ? 0 : index * 0.02,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="card group overflow-hidden p-0"
    >
      <button
        type="button"
        className="block h-full w-full"
        onClick={() => onSelect(item)}
        aria-label={`Open ${item.title}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={item.imageSrc}
            alt={item.title}
            width="1200"
            height="1800"
            layoutId={reduceMotion ? undefined : `gallery-image-${item.id}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            style={{ objectPosition: item.position, width: '100%', height: '100%' }}
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
            decoding="async"
          />
        </div>
      </button>
    </motion.figure>
  )
}

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)
  const reduceMotion = useReducedMotion()

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
      <section className="section-shell-tight page-offset">
        <Container>
          <SectionHeader
            eyebrow="Gallery"
            title="Food, tables, and kitchen moments with quiet detail."
            description="A visual collection of dabbas, buffets, events, platters, and the behind-the-scenes rhythm that shapes the Desi Dabba experience."
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="section-shell-tight surface-cream">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onSelect={setActiveItem}
              />
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[rgba(28,10,0,0.90)] p-4"
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
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-brown/18 to-transparent" />
              <button
                type="button"
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-md bg-cream-50/92 text-brown shadow-soft"
                aria-label="Close gallery image"
                onClick={() => setActiveItem(null)}
              >
                <X className="size-5" aria-hidden />
              </button>
              <motion.img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                width="1200"
                height="1800"
                layoutId={reduceMotion ? undefined : `gallery-image-${activeItem.id}`}
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
