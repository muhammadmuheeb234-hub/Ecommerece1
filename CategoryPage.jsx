import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, ChevronRight, Eye, ShoppingCart } from 'lucide-react'
import { allProducts } from '../utils/productData'

const CategoryPage = () => {
  const { slug } = useParams()
  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ') : 'All Products'

  const products = allProducts;

  const filteredProducts = slug === 'all' ? products : products.filter(p => p.category.toLowerCase().replace(' ', '-') === slug)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary-light py-20"
    >
      {/* Category Hero */}
      <div className="bg-[#FAF3E0] py-24 mb-16 border-y border-gold/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.nav 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] mb-8 text-luxury-gray flex justify-center items-center space-x-3"
          >
            <Link to="/" className="hover:text-gold smooth-transition">Home</Link>
            <ChevronRight size={12} />
            <span className="text-luxury-black font-bold">{categoryName}</span>
          </motion.nav>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6"
          >
            {categoryName}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-32 h-1 bg-gold mx-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 flex items-center space-x-2 border-b border-gold/20 pb-4">
                <Filter size={18} className="text-gold" />
                <span>Categories</span>
              </h3>
              <ul className="space-y-4">
                {['Attar', 'Perfumes', 'Body Spray', 'Humidifiers', 'Surma', 'Tesbih', 'Jai Namaz', 'Other Items'].map((cat) => (
                  <li key={cat}>
                    <Link 
                      to={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                      className={`text-sm uppercase tracking-widest hover:text-gold smooth-transition flex items-center justify-between ${
                        slug === cat.toLowerCase().replace(' ', '-') ? 'text-gold font-bold' : 'text-luxury-gray'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[10px] bg-gold/10 px-2 py-0.5 rounded-full">(12)</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 flex items-center space-x-2 border-b border-gold/20 pb-4">
                <SlidersHorizontal size={18} className="text-gold" />
                <span>Filter By Price</span>
              </h3>
              <div className="space-y-4 px-2">
                <input type="range" className="w-full accent-gold" min="0" max="10000" />
                <div className="flex justify-between text-xs uppercase tracking-widest font-bold text-luxury-black">
                  <span>Rs. 0</span>
                  <span>Rs. 10,000</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gold/10">
              <p className="text-sm text-luxury-gray italic uppercase tracking-widest">
                Showing <span className="text-luxury-black font-bold">{filteredProducts.length}</span> results for <span className="text-luxury-black font-bold italic">"{categoryName}"</span>
              </p>
              <select className="bg-transparent border border-gold/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold text-luxury-black font-medium uppercase tracking-widest">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center space-y-6 bg-white rounded-3xl shadow-inner border border-dashed border-gold/30">
                  <div className="text-gold flex justify-center"><Filter size={48} strokeWidth={1} /></div>
                  <h3 className="text-2xl font-serif font-bold text-luxury-black">No Products Found</h3>
                  <p className="text-luxury-gray italic tracking-widest uppercase text-xs">We're working on adding more exquisite items soon!</p>
                  <Link to="/" className="btn-luxury inline-block">Return Home</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
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

export default CategoryPage
