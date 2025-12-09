"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
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
import {
  BarChart3,
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
  MoreVertical,
  RefreshCw,
  Clock,
  Target,
  TrendingUp,
  Activity,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function SaasDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
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

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 top-16 z-40 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/saas" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">SaaS Platform</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "overview", name: "Overview", icon: Activity },
            { id: "analytics", name: "Analytics", icon: BarChart3 },
            { id: "users", name: "Users", icon: Users },
            { id: "reports", name: "Reports", icon: FileText },
            { id: "settings", name: "Settings", icon: Settings },
          ].map((item) => {
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

          {/* Additional Charts */}
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
        </main>
      </div>
    </div>
  )
}
