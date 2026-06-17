import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import PopularFoodSection from './components/home/PopularFoodSection'
import PromoBanners from './components/home/PromoBanners'
import WhyChooseUs from './components/home/WhyChooseUs'
import BestSellingDishes from './components/home/BestSellingDishes'
import OfferSection from './components/home/OfferSection'
import CoreFeatures from './components/home/CoreFeatures'
import Testimonials from './components/home/Testimonials'
import ChefSection from './components/home/ChefSection'
import BlogSection from './components/home/BlogSection'
import GallerySection from './components/home/GallerySection'
import ContactStrip from './components/home/ContactStrip'
import PageLoader from './components/ui/PageLoader'

function App() {
  return (
    <>
      <PageLoader />
      <main className="texture-bg min-h-screen overflow-hidden text-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PopularFoodSection />
        <PromoBanners />
        <WhyChooseUs />
        <BestSellingDishes />
        <OfferSection />
        <CoreFeatures />
        <Testimonials />
        <ChefSection />
        <BlogSection />
        <GallerySection />
        <ContactStrip />
        <Footer />
      </main>
    </>
  )
}

export default App
