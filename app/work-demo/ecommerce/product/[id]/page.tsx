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
  Share2,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("Black")

  // Sample product data - in a real app this would come from an API
  const product = {
    id: parseInt(params.id),
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165ee0a?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    badge: "Best Seller",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Voice assistant compatible",
      "Foldable design for travel",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Silver", "Blue"],
  }

  // Related products
  const relatedProducts = [
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
      id: 5,
      name: "Wireless Bluetooth Speaker",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.5,
      reviews: 97,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      category: "Electronics",
      badge: "Popular",
    },
  ]

  // If product doesn't exist, show 404
  if (isNaN(product.id) || product.id < 1 || product.id > 8) {
    notFound()
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work Demo</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", name: "Dashboard", icon: ShoppingBag },
            { id: "products", name: "Products", icon: Tag },
            { id: "analytics", name: "Analytics", icon: TrendingUp },
            { id: "orders", name: "Orders", icon: ShoppingCart },
            { id: "customers", name: "Customers", icon: User },
            { id: "settings", name: "Settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={`/work-demo/${item.id}`}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === "products"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-foreground/10"
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
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <Link href="/work-demo/ecommerce" className="text-2xl font-bold flex items-center">
                <ChevronLeft size={20} className="mr-2" />
                Back to Products
              </Link>
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
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
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
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="bg-foreground/10 rounded-3xl p-8 mb-6">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-foreground/10 rounded-2xl p-4 border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-foreground/20 hover:border-foreground/40"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-foreground-secondary mb-2">{product.category}</div>
                  <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                </div>
                <button className="p-3 bg-foreground/10 rounded-full hover:bg-foreground/20">
                  <Heart size={20} />
                </button>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-foreground text-foreground"
                          : "text-foreground/20"
                      }
                    />
                  ))}
                </div>
                <span className="text-foreground-secondary ml-3">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center mb-8">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-foreground-secondary line-through text-xl ml-4">
                  ${product.originalPrice}
                </span>
                <span className="ml-4 px-3 py-1 bg-foreground/20 text-foreground rounded-full text-sm font-bold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>

              <p className="text-foreground-secondary mb-8 text-lg">{product.description}</p>

              {/* Size Selector */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-foreground/10 border-foreground/20 hover:bg-foreground/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-lg border transition-colors flex items-center ${
                        selectedColor === color
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-foreground/10 border-foreground/20 hover:bg-foreground/20"
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full bg-current mr-2"></span>
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center border border-foreground/20 rounded-lg">
                  <button onClick={decrementQuantity} className="p-3 hover:bg-foreground/10">
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-3">{quantity}</span>
                  <button onClick={incrementQuantity} className="p-3 hover:bg-foreground/10">
                    <Plus size={16} />
                  </button>
                </div>

                <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>

                <button className="p-3 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-foreground/20 pt-8">
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-foreground mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center p-4 bg-foreground/5 rounded-2xl">
                  <Truck className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-bold">Free Shipping</div>
                    <div className="text-sm text-foreground-secondary">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-foreground/5 rounded-2xl">
                  <Shield className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-bold">2 Year Warranty</div>
                    <div className="text-sm text-foreground-secondary">Guaranteed quality</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-foreground/5 rounded-2xl">
                  <RotateCcw className="text-primary mr-3" size={20} />
                  <div>
                    <div className="font-bold">30-Day Returns</div>
                    <div className="text-sm text-foreground-secondary">No questions asked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-2xl overflow-hidden border border-foreground/20 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="bg-foreground/10 h-64 flex items-center justify-center">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-foreground/10">
                      <Heart size={16} />
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {relatedProduct.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-foreground-secondary mb-2">
                      {relatedProduct.category}
                    </div>
                    <Link href={`/work-demo/ecommerce/product/${relatedProduct.id}`}>
                      <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h4>
                    </Link>

                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(relatedProduct.rating)
                                ? "fill-foreground text-foreground"
                                : "text-foreground/20"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground-secondary ml-2">
                        {relatedProduct.rating} ({relatedProduct.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold">${relatedProduct.price}</span>
                        <span className="text-foreground-secondary line-through text-sm ml-2">
                          ${relatedProduct.originalPrice}
                        </span>
                      </div>
                      <button className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
