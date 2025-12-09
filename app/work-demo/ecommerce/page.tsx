"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ArrowRight, 
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  Menu,
  X,
  User,
  ShoppingBag,
  Tag,
  TrendingUp,
  Eye,
  ChevronLeft,
  ChevronRight,
  Settings
} from "lucide-react"
import Link from "next/link"

export default function EcommerceLanding() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [cartItems, setCartItems] = useState(3)

  // Sample product data for e-commerce
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      category: "Wearables",
      badge: "Sale"
    },
    {
      id: 3,
      name: "Minimalist Backpack",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "Accessories",
      badge: "New"
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 349.99,
      originalPrice: 499.99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=400&fit=crop",
      category: "Furniture",
      badge: "Limited"
    },
    {
      id: 5,
      name: "Wireless Bluetooth Speaker",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.5,
      reviews: 97,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: 159.99,
      originalPrice: 219.99,
      rating: 4.4,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
      category: "Accessories",
      badge: "Trending"
    },
    {
      id: 7,
      name: "Smart Home Hub",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.3,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1555402720-3d5b7c062cb0?w=400&h=400&fit=crop",
      category: "Smart Home",
      badge: "Sale"
    },
    {
      id: 8,
      name: "Leather Wallet",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1622925289792-9d3f0e3f4d6a?w=400&h=400&fit=crop",
      category: "Accessories",
      badge: "Best Seller"
    }
  ]

  const categories = [
    { name: "Electronics", count: "1,240", icon: "🔌" },
    { name: "Fashion", count: "2,890", icon: "👕" },
    { name: "Home", count: "1,560", icon: "🏠" },
    { name: "Beauty", count: "980", icon: "💄" },
    { name: "Sports", count: "750", icon: "⚽" },
    { name: "Books", count: "1,320", icon: "📚" }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work Demo</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: ShoppingBag },
            { id: 'products', name: 'Products', icon: Tag },
            { id: 'analytics', name: 'Analytics', icon: TrendingUp },
            { id: 'orders', name: 'Orders', icon: ShoppingCart },
            { id: 'customers', name: 'Customers', icon: User },
            { id: 'settings', name: 'Settings', icon: Settings }
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={`/work-demo/${item.id}`}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === 'products' 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground hover:bg-foreground/10'
                }`}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-foreground/20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                className="lg:hidden mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold">E-Commerce Platform</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 bg-foreground/5 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button className="p-2 rounded-full hover:bg-foreground/10 relative">
                <ShoppingCart size={20} />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              
              <div className="flex items-center">
                <div className="bg-foreground/20 rounded-full w-8 h-8 mr-2"></div>
                <span className="font-medium hidden md:inline">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden mb-12 rounded-3xl bg-gradient-to-r from-black/10 to-gray-800/10 border border-foreground/20">
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-800/5"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Premium <span className="text-primary">E-Commerce</span> Experience
                  </h2>
                  <p className="text-xl text-foreground-secondary mb-8 max-w-2xl">
                    Discover our curated collection of premium products with seamless shopping and fast delivery.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors text-lg">
                      Shop Now
                    </button>
                    <button className="px-8 py-4 bg-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/20 transition-colors text-lg">
                      View Deals
                    </button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-black/20 to-gray-800/20 rounded-3xl p-8 backdrop-blur-sm border border-foreground/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-foreground/5 rounded-2xl h-32 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                      </div>
                      <div className="bg-foreground/5 rounded-2xl h-48 mt-6 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                      </div>
                      <div className="bg-foreground/5 rounded-2xl h-40 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                      </div>
                      <div className="bg-foreground/5 rounded-2xl h-32 mt-4 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Categories and Filters */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Featured Products</h3>
              <p className="text-foreground-secondary">Handpicked selections just for you</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <div className="flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/20">
                <button 
                  className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-foreground/10'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-foreground/10'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
              <div className="flex items-center bg-foreground/5 rounded-full p-1 border border-foreground/20">
                <button className="p-2 rounded-full bg-foreground/10">
                  <Filter size={20} />
                </button>
                <button className="p-2 rounded-full bg-foreground/10">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-background rounded-2xl p-4 border border-foreground/20 shadow-sm text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="bg-foreground/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">
                  {category.icon}
                </div>
                <h4 className="font-bold text-sm mb-1">{category.name}</h4>
                <p className="text-foreground-secondary text-xs">{category.count} items</p>
              </motion.div>
            ))}
          </div>
          
          {/* Products */}
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "space-y-6"
          }>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`bg-background rounded-2xl overflow-hidden border border-foreground/20 hover:shadow-xl transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <div className="bg-foreground/10 h-64 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-foreground/10">
                    <Heart size={16} />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <div className="text-sm text-foreground-secondary mb-2">{product.category}</div>
                  <Link href={`/work-demo/ecommerce/product/${product.id}`}>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h4>
                  </Link>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-foreground/20"} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground-secondary ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold">${product.price}</span>
                      <span className="text-foreground-secondary line-through text-sm ml-2">
                        ${product.originalPrice}
                      </span>
                    </div>
                    {viewMode === 'grid' && (
                      <div className="flex items-center space-x-1">
                        <button className="p-1 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                          <Minus size={14} />
                        </button>
                        <span className="px-2 py-1 bg-foreground/10 rounded-lg text-sm">1</span>
                        <button className="p-1 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center justify-center">
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </button>
                    <button className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20">
                <ChevronLeft size={20} />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    page === 1 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-foreground/10 hover:bg-foreground/20'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}