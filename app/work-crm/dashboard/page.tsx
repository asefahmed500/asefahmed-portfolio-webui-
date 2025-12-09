"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Settings,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function WorkCRMDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data for charts
  const salesData = [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
  ]

  const leadSources = [
    { name: "Direct", value: 45 },
    { name: "Social Media", value: 25 },
    { name: "Referral", value: 20 },
    { name: "Organic Search", value: 10 },
  ]

  const recentDeals = [
    { id: 1, customer: "TechCorp", value: "$125,000", stage: "Closed Won", agent: "Sarah Johnson" },
    { id: 2, customer: "StartupX", value: "$87,500", stage: "Negotiation", agent: "Michael Chen" },
    {
      id: 3,
      customer: "Global Solutions",
      value: "$210,000",
      stage: "Proposal Sent",
      agent: "Emma Rodriguez",
    },
    { id: 4, customer: "InnovateAI", value: "$45,000", stage: "Qualified", agent: "David Wilson" },
  ]

  const recentActivities = [
    { id: 1, type: "call", customer: "TechCorp", agent: "Sarah Johnson", time: "2 hours ago" },
    { id: 2, type: "email", customer: "StartupX", agent: "Michael Chen", time: "4 hours ago" },
    {
      id: 3,
      type: "meeting",
      customer: "Global Solutions",
      agent: "Emma Rodriguez",
      time: "1 day ago",
    },
    { id: 4, type: "note", customer: "InnovateAI", agent: "David Wilson", time: "1 day ago" },
  ]

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-crm/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work CRM</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", name: "Dashboard", icon: BarChart3 },
            { id: "contacts", name: "Contacts", icon: Users },
            { id: "deals", name: "Deals", icon: DollarSign },
            { id: "activities", name: "Activities", icon: Calendar },
            { id: "reports", name: "Reports", icon: TrendingUp },
            { id: "settings", name: "Settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === "dashboard"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-foreground/10"
                }`}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-foreground/20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold">CRM Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg px-4 py-2 transition-colors">
                  <Users size={20} />
                  <span>Q4 2023</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Revenue",
                value: "$1.2M",
                change: "+12.4%",
                icon: DollarSign,
                color: "bg-green-500",
              },
              {
                title: "New Leads",
                value: "1,240",
                change: "+18.2%",
                icon: Users,
                color: "bg-blue-500",
              },
              {
                title: "Conversion Rate",
                value: "24.7%",
                change: "+3.1%",
                icon: TrendingUp,
                color: "bg-purple-500",
              },
              {
                title: "Avg. Deal Size",
                value: "$87,500",
                change: "+8.3%",
                icon: BarChart3,
                color: "bg-amber-500",
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground-secondary text-sm">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${stat.color.replace("bg-green-500", "bg-foreground").replace("bg-blue-500", "bg-foreground").replace("bg-purple-500", "bg-foreground").replace("bg-amber-500", "bg-foreground")} text-background`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <TrendingUp size={16} className="text-foreground" />
                    <span className="text-sm font-medium text-foreground ml-1">{stat.change}</span>
                    <span className="text-foreground-secondary text-sm ml-2">vs last period</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sales Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Sales Performance</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Sales performance chart visualization
                </div>
              </div>
            </motion.div>

            {/* Lead Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Lead Sources</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Lead sources chart
                </div>
              </div>
            </motion.div>
          </div>

          {/* Deals and Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Deals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Deals</h3>
              <div className="space-y-4">
                {recentDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20"
                  >
                    <div>
                      <h4 className="font-medium">{deal.customer}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Value: {deal.value}
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          Agent: {deal.agent}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          deal.stage === "Closed Won"
                            ? "bg-foreground/20 text-foreground"
                            : deal.stage === "Negotiation"
                              ? "bg-foreground/20 text-foreground"
                              : deal.stage === "Proposal Sent"
                                ? "bg-foreground/20 text-foreground"
                                : "bg-foreground/20 text-foreground"
                        }`}
                      >
                        {deal.stage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20"
                  >
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-foreground/10 text-foreground mr-3">
                        {activity.type === "call" && <Phone size={16} />}
                        {activity.type === "email" && <Mail size={16} />}
                        {activity.type === "meeting" && <Calendar size={16} />}
                        {activity.type === "note" && <AlertCircle size={16} />}
                      </div>
                      <div>
                        <h4 className="font-medium">{activity.customer}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-foreground-secondary">
                            {activity.agent}
                          </span>
                          <span className="text-sm text-foreground-secondary">•</span>
                          <span className="text-sm text-foreground-secondary">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Simple icon components since they're not in lucide-react
function RefreshCw({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="23,4 23,10 17,10" />
      <polyline points="1,20 1,14 7,14" />
      <path d="M3.51,9a9,9 0 0,1 14.85,-3.36L23,10M1,14l4.64,4.36A9,9 0 0,0 20.49,15" />
    </svg>
  )
}
