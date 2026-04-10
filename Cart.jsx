import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, ChevronRight } from 'lucide-react'

const Cart = () => {
  const navigate = useNavigate()
  // Mock cart items for now
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Oud Attar', price: 1500, quantity: 1, image: '/images/FB_IMG_1775740311211.jpg' },
    { id: 2, name: 'Musk Al Ghazal', price: 1200, quantity: 2, image: '/images/FB_IMG_1775740313364.jpg' },
  ])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 250
  const total = subtotal + shipping

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-primary-light">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mb-8 text-gold">
          <ShoppingBag size={48} strokeWidth={1} />
        </div>
        <h2 className="text-4xl font-serif font-bold text-luxury-black mb-4">Your Cart is Empty</h2>
        <p className="text-luxury-gray italic tracking-widest uppercase text-xs mb-10">Discover your next favorite scent</p>
        <Link to="/" className="btn-luxury">Shop Collection</Link>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-light py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.nav 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] mb-8 text-luxury-gray flex justify-center items-center space-x-3"
          >
            <Link to="/" className="hover:text-gold smooth-transition">Home</Link>
            <ChevronRight size={12} />
            <span className="text-luxury-black font-bold">Shopping Cart</span>
          </motion.nav>
          <h1 className="text-5xl font-serif font-bold text-luxury-black mb-4">Your Selection</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                className="bg-white rounded-2xl p-6 shadow-xl border border-gold/5 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
              >
                <div className="w-32 h-40 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-primary-light">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-serif font-bold text-luxury-black mb-2">{item.name}</h3>
                  <div className="flex items-center justify-center md:justify-start space-x-6">
                    <div className="flex items-center border border-luxury-black/10 rounded-full px-4 py-2 bg-primary-light/30">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-gold smooth-transition"><Minus size={16} /></button>
                      <span className="px-6 font-bold w-12 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-gold smooth-transition"><Plus size={16} /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 smooth-transition p-2 bg-red-50 rounded-full">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="bg-white rounded-3xl p-10 shadow-2xl border border-gold/10 sticky top-32">
            <h3 className="text-xl font-serif font-bold text-luxury-black mb-10 uppercase tracking-widest pb-4 border-b border-gold/20">Summary</h3>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full btn-luxury flex items-center justify-center space-x-3 group text-lg py-5 shadow-xl"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 smooth-transition" />
            </button>
            <p className="mt-8 text-[10px] text-center text-luxury-gray uppercase tracking-[0.2em] font-bold leading-relaxed">
              Safe & Secure Premium Packaging.
            </p>
          </aside>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart
