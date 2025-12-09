"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Settings,
  ArrowRight,
  Play,
  Star as StarIcon,
  Check,
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Lock,
  Key,
} from "lucide-react"
import Link from "next/link"

export function SaasDemo() {
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

  return (
    <section id="saas" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">SaaS</span> Platform
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Complete business solution with analytics, user management, and enterprise features
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative py-32 overflow-hidden mb-20 rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/5 border border-foreground/20">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-foreground/3"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-bold mb-8">
                  Transform Your Business with <span className="text-foreground">Modern SaaS</span>
                </h3>
                <p className="text-2xl text-foreground-secondary mb-12 max-w-2xl">
                  All-in-one platform to streamline operations, boost productivity, and drive growth
                  for businesses of all sizes.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="px-10 py-5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors flex items-center text-xl">
                    Start Free Trial
                    <ArrowRight size={24} className="ml-3" />
                  </button>
                  <button className="px-10 py-5 bg-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/20 transition-colors flex items-center text-xl">
                    <Play size={24} className="mr-3" />
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center mt-12">
                  <div className="flex -space-x-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground/20 rounded-full w-14 h-14 border-4 border-background"
                      ></div>
                    ))}
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-2xl">Join 50,000+ satisfied customers</div>
                    <div className="flex items-center text-foreground-secondary text-xl mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-3">4.9/5 from 2,500+ reviews</span>
                    </div>
                  </div>
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
                  <div className="bg-background rounded-2xl p-8 border border-foreground/20 shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                      <div className="font-bold text-2xl">Dashboard Overview</div>
                      <div className="flex space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="bg-foreground/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold">142%</div>
                        <div className="text-lg text-foreground-secondary">Growth</div>
                      </div>
                      <div className="bg-foreground/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold">98%</div>
                        <div className="text-lg text-foreground-secondary">Uptime</div>
                      </div>
                      <div className="bg-foreground/10 rounded-2xl p-6">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-lg text-foreground-secondary">Support</div>
                      </div>
                    </div>
                    <div className="bg-foreground/5 rounded-2xl h-48 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-foreground/5 rounded-3xl p-10 border border-foreground/20 hover:border-foreground transition-colors"
              >
                <div className="p-5 bg-foreground/10 rounded-2xl w-16 h-16 flex items-center justify-center text-foreground mb-8">
                  <Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-foreground-secondary text-xl">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-foreground/5 rounded-3xl p-16 border border-foreground/20 mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-foreground-secondary text-xl">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 border border-foreground/20"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center text-foreground font-bold text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                    <p className="text-foreground-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <StarIcon className="text-yellow-400 mb-4" size={24} />
                <p className="text-foreground-secondary text-xl">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Code size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Developer Tools</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Palette size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Design System</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Mobile Ready</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Database size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Data Storage</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cloud size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Cloud Sync</p>
          </div>
        </div>

        {/* View Full Demo Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <Link href="/work-demo/saas">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full SaaS Demo
            </motion.button>
          </Link>

          <Link href="/work-demo/saas/dashboard">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground/10 text-foreground rounded-xl font-bold text-lg"
            >
              View Dashboard
            </motion.button>
          </Link>

          <Link href="/work-demo/saas/product/1">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground/10 text-foreground rounded-xl font-bold text-lg"
            >
              View Product Detail
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
