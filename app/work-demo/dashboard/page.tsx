"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { CustomLogo } from "@/components/custom-logo"
import {
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Calendar,
  Bell,
  Settings,
  Menu,
  X,
  Search,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Activity,
  Target,
  Zap,
  FolderOpen,
  Bot,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data
  const salesData = [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
    { name: "Jul", sales: 3490, revenue: 4300 },
    { name: "Aug", sales: 4000, revenue: 5200 },
    { name: "Sep", sales: 3800, revenue: 4900 },
    { name: "Oct", sales: 4200, revenue: 5600 },
    { name: "Nov", sales: 4500, revenue: 6100 },
    { name: "Dec", sales: 5100, revenue: 7200 },
  ]

  const trafficData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Referral", value: 300 },
    { name: "Organic", value: 200 },
  ]

  const COLORS = ["#0066ff", "#00d9ff", "#8b5cf6", "#ec4899"]

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,531",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up",
      color: "bg-foreground",
    },
    {
      title: "Subscriptions",
      value: "+12,350",
      change: "+180.1%",
      icon: Users,
      trend: "up",
      color: "bg-foreground",
    },
    {
      title: "Sales",
      value: "+42,234",
      change: "+19%",
      icon: TrendingUp,
      trend: "up",
      color: "bg-foreground",
    },
    {
      title: "Active Now",
      value: "+2,573",
      change: "+201%",
      icon: Activity,
      trend: "up",
      color: "bg-foreground",
    },
  ]

  const recentActivity = [
    { id: 1, user: "Alex Johnson", action: "Created new project", time: "2 min ago" },
    { id: 2, user: "Sam Smith", action: "Updated dashboard settings", time: "15 min ago" },
    { id: 3, user: "Taylor Brown", action: "Added new team member", time: "1 hour ago" },
    { id: 4, user: "Jordan Lee", action: "Completed analytics report", time: "3 hours ago" },
    { id: 5, user: "Casey Wilson", action: "Launched AI agent", time: "5 hours ago" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work Demo</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "overview", name: "Overview", icon: Activity },
            { id: "analytics", name: "Analytics", icon: BarChart },
            { id: "projects", name: "Projects", icon: FolderOpen },
            { id: "ai-agents", name: "AI Agents", icon: Bot },
            { id: "team", name: "Team", icon: Users },
            { id: "settings", name: "Settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
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
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-foreground/5 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button className="p-2 rounded-full hover:bg-foreground/10 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 bg-foreground text-background text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center">
                <div className="bg-foreground/20 rounded-full w-8 h-8 mr-2"></div>
                <span className="font-medium hidden md:inline">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
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
                    <div className={`p-3 rounded-lg ${stat.color} text-background`}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <TrendIcon
                      size={16}
                      className={stat.trend === "up" ? "text-foreground" : "text-foreground"}
                    />
                    <span
                      className={`text-sm font-medium ml-1 ${stat.trend === "up" ? "text-foreground" : "text-foreground"}`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-foreground-secondary text-sm ml-2">from last month</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sales Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Sales Overview</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Filter size={16} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Download size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="sales" fill="currentColor" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="revenue" fill="currentColor" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Revenue Trend</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Filter size={16} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Download size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="currentColor"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "currentColor" }}
                      activeDot={{ r: 6, fill: "currentColor" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity and Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className="text-primary text-sm font-medium">View All</button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="bg-foreground/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <Activity size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-foreground-secondary text-sm">{activity.action}</p>
                    </div>
                    <span className="text-foreground-secondary text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Plus className="text-primary" size={24} />
                  </div>
                  <span className="font-medium">New Project</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors">
                  <div className="bg-foreground/10 p-3 rounded-full mb-3">
                    <Bot className="text-foreground" size={24} />
                  </div>
                  <span className="font-medium">Launch Agent</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors">
                  <div className="bg-foreground/10 p-3 rounded-full mb-3">
                    <BarChart3 className="text-foreground" size={24} />
                  </div>
                  <span className="font-medium">Run Report</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors">
                  <div className="bg-foreground/10 p-3 rounded-full mb-3">
                    <Users className="text-foreground" size={24} />
                  </div>
                  <span className="font-medium">Add Member</span>
                </button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
