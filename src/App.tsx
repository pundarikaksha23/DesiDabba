import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { LoadingScreen } from './components/LoadingScreen'
import { ScrollToTop } from './components/ScrollToTop'
import { routeSegments } from './config/routes'

const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Catering = lazy(() => import('./pages/Catering'))
const PrivateChef = lazy(() => import('./pages/PrivateChef'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path={routeSegments.menu} element={<Menu />} />
            <Route path={routeSegments.about} element={<About />} />
            <Route path={routeSegments.story} element={<About />} />
            <Route path={routeSegments.services} element={<Services />} />
            <Route path={routeSegments.weeklyMeals} element={<Menu />} />
            <Route path={routeSegments.catering} element={<Catering />} />
            <Route path={routeSegments.privateChef} element={<PrivateChef />} />
            <Route path={routeSegments.gallery} element={<Gallery />} />
            <Route path={routeSegments.contact} element={<Contact />} />
            <Route path={routeSegments.privacyPolicy} element={<Legal />} />
            <Route path={routeSegments.terms} element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
