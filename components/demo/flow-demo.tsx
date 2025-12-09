"use client"

import { motion } from "framer-motion"
import {
  Workflow,
  BarChart3,
  Zap,
  Users,
  MessageSquare,
  DollarSign,
  Check,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"

export function FlowDemo() {
  // Flow features
  const flowFeatures = [
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Create complex workflows with our intuitive drag-and-drop interface",
    },
    {
      icon: BarChart3,
      title: "Process Analytics",
      description: "Monitor and optimize your business processes with real-time insights",
    },
    {
      icon: Zap,
      title: "Automation Engine",
      description: "Automate repetitive tasks and eliminate manual work",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across departments and teams",
    },
    {
      icon: MessageSquare,
      title: "Notifications",
      description: "Stay informed with real-time alerts and updates",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs with efficient automation",
    },
  ]

  return (
    <section id="flow" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Business <span className="text-foreground">Process</span> Automation
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Streamline operations and eliminate manual work with our intelligent workflow automation
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {flowFeatures.map((feature, index) => {
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
            <h3 className="text-3xl font-bold mb-8">Automation Use Cases</h3>
            <ul className="space-y-6">
              {[
                "Onboarding automation",
                "Invoice processing",
                "Customer support routing",
                "Data migration",
                "Report generation",
                "Compliance monitoring",
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
            <h3 className="text-3xl font-bold mb-8">Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "60%", label: "Time Reduction", icon: Zap },
                { value: "45%", label: "Cost Savings", icon: DollarSign },
                { value: "99%", label: "Accuracy", icon: Check },
              ].map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div key={index} className="text-center">
                    <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-foreground" />
                    </div>
                    <p className="text-4xl font-bold mb-2">{metric.value}</p>
                    <p className="text-foreground-secondary text-lg">{metric.label}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Flow Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-16">
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Workflow size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Designer</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Analytics</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Automation</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Teams</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Notifications</p>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-flow">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(245, 158, 11, 0.5), 0 10px 10px -5px rgba(245, 158, 11, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full Flow Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
