import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, Share2, ShieldCheck, Truck, RefreshCw, MessageCircle } from 'lucide-react'
import { allProducts } from '../utils/productData'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-light">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-luxury-black mb-4">Product Not Found</h2>
          <Link to="/" className="btn-luxury">Return Home</Link>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    // Implement cart logic later
    console.log('Added to cart:', product, 'Quantity:', quantity)
  }

  const buyNow = () => {
    const message = `*New Order Inquiry* – INAAM ATTAR MAHAL\n\nProduct: ${product.name}\nQuantity: ${quantity}\n\nI would like to purchase this item. Please guide me with the next steps.`
    window.open(`https://wa.me/923178452377?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-light py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="text-xs uppercase tracking-[0.2em] mb-12 text-luxury-gray flex space-x-2 items-center">
          <Link to="/" className="hover:text-gold smooth-transition">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-gold smooth-transition">{product.category}</Link>
          <span>/</span>
          <span className="text-luxury-black font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Section */}
          <div className="space-y-6">
            <motion.div 
              layoutId={`product-img-${id}`}
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">{product.name}</h1>
            
            <p className="text-luxury-gray text-lg leading-relaxed mb-10 font-light italic">
              "{product.description}"
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3 text-sm text-luxury-black">
                <ShieldCheck size={18} className="text-gold shrink-0" />
                <span>100% Pure & Alcohol-Free</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-luxury-black">
                <ShieldCheck size={18} className="text-gold shrink-0" />
                <span>Long-lasting Fragrance</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-luxury-black">
                <ShieldCheck size={18} className="text-gold shrink-0" />
                <span>Premium Quality Guaranteed</span>
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-luxury-black/10 rounded-full px-6 py-3 bg-white shadow-inner">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl hover:text-gold smooth-transition font-bold">-</button>
                  <span className="px-8 text-xl font-bold text-luxury-black w-16 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-2xl hover:text-gold smooth-transition font-bold">+</button>
                </div>
                <button className="p-4 border border-luxury-black/10 rounded-full hover:bg-gold hover:text-white smooth-transition text-luxury-black shadow-md">
                  <Heart size={24} />
                </button>
                <button className="p-4 border border-luxury-black/10 rounded-full hover:bg-gold hover:text-white smooth-transition text-luxury-black shadow-md">
                  <Share2 size={24} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={addToCart}
                  className="flex-1 btn-outline-luxury flex items-center justify-center space-x-3 text-lg py-5"
                >
                  <ShoppingCart size={22} />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={buyNow}
                  className="flex-1 btn-luxury flex items-center justify-center space-x-3 text-lg py-5 shadow-2xl bg-[#25D366] hover:bg-[#128C7E] border-none"
                >
                  <MessageCircle size={22} />
                  <span>Buy on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Delivery Features */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-luxury-black/5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold"><Truck size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold">Free Shipping</h4>
                  <p className="text-[10px] text-luxury-gray uppercase tracking-widest mt-1">On All Orders</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold"><RefreshCw size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold">Easy Exchange</h4>
                  <p className="text-[10px] text-luxury-gray uppercase tracking-widest mt-1">7 Days Hassle-Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetail
