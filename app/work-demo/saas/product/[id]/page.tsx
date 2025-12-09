"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  BarChart3, 
  Users, 
  Settings, 
  Menu, 
  X,
  Star,
  Check,
  ArrowLeft,
  Share2,
  Heart,
  ShoppingCart,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Mock product data
  const product = {
    id: params.id,
    name: "Advanced Analytics Suite",
    tagline: "Powerful insights for data-driven decisions",
    description: "Our Advanced Analytics Suite provides comprehensive business intelligence with real-time dashboards, predictive analytics, and customizable reporting. Transform your raw data into actionable insights with our intuitive platform.",
    price: "$49",
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reporting",
      "Data visualization",
      "API integrations",
      "24/7 support"
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  }

  // Related products
  const relatedProducts = [
    {
      id: "1",
      name: "Customer Insights Pro",
      price: "$39",
      rating: 4.7
    },
    {
      id: "2",
      name: "Marketing Automation",
      price: "$59",
      rating: 4.9
    },
    {
      id: "3",
      name: "Sales Forecasting",
      price: "$45",
      rating: 4.6
    }
  ]

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 top-16 z-40 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/saas" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">SaaS Platform</span>
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
            { id: 'overview', name: 'Overview', icon: BarChart3 },
            { id: 'analytics', name: 'Analytics', icon: BarChart3 },
            { id: 'users', name: 'Users', icon: Users },
            { id: 'settings', name: 'Settings', icon: Settings }
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={`/work-demo/saas/${item.id}`}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === 'overview' 
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
              <Link href="/work-demo/saas" className="flex items-center text-foreground/80 hover:text-foreground">
                <ArrowLeft size={20} className="mr-2" />
                Back to Products
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <Share2 size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/20 mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                  <span className="text-foreground/50">Product Image {selectedImage + 1}</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-foreground/5 rounded-xl p-4 border border-foreground/20 ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-foreground-secondary text-xl mb-6">{product.tagline}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${i < Math.floor(product.rating) ? 'fill-foreground text-foreground' : 'text-foreground/30'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 font-medium">{product.rating}</span>
                <span className="mx-2 text-foreground/50">•</span>
                <span className="text-foreground/70">{product.reviewCount} reviews</span>
              </div>
              
              <p className="text-foreground-secondary mb-8">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-foreground mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between p-6 bg-foreground/5 rounded-2xl border border-foreground/20">
                <div>
                  <div className="text-3xl font-bold">{product.price}</div>
                  <div className="text-foreground-secondary">per month</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-foreground/20 rounded-lg">
                    <button 
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-foreground/10"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-foreground/10"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ y: -5 }}
                  className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20"
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < Math.floor(relatedProduct.rating) ? 'fill-foreground text-foreground' : 'text-foreground/30'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-sm">{relatedProduct.rating}</span>
                  </div>
                  <div className="text-xl font-bold">{relatedProduct.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}