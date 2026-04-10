import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple mock login for now
    if (formData.username === 'admin' && formData.password === 'inaam123') {
      localStorage.setItem('isAdmin', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] bg-primary-light flex items-center justify-center py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 text-gold/5 -rotate-12 select-none pointer-events-none"><Sparkles size={200} /></div>
      <div className="absolute bottom-20 right-20 text-gold/5 rotate-12 select-none pointer-events-none"><Sparkles size={200} /></div>

      <div className="w-full max-w-md">
        <div className="text-center mb-16">
          <Link to="/" className="text-3xl font-serif font-bold text-luxury-black mb-4 block hover:text-gold smooth-transition">
            INAAM <span className="text-gold">ATTAR</span> MAHAL
          </Link>
          <h1 className="text-sm uppercase tracking-[0.4em] text-luxury-gray font-bold">Admin Portal</h1>
        </div>

        <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-gold/10 relative z-10">
          <div className="flex justify-center mb-12">
            <div className="p-5 bg-gold/10 rounded-full text-gold shadow-inner"><ShieldCheck size={48} /></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                <input 
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                  placeholder="Enter admin username"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] font-bold text-luxury-gray">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                <input 
                  required
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-primary-light/30 border border-gold/20 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-gold/50 smooth-transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs text-center font-bold uppercase tracking-widest italic"
              >
                {error}
              </motion.p>
            )}

            <button 
              type="submit"
              className="w-full btn-luxury flex items-center justify-center space-x-3 group py-5 shadow-xl"
            >
              <span>LOGIN TO DASHBOARD</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 smooth-transition" />
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-xs uppercase tracking-widest text-luxury-gray hover:text-gold smooth-transition font-bold border-b border-gold/20 pb-1">
            Return to Storefront
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default AdminLogin
