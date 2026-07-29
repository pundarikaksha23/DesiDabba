import { galleryPageImages } from '../assets/images/selected-images'

export const galleryCategories = ['All', 'Food', 'Buffets', 'Events', 'Platters', 'Kitchen'] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export const galleryItems = [
  {
    title: 'Paneer tikka masala dabba',
    category: 'Food',
    imageSrc: galleryPageImages[0],
    height: 'h-64 sm:h-80',
    position: '46% 48%',
  },
  {
    title: 'Corporate buffet with regional mains',
    category: 'Buffets',
    imageSrc: galleryPageImages[1],
    height: 'h-72 sm:h-96',
    position: '50% 44%',
  },
  {
    title: 'Private dinner course plating',
    category: 'Events',
    imageSrc: galleryPageImages[2],
    height: 'h-64 sm:h-72',
    position: '48% 52%',
  },
  {
    title: 'Premium snack platter',
    category: 'Platters',
    imageSrc: galleryPageImages[3],
    height: 'h-72 sm:h-[26rem]',
    position: '50% 54%',
  },
  {
    title: 'Fresh chutney and prep details',
    category: 'Kitchen',
    imageSrc: galleryPageImages[4],
    height: 'h-64 sm:h-80',
    position: '48% 46%',
  },
  {
    title: 'Homestyle dal and rice service',
    category: 'Food',
    imageSrc: galleryPageImages[5],
    height: 'h-80 sm:h-[30rem]',
    position: '50% 42%',
  },
  {
    title: 'Wedding buffet finishing touches',
    category: 'Buffets',
    imageSrc: galleryPageImages[6],
    height: 'h-64 sm:h-72',
    position: '50% 52%',
  },
  {
    title: 'Anniversary tasting table',
    category: 'Events',
    imageSrc: galleryPageImages[7],
    height: 'h-72 sm:h-96',
    position: '50% 58%',
  },
  {
    title: 'Festive sharing platter',
    category: 'Platters',
    imageSrc: galleryPageImages[8],
    height: 'h-64 sm:h-80',
    position: '52% 50%',
  },
  {
    title: 'Small-batch kitchen rhythm',
    category: 'Kitchen',
    imageSrc: galleryPageImages[9],
    height: 'h-72 sm:h-[27rem]',
    position: '48% 50%',
  },
  {
    title: 'Coastal coconut curry dabba',
    category: 'Food',
    imageSrc: galleryPageImages[10],
    height: 'h-64 sm:h-72',
    position: '48% 54%',
  },
  {
    title: 'Chai and dessert close',
    category: 'Events',
    imageSrc: galleryPageImages[11],
    height: 'h-64 sm:h-80',
    position: '52% 48%',
  },
] as const

export type GalleryItem = (typeof galleryItems)[number]
