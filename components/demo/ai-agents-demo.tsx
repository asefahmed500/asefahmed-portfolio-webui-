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
  Play,
  Pause,
} from "lucide-react"
import Link from "next/link"

export function AiAgentsDemo() {
  // AI Agent features
  const aiFeatures = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding complex queries",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Self-improving algorithms that adapt to user behavior",
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Anticipate user needs with intelligent predictions",
    },
    {
      icon: Bot,
      title: "24/7 Availability",
      description: "Round-the-clock assistance without human intervention",
    },
    {
      icon: Brain,
      title: "Personalized Experience",
      description: "Tailored responses based on user preferences",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Lightning-fast answers to your questions",
    },
  ]

  return (
    <section id="ai-agents" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">AI</span> Agents
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Intelligent virtual assistants powered by machine learning and natural language
            processing
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative py-32 overflow-hidden mb-20 rounded-3xl bg-gradient-to-br from-foreground/10 to-foreground/10 border border-foreground/20">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-bold mb-8">
                  Intelligent <span className="text-foreground">AI Assistants</span>
                </h3>
                <p className="text-2xl text-foreground-secondary mb-12 max-w-2xl">
                  Next-generation virtual agents that understand context, learn from interactions,
                  and provide personalized assistance.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="px-10 py-5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors text-xl">
                    Try Demo
                  </button>
                  <button className="px-10 py-5 bg-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/20 transition-colors text-xl">
                    Learn More
                  </button>
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
                  <div className="flex flex-col items-center">
                    <div className="p-8 bg-gradient-to-r from-foreground to-foreground/80 rounded-full mb-8">
                      <Bot size={64} className="text-background" />
                    </div>
                    <div className="bg-foreground/5 rounded-2xl w-full h-48 mb-6 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-foreground/20 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="bg-foreground/20 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="bg-foreground/20 border-2 border-dashed rounded-xl w-16 h-16" />
                      </div>
                    </div>
                    <div className="flex space-x-6">
                      <div className="bg-foreground/10 rounded-full w-4 h-4"></div>
                      <div className="bg-foreground/10 rounded-full w-4 h-4"></div>
                      <div className="bg-foreground/10 rounded-full w-4 h-4"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
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
            <ul className="space-y-6">
              {[
                "Natural language understanding",
                "Multi-language support",
                "Context retention",
                "Learning from interactions",
                "API integrations",
                "Custom model training",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center text-xl"
                >
                  <Zap className="text-foreground mr-4" size={24} />
                  {item}
                </motion.li>
              ))}
            </ul>
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
          <Link href="/work-demo/ai-agents">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full AI Agents Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
