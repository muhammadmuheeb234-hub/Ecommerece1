import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Music2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF3E0] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold tracking-tighter">
              INAAM <span className="text-gold">ATTAR</span> MAHAL
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Premium wholesale dealer of high-quality Attars, Perfumes, and more. Experience the luxury of scents from the heart of Quetta.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/share/1HLnWP2sxZ/" target="_blank" rel="noopener noreferrer" className="hover:text-gold smooth-transition"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/mahalinaamattar?igsh=ODhpdWZmMHl4dnlk" target="_blank" rel="noopener noreferrer" className="hover:text-gold smooth-transition"><Instagram size={20} /></a>
              <a href="https://youtube.com/@inaamattarmahalquetta?si=wg1z1ogDj1655NZU" target="_blank" rel="noopener noreferrer" className="hover:text-gold smooth-transition"><Youtube size={20} /></a>
              <a href="https://www.tiktok.com/@bakhtmuhammad546?_r=1&_t=ZS-95Mnqa6sKCi" target="_blank" rel="noopener noreferrer" className="hover:text-gold smooth-transition"><Music2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold tracking-widest uppercase text-gold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Attar', 'Perfumes', 'Body Spray', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/category/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm text-gray-400 hover:text-gold smooth-transition uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold tracking-widest uppercase text-gold">Categories</h3>
            <ul className="space-y-4">
              {['Humidifiers', 'Surma', 'Tesbih', 'Jai Namaz', 'Other Items'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/category/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm text-gray-400 hover:text-gold smooth-transition uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold tracking-widest uppercase text-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-400 leading-relaxed">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span>Inam Attar Mahal Wholesale Dealer, Circular Road, Tire Street, Near Central Jama Masjid, Quetta, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="text-gold shrink-0" size={18} />
                <span>0317-8452377 / 0310-8771073</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="text-gold shrink-0" size={18} />
                <span>info@inaamattar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} INAAM ATTAR MAHAL. ALL RIGHTS RESERVED. DESIGNED FOR LUXURY.</p>
          <p className="mt-2 text-gold font-bold tracking-[0.3em]">Powered BY MStack Developer</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/terms" className="hover:text-gold smooth-transition">Terms</Link>
            <Link to="/privacy" className="hover:text-gold smooth-transition">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
