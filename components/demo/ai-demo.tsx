"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Brain,
  Cpu,
  Zap,
  Check,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Settings,
  Database,
  Network,
  Code,
} from "lucide-react"
import Link from "next/link"

export function AiDemo() {
  // AI features
  const aiFeatures = [
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

  return (
    <section id="ai" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Artificial <span className="text-foreground">Intelligence</span>
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Advanced AI-powered automation and workflow management for enterprise applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-background rounded-3xl p-10 border border-foreground/20 hover:border-foreground transition-colors text-center"
              >
                <div className="p-5 bg-foreground/10 rounded-2xl w-16 h-16 flex items-center justify-center text-foreground mb-8 mx-auto">
                  <Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-foreground-secondary text-xl">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-12 border border-foreground/20"
          >
            <h3 className="text-3xl font-bold mb-8">Business Applications</h3>
            <ul className="space-y-6">
              {[
                "Customer support automation",
                "Data analysis and insights",
                "Content generation",
                "Process optimization",
                "Market research",
                "Sales assistance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center text-xl"
                >
                  <Check className="text-foreground mr-4" size={24} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-12 border border-foreground/20"
          >
            <h3 className="text-3xl font-bold mb-8">Technical Capabilities</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Deep Learning", icon: Brain },
                { name: "Neural Networks", icon: Network },
                { name: "NLP", icon: MessageSquare },
                { name: "Computer Vision", icon: Eye },
                { name: "Predictive Modeling", icon: TrendingUp },
                { name: "Data Processing", icon: Database },
              ].map((tech, index) => {
                const Icon = tech.icon
                return (
                  <div key={index} className="flex items-center">
                    <div className="p-2 bg-foreground/10 rounded-lg mr-3">
                      <Icon size={20} className="text-foreground" />
                    </div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* AI Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-16">
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Chat Interface</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Analytics</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Insights</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Settings size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Customization</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Database size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Data Processing</p>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-ai">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full AI Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Simple icon components since they're not in lucide-react
function BarChart3({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

function Eye({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
