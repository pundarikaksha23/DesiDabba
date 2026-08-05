import { motion } from 'framer-motion'
import { galleryPageImages } from '../../assets/images/selected-images'
import { Container } from '../Container'
import { Section } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { viewportOnce } from '../../utils/motion'
import type { GalleryImage } from '../../types/content'

type ImageGalleryGridProps = {
  eyebrow: string
  title: string
  description: string
  items: GalleryImage[]
  imageClassName?: string
  frameClassName?: string
}

/**
 * Small repeated gallery preview used on service pages. The main Gallery page
 * has its own masonry/lightbox behavior and intentionally stays separate.
 */
export function ImageGalleryGrid({
  eyebrow,
  title,
  description,
  items,
  imageClassName = 'block h-full w-full object-cover transition duration-700 hover:scale-105',
  frameClassName = 'aspect-[4/5]',
}: ImageGalleryGridProps) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-lg shadow-soft"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
            >
              <div className={`relative overflow-hidden ${frameClassName}`}>
                <img
                  src={item.imageSrc ?? galleryPageImages[index % galleryPageImages.length]}
                  alt={item.title}
                  width="1200"
                  height="1800"
                  className={`absolute inset-0 ${imageClassName}`}
                  style={{ ...(item.position ? { objectPosition: item.position } : {}), width: '100%', height: '100%' }}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
