import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, Search, Edit2, Trash2, LayoutDashboard, ShoppingBag, 
  Users, Settings, LogOut, ChevronRight, Image as ImageIcon, 
  DollarSign, Tag, FileText, X, CheckCircle2, AlertCircle
} from 'lucide-react'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('products')
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Check authentication
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    if (!isAdmin) navigate('/admin/login')
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('isAdmin')
    navigate('/admin/login')
  }

  // Mock products state
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Oud Attar', price: 1500, category: 'Attar', stock: 45, image: '/images/FB_IMG_1775740311211.jpg' },
    { id: 2, name: 'Musk Al Ghazal', price: 1200, category: 'Attar', stock: 32, image: '/images/FB_IMG_1775740313364.jpg' },
    { id: 3, name: 'French Perfume X', price: 2500, category: 'Perfumes', stock: 15, image: '/images/FB_IMG_1775740314814.jpg' },
    { id: 4, name: 'Crystal Humidifier', price: 3500, category: 'Humidifiers', stock: 8, image: '/images/FB_IMG_1775740316428.jpg' },
  ])

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-primary-light flex">
      {/* Sidebar */}
      <aside className="w-80 bg-[#1A1A1A] text-white fixed h-full z-50 overflow-hidden hidden lg:flex flex-col">
        <div className="p-10 border-b border-white/5 text-center">
          <h2 className="text-2xl font-serif font-bold text-gold mb-2 tracking-tighter">INAAM ADMIN</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Premium Control</p>
        </div>

        <nav className="flex-grow p-8 space-y-6">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-4 p-5 rounded-2xl smooth-transition group ${
              activeTab === 'dashboard' ? 'bg-gold text-white shadow-2xl' : 'hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <LayoutDashboard size={22} className="group-hover:scale-110 smooth-transition" />
            <span className="text-sm uppercase tracking-[0.2em] font-bold">Dashboard</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center space-x-4 p-5 rounded-2xl smooth-transition group ${
              activeTab === 'products' ? 'bg-gold text-white shadow-2xl' : 'hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <ShoppingBag size={22} className="group-hover:scale-110 smooth-transition" />
            <span className="text-sm uppercase tracking-[0.2em] font-bold">Products</span>
          </button>

          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center space-x-4 p-5 rounded-2xl smooth-transition group ${
              activeTab === 'orders' ? 'bg-gold text-white shadow-2xl' : 'hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <CheckCircle2 size={22} className="group-hover:scale-110 smooth-transition" />
            <span className="text-sm uppercase tracking-[0.2em] font-bold">Orders</span>
          </button>

          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-4 p-5 rounded-2xl smooth-transition group ${
              activeTab === 'settings' ? 'bg-gold text-white shadow-2xl' : 'hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <Settings size={22} className="group-hover:scale-110 smooth-transition" />
            <span className="text-sm uppercase tracking-[0.2em] font-bold">Settings</span>
          </button>
        </nav>

        <div className="p-8 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-4 p-5 rounded-2xl hover:bg-red-500/10 text-red-400 smooth-transition font-bold uppercase tracking-[0.2em] text-xs border border-red-400/20"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow lg:ml-80 min-h-screen p-10 md:p-16">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
          <div>
            <h1 className="text-5xl font-serif font-bold text-luxury-black mb-4">Product Management</h1>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-luxury-gray font-bold">
              <span>Admin Dashboard</span>
              <ChevronRight size={14} className="text-gold" />
              <span className="text-luxury-black">{activeTab}</span>
            </div>
          </div>
          <button 
            onClick={() => setIsAddingProduct(true)}
            className="btn-luxury flex items-center justify-center space-x-3 shadow-2xl py-5"
          >
            <Plus size={22} />
            <span>Add New Product</span>
          </button>
        </header>

        {/* Search & Stats Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gold/10 rounded-3xl px-16 py-6 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-lg font-medium smooth-transition"
              placeholder="Search products, IDs, categories..."
            />
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gold/10 flex items-center justify-between group hover:bg-gold hover:text-white smooth-transition">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gray group-hover:text-white/80 font-bold mb-2">Total Stock</p>
              <h4 className="text-3xl font-serif font-bold tracking-tighter">1,245</h4>
            </div>
            <div className="p-4 bg-gold/10 group-hover:bg-white/20 rounded-2xl text-gold group-hover:text-white smooth-transition"><ShoppingBag size={28} /></div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gold/10 flex items-center justify-between group hover:bg-gold hover:text-white smooth-transition">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gray group-hover:text-white/80 font-bold mb-2">Active Categories</p>
              <h4 className="text-3xl font-serif font-bold tracking-tighter">12</h4>
            </div>
            <div className="p-4 bg-gold/10 group-hover:bg-white/20 rounded-2xl text-gold group-hover:text-white smooth-transition"><Tag size={28} /></div>
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gold/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-light/50 border-b border-gold/10">
                  <th className="px-10 py-8 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Product Details</th>
                  <th className="px-10 py-8 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Category</th>
                  <th className="px-10 py-8 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Price</th>
                  <th className="px-10 py-8 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Stock Status</th>
                  <th className="px-10 py-8 text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/5">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-primary-light/20 smooth-transition group">
                    <td className="px-10 py-10">
                      <div className="flex items-center space-x-6">
                        <div className="w-20 h-24 bg-primary-light rounded-xl overflow-hidden border border-gold/10 shadow-md shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-lg font-serif font-bold text-luxury-black mb-2 group-hover:text-gold smooth-transition">{product.name}</h4>
                          <span className="text-[10px] bg-primary-light px-3 py-1 rounded-full text-luxury-gray uppercase tracking-widest font-bold">ID: #00{product.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <span className="text-sm font-medium uppercase tracking-widest text-luxury-gray border border-gold/20 px-4 py-2 rounded-lg">{product.category}</span>
                    </td>
                    <td className="px-10 py-10 font-bold text-lg text-luxury-black">Rs. {product.price.toLocaleString()}</td>
                    <td className="px-10 py-10">
                      <div className="flex flex-col space-y-2">
                        <div className="w-32 h-2 bg-primary-light rounded-full overflow-hidden shadow-inner border border-gold/5">
                          <div 
                            className={`h-full rounded-full smooth-transition ${product.stock > 10 ? 'bg-green-400' : 'bg-orange-400'}`}
                            style={{ width: `${Math.min(100, (product.stock / 50) * 100)}%` }}
                          />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-gray italic">{product.stock} units remaining</span>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <div className="flex space-x-4">
                        <button className="p-4 bg-blue-50 text-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white smooth-transition shadow-sm"><Edit2 size={18} /></button>
                        <button onClick={() => deleteProduct(product.id)} className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white smooth-transition shadow-sm"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Product Modal */}
      <AnimatePresence>
        {isAddingProduct && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddingProduct(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[90vh] bg-primary-light rounded-t-[4rem] z-[110] shadow-2xl p-16 overflow-y-auto border-t-8 border-gold/10"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-20">
                  <h2 className="text-5xl font-serif font-bold text-luxury-black">Add New Fragrance</h2>
                  <button onClick={() => setIsAddingProduct(false)} className="p-6 bg-white rounded-full shadow-2xl hover:rotate-90 smooth-transition text-luxury-black"><X size={32} /></button>
                </div>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Product Name</label>
                      <div className="relative">
                        <FileText className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input className="w-full bg-white border border-gold/10 rounded-2xl px-16 py-6 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-lg font-medium smooth-transition" placeholder="Enter name" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Category</label>
                      <div className="relative">
                        <Tag className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <select className="w-full bg-white border border-gold/10 rounded-2xl px-16 py-6 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-lg font-medium smooth-transition appearance-none">
                          <option>Attar</option>
                          <option>Perfumes</option>
                          <option>Body Spray</option>
                          <option>Humidifiers</option>
                          <option>Surma</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Price (PKR)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input className="w-full bg-white border border-gold/10 rounded-2xl px-16 py-6 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-lg font-medium smooth-transition" placeholder="0.00" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Product Image</label>
                      <div className="relative">
                        <ImageIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input type="file" className="w-full bg-white border border-gold/10 rounded-2xl px-16 py-6 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-sm font-bold smooth-transition file:hidden" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gray">Full Description</label>
                    <textarea className="w-full bg-white border border-gold/10 rounded-3xl px-10 py-8 h-64 focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-xl text-lg font-medium smooth-transition" placeholder="Describe the scent notes, longevity, etc." />
                  </div>

                  <div className="pt-10 flex gap-6">
                    <button type="submit" className="flex-1 btn-luxury py-8 text-xl shadow-2xl flex items-center justify-center space-x-4">
                      <CheckCircle2 size={24} />
                      <span>PUBLISH PRODUCT</span>
                    </button>
                    <button type="button" onClick={() => setIsAddingProduct(false)} className="flex-1 btn-outline-luxury py-8 text-xl shadow-xl flex items-center justify-center space-x-4 border-red-200 text-red-400 hover:bg-red-500">
                      <AlertCircle size={24} />
                      <span>CANCEL</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminDashboard
