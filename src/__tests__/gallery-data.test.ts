import { describe, expect, test } from 'vitest'
import { galleryItems } from '../data/gallery'

describe('gallery data', () => {
  test('curates distinct food-only images from the images folders', () => {
    expect(galleryItems).toHaveLength(37)
    expect(new Set(galleryItems.map((item) => item.id)).size).toBe(galleryItems.length)
    expect(new Set(galleryItems.map((item) => item.imageSrc)).size).toBe(galleryItems.length)
    expect(
      galleryItems.every(
        (item) =>
          item.imageSrc.startsWith('/images/') ||
          item.imageSrc.startsWith('/src/assets/images/'),
      ),
    ).toBe(true)
    expect(
      galleryItems
        .filter((item) => item.id.startsWith('Weekly meal '))
        .every((item) => item.imageSrc.startsWith('/src/assets/images/')),
    ).toBe(true)
  })

  test('excludes portrait and people-focused selections', () => {
    expect(galleryItems.some((item) => item.category === 'Food')).toBe(true)
    expect(galleryItems.some((item) => item.category === 'Buffets' || item.category === 'Platters')).toBe(true)
    expect(galleryItems.some((item) => item.id.includes('Our Story'))).toBe(false)
    expect(galleryItems.some((item) => item.id === 'Weekly meal /7.jpg')).toBe(false)
    expect(galleryItems.some((item) => item.id === 'Weekly meal /IMG_1440.PNG')).toBe(false)
  })
})
