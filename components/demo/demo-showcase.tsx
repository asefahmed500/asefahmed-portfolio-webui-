"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  ArrowRight, 
  Zap, 
  ShoppingCart, 
  BarChart3, 
  Globe, 
  Bot,
  Layers,
  Play,
  Pause,
  MousePointer,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Workflow
} from "lucide-react"
import Link from "next/link"
import { AnimationDemo } from "./animation-demo"
import { DashboardDemo } from "./dashboard-demo"
import { EcommerceDemo } from "./ecommerce-demo"
import { SaasDemo } from "./saas-demo"
import { AiAgentsDemo } from "./ai-agents-demo"
import { CrmDemo } from "./crm-demo"
import { AiDemo } from "./ai-demo"
import { HubDemo } from "./hub-demo"
import { FlowDemo } from "./flow-demo"
import { TypeAnimation } from "react-type-animation"

// Simple Home icon component since it's not in lucide-react
function HomeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  )
}

export function DemoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Toggle animation play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }
  
  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-16 pb-24 md:pb-32">
      {/* Demo Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-full overflow-x-auto px-4 sm:bottom-8">
        <div className="flex bg-background/80 backdrop-blur-md rounded-full border border-foreground/20 shadow-lg p-2 space-x-1 sm:space-x-2">
          {[
            { id: 'hero', name: 'Home', icon: HomeIcon },
            { id: 'animations', name: 'Animations', icon: Zap },
            { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
            { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart },
            { id: 'saas', name: 'SaaS', icon: Globe },
            { id: 'crm', name: 'CRM', icon: Users },
            { id: 'hub', name: 'Hub', icon: Layers },
            { id: 'flow', name: 'Flow', icon: Workflow },
            { id: 'ai', name: 'AI', icon: Bot },
            { id: 'ai-agents', name: 'AI Agents', icon: Bot }
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center px-3 py-2 rounded-full transition-all text-xs sm:px-4 sm:text-sm ${
                  activeSection === item.id 
                    ? 'bg-foreground text-background' 
                    : 'text-foreground hover:bg-foreground/10'
                }`}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <Icon size={16} />
                </div>
                <span className="text-xs mt-1 hidden sm:inline">{item.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Hero Section */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-black/30 to-gray-800/30 rounded-full blur-3xl"
          animate={isPlaying ? { 
            y: [0, -30, 0],
            x: [0, 20, 0]
          } : {}}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-gray-800/30 to-black/30 rounded-full blur-3xl"
          animate={isPlaying ? { 
            y: [0, 30, 0],
            x: [0, -20, 0]
          } : {}}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-700/30 to-gray-900/30 rounded-full blur-3xl"
          animate={isPlaying ? { 
            y: [0, -20, 0],
            x: [0, 30, 0]
          } : {}}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <CustomLogo />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TypeAnimation
              sequence={[
                'Work Demo',
                1000,
                'Work Showcase',
                1000,
                'Work Portfolio',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-5xl md:text-8xl font-bold"
            />
            <span className="text-foreground">Demo</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-foreground mb-12 max-w-4xl mx-auto"
          >
            Explore a comprehensive showcase of modern web applications, interactive animations, and intelligent solutions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('animations')}
              className="px-10 py-5 bg-gradient-to-r from-foreground to-foreground/80 text-background rounded-xl font-semibold text-xl"
            >
              Explore Demos
            </motion.button>
            
            <Link href="/work-demo">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground/10 text-foreground rounded-xl font-semibold text-xl"
              >
                View Full Demos
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
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

      {/* Animations Section */}
      <AnimationDemo isPlaying={isPlaying} />

      {/* Dashboard Section */}
      <DashboardDemo />

      {/* E-Commerce Section */}
      <EcommerceDemo />

      {/* SaaS Section */}
      <SaasDemo />

      {/* CRM Section */}
      <CrmDemo />

      {/* Hub Section */}
      <HubDemo />

      {/* Flow Section */}
      <FlowDemo />

      {/* AI Section */}
      <AiDemo />

      {/* AI Agents Section */}
      <AiAgentsDemo />

      {/* Footer */}
      <footer className="py-16 border-t border-foreground/20 bg-foreground/5 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <CustomLogo />
              <span className="ml-4 text-2xl font-bold">Asef Ahmed</span>
            </div>
            <p className="text-foreground/70 text-xl">
              © {new Date().getFullYear()} Asef Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}