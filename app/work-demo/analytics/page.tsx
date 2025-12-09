"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { CustomLogo } from "@/components/custom-logo"
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Eye,
  Filter,
  Menu,
  MoreVertical,
  RefreshCw,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [timeRange, setTimeRange] = useState("7d")

  // Sample data
  const revenueData = [
    { date: "2023-01-01", revenue: 4000, users: 2400 },
    { date: "2023-01-02", revenue: 3000, users: 1398 },
    { date: "2023-01-03", revenue: 2000, users: 9800 },
    { date: "2023-01-04", revenue: 2780, users: 3908 },
    { date: "2023-01-05", revenue: 1890, users: 4800 },
    { date: "2023-01-06", revenue: 2390, users: 3800 },
    { date: "2023-01-07", revenue: 3490, users: 4300 },
  ]

  const trafficData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Referral", value: 300 },
    { name: "Organic", value: 200 },
  ]

  const performanceData = [
    { name: "Jan", conversion: 4000, retention: 2400 },
    { name: "Feb", conversion: 3000, retention: 1398 },
    { name: "Mar", conversion: 2000, retention: 9800 },
    { name: "Apr", conversion: 2780, retention: 3908 },
    { name: "May", conversion: 1890, retention: 4800 },
    { name: "Jun", conversion: 2390, retention: 3800 },
  ]

  const recentActivity = [
    { id: 1, user: "Alex Johnson", action: "Generated new report", time: "2 min ago" },
    { id: 2, user: "Sam Smith", action: "Updated dashboard settings", time: "15 min ago" },
    { id: 3, user: "Taylor Brown", action: "Added new team member", time: "1 hour ago" },
    { id: 4, user: "Jordan Lee", action: "Completed analytics report", time: "3 hours ago" },
    { id: 5, user: "Casey Wilson", action: "Launched AI agent", time: "5 hours ago" },
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
      title: "Active Users",
      value: "12,350",
      change: "+180.1%",
      icon: Users,
      trend: "up",
      color: "bg-foreground",
    },
    {
      title: "Conversion Rate",
      value: "4.2%",
      change: "+19%",
      icon: TrendingUp,
      trend: "up",
      color: "bg-foreground",
    },
    {
      title: "Avg. Session",
      value: "5m 32s",
      change: "+201%",
      icon: Clock,
      trend: "up",
      color: "bg-foreground",
    },
  ]

  const menuItems = [
    { id: "overview", name: "Overview", icon: Activity },
    { id: "audience", name: "Audience", icon: Users },
    { id: "acquisition", name: "Acquisition", icon: Target },
    { id: "behavior", name: "Behavior", icon: BarChart3 },
    { id: "conversions", name: "Conversions", icon: TrendingUp },
    { id: "reports", name: "Reports", icon: FileText },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${sidebarCollapsed ? "w-20" : "w-64"} fixed inset-y-0 left-0 z-40 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-foreground/20">
          <Link
            href="/work-demo/dashboard"
            className={`flex items-center ${sidebarCollapsed ? "justify-center" : ""}`}
          >
            <CustomLogo />
            {!sidebarCollapsed && (
              <span className="ml-2 text-lg font-bold truncate">Analytics</span>
            )}
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === "overview"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-foreground/10"
                }`}
              >
                <Icon size={20} className={!sidebarCollapsed ? "mr-3" : "mx-auto"} />
                {!sidebarCollapsed && <span>{item.name}</span>}
              </button>
            )
          })}
        </nav>

        {/* Collapse Toggle Button */}
        <button
          className="hidden lg:flex items-center justify-center w-full p-4 border-t border-foreground/20 text-foreground hover:bg-foreground/10"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          {!sidebarCollapsed && <span className="ml-3">Collapse</span>}
        </button>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col overflow-hidden ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        {/* Header */}
        <header className="bg-background border-b border-foreground/20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex border border-foreground/20 rounded-lg overflow-hidden">
                {["24h", "7d", "30d", "90d"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 text-sm ${
                      timeRange === range
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-foreground/10"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <RefreshCw size={20} />
              </button>

              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <Download size={20} />
              </button>

              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                    <span className="text-foreground-secondary text-sm ml-2">vs last period</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Revenue Trend</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Filter size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="currentColor"
                      fill="currentColor"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Performance Metrics</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Filter size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity="0.1" />
                    <XAxis dataKey="name" stroke="currentColor" opacity="0.3" />
                    <YAxis stroke="currentColor" opacity="0.3" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="conversion" fill="currentColor" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="retention" fill="currentColor" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Additional Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm lg:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-6">Traffic Sources</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="currentColor"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* User Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm lg:col-span-2"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">User Activity</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <Filter size={16} />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity="0.1" />
                    <XAxis dataKey="date" stroke="currentColor" opacity="0.3" />
                    <YAxis stroke="currentColor" opacity="0.3" />
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
                      dataKey="users"
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

          {/* Recent Activity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-8 bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <button className="text-sm text-primary hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
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
        </main>
      </div>
    </div>
  )
}

// Simple icon components since they're not in lucide-react
function Activity({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  )
}

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

function FileText({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  )
}
