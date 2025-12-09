"use client"

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
import {
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  Calendar,
  Bell,
  Settings,
  Filter,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"

export function DashboardDemo() {
  // Sample data for dashboard
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

  const COLORS = [
    "var(--foreground)",
    "var(--foreground)",
    "var(--foreground)",
    "var(--foreground)",
  ]

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
      color: "bg-foreground/80",
    },
    {
      title: "Sales",
      value: "+42,234",
      change: "+19%",
      icon: DollarSign,
      trend: "up",
      color: "bg-foreground/70",
    },
    {
      title: "Active Now",
      value: "+2,573",
      change: "+201%",
      icon: Eye,
      trend: "up",
      color: "bg-foreground/60",
    },
  ]

  return (
    <section id="dashboard" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Analytics <span className="text-foreground">Dashboard</span>
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Data visualization with real-time metrics and comprehensive reporting
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-foreground/5 rounded-3xl p-8 border border-foreground/20 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground-secondary text-lg">{stat.title}</p>
                    <h3 className="text-4xl font-bold mt-2">{stat.value}</h3>
                  </div>
                  <div className={`p-4 rounded-2xl ${stat.color} text-white`}>
                    <Icon size={32} />
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <TrendIcon
                    size={24}
                    className={stat.trend === "up" ? "text-foreground" : "text-red-500"}
                  />
                  <span
                    className={`text-lg font-medium ml-2 ${stat.trend === "up" ? "text-foreground" : "text-red-500"}`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-foreground-secondary text-lg ml-3">from last month</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Sales Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-foreground/5 rounded-3xl p-8 border border-foreground/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Sales Overview</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-foreground text-background rounded-lg font-medium">
                  Monthly
                </button>
                <button className="px-4 py-2 bg-foreground/10 text-foreground rounded-lg font-medium">
                  Quarterly
                </button>
                <button className="px-4 py-2 bg-foreground/10 text-foreground rounded-lg font-medium">
                  Yearly
                </button>
              </div>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--foreground)" />
                  <XAxis dataKey="name" stroke="var(--foreground)" />
                  <YAxis stroke="var(--foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--foreground)",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sales" fill="var(--foreground)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="revenue" fill="var(--foreground)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-foreground/5 rounded-3xl p-8 border border-foreground/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold">Revenue Trend</h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-foreground rounded-full mr-2"></div>
                <span>Revenue</span>
              </div>
            </div>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--foreground)" />
                  <XAxis dataKey="name" stroke="var(--foreground)" />
                  <YAxis stroke="var(--foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--foreground)",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--foreground)"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "var(--foreground)" }}
                    activeDot={{ r: 8, fill: "var(--foreground)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-foreground/5 rounded-3xl p-8 border border-foreground/20 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8">Traffic Sources</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={120}
                  fill="var(--foreground)"
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
                    borderRadius: "0.75rem",
                    border: "1px solid var(--foreground)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Dashboard Controls */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="flex items-center space-x-4 bg-foreground/5 rounded-full p-2 border border-foreground/20">
            <button className="p-3 rounded-full bg-foreground text-background">
              <Calendar size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Bell size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Settings size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-4 bg-foreground/5 rounded-full p-2 border border-foreground/20">
            <button className="p-3 rounded-full bg-foreground/10">
              <Filter size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Download size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-demo/analytics">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full Dashboard Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
