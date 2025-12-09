"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Settings,
  ArrowRight,
  Play,
  Star,
  Check,
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Lock,
  Key,
  Menu,
  X,
  User,
  ShoppingBag,
  Tag,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Download,
  MoreVertical,
  Search,
  Bell,
  FolderOpen,
} from "lucide-react"
import Link from "next/link"

export default function SaasLanding() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // SaaS features
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with minimal latency",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and customizable reporting dashboards",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "99.9% uptime with worldwide content delivery network",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless teamwork with role-based access controls",
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect with your favorite tools and services",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content:
        "This platform has transformed how our team works. The analytics alone have helped us increase efficiency by 40%.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at StartupX",
      content:
        "The onboarding process was seamless and the support team is exceptional. We've seen a 60% reduction in operational costs.",
      avatar: "MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Director at Global Solutions",
      content:
        "Best investment we've made this year. The ROI was evident within the first quarter of implementation.",
      avatar: "ER",
    },
  ]

  // Pricing plans
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals getting started",
      features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for growing teams",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
        "Team collaboration",
      ],
      cta: "Try Free for 14 Days",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
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
            { id: "dashboard", name: "Dashboard", icon: BarChart3 },
            { id: "projects", name: "Projects", icon: FolderOpen },
            { id: "analytics", name: "Analytics", icon: TrendingUp },
            { id: "team", name: "Team", icon: Users },
            { id: "settings", name: "Settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={`/work-demo/${item.id}`}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === "dashboard"
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
              <h1 className="text-2xl font-bold">SaaS Platform</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-foreground/5 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button className="p-2 rounded-lg hover:bg-foreground/10 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 bg-foreground text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
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
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden mb-12 rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/20">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Transform Your Business with <span className="text-primary">Modern SaaS</span>
                  </h2>
                  <p className="text-xl text-foreground-secondary mb-8 max-w-2xl">
                    All-in-one platform to streamline operations, boost productivity, and drive
                    growth for businesses of all sizes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center text-lg">
                      Start Free Trial
                      <ArrowRight size={20} className="ml-2" />
                    </button>
                    <button className="px-8 py-4 bg-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/20 transition-colors flex items-center text-lg">
                      <Play size={20} className="mr-2" />
                      Watch Demo
                    </button>
                  </div>
                  <div className="flex items-center mt-8">
                    <div className="flex -space-x-4">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-foreground/20 rounded-full w-12 h-12 border-4 border-background"
                        ></div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold">Join 50,000+ satisfied customers</div>
                      <div className="flex items-center text-foreground-secondary mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-foreground text-foreground" />
                          ))}
                        </div>
                        <span className="ml-2">4.9/5 from 2,500+ reviews</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-black/20 to-gray-800/20 rounded-3xl p-8 backdrop-blur-sm border border-foreground/20">
                    <div className="bg-background rounded-2xl p-6 border border-foreground/20 shadow-xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="font-bold">Dashboard Overview</div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-foreground rounded-full"></div>
                          <div className="w-3 h-3 bg-foreground rounded-full"></div>
                          <div className="w-3 h-3 bg-foreground rounded-full"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-primary/10 rounded-2xl p-4">
                          <div className="text-2xl font-bold">142%</div>
                          <div className="text-sm text-foreground-secondary">Growth</div>
                        </div>
                        <div className="bg-gray-800/10 rounded-2xl p-4">
                          <div className="text-2xl font-bold">98%</div>
                          <div className="text-sm text-foreground-secondary">Uptime</div>
                        </div>
                        <div className="bg-gray-700/10 rounded-2xl p-4">
                          <div className="text-2xl font-bold">24/7</div>
                          <div className="text-sm text-foreground-secondary">Support</div>
                        </div>
                      </div>
                      <div className="bg-foreground/5 rounded-2xl h-40 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Powerful Features</h3>
              <p className="text-foreground-secondary text-xl max-w-3xl mx-auto">
                Everything you need to manage your business efficiently and scale with confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 hover:border-primary transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center text-primary mb-4">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-foreground-secondary">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h3>
              <p className="text-foreground-secondary text-xl max-w-3xl mx-auto">
                Choose the plan that works best for your team with no hidden fees
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`bg-background rounded-2xl p-6 border border-foreground/20 relative ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                    <div className="mb-3">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-foreground-secondary"> {plan.period}</span>
                      )}
                    </div>
                    <p className="text-foreground-secondary">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-primary mr-2" size={16} />
                        <span className="text-foreground-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-bold ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                    } transition-colors`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-foreground/5 rounded-3xl p-12 border border-foreground/20 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
              <p className="text-foreground-secondary text-xl">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-background rounded-2xl p-6 border border-foreground/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold text-lg mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-foreground-secondary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <Star className="text-foreground mb-3" size={16} />
                  <p className="text-foreground-secondary">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="text-center">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Code size={24} className="text-primary" />
              </div>
              <p className="font-medium text-sm">Developer Tools</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Palette size={24} className="text-primary" />
              </div>
              <p className="font-medium text-sm">Design System</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Smartphone size={24} className="text-primary" />
              </div>
              <p className="font-medium text-sm">Mobile Ready</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Database size={24} className="text-primary" />
              </div>
              <p className="font-medium text-sm">Data Storage</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Cloud size={24} className="text-primary" />
              </div>
              <p className="font-medium text-sm">Cloud Sync</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
