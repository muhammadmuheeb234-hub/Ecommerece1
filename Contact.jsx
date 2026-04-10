import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, Send, Music2 } from 'lucide-react'

const Contact = () => {
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
            <span>/</span>
            <span className="text-luxury-black font-bold tracking-widest uppercase">Contact</span>
          </motion.nav>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-4">Get In Touch</h1>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-10">
              <h2 className="text-2xl font-serif font-bold text-luxury-black uppercase tracking-widest pb-6 border-b border-gold/10">Contact Details</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white rounded-full text-gold shadow-xl group-hover:bg-gold group-hover:text-white smooth-transition"><MapPin size={24} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-luxury-black mb-2">Our Boutique</h4>
                    <p className="text-sm text-luxury-gray leading-relaxed font-light">Inam Attar Mahal Wholesale Dealer, Circular Road, Tire Street, Near Central Jama Masjid, Quetta, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white rounded-full text-gold shadow-xl group-hover:bg-gold group-hover:text-white smooth-transition"><MessageCircle size={24} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-luxury-black mb-2">WhatsApp Us</h4>
                    <p className="text-sm text-luxury-black font-bold">0317-8452377</p>
                    <p className="text-sm text-luxury-black font-bold">0310-8771073</p>
                    <p className="text-[10px] text-luxury-gray uppercase tracking-widest mt-1">Available 10:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white rounded-full text-gold shadow-xl group-hover:bg-gold group-hover:text-white smooth-transition"><Mail size={24} /></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-luxury-black mb-2">Email Us</h4>
                    <p className="text-sm text-luxury-gray font-light italic">info@inaamattar.com</p>
                    <p className="text-sm text-luxury-gray font-light italic">sales@inaamattar.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-10">
              <h2 className="text-2xl font-serif font-bold text-luxury-black uppercase tracking-widest pb-6 border-b border-gold/10">Follow Us</h2>
              <div className="flex space-x-6">
                {[
                  { icon: Facebook, url: 'https://www.facebook.com/share/1HLnWP2sxZ/' },
                  { icon: Instagram, url: 'https://www.instagram.com/mahalinaamattar?igsh=ODhpdWZmMHl4dnlk' },
                  { icon: Youtube, url: 'https://youtube.com/@inaamattarmahalquetta?si=wg1z1ogDj1655NZU' },
                  { icon: Music2, url: 'https://www.tiktok.com/@bakhtmuhammad546?_r=1&_t=ZS-95Mnqa6sKCi' }
                ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full text-luxury-black shadow-lg hover:text-gold hover:-translate-y-2 smooth-transition">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-10">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/FB_IMG_1775740421234.jpg" alt="Contact Featured" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-gold/10">
              <h2 className="text-2xl font-serif font-bold text-luxury-black mb-12 flex items-center space-x-4">
                <Send size={24} className="text-gold" />
                <span>Send a Message</span>
              </h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Full Name</label>
                    <input className="w-full bg-primary-light/30 border border-gold/20 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition font-medium" placeholder="Your Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Email Address</label>
                    <input className="w-full bg-primary-light/30 border border-gold/20 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition font-medium" placeholder="example@mail.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Subject</label>
                  <input className="w-full bg-primary-light/30 border border-gold/20 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition font-medium" placeholder="Product Inquiry, Wholesale, etc." />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Your Message</label>
                  <textarea className="w-full bg-primary-light/30 border border-gold/20 rounded-2xl px-8 py-5 h-48 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition font-medium" placeholder="How can we help you today?" />
                </div>
                <div className="pt-6">
                  <button className="w-full btn-luxury flex items-center justify-center space-x-3 py-6 shadow-xl text-lg group">
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 smooth-transition" />
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 bg-gold/10 p-8 rounded-3xl border border-gold/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-luxury-black mb-2">Prefer WhatsApp?</h3>
                <p className="text-xs uppercase tracking-widest text-luxury-gray">Chat with us directly for instant support</p>
              </div>
              <a 
                href="https://wa.me/923178452377" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-luxury bg-[#25D366] hover:bg-[#128C7E] border-none flex items-center space-x-3 shadow-xl"
              >
                <MessageCircle size={22} />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
