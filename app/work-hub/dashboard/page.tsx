"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Layers, 
  Users, 
  MessageSquare, 
  FolderOpen,
  Calendar,
  FileText,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Hash,
  Paperclip
} from "lucide-react"
import Link from "next/link"

export default function WorkHubDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock data for charts
  const teamActivity = [
    { name: 'Mon', messages: 40, tasks: 24 },
    { name: 'Tue', messages: 30, tasks: 18 },
    { name: 'Wed', messages: 20, tasks: 32 },
    { name: 'Thu', messages: 27, tasks: 15 },
    { name: 'Fri', messages: 18, tasks: 22 },
    { name: 'Sat', messages: 23, tasks: 19 },
  ]

  const projectProgress = [
    { name: 'Website Redesign', progress: 85, team: 'Design Team' },
    { name: 'Mobile App', progress: 78, team: 'Dev Team' },
    { name: 'Marketing Campaign', progress: 92, team: 'Marketing' },
    { name: 'Q3 Planning', progress: 67, team: 'Leadership' },
  ]

  const recentProjects = [
    { id: 1, name: "Website Redesign", status: "in-progress", progress: 85, dueDate: "2023-12-15" },
    { id: 2, name: "Mobile App", status: "in-progress", progress: 78, dueDate: "2024-01-30" },
    { id: 3, name: "Marketing Campaign", status: "review", progress: 92, dueDate: "2023-11-20" },
    { id: 4, name: "Q3 Planning", status: "planning", progress: 67, dueDate: "2023-10-30" },
  ]

  const recentMessages = [
    { id: 1, channel: "design-team", user: "Sarah Johnson", message: "Updated the wireframes for the homepage", time: "2 min ago" },
    { id: 2, channel: "dev-team", user: "Michael Chen", message: "Fixed the authentication bug", time: "15 min ago" },
    { id: 3, channel: "marketing", user: "Emma Rodriguez", message: "New campaign assets are ready for review", time: "1 hour ago" },
    { id: 4, channel: "general", user: "David Wilson", message: "Team meeting rescheduled to 3 PM", time: "2 hours ago" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-hub/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Work Hub</span>
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
            { id: 'projects', name: 'Projects', icon: FolderOpen },
            { id: 'teams', name: 'Teams', icon: Users },
            { id: 'messages', name: 'Messages', icon: MessageSquare },
            { id: 'calendar', name: 'Calendar', icon: Calendar },
            { id: 'documents', name: 'Documents', icon: FileText }
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
              <h1 className="text-2xl font-bold">Collaboration Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg px-4 py-2 transition-colors">
                  <Layers size={20} />
                  <span>This Week</span>
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
              { title: 'Active Projects', value: '24', change: '+3', icon: FolderOpen, color: 'bg-blue-500' },
              { title: 'Team Members', value: '142', change: '+12', icon: Users, color: 'bg-green-500' },
              { title: 'Messages Today', value: '1,240', change: '+180', icon: MessageSquare, color: 'bg-purple-500' },
              { title: 'Documents Shared', value: '87', change: '+24', icon: FileText, color: 'bg-amber-500' }
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
                    <TrendingUp size={16} className="text-green-500" />
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
            {/* Team Activity Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Team Activity</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Team activity chart visualization
                </div>
              </div>
            </motion.div>

            {/* Project Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Project Progress</h3>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-foreground/10">
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <div className="flex items-center justify-center h-full text-foreground-secondary">
                  Project progress chart
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects and Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Projects</h3>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-foreground/20">
                    <div>
                      <h4 className="font-medium">{project.name}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-foreground-secondary">
                          Due: {project.dueDate}
                        </span>
                        <div className="w-24 bg-foreground/20 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-foreground-secondary">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-500' :
                        project.status === 'review' ? 'bg-amber-500/20 text-amber-500' :
                        project.status === 'planning' ? 'bg-purple-500/20 text-purple-500' :
                        'bg-foreground/20 text-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Messages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-foreground/5 rounded-2xl p-6 border border-foreground/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-6">Recent Messages</h3>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start p-4 bg-background rounded-lg border border-foreground/20">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                      <Hash size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">#{message.channel}</h4>
                        <span className="text-sm text-foreground-secondary">
                          {message.time}
                        </span>
                      </div>
                      <p className="text-foreground-secondary mt-1">
                        <span className="font-medium">{message.user}:</span> {message.message}
                      </p>
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
function BarChart3({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

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

function Settings({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4,15a1.65,1.65 0 0,0 .33,1.82l.06,.06a2,2 0 0,1 0,2.83h0a2,2 0 0,1 -2.83,0l-.06,-.06a1.65,1.65 0 0,0 -1.82,-.33h0a1.65,1.65 0 0,0 -1,1.51v.17a2,2 0 0,1 -2,2h0a2,2 0 0,1 -2-2v0a1.65,1.65 0 0,0 -1.51-1h0a1.65,1.65 0 0,0 -1.82,.33l-.06,.06a2,2 0 0,1 -2.83,0h0a2,2 0 0,1 0-2.83l.06-.06a1.65,1.65 0 0,0 .33-1.82h0a1.65,1.65 0 0,0 -1.51-1v-.17a2,2 0 0,1 2-2h0a2,2 0 0,1 2,2v0a1.65,1.65 0 0,0 1.51,1h0a1.65,1.65 0 0,0 1.82-.33l.06-.06a2,2 0 0,1 2.83,0h0a2,2 0 0,1 0,2.83l-.06.06a1.65,1.65 0 0,0 -.33,1.82v.17a2,2 0 0,1 2,2v0a2,2 0 0,1 -2,2" />
    </svg>
  )
}