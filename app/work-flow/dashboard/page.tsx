"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Workflow, 
  Zap, 
  Settings, 
  Cpu,
  Database,
  BarChart3,
  Play,
  Pause,
  Square,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function WorkFlowDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data for charts
  const workflowStats = [
    { name: 'Jan', executions: 4000, errors: 24 },
    { name: 'Feb', executions: 3000, errors: 18 },
    { name: 'Mar', executions: 2000, errors: 32 },
    { name: 'Apr', executions: 2780, errors: 15 },
    { name: 'May', executions: 1890, errors: 22 },
    { name: 'Jun', executions: 2390, errors: 19 },
  ]

  const processEfficiency = [
    { name: 'Onboarding', efficiency: 85 },
    { name: 'Support', efficiency: 78 },
    { name: 'Billing', efficiency: 92 },
    { name: 'Marketing', efficiency: 67 },
  ]

  const activeWorkflows = [
    { id: 1, name: "Employee Onboarding", status: "running", executions: "1,240", lastRun: "2 min ago" },
    { id: 2, name: "Customer Support", status: "active", executions: "5,620", lastRun: "5 min ago" },
    { id: 3, name: "Invoice Processing", status: "paused", executions: "890", lastRun: "1 hour ago" },
    { id: 4, name: "Marketing Campaign", status: "active", executions: "3,420", lastRun: "10 min ago" },
  ]

  const recentExecutions = [
    { id: 1, workflow: "Employee Onboarding", status: "success", duration: "2.4s", trigger: "Manual" },
    { id: 2, workflow: "Customer Support", status: "success", duration: "15.2s", trigger: "API" },
    { id: 3, workflow: "Invoice Processing", status: "failed", duration: "3.1s", trigger: "Scheduled" },
    { id: 4, workflow: "Marketing Campaign", status: "running", duration: "-", trigger: "Webhook" },
  ]

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-flow/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work Flow</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
            { id: 'workflows', name: 'Workflows', icon: Workflow },
            { id: 'executions', name: 'Executions', icon: Play },
            { id: 'analytics', name: 'Analytics', icon: TrendingUp },
            { id: 'integrations', name: 'Integrations', icon: Database },
            { id: 'settings', name: 'Settings', icon: Settings }
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  item.id === 'dashboard' 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground hover:bg-foreground/10'
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
              <button 
                className="lg:hidden mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold">Workflow Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg px-4 py-2 transition-colors">
                  <Workflow size={20} />
                  <span>This Month</span>
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
              { title: 'Total Executions', value: '12,350', change: '+180.1%', icon: Play, color: 'bg-blue-500' },
              { title: 'Success Rate', value: '98.7%', change: '+2.1%', icon: CheckCircle, color: 'bg-green-500' },
              { title: 'Avg. Duration', value: '4.2s', change: '-12.3%', icon: Zap, color: 'bg-purple-500' },
              { title: 'Active Workflows', value: '24', change: '+3', icon: Workflow, color: 'bg-amber-500' }
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
                    <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="text-green-500">
                      <TrendingUp size={16} />
                    </div>
                    <span className="text-sm font-medium text-green-500 ml-1">
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
            {/* Workflow Executions Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Workflow Executions</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Workflow executions chart visualization
                </div>
              </div>
            </motion.div>

            {/* Process Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Process Efficiency</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Process efficiency chart
                </div>
              </div>
            </motion.div>
          </div>

          {/* Workflows and Executions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Workflows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Active Workflows</h3>
              <div className="space-y-4">
                {activeWorkflows.map((workflow) => (
                  <div key={workflow.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20">
                    <div>
                      <h4 className="font-medium">{workflow.name}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Executions: {workflow.executions}
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          Last run: {workflow.lastRun}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        workflow.status === 'running' ? 'bg-green-500/20 text-green-500' :
                        workflow.status === 'active' ? 'bg-blue-500/20 text-blue-500' :
                        workflow.status === 'paused' ? 'bg-amber-500/20 text-amber-500' :
                        'bg-foreground/20 text-foreground'
                      }`}>
                        {workflow.status}
                      </span>
                      <button className="p-2 rounded-lg hover:bg-foreground/10">
                        <Play size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Executions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Executions</h3>
              <div className="space-y-4">
                {recentExecutions.map((execution) => (
                  <div key={execution.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20">
                    <div>
                      <h4 className="font-medium">{execution.workflow}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Duration: {execution.duration}
                        </span>
                        <span className="text-sm text-foreground-secondary">
                          Trigger: {execution.trigger}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        execution.status === 'success' ? 'bg-green-500/20 text-green-500' :
                        execution.status === 'running' ? 'bg-blue-500/20 text-blue-500' :
                        execution.status === 'failed' ? 'bg-red-500/20 text-red-500' :
                        'bg-foreground/20 text-foreground'
                      }`}>
                        {execution.status}
                      </span>
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
function TrendingUp({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
      <polyline points="17,6 23,6 23,12" />
    </svg>
  )
}

function RefreshCw({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23,4 23,10 17,10" />
      <polyline points="1,20 1,14 7,14" />
      <path d="M3.51,9a9,9 0 0,1 14.85,-3.36L23,10M1,14l4.64,4.36A9,9 0 0,0 20.49,15" />
    </svg>
  )
}