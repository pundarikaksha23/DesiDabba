import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { galleryItems, type GalleryItem } from '../data/gallery'

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
            {galleryItems.map((item) => (
              <figure key={item.id} className="card overflow-hidden p-0">
                  <button
                    type="button"
                    className="block h-full w-full"
                    onClick={() => setActiveItem(item)}
                    aria-label={`Open ${item.title}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        width="1200"
                        height="1800"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: item.position, width: '100%', height: '100%' }}
                        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </button>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-[rgba(28,10,0,0.90)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[20px] bg-cream-50 shadow-[0_30px_70px_rgba(28,10,0,0.30)]"
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
          </div>
        </div>
      ) : null}
    </>
  )
}
