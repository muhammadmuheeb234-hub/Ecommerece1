import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Award, Heart, Sparkles, MapPin, Phone, Mail } from 'lucide-react'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-light"
    >
      {/* About Hero */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src="/images/FB_IMG_1775740317816.jpg" className="absolute inset-0 w-full h-full object-cover" alt="About" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-6"
          >
            Our Legacy
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-32 h-1 bg-gold mx-auto"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-luxury-black leading-tight">
              Crafting Timeless <br/><span className="text-gold italic">Fragrances</span> Since 1995
            </h2>
            <p className="text-luxury-gray text-lg leading-relaxed font-light italic">
              "INAAM ATTAR MAHAL was founded with a single mission: to bring the purest and most exquisite scents to those who appreciate the art of perfumery."
            </p>
            <div className="space-y-6 text-luxury-black/80 leading-relaxed">
              <p>
                Located in the heart of Quetta, Pakistan, we have grown from a small family business to a premier wholesale dealer of high-quality Attars, Perfumes, and luxury lifestyle items. Our commitment to quality and tradition has made us a trusted name in the industry.
              </p>
              <p>
                Every scent in our collection is hand-picked by our master perfumers, ensuring that you receive only the most authentic and long-lasting fragrances. Whether it's the deep, woody notes of our Premium Oud or the floral elegance of our Musk, each drop tells a story of heritage and luxury.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div>
                <h4 className="text-4xl font-serif font-bold text-gold mb-2">25+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-luxury-gray">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-gold mb-2">500+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-luxury-gray">Premium Scents</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img src="/images/FB_IMG_1775740329160.jpg" className="w-full h-full object-cover" alt="Story" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-2xl shadow-2xl border border-gold/10 hidden md:block">
              <Sparkles className="text-gold mb-4" size={32} />
              <p className="text-sm font-serif font-bold italic text-luxury-black">"Authenticity in every drop."</p>
              <p className="text-[10px] uppercase tracking-widest text-luxury-gray mt-2">- Bakht Muhammad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Core Values</h2>
            <div className="w-24 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-primary-light/50 smooth-transition">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold shadow-inner">
                <ShieldCheck size={36} />
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Quality First</h3>
              <p className="text-luxury-gray text-sm leading-relaxed italic">We never compromise on the purity of our products. Every item is 100% authentic and alcohol-free.</p>
            </div>
            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-primary-light/50 smooth-transition">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold shadow-inner">
                <Award size={36} />
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Expert Craft</h3>
              <p className="text-luxury-gray text-sm leading-relaxed italic">Our products are curated using traditional methods passed down through generations of artisans.</p>
            </div>
            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-primary-light/50 smooth-transition">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold shadow-inner">
                <Heart size={36} />
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Customer Care</h3>
              <p className="text-luxury-gray text-sm leading-relaxed italic">Building long-lasting relationships through trust, transparency, and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Details Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-gold leading-tight">Visit Our Store</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/5 rounded-full text-gold shrink-0"><MapPin size={28} /></div>
                  <div>
                    <h4 className="text-lg font-serif font-bold uppercase tracking-widest mb-2">Location</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">Inam Attar Mahal Wholesale Dealer, Circular Road, Tire Street, Near Central Jama Masjid, Quetta, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/5 rounded-full text-gold shrink-0"><Phone size={28} /></div>
                  <div>
                    <h4 className="text-lg font-serif font-bold uppercase tracking-widest mb-2">Contact Info</h4>
                    <p className="text-gray-400 text-sm">Bakht Muhammad & Nisar Ahmed</p>
                    <p className="text-gold font-bold mt-1">0317-8452377 / 0310-8771073</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/5 rounded-full text-gold shrink-0"><Mail size={28} /></div>
                  <div>
                    <h4 className="text-lg font-serif font-bold uppercase tracking-widest mb-2">Email</h4>
                    <p className="text-gray-400 text-sm">info@inaamattar.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 smooth-transition">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.962383823707!2d67.00123456789012!3d30.19876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDExJzU1LjYiTiA2N8KwMDAnMDQuNCJF!5e0!3m2!1sen!2s!4v1234567890123" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
