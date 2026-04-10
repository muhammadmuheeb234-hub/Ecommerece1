import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { allProducts } from '../utils/productData'

const sliderImages = [
  '/images/FB_IMG_1775740249305.jpg',
  '/images/FB_IMG_1775740254357.jpg',
  '/images/FB_IMG_1775740256972.jpg',
  '/images/FB_IMG_1775740259017.jpg',
  '/images/FB_IMG_1775740261000.jpg',
  '/images/FB_IMG_1775740262998.jpg',
  '/images/FB_IMG_1775740263896.jpg',
  '/images/FB_IMG_1775740265852.jpg',
  '/images/FB_IMG_1775740267547.jpg',
  '/images/FB_IMG_1775740269666.jpg',
]

const categories = [
  { name: 'Attar', image: '/images/h.jpg', path: '/category/attar' },
  { name: 'Perfumes', image: '/images/FB_IMG_1775740285811.jpg', path: '/category/perfumes' },
  { name: 'Body Spray', image: '/images/FB_IMG_1775740288010.jpg', path: '/category/body-spray' },
  { name: 'Humidifiers', image: '/images/ww.avif', path: '/category/humidifiers' },
  { name: 'Surma', image: '/images/ss.webp', path: '/category/surma' },
  { name: 'Tesbih', image: '/images/yy.jfif', path: '/category/tesbih' },
  { name: 'Jai Namaz', image: '/images/vv.jfif', path: '/category/jai-namaz' },
  { name: 'Other Items', image: '/images/FB_IMG_1775740305052.jpg', path: '/category/other' },
]

const featuredProducts = allProducts.slice(0, 10);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-light"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden group">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img 
              src={sliderImages[currentSlide]} 
              alt={`Slide ${currentSlide + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-[0.4em] text-sm mb-6"
          >
            Exquisite Fragrances for the Soul
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white text-5xl md:text-8xl font-serif font-bold mb-10 leading-tight"
          >
            INAAM ATTAR MAHAL
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/category/attar" className="btn-luxury inline-block mr-4">
              Explore Collection
            </Link>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white smooth-transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white smooth-transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full smooth-transition ${
                currentSlide === index ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop by Category</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={cat.path} className="group block text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-2 border-transparent group-hover:border-gold smooth-transition shadow-xl">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>
                <h3 className="text-lg uppercase tracking-widest font-semibold group-hover:text-gold smooth-transition">
                  {cat.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-primary-dark/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Collections</h2>
              <p className="text-luxury-gray tracking-widest uppercase text-xs">Our most sought-after fragrances</p>
            </div>
            <Link to="/category/attar" className="text-gold uppercase tracking-widest text-sm font-semibold border-b border-gold pb-1 hover:text-luxury-black hover:border-luxury-black smooth-transition">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <img 
              src="/images/FB_IMG_1775740317816.jpg" 
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
              alt="Promo"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-white text-4xl md:text-6xl font-serif font-bold mb-6">Special Eid Collection</h2>
              <p className="text-white/80 max-w-xl mb-10 text-lg">Experience the divine scents of our exclusive Eid collection. Hand-picked premium attars for your special moments.</p>
              <Link to="/category/attar" className="btn-luxury">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl smooth-transition"
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center space-x-4">
        <Link 
          to={`/product/${product.id}`}
          className="bg-white p-3 rounded-full hover:bg-gold hover:text-white smooth-transition text-luxury-black"
        >
          <Eye size={20} />
        </Link>
        <button className="bg-white p-3 rounded-full hover:bg-gold hover:text-white smooth-transition text-luxury-black">
          <ShoppingCart size={20} />
        </button>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-gold text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
          {product.category}
        </span>
      </div>
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gold smooth-transition">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
    </div>
  </motion.div>
)

export default Home
