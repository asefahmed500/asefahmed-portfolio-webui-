"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Bot, 
  FolderOpen, 
  Users, 
  Settings,
  Play,
  Star,
  CheckCircle,
  Lock,
  Globe,
  Shield,
  Phone,
  Mail,
  Cpu,
  Layers,
  Workflow
} from "lucide-react"
import Link from "next/link"

export default function WorkDemoLanding() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with minimal latency"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and customizable reporting dashboards"
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent virtual assistants powered by machine learning"
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Organize and track all your projects in one place"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless teamwork with role-based access controls"
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect with your favorite tools and services"
    }
  ]

  const products = [
    {
      id: "analytics",
      name: "Analytics Dashboard",
      description: "Comprehensive data visualization and business intelligence",
      icon: BarChart3,
      href: "/work-demo/analytics",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      description: "Intelligent virtual assistants for customer support",
      icon: Bot,
      href: "/work-demo/ai-agents",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "crm",
      name: "CRM System",
      description: "Customer relationship management platform",
      icon: Users,
      href: "/work-crm",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "hub",
      name: "Collaboration Hub",
      description: "Unified workspace for team communication and project management",
      icon: Layers,
      href: "/work-hub",
      color: "from-indigo-500 to-violet-500"
    },
    {
      id: "flow",
      name: "Process Automation",
      description: "Workflow automation and business process management",
      icon: Workflow,
      href: "/work-flow",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "ai-platform",
      name: "AI Platform",
      description: "Enterprise AI solutions and machine learning tools",
      icon: Cpu,
      href: "/work-ai",
      color: "from-gray-800 to-black"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "Work Demo has transformed how our team works. The analytics alone have helped us increase efficiency by 40%.",
      avatar: "SJ"
    },
    {
      icon: Star,
      name: "Michael Chen",
      role: "Product Manager at StartupX",
      content: "The onboarding process was seamless and the support team is exceptional. We've seen a 60% reduction in operational costs.",
      avatar: "MC"
    },
    {
      icon: CheckCircle,
      name: "Emma Rodriguez",
      role: "Director at Global Solutions",
      content: "Best investment we've made this year. The ROI was evident within the first quarter of implementation.",
      avatar: "ER"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1GB storage"
      ],
      cta: "Get Started",
      popular: false
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
        "AI Agents (limited)",
        "Team collaboration"
      ],
      cta: "Try Free for 14 Days",
      popular: true
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
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <CustomLogo />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work <span className="text-primary">Demo</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-foreground mb-12 max-w-4xl mx-auto"
          >
            A premium, component-based SaaS platform showcasing modern web applications with AI agents, analytics, and collaborative tools
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/work-demo/auth/signin">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 102, 255, 0.5), 0 10px 10px -5px rgba(0, 102, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-xl flex items-center"
              >
                Try Work Demo
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>
            
            <Link href="/work-demo/playground">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 217, 255, 0.5), 0 10px 10px -5px rgba(0, 217, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-accent to-cyan-400 text-white rounded-xl font-bold text-xl flex items-center"
              >
                <Play size={24} className="mr-3" />
                Launch Agent
              </motion.button>
            </Link>
          </motion.div>
          
          {isClient && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-8"
            >
              <div className="flex items-center">
                <Lock className="text-green-500 mr-3" size={24} />
                <span className="text-xl">Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-blue-500 mr-3" size={24} />
                <span className="text-xl">Global CDN</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-purple-500 mr-3" size={24} />
                <span className="text-xl">99.9% Uptime</span>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-8 h-12 border-2 border-foreground rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 bg-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Powerful <span className="text-primary">Features</span></h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Everything you need to build, deploy, and manage modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-background rounded-3xl p-10 border border-foreground/20 hover:border-primary transition-colors text-center"
                >
                  <div className="p-5 bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-8 mx-auto">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-foreground-secondary text-xl">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Explore Our <span className="text-primary">Products</span></h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Discover our suite of specialized tools designed to solve your business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-foreground/5 rounded-3xl p-10 border border-foreground/20 hover:border-primary transition-all group"
                >
                  <Link href={product.href} className="block">
                    <div className="flex items-start">
                      <div className={`p-5 bg-gradient-to-r ${product.color} rounded-2xl w-16 h-16 flex items-center justify-center text-white mr-6`}>
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-foreground-secondary text-xl mb-4">{product.description}</p>
                        <div className="flex items-center text-primary font-medium">
                          <span>Explore {product.name}</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Trusted by <span className="text-primary">Industry Leaders</span></h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon || Star
              return (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-background rounded-3xl p-10 border border-foreground/20"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary font-bold text-2xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl">{testimonial.name}</h3>
                      <p className="text-foreground-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                  <Icon className="text-yellow-400 mb-4" size={24} />
                  <p className="text-foreground-secondary text-xl">"{testimonial.content}"</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple, <span className="text-primary">Transparent</span> Pricing</h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Choose the plan that works best for you and your team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`rounded-3xl p-10 border border-foreground/20 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary ring-2 ring-primary/30 transform md:-translate-y-4' 
                    : 'bg-background'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-foreground-secondary text-xl">/{plan.period}</span>}
                </div>
                <p className="text-foreground-secondary text-xl mb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xl">
                      <CheckCircle className="text-green-500 mr-3" size={24} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/work-demo/auth/signin">
                  <button 
                    className={`w-full py-5 rounded-xl font-bold text-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent text-white' 
                        : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Your Workflow?</h2>
          <p className="text-2xl text-foreground-secondary mb-12 max-w-3xl mx-auto">
            Join thousands of teams who use Work Demo to build better products faster
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/work-demo/auth/signin">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 102, 255, 0.5), 0 10px 10px -5px rgba(0, 102, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-xl flex items-center"
              >
                Get Started Free
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>
            
            <Link href="/work-demo/playground">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 217, 255, 0.5), 0 10px 10px -5px rgba(0, 217, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground/10 text-foreground rounded-xl font-bold text-xl flex items-center"
              >
                <Play size={24} className="mr-3" />
                View Demo
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-foreground/20 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <CustomLogo />
              <span className="ml-4 text-2xl font-bold">Work Demo</span>
            </div>
            <p className="text-foreground-secondary text-xl">
              © {new Date().getFullYear()} Work Demo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}