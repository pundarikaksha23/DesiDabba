import { homeGalleryImages, pageHeroImages, serviceImages } from '../assets/images/selected-images'
import type { GalleryImage } from '../types/content'
import weeklyMealsData from './weeklyMeals.json'

export const weeklyMeals = weeklyMealsData

export const weeklyMealsGallery: GalleryImage[] = [
  { title: 'Balanced dabba close-up', position: '50% center', imageSrc: pageHeroImages.weeklyMeals },
  { title: 'Handheld plated meal', position: '50% center', imageSrc: homeGalleryImages[0] },
  { title: 'Rice and sides service', position: '50% center', imageSrc: homeGalleryImages[1] },
  { title: 'Curry and biryani spread', position: '50% center', imageSrc: serviceImages.healthyMealPlans },
]
