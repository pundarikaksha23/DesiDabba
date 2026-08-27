import { describe, expect, test } from 'vitest'
import { galleryItems } from '../data/gallery'

describe('gallery data', () => {
  test('curates 50 distinct food and people images from the images folders', () => {
    expect(galleryItems).toHaveLength(50)
    expect(new Set(galleryItems.map((item) => item.id)).size).toBe(galleryItems.length)
    expect(new Set(galleryItems.map((item) => item.imageSrc)).size).toBe(galleryItems.length)
    expect(galleryItems.every((item) => item.imageSrc.startsWith('/images/'))).toBe(true)
  })

  test('keeps a mix of event portraits and food forward selections', () => {
    expect(galleryItems.some((item) => item.category === 'Events')).toBe(true)
    expect(galleryItems.some((item) => item.category === 'Food')).toBe(true)
    expect(galleryItems.some((item) => item.category === 'Buffets' || item.category === 'Platters')).toBe(true)
  })
})
