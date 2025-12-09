"use client"

import { motion } from "framer-motion"
import {
  Users,
  BarChart3,
  Phone,
  Mail,
  Calendar,
  Zap,
  Check,
  TrendingUp,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

export function CrmDemo() {
  // CRM features
  const crmFeatures = [
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

  return (
    <section id="crm" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Customer <span className="text-foreground">Relationship</span> Management
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Transform how you manage customer relationships with our intelligent CRM platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {crmFeatures.map((feature, index) => {
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
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-12 border border-foreground/20"
          >
            <h3 className="text-3xl font-bold mb-8">Business Benefits</h3>
            <ul className="space-y-6">
              {[
                "Increase sales efficiency by 50%",
                "Improve customer retention",
                "Reduce manual data entry by 80%",
                "Enhance team collaboration",
                "Gain actionable insights",
                "Streamline communication",
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
                { value: "50%", label: "Increase in Sales", icon: TrendingUp },
                { value: "80%", label: "Reduction in Manual Tasks", icon: Zap },
                { value: "95%", label: "Customer Satisfaction", icon: Award },
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

        {/* CRM Icons */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 mb-16">
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Contacts</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Analytics</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Calls</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Emails</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-foreground" />
            </div>
            <p className="font-medium">Scheduling</p>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-crm">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 102, 255, 0.5), 0 10px 10px -5px rgba(0, 102, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full CRM Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
