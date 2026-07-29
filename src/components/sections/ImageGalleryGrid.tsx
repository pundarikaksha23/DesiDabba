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
  imageClassName = 'h-64 w-full object-cover transition duration-700 hover:scale-105',
}: ImageGalleryGridProps) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.figure
              key={item.title}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
            >
              <img
                src={item.imageSrc ?? galleryPageImages[index % galleryPageImages.length]}
                alt={item.title}
                width="1200"
                height="1800"
                className={imageClassName}
                style={{ objectPosition: item.position }}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="body-sm p-4 font-bold text-maroon">{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
