import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, MessageCircle, MapPin, Phone, User, ShoppingCart, CreditCard, ShieldCheck } from 'lucide-react'

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  })

  // Mock cart items (should come from context/state)
  const cartItems = [
    { id: 1, name: 'Premium Oud Attar', price: 1500, quantity: 1 },
    { id: 2, name: 'Musk Al Ghazal', price: 1200, quantity: 2 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 250
  const total = subtotal + shipping

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // WhatsApp Format:
    /*
      New Order Received – INAAM ATTAR MAHAL
      
      Customer Name: [Name]
      Phone: [Number]
      Product(s): [Product Names]
      Quantity: [Qty]
      Total Price: [Price]
      Address: [Address]
      
      Please process this order.
    */

    const productDetails = cartItems.map(item => `${item.name} (x${item.quantity})`).join(', ')
    const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const message = `*New Order Received* – INAAM ATTAR MAHAL\n\n` +
      `*Customer Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Product(s):* ${productDetails}\n` +
      `*Quantity:* ${totalQty}\n` +
      `*Address:* ${formData.address}, ${formData.city}\n\n` +
      `Please process this order.`;

    const whatsappUrl = `https://wa.me/923178452377?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
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
            <Link to="/cart" className="hover:text-gold smooth-transition">Cart</Link>
            <ChevronRight size={12} />
            <span className="text-luxury-black font-bold">Checkout</span>
          </motion.nav>
          <h1 className="text-5xl font-serif font-bold text-luxury-black mb-4">Complete Order</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Checkout Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gold/10 order-2 lg:order-1">
            <h2 className="text-2xl font-serif font-bold text-luxury-black mb-10 flex items-center space-x-3 pb-6 border-b border-gold/10">
              <User size={24} className="text-gold" />
              <span>Shipping Information</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                      placeholder="e.g. 03xx-xxxxxxx"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Shipping Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-6 text-gold/50" size={18} />
                  <textarea 
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-12 py-4 h-32 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                    placeholder="Enter your full street address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">City</label>
                  <input 
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                    placeholder="Quetta, Karachi, etc."
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Order Notes (Optional)</label>
                  <input 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                    placeholder="Any special instructions"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-gold/10">
                <button 
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center space-x-3 py-6 shadow-2xl bg-[#25D366] hover:bg-[#128C7E] border-none text-xl"
                >
                  <MessageCircle size={28} />
                  <span>PLACE ORDER VIA WHATSAPP</span>
                </button>
                <div className="mt-6 flex items-center justify-center space-x-3 text-luxury-gray text-[10px] uppercase tracking-[0.2em] font-bold">
                  <ShieldCheck size={16} className="text-gold" />
                  <span>Order processing will continue on WhatsApp</span>
                </div>
              </div>
            </form>
          </div>

          {/* Order Details Column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gold/10">
              <h3 className="text-xl font-serif font-bold text-luxury-black mb-10 uppercase tracking-widest pb-4 border-b border-gold/20 flex items-center space-x-3">
                <ShoppingCart size={20} className="text-gold" />
                <span>Order Summary</span>
              </h3>
              <div className="space-y-6 mb-10 max-h-80 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gold/20">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-primary-light/30 p-4 rounded-xl border border-gold/5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-luxury-black">{item.name}</span>
                      <span className="text-xs text-luxury-gray uppercase tracking-widest mt-1">Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gold/10 flex flex-col items-center text-center">
                <CreditCard size={32} className="text-gold mb-4" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-luxury-black">Cash on Delivery</h4>
                <p className="text-[8px] text-luxury-gray uppercase tracking-widest mt-2">Available Pakistan Wide</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gold/10 flex flex-col items-center text-center">
                <ShieldCheck size={32} className="text-gold mb-4" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-luxury-black">Secure Checkout</h4>
                <p className="text-[8px] text-luxury-gray uppercase tracking-widest mt-2">100% Data Protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Checkout
