import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Attar', path: '/category/attar' },
    { name: 'Perfumes', path: '/category/perfumes' },
    { name: 'Body Spray', path: '/category/body-spray' },
    { name: 'Humidifiers', path: '/category/humidifiers' },
    { name: 'Other Items', path: '/category/other' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-md py-4' : 'bg-black py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/aa.avif" alt="Logo" className="h-10 w-10 object-contain rounded-full border-2 border-gold" />
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white">
              INAAM <span className="text-gold">ATTAR</span> MAHAL
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-gold smooth-transition font-medium ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-white">
            <button className="hover:text-gold smooth-transition hidden md:block">
              <Search size={20} />
            </button>
            <Link to="/admin/login" className="hover:text-gold smooth-transition">
              <User size={20} />
            </Link>
            <Link to="/cart" className="hover:text-gold smooth-transition relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-black z-[60] lg:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-serif font-bold text-white">MENU</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg uppercase tracking-widest hover:text-gold smooth-transition font-medium ${
                      location.pathname === link.path ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto border-t border-gold/20 pt-8">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contact Info</p>
                <p className="text-sm text-white font-medium">0317-8452377</p>
                <p className="text-sm text-white font-medium mt-2">Circular Road, Quetta</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
