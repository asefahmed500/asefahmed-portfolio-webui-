"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Phone,
  Mail,
  Calendar,
  Play,
  Star,
  CheckCircle,
  Lock,
  Globe,
  Shield,
  Settings,
  Menu,
  X,
  TrendingUp,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function WorkCRMLanding() {
  const [isClient, setIsClient] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description: "Centralize all your customer information in one place",
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Track performance with real-time sales dashboards",
    },
    {
      icon: Phone,
      title: "Call Logging",
      description: "Automatically log and track all customer interactions",
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Create and manage targeted email marketing campaigns",
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Schedule and manage meetings with ease",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate repetitive tasks and workflows",
    },
  ]

  const benefits = [
    {
      title: "Increase Sales Efficiency",
      description: "Streamline your sales process and close deals faster",
      icon: TrendingUp,
    },
    {
      title: "Improve Customer Relationships",
      description: "Deliver personalized experiences that drive loyalty",
      icon: Users,
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics",
      icon: BarChart3,
    },
  ]

  const testimonials = [
    {
      name: "John Smith",
      role: "Sales Director at GlobalTech",
      content:
        "Work CRM has increased our sales team's productivity by 50%. The automation features alone have saved us countless hours.",
      avatar: "JS",
    },
    {
      name: "Lisa Wang",
      role: "Marketing Manager at InnovateCo",
      content:
        "The email campaign tools are exceptional. We've seen a 70% increase in engagement since switching to Work CRM.",
      avatar: "LW",
    },
    {
      name: "Robert Johnson",
      role: "CEO at StartupX",
      content:
        "Best CRM investment we've made. The analytics provide insights we never had before, helping us make data-driven decisions.",
      avatar: "RJ",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started with CRM",
      features: [
        "Up to 1,000 contacts",
        "Basic contact management",
        "Email tracking",
        "Standard support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 10,000 contacts",
        "Advanced analytics",
        "Automation workflows",
        "Priority support",
        "Custom fields",
        "API access",
      ],
      cta: "Try Free for 14 Days",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited contacts",
        "Custom automation",
        "Dedicated account manager",
        "24/7 premium support",
        "Advanced security",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="bg-background border-b border-foreground/20 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <Link href="/" className="flex items-center">
                <CustomLogo />
                <span className="ml-2 text-xl font-bold">
                  Work <span className="text-foreground">CRM</span>
                </span>
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-8">
              <a
                href="#features"
                className="text-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-foreground hover:text-foreground transition-colors"
              >
                Benefits
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/work-crm/signin">
                <button className="px-4 py-2 text-foreground hover:text-foreground transition-colors">
                  Sign In
                </button>
              </Link>
              <Link href="/work-crm/signup">
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-primary/90 hover:to-accent/90 transition-all">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative bg-background w-80 h-full shadow-xl border-r border-foreground/20">
          <div className="p-5 border-b border-foreground/20 flex justify-between items-center">
            <div className="flex items-center">
              <CustomLogo />
              <span className="ml-2 text-xl font-bold">
                Work <span className="text-foreground">CRM</span>
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="p-5 space-y-4">
            <a
              href="#features"
              className="block py-2 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Features
            </a>
            <a
              href="#benefits"
              className="block py-2 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="block py-2 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Testimonials
            </a>
            <Link
              href="/work-crm/signin"
              className="block py-2 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-16">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="relative z-10 text-center max-w-6xl px-4">
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Customer <span className="text-primary">Relationship</span> Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-foreground mb-12 max-w-4xl mx-auto"
          >
            Transform how you manage customer relationships with our intelligent CRM platform
            designed for modern businesses
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/work-crm/signup">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(16, 185, 129, 0.5), 0 10px 10px -5px rgba(16, 185, 129, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-xl flex items-center"
              >
                Start Free Trial
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>

            <Link href="#demo">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 217, 255, 0.5), 0 10px 10px -5px rgba(0, 217, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-accent to-cyan-400 text-white rounded-xl font-bold text-xl flex items-center"
              >
                <Play size={24} className="mr-3" />
                View Demo
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
                <Lock className="text-foreground mr-3" size={24} />
                <span className="text-xl">Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-foreground mr-3" size={24} />
                <span className="text-xl">Global Infrastructure</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-foreground mr-3" size={24} />
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
      <section id="features" className="py-32 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful <span className="text-primary">CRM Features</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Everything you need to manage customer relationships and drive sales growth
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

      {/* Benefits Section */}
      <section id="benefits" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Proven <span className="text-primary">Business Benefits</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              See how Work CRM delivers measurable results for businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-foreground/5 rounded-3xl p-10 border border-foreground/20 text-center"
                >
                  <div className="p-5 bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-8 mx-auto">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-foreground-secondary text-xl">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted by <span className="text-primary">Sales Teams</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Join thousands of sales professionals who have transformed their performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
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
                <Star className="text-foreground mb-4" size={24} />
                <p className="text-foreground-secondary text-xl">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Choose the plan that works best for your sales team and customer base
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
                    ? "bg-gradient-to-br from-primary/10 to-foreground/10 border-primary ring-2 ring-primary/30 transform md:-translate-y-4"
                    : "bg-background"
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
                  {plan.period && (
                    <span className="text-foreground-secondary text-xl">/{plan.period}</span>
                  )}
                </div>
                <p className="text-foreground-secondary text-xl mb-8">{plan.description}</p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xl">
                      <CheckCircle className="text-foreground mr-3" size={24} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/work-crm/signup">
                  <button
                    className={`w-full py-5 rounded-xl font-bold text-xl ${
                      plan.popular
                        ? "bg-gradient-to-r from-foreground to-foreground/80 text-background"
                        : "bg-foreground/10 text-foreground hover:bg-foreground/20"
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
      <section className="py-32 bg-gradient-to-r from-foreground to-foreground/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Transform Your Sales Process Today
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses driving growth with intelligent customer relationship
            management
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/work-crm/signup">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-background rounded-xl font-bold text-xl flex items-center"
              >
                Start Free Trial
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>

            <Link href="#demo">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(255, 255, 255, 0.3), 0 10px 10px -5px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/20 text-white rounded-xl font-bold text-xl flex items-center"
              >
                <Play size={24} className="mr-3" />
                Schedule Demo
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
              <span className="ml-4 text-2xl font-bold">
                Work <span className="text-foreground">CRM</span>
              </span>
            </div>
            <p className="text-foreground-secondary text-xl">
              © {new Date().getFullYear()} Work CRM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
