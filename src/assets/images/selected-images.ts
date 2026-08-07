import aboutHero from './about/family-event-portrait-8f0a4221.jpg'
import privateChefHero from './backgrounds/outdoor-dining-table-drinks-8f0a4381.jpg'
import cateringHero from './catering/guests-serving-appetizer-buffet-8f0a4341.jpg'
import corporateCateringService from './catering/rice-sabzi-buffet-chafing-dishes-8f0a4310.jpg'
import weddingCateringService from './catering/guests-serving-dessert-buffet-8f0a4358.jpg'
import galleryKitchenDetail from './gallery/guest-appetizer-plate-detail-8f0a4353.jpg'
import servicesHero from './platters/canape-spoon-appetizer-row-8f0a4281.jpg'
import fusionExperienceService from './platters/canape-spoon-appetizer-row-8f0a4279.jpg'
import homeHero from './platters/mixed-canape-platter-table-8f0a4288.jpg'
import strongestHero from './platters/passed-appetizer-platter-8f0a4277.jpg'
import premiumPlattersService from './platters/tandoori-skewer-appetizer-platter-8f0a4331.jpg'
import privateChefService from './team/guest-dining-with-drinks-8f0a4382.jpg'
import contactHero from './team/event-guests-dining-8f0a4373.jpg'
import healthyMealPlansService from './weekly-meals/vegetable-curry-chafing-dish-8f0a4315.jpg'
import weeklyMealsService from './weekly-meals/plated-indian-meal-close-up-8f0a4364.jpg'

import cateringBuffetTable from './catering/guests-serving-buffet-8f0a4224.jpg'
import cateringChafingDish from './catering/curry-chafing-dish-8f0a4302.jpg'
import cateringEventService from './catering/guests-serving-appetizer-buffet-8f0a4348.jpg'
import cateringNaanService from './catering/naan-roti-chafing-dish-8f0a4328.jpg'
import cateringRiceBuffet from './catering/rice-sabzi-buffet-chafing-dishes-8f0a4314.jpg'
import dessertTower from './platters/fruit-dessert-tower-8f0a4299.jpg'

import galleryBiryaniTray from './weekly-meals/biryani-curry-tray-8f0a4222.jpg'
import galleryBuffetCurry from './catering/curry-chafing-dish-8f0a4300.jpg'
import galleryPlatterPassed from './platters/passed-appetizer-platter-8f0a4277.jpg'
import gallerySaagBuffet from './catering/saag-green-curry-chafing-dish-8f0a4304.jpg'
import galleryRiceService from './weekly-meals/rice-chafing-dish-8f0a4318.jpg'
import galleryDessertBuffet from './catering/guests-serving-dessert-buffet-8f0a4360.jpg'
import galleryAppetizerBuffet from './catering/guests-serving-appetizer-buffet-8f0a4348.jpg'
import galleryHandheldMeal from './weekly-meals/handheld-plated-indian-meal-8f0a4388.jpg'
import gallerySmilingGuest from './team/smiling-guest-with-meal-plate-8f0a4389.jpg'

import privateChefPlatedCourse from './weekly-meals/plated-indian-meal-close-up-8f0a4370.jpg'
import privateChefSweetFinish from './team/smiling-guest-with-meal-plate-8f0a4390.jpg'

import homeGalleryMeal from './weekly-meals/biryani-curry-tray-8f0a4223.jpg'
import homeGalleryRice from './weekly-meals/rice-chafing-dish-8f0a4318.jpg'
import homeGalleryBuffet from './catering/guests-serving-buffet-8f0a4232.jpg'
import homeInstagramCurry from './weekly-meals/vegetable-curry-chafing-dish-8f0a4317.jpg'
import homeInstagramBread from './catering/naan-roti-chafing-dish-8f0a4328.jpg'
import homeInstagramCanape from './platters/canape-spoon-appetizer-row-8f0a4280.jpg'
import homeInstagramGuest from './team/guest-dining-with-drinks-8f0a4384.jpg'

export const pageHeroImages = {
  home: strongestHero,
  about: aboutHero,
  services: servicesHero,
  weeklyMeals: weeklyMealsService,
  catering: cateringHero,
  privateChef: privateChefHero,
  glazingPlatters: homeHero,
  contact: contactHero,
} as const

export const storytellingImages = {
  homeAbout: homeHero,
  homeCatering: cateringEventService,
  homePrivateChef: privateChefHero,
  weeklyMealsFeature: weeklyMealsService,
  cateringMenu: cateringNaanService,
  privateChefTable: privateChefService,
  contactGathering: contactHero,
} as const

export const serviceImages = {
  weeklyMeals: weeklyMealsService,
  corporateCatering: corporateCateringService,
  weddingCatering: weddingCateringService,
  privateChef: privateChefService,
  fusionExperiences: fusionExperienceService,
  premiumPlatters: premiumPlattersService,
  healthyMealPlans: healthyMealPlansService,
} as const

export const cateringGalleryImages = [
  cateringBuffetTable,
  cateringChafingDish,
  cateringRiceBuffet,
  dessertTower,
] as const

export const privateChefGalleryImages = [
  privateChefService,
  privateChefPlatedCourse,
  privateChefHero,
  privateChefSweetFinish,
] as const

export const galleryPageImages = [
  galleryBiryaniTray,
  galleryBuffetCurry,
  galleryKitchenDetail,
  galleryPlatterPassed,
  gallerySaagBuffet,
  galleryRiceService,
  galleryDessertBuffet,
  privateChefHero,
  dessertTower,
  galleryAppetizerBuffet,
  galleryHandheldMeal,
  gallerySmilingGuest,
] as const

export const homeGalleryImages = [
  homeGalleryMeal,
  homeGalleryRice,
  homeGalleryBuffet,
  privateChefHero,
] as const

export const homeInstagramImages = [
  homeInstagramCurry,
  homeInstagramBread,
  homeInstagramCanape,
  homeInstagramGuest,
] as const
