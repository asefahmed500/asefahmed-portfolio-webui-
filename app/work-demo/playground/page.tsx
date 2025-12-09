"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  Play,
  Pause,
  Square,
  Zap,
  BarChart3,
  Bot,
  FolderOpen,
  Users,
  Settings,
  MousePointer,
  Sparkles,
  Cpu,
  Brain,
  RotateCcw,
  Maximize2,
  Palette,
} from "lucide-react"
import Link from "next/link"

export default function PlaygroundPage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  // Framer Motion values for reactive animations
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Update motion values for reactive animations
      x.set(e.clientX - window.innerWidth / 2)
      y.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  // Toggle animation play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Handle card hover with 3D effect
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 15
    const rotateX = ((centerY - y) / centerY) * 15

    // Apply rotation directly for immediate feedback
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeaveCard = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const components = [
    {
      id: "3d-card",
      name: "3D Interactive Card",
      description: "Hover to see 3D transformation effects",
      icon: MousePointer,
    },
    {
      id: "particle-system",
      name: "Particle System",
      description: "Animated particle effects with physics",
      icon: Sparkles,
    },
    {
      id: "morphing-shapes",
      name: "Morphing Shapes",
      description: "Continuous shape transformation animations",
      icon: Cpu,
    },
    {
      id: "ai-stream",
      name: "AI Output Stream",
      description: "Simulated AI response streaming",
      icon: Brain,
    },
    {
      id: "data-visualization",
      name: "Data Visualization",
      description: "Interactive charts and graphs",
      icon: BarChart3,
    },
    {
      id: "agent-interface",
      name: "Agent Interface",
      description: "AI agent workspace UI",
      icon: Bot,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-16">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/work-demo" className="flex items-center mr-6">
                <CustomLogo />
                <span className="ml-2 text-xl font-bold">Work Demo</span>
              </Link>
              <span className="text-lg font-medium">Playground</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={16} className="mr-2" />
                ) : (
                  <Play size={16} className="mr-2" />
                )}
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={
            isPlaying
              ? {
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={
            isPlaying
              ? {
                  y: [0, 30, 0],
                  x: [0, -20, 0],
                }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-full blur-3xl"
          animate={
            isPlaying
              ? {
                  y: [0, -20, 0],
                  x: [0, 30, 0],
                }
              : {}
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="relative z-10 max-w-6xl px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="flex justify-center">
                <CustomLogo />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interactive <span className="text-primary">Playground</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-foreground mb-12 max-w-4xl mx-auto"
            >
              Experience our premium components in action. Hover, click, and interact with various
              UI elements to see the magic.
            </motion.p>
          </div>

          {/* Component Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {components.map((component, index) => {
              const Icon = component.icon
              return (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 hover:border-primary transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-12 h-12 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{component.name}</h3>
                  <p className="text-foreground-secondary mb-4">{component.description}</p>
                  <button className="text-primary font-medium hover:underline">Try it out</button>
                </motion.div>
              )
            })}
          </div>

          {/* Interactive Demo */}
          <div className="bg-foreground/5 rounded-3xl p-12 border border-foreground/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Move your cursor around the card below to experience real-time 3D transformations
              </p>
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMoveCard}
                onMouseLeave={handleMouseLeaveCard}
                style={{
                  rotateX,
                  rotateY,
                }}
                className="bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-3xl p-12 backdrop-blur-sm border border-foreground/20 h-96 w-full max-w-2xl flex flex-col items-center justify-center cursor-pointer mb-8"
              >
                <div className="text-center">
                  <div className="inline-block p-6 bg-primary/20 rounded-full mb-6">
                    <MousePointer size={48} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Interactive 3D Card</h3>
                  <p className="text-foreground-secondary text-xl">
                    Move your cursor to see the effect
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                <div className="bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-2xl p-6 border border-foreground/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Position</h4>
                    <MousePointer size={20} className="text-foreground" />
                  </div>
                  <p className="text-2xl font-mono">X: {Math.round(mousePosition.x)}</p>
                  <p className="text-2xl font-mono">Y: {Math.round(mousePosition.y)}</p>
                </div>

                <div className="bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-2xl p-6 border border-foreground/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Rotation</h4>
                    <RotateCcw size={20} className="text-foreground" />
                  </div>
                  <p className="text-2xl font-mono">X: {rotateX.get().toFixed(2)}°</p>
                  <p className="text-2xl font-mono">Y: {rotateY.get().toFixed(2)}°</p>
                </div>

                <div className="bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-2xl p-6 border border-foreground/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold">Status</h4>
                    <Zap size={20} className="text-foreground" />
                  </div>
                  <p className="text-2xl font-mono">{isPlaying ? "Playing" : "Paused"}</p>
                  <p className="text-foreground-secondary text-sm mt-2">Animation state</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-8 h-12 border-2 border-foreground rounded-full flex justify-center p-1">
            <motion.div
              animate={isPlaying ? { y: [0, 12, 0] } : {}}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-primary">Components</span>
            </h2>
            <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
              Built with modern web technologies for the best user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed and performance with minimal latency",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Real-time insights and customizable reporting dashboards",
              },
              {
                icon: Bot,
                title: "AI Agents",
                description: "Intelligent virtual assistants powered by machine learning",
              },
              {
                icon: FolderOpen,
                title: "Project Management",
                description: "Organize and track all your projects in one place",
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
            ].map((feature, index) => {
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

      {/* CTA Section */}
      <section className="py-32">
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
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 102, 255, 0.5), 0 10px 10px -5px rgba(0, 102, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-xl flex items-center"
              >
                Get Started Free
                <Play size={24} className="ml-3" />
              </motion.button>
            </Link>

            <Link href="/work-demo">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 217, 255, 0.5), 0 10px 10px -5px rgba(0, 217, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground/10 text-foreground rounded-xl font-bold text-xl flex items-center"
              >
                <Palette size={24} className="mr-3" />
                View All Demos
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
