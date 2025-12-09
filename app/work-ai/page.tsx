"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Play,
  Star,
  CheckCircle,
  Lock,
  Globe,
  Shield,
  Settings,
  Menu,
  X,
  Bot,
  Brain,
  Cpu,
  MessageSquare,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function WorkAILanding() {
  const [isClient, setIsClient] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent virtual assistants that understand context and intent",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and improve over time",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors with high accuracy",
    },
    {
      icon: Cpu,
      title: "Natural Language Processing",
      description: "Understand and generate human-like text",
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Engage users in natural, meaningful conversations",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process information and respond instantly",
    },
  ]

  const useCases = [
    {
      title: "Customer Support Automation",
      description:
        "Reduce response times and improve customer satisfaction with AI-powered support agents",
      icon: Bot,
    },
    {
      title: "Content Generation",
      description: "Create high-quality content at scale with our advanced language models",
      icon: Brain,
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with predictive modeling",
      icon: BarChart3,
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent workflow automation",
      icon: Cpu,
    },
  ]

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "AI Director at InnovateAI",
      content:
        "Work AI has transformed our content creation process. We've increased productivity by 300% while maintaining quality.",
      avatar: "AT",
    },
    {
      name: "Jennifer Park",
      role: "CTO at DataDriven Corp",
      content:
        "The predictive analytics capabilities have given us a competitive edge in market forecasting.",
      avatar: "JP",
    },
    {
      name: "Marcus Johnson",
      role: "Operations Manager at GlobalTech",
      content:
        "Process automation has reduced our manual workload by 70%, allowing our team to focus on strategic initiatives.",
      avatar: "MJ",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for individuals and small teams getting started with AI",
      features: ["100K API calls/month", "Basic AI models", "Standard support", "5GB storage"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "1M API calls/month",
        "Advanced AI models",
        "Priority support",
        "100GB storage",
        "Custom model training",
        "Workflow automation",
      ],
      cta: "Try Free for 14 Days",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex AI requirements",
      features: [
        "Unlimited API calls",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited storage",
        "On-premise deployment",
        "SLA guarantee",
        "Dedicated account manager",
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
                  Work <span className="text-foreground">AI</span>
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
                href="#use-cases"
                className="text-foreground hover:text-foreground transition-colors"
              >
                Use Cases
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
              <Link href="/work-ai/signin">
                <button className="px-4 py-2 text-foreground hover:text-foreground transition-colors">
                  Sign In
                </button>
              </Link>
              <Link href="/work-ai/signup">
                <button className="px-6 py-2 bg-gradient-to-r from-foreground to-foreground/80 text-background rounded-lg hover:from-foreground/90 hover:to-foreground/80/90 transition-all">
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
          <div className="p-6 flex justify-between items-center border-b border-foreground/20">
            <div className="flex items-center">
              <CustomLogo />
              <span className="ml-2 text-xl font-bold">
                Work <span className="text-foreground">AI</span>
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="p-6">
            <a
              href="#features"
              className="block py-3 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="block py-3 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="block py-3 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block py-3 text-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Testimonials
            </a>
            <Link
              href="/work-ai/signin"
              className="block py-3 text-foreground hover:text-foreground transition-colors"
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
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-foreground/30 to-foreground/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-foreground/20 to-foreground/30 rounded-full blur-3xl"
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
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-foreground/25 to-foreground/35 rounded-full blur-3xl"
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
            Work <span className="text-foreground">AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-foreground mb-12 max-w-4xl mx-auto"
          >
            Advanced AI-powered automation and workflow management for enterprise applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/work-ai/signup">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-foreground to-foreground/80 text-background rounded-xl font-bold text-xl flex items-center"
              >
                Get Started Free
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>

            <Link href="#features">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground/10 text-foreground rounded-xl font-bold text-xl flex items-center"
              >
                <Zap size={24} className="mr-3" />
                View Features
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
              Powerful <span className="text-foreground">AI Features</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Cutting-edge artificial intelligence capabilities designed to transform your business
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature: any, index: number) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-background rounded-3xl p-10 border border-foreground/20 hover:border-foreground transition-colors"
                >
                  <div className="p-5 bg-foreground/10 rounded-2xl w-16 h-16 flex items-center justify-center text-foreground mb-8">
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

      {/* Use Cases Section */}
      <section id="use-cases" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Real-World <span className="text-foreground">Use Cases</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              See how businesses like yours are leveraging our AI platform to drive innovation and
              growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {useCases.map((useCase: any, index: number) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-foreground/5 rounded-3xl p-10 border border-foreground/20"
                >
                  <div className="flex items-start">
                    <div className="p-4 bg-foreground/10 rounded-2xl w-16 h-16 flex items-center justify-center text-foreground mr-6">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                      <p className="text-foreground-secondary text-xl">{useCase.description}</p>
                    </div>
                  </div>
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
              Trusted by <span className="text-foreground">Industry Leaders</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Join thousands of satisfied customers who have transformed their workflow with our AI
              platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background rounded-3xl p-10 border border-foreground/20"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center text-foreground font-bold text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">{testimonial.name}</h3>
                    <p className="text-foreground-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <Star className="text-yellow-400 mb-4" size={24} />
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
              Simple, <span className="text-foreground">Transparent</span> Pricing
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Choose the plan that works best for your team with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan: any, index: number) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`bg-background rounded-3xl p-10 border border-foreground/20 relative ${
                  plan.popular ? "ring-2 ring-foreground" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-foreground text-background px-6 py-2 rounded-full font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-foreground-secondary text-xl"> {plan.period}</span>
                    )}
                  </div>
                  <p className="text-foreground-secondary text-xl">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature: any, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-foreground mr-3" size={20} />
                      <span className="text-foreground-secondary text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/work-ai/signup">
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg ${
                      plan.popular
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                    } transition-colors`}
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
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-background">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-2xl text-background/90 mb-12 max-w-3xl mx-auto">
            Join thousands of teams who use Work AI to build better products faster
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/work-ai/signup">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(255, 255, 255, 0.3), 0 10px 10px -5px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-background text-foreground rounded-xl font-bold text-xl flex items-center"
              >
                Get Started Free
                <ArrowRight size={24} className="ml-3" />
              </motion.button>
            </Link>

            <Link href="#features">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-background/20 text-background rounded-xl font-bold text-xl flex items-center"
              >
                <Play size={24} className="mr-3" />
                Watch Demo
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
              <span className="ml-4 text-2xl font-bold">Work AI</span>
            </div>
            <p className="text-foreground-secondary text-xl">
              © {new Date().getFullYear()} Work AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
