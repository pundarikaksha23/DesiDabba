export const galleryCategories = ['All', 'Food', 'Buffets', 'Events', 'Platters', 'Kitchen'] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  imageSrc: string
  position: string
}

type CuratedGallerySource = {
  path: string
  title: string
  category: Exclude<GalleryCategory, 'All' | 'Kitchen'>
  position?: string
}

const curatedGallerySources: CuratedGallerySource[] = [
  {
    path: 'drive-download-20260825T172700Z-1-001/Our Story_.jpg',
    title: 'Sunny Outdoor Portrait',
    category: 'Events',
    position: '50% 20%',
  },
  {
    path: 'drive-download-20260825T172700Z-1-001/Our Story.png',
    title: 'Chef With Fresh Appetizers',
    category: 'Events',
    position: '50% 18%',
  },
  { path: 'Weekly meal /1.jpg', title: 'Rice Dal and Sabzi Set', category: 'Food' },
  { path: 'Weekly meal /2.jpg', title: 'Tomato Curry Bowls', category: 'Food' },
  { path: 'Weekly meal /3.jpg', title: 'Chapati Meal Trio', category: 'Food' },
  { path: 'Weekly meal /7.jpg', title: 'Comfort Thali Tray', category: 'Food' },
  { path: 'Weekly meal /c490ecf5-d1cb-43c6-8e40-bdf64af7f9c7.JPG', title: 'Balanced Weekly Thali', category: 'Food' },
  { path: 'Weekly meal /IMG_1440.PNG', title: 'Family Style Dinner Spread', category: 'Food' },
  { path: 'Weekly meal /IMG_3040.jpg', title: 'Blue Bowl Dinner Plate', category: 'Food' },
  { path: 'Weekly meal /IMG_3148 2.PNG', title: 'Rice and Roti Plate', category: 'Food' },
  { path: 'Weekly meal /IMG_4602.PNG', title: 'Puri and Pakora Platter', category: 'Food' },
  { path: 'Weekly meal /IMG_9078 2.JPG', title: 'Luxe Meal Box Spread', category: 'Food' },
  { path: 'Private Chef/1.jpg', title: 'Lamb Chop Curry Plate', category: 'Food' },
  { path: 'Private Chef/2.jpg', title: 'Festive Dessert Board', category: 'Food' },
  { path: 'Private Chef/3.jpg', title: 'Golden Fried Bites', category: 'Food' },
  { path: 'Private Chef/4.jpg', title: 'Paneer Curry Entree', category: 'Food' },
  { path: 'Private Chef/5.jpg', title: 'Celebration Rice Platter', category: 'Food' },
  { path: 'Private Chef/6.jpg', title: 'Charred Vegetable Rounds', category: 'Food' },
  { path: 'Private Chef/6(1).jpg', title: 'Dumpling Curry Bowl', category: 'Food' },
  { path: 'Private Chef/8.jpg', title: 'Stuffed Pepper Halves', category: 'Food' },
  { path: 'Private Chef/9.jpg', title: 'Crisp Wings Platter', category: 'Food' },
  { path: 'Private Chef/IMG_4693.PNG', title: 'Braised Entree Casserole', category: 'Food' },
  { path: 'Private Chef/IMG_5764.PNG', title: 'Creamy Kofta Bowl', category: 'Food' },
  { path: 'Catering 2/1.jpg', title: 'Dessert Cups and Buffet Bites', category: 'Platters' },
  { path: 'Catering 2/1(1).jpg', title: 'Catering Biryani Close Up', category: 'Food' },
  { path: 'Catering 2/2.jpg', title: 'Savory Snack Station', category: 'Platters' },
  { path: 'Catering 2/2(1).jpg', title: 'Tandoori Skewer Tray', category: 'Platters' },
  { path: 'Catering 2/2(2).jpg', title: 'Grilled Appetizer Skewers', category: 'Platters' },
  { path: 'Catering 2/2(3).jpg', title: 'Boxed Tasting Plates', category: 'Food' },
  { path: 'Catering 2/3.jpg', title: 'Buffet Line Overview', category: 'Buffets' },
  { path: 'Catering 2/8.jpg', title: 'Crispy Rolls With Dips', category: 'Platters' },
  {
    path: 'Catering/desi/8F0A4211.jpg',
    title: 'Couple Portrait by the Marquee',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4216.jpg',
    title: 'Family Portrait at the Event',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4224.jpg',
    title: 'Buffet Service Moment',
    category: 'Events',
    position: '50% 24%',
  },
  {
    path: 'Catering/desi/8F0A4236.jpg',
    title: 'Saffron Dress Buffet Candid',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4265.jpg',
    title: 'Garden Guest Portrait',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4270.jpg',
    title: 'Green Lehenga Portrait',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4342.jpg',
    title: 'Garlanded Guest With Plate',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4372.jpg',
    title: 'Guest by the Buffet',
    category: 'Events',
    position: '50% 18%',
  },
  {
    path: 'Catering/desi/8F0A4389.jpg',
    title: 'Smiling Guest Portrait',
    category: 'Events',
    position: '50% 18%',
  },
  { path: 'Catering/desi/8F0A4207.jpg', title: 'Snack Table Spread', category: 'Platters' },
  { path: 'Catering/desi/8F0A4222.jpg', title: 'Biryani and Samosa Trays', category: 'Buffets' },
  { path: 'Catering/desi/8F0A4277.jpg', title: 'Canape Cone Arrangement', category: 'Platters' },
  { path: 'Catering/desi/8F0A4283.jpg', title: 'Tomato Topped Canape Tray', category: 'Platters' },
  { path: 'Catering/desi/8F0A4287.jpg', title: 'Skewer Wheel Centerpiece', category: 'Platters' },
  { path: 'Catering/desi/8F0A4299.jpg', title: 'Fruit Tower Centerpiece', category: 'Platters' },
  { path: 'Catering/desi/8F0A4304.jpg', title: 'Green Curry Chafer', category: 'Buffets' },
  { path: 'Catering/desi/8F0A4318.jpg', title: 'Basmati Rice Chafer', category: 'Buffets' },
  { path: 'Catering/desi/8F0A4323.jpg', title: 'Warm Naan Buffet', category: 'Buffets' },
  { path: 'Catering/desi/8F0A4337.jpg', title: 'Layered Canape Line', category: 'Platters' },
]

function toPublicImageSrc(path: string) {
  return encodeURI(`/images/${path}`)
}

export const galleryItems: GalleryItem[] = curatedGallerySources.map(({ path, title, category, position = '50% 50%' }) => ({
  id: path,
  title,
  category,
  imageSrc: toPublicImageSrc(path),
  position,
}))
