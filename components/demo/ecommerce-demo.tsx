"use client"

import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  Star,
  ArrowRight,
  Play,
  Star as StarIcon,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
} from "lucide-react"
import Link from "next/link"

export function EcommerceDemo() {
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
      badge: "Best Seller",
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
      badge: "Sale",
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
      badge: "New",
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
      badge: "Limited",
    },
  ]

  return (
    <section id="ecommerce" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            E-<span className="text-foreground">Commerce</span> Platform
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Modern shopping experience with product listings, cart functionality, and seamless
            checkout
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative py-32 overflow-hidden mb-20 rounded-3xl bg-gradient-to-r from-foreground/10 to-foreground/10 border border-foreground/20">
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-bold mb-8">
                  Elevate Your <span className="text-foreground">Shopping</span> Experience
                </h3>
                <p className="text-2xl text-foreground-secondary mb-12 max-w-2xl">
                  Discover premium products with seamless shopping and fast delivery. Our platform
                  offers the best deals and exclusive items.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="px-10 py-5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors text-xl">
                    Shop Now
                  </button>
                  <button className="px-10 py-5 bg-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/20 transition-colors text-xl">
                    View Deals
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-foreground/20 to-foreground/20 rounded-3xl p-10 backdrop-blur-sm border border-foreground/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-foreground/5 rounded-2xl h-48 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="bg-foreground/5 rounded-2xl h-72 mt-12 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="bg-foreground/5 rounded-2xl h-60 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="bg-foreground/5 rounded-2xl h-40 mt-6 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Categories and Filters */}
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-2">Featured Products</h3>
            <p className="text-foreground-secondary text-xl">Handpicked selections just for you</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <div className="flex items-center bg-foreground/5 rounded-full p-2 border border-foreground/20">
              <button className="p-2 rounded-full bg-foreground text-background">
                <Grid size={20} />
              </button>
              <button className="p-2 rounded-full bg-foreground/10">
                <List size={20} />
              </button>
            </div>
            <div className="flex items-center bg-foreground/5 rounded-full p-2 border border-foreground/20">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {[
            { name: "Electronics", count: "1,240", icon: "🔌" },
            { name: "Fashion", count: "2,890", icon: "👕" },
            { name: "Home", count: "1,560", icon: "🏠" },
            { name: "Beauty", count: "980", icon: "💄" },
            { name: "Sports", count: "750", icon: "⚽" },
            { name: "Books", count: "1,320", icon: "📚" },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-6 border border-foreground/20 shadow-sm text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                {category.icon}
              </div>
              <h4 className="font-bold text-lg mb-1">{category.name}</h4>
              <p className="text-foreground-secondary">{category.count} items</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-background rounded-3xl overflow-hidden border border-foreground/20 hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={`/work-demo/ecommerce/product/${product.id}`}>
                <div className="relative">
                  <div className="bg-foreground/10 h-72 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <button className="absolute top-6 right-6 p-3 bg-foreground/10 rounded-full shadow-md hover:bg-foreground/20">
                    <Heart size={20} />
                  </button>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-foreground text-background text-sm font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-8">
                <div className="text-lg text-foreground-secondary mb-2">{product.category}</div>
                <Link href={`/work-demo/ecommerce/product/${product.id}`}>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors cursor-pointer">
                    {product.name}
                  </h4>
                </Link>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-foreground/20"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-lg text-foreground-secondary ml-3">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${product.price}</span>
                    <span className="text-foreground-secondary line-through text-lg ml-3">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 bg-foreground/10 rounded-lg">1</span>
                    <button className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <Link href={`/work-demo/ecommerce/product/${product.id}`}>
                  <button className="w-full mt-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 flex items-center justify-center">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-demo/ecommerce">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full E-Commerce Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
