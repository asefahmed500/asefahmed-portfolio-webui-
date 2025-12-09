"use client"

import { motion } from "framer-motion"
import {
  Layers,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
  Zap,
  Check,
  TrendingUp,
  Shield,
} from "lucide-react"
import Link from "next/link"

export function HubDemo() {
  // Hub features
  const hubFeatures = [
    {
      icon: Layers,
      title: "Unified Workspace",
      description: "Bring all your tools and apps together in one place",
    },
    {
      icon: MessageSquare,
      title: "Team Communication",
      description: "Chat, video calls, and collaboration tools",
    },
    {
      icon: BarChart3,
      title: "Project Management",
      description: "Plan, track, and manage all your projects",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Organize teams, assign roles, and track performance",
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description: "Coordinate meetings and manage team availability",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate repetitive tasks and workflows",
    },
  ]

  return (
    <section id="hub" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Centralized <span className="text-foreground">Collaboration</span>
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            The all-in-one workspace for teams to communicate, collaborate, and get work done
            together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {hubFeatures.map((feature, index) => {
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

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-foreground/10 to-foreground/10 rounded-3xl p-12 border border-foreground/20"
          >
            <h3 className="text-3xl font-bold mb-8">Team Benefits</h3>
            <ul className="space-y-6">
              {[
                "Reduce tool fatigue by 70%",
                "Improve team alignment",
                "Boost productivity by 35%",
                "Eliminate communication gaps",
                "Streamline workflows",
                "Enhance project visibility",
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
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-12 border border-foreground/20 lg:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-8">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "35%", label: "Productivity Increase", icon: TrendingUp },
                { value: "70%", label: "Tool Reduction", icon: Layers },
                { value: "99.9%", label: "Uptime", icon: Shield },
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

        {/* Hub Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-16">
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Layers size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Workspace</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Messaging</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Projects</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Teams</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Calendar</p>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-hub">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(139, 92, 246, 0.5), 0 10px 10px -5px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full Hub Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
