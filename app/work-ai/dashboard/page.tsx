"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import {
  Bot,
  Brain,
  BarChart3,
  TrendingUp,
  Users,
  Settings,
  Menu,
  X,
  ChevronDown,
  Play,
  Check,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function WorkAIDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeModel, setActiveModel] = useState("gpt-4")

  // Mock data for charts
  const modelPerformance = [
    { name: "Jan", accuracy: 4000, latency: 2400 },
    { name: "Feb", accuracy: 3000, latency: 1398 },
    { name: "Mar", accuracy: 2000, latency: 9800 },
    { name: "Apr", accuracy: 2780, latency: 3908 },
    { name: "May", accuracy: 1890, latency: 4800 },
    { name: "Jun", accuracy: 2390, latency: 3800 },
  ]

  const usageStats = [
    { name: "Text Generation", value: 45 },
    { name: "Image Processing", value: 30 },
    { name: "Voice Recognition", value: 15 },
    { name: "Data Analysis", value: 10 },
  ]

  const models = [
    { id: "gpt-4", name: "GPT-4 Advanced", status: "active", accuracy: 98.5, latency: "120ms" },
    { id: "claude-2", name: "Claude 2 Pro", status: "active", accuracy: 97.8, latency: "150ms" },
    {
      id: "llama-2",
      name: "Llama 2 Enterprise",
      status: "training",
      accuracy: 95.2,
      latency: "200ms",
    },
    { id: "palm-2", name: "PaLM 2 Ultra", status: "inactive", accuracy: 96.7, latency: "180ms" },
  ]

  const recentTasks = [
    {
      id: 1,
      task: "Customer Support Response",
      model: "GPT-4",
      status: "completed",
      duration: "2.4s",
    },
    {
      id: 2,
      task: "Financial Report Analysis",
      model: "Claude 2",
      status: "completed",
      duration: "15.2s",
    },
    { id: 3, task: "Image Classification", model: "Llama 2", status: "running", duration: "3.1s" },
    { id: 4, task: "Content Generation", model: "GPT-4", status: "queued", duration: "-" },
  ]

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-ai/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work AI</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", name: "Dashboard", icon: BarChart3 },
            { id: "models", name: "AI Models", icon: Brain },
            { id: "tasks", name: "Task Manager", icon: Play },
            { id: "analytics", name: "Analytics", icon: TrendingUp },
            { id: "team", name: "Team", icon: Users },
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
              <h1 className="text-2xl font-bold">AI Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg px-4 py-2 transition-colors">
                  <Bot size={20} />
                  <span>{activeModel}</span>
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
                title: "Total Tasks",
                value: "12,350",
                change: "+180.1%",
                icon: Play,
                color: "bg-foreground",
              },
              {
                title: "Success Rate",
                value: "98.7%",
                change: "+2.1%",
                icon: Check,
                color: "bg-foreground",
              },
              {
                title: "Avg. Latency",
                value: "142ms",
                change: "-12.3%",
                icon: Zap,
                color: "bg-foreground",
              },
              {
                title: "Active Models",
                value: "12",
                change: "+3",
                icon: Brain,
                color: "bg-foreground",
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
                      className={`p-3 rounded-lg ${stat.color.replace("bg-blue-500", "bg-foreground").replace("bg-green-500", "bg-foreground").replace("bg-purple-500", "bg-foreground").replace("bg-amber-500", "bg-foreground")} text-background`}
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
            {/* Model Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Model Performance</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Performance chart visualization
                </div>
              </div>
            </motion.div>

            {/* Usage Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Usage Distribution</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Usage distribution chart
                </div>
              </div>
            </motion.div>
          </div>

          {/* Models and Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">AI Models</h3>
              <div className="space-y-4">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20"
                  >
                    <div>
                      <h4 className="font-medium">{model.name}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Accuracy: {model.accuracy}%
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          Latency: {model.latency}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          model.status === "active"
                            ? "bg-foreground/20 text-foreground"
                            : model.status === "training"
                              ? "bg-foreground/20 text-foreground"
                              : "bg-foreground/20 text-foreground"
                        }`}
                      >
                        {model.status}
                      </span>
                      <button className="p-2 rounded-lg hover:bg-foreground/10">
                        <Settings size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Tasks</h3>
              <div className="space-y-4">
                {recentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20"
                  >
                    <div>
                      <h4 className="font-medium">{task.task}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Model: {task.model}
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          Duration: {task.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          task.status === "completed"
                            ? "bg-foreground/20 text-foreground"
                            : task.status === "running"
                              ? "bg-foreground/20 text-foreground"
                              : "bg-foreground/20 text-foreground"
                        }`}
                      >
                        {task.status}
                      </span>
                      <button className="p-2 rounded-lg hover:bg-foreground/10">
                        <Play size={16} />
                      </button>
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
