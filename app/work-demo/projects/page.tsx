"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  FolderOpen, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Calendar,
  BarChart3,
  Settings,
  Menu,
  X,
  Star,
  Eye,
  GitBranch,
  Clock
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Modern online shopping experience with AI recommendations',
      status: 'active',
      progress: 75,
      team: 12,
      lastUpdated: '2 hours ago',
      category: 'Web App',
      starred: true
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      description: 'Secure financial management for iOS and Android',
      status: 'review',
      progress: 90,
      team: 8,
      lastUpdated: '5 hours ago',
      category: 'Mobile App',
      starred: true
    },
    {
      id: 3,
      name: 'Analytics Dashboard',
      description: 'Real-time data visualization for business metrics',
      status: 'planning',
      progress: 20,
      team: 5,
      lastUpdated: '1 day ago',
      category: 'Dashboard',
      starred: false
    },
    {
      id: 4,
      name: 'AI Chatbot',
      description: 'Intelligent customer support assistant',
      status: 'development',
      progress: 45,
      team: 6,
      lastUpdated: '3 hours ago',
      category: 'AI',
      starred: false
    },
    {
      id: 5,
      name: 'Marketing Campaign',
      description: 'Multi-channel advertising and analytics',
      status: 'completed',
      progress: 100,
      team: 4,
      lastUpdated: '2 weeks ago',
      category: 'Marketing',
      starred: false
    },
    {
      id: 6,
      name: 'Inventory Management',
      description: 'Warehouse tracking and supply chain optimization',
      status: 'development',
      progress: 60,
      team: 7,
      lastUpdated: '1 day ago',
      category: 'ERP',
      starred: false
    }
  ]

  const statusColors: Record<string, string> = {
    planning: 'bg-foreground',
    development: 'bg-foreground',
    review: 'bg-foreground',
    active: 'bg-foreground',
    completed: 'bg-foreground'
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Projects</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          <button className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:from-primary/90 hover:to-accent/90">
            <Plus size={20} className="mr-2" />
            New Project
          </button>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground-secondary mb-2">FILTERS</h3>
            <div className="space-y-1">
              {[
                { name: 'All Projects', count: 24 },
                { name: 'Active', count: 12 },
                { name: 'Planning', count: 3 },
                { name: 'Development', count: 5 },
                { name: 'Review', count: 2 },
                { name: 'Completed', count: 2 }
              ].map((filter) => (
                <button
                  key={filter.name}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left hover:bg-foreground/10"
                >
                  <span>{filter.name}</span>
                  <span className="text-sm text-foreground-secondary">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground-secondary mb-2">CATEGORIES</h3>
            <div className="space-y-1">
              {[
                { name: 'Web App', count: 8 },
                { name: 'Mobile App', count: 6 },
                { name: 'Dashboard', count: 4 },
                { name: 'AI', count: 3 },
                { name: 'Marketing', count: 2 },
                { name: 'ERP', count: 1 }
              ].map((category) => (
                <button
                  key={category.name}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left hover:bg-foreground/10"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-foreground-secondary">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
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
              <h1 className="text-2xl font-bold">Projects</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 bg-foreground/5 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button className="p-2 rounded-lg hover:bg-foreground/10">
                <Filter size={20} />
              </button>
              
              <div className="flex border border-foreground/20 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'hover:bg-foreground/10'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-1">
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                  </div>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'hover:bg-foreground/10'}`}
                >
                  <div className="w-4 h-4 flex flex-col space-y-1">
                    <div className="h-1 bg-foreground rounded-sm"></div>
                    <div className="h-1 bg-foreground rounded-sm"></div>
                    <div className="h-1 bg-foreground rounded-sm"></div>
                  </div>
                </button>
              </div>
              
              <button className="flex items-center py-2 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-primary/90 hover:to-accent/90">
                <Plus size={16} className="mr-2" />
                New Project
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-foreground/5 rounded-2xl border border-foreground/20 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-lg mr-3">
                          <FolderOpen className="text-primary" size={20} />
                        </div>
                        <h3 className="text-lg font-bold">{project.name}</h3>
                      </div>
                      <button className="p-1 rounded-full hover:bg-foreground/10">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    
                    <p className="text-foreground-secondary text-sm mb-6">{project.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]} text-white`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                      <button className="p-1 rounded-full hover:bg-foreground/10">
                        {project.starred ? (
                          <Star className="text-foreground fill-foreground" size={16} />
                        ) : (
                          <Star className="text-foreground/30" size={16} />
                        )}
                      </button>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-foreground/20 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-foreground-secondary">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {project.team}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {project.lastUpdated}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-foreground/5 border-t border-foreground/10 flex justify-between">
                    <button className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                      <Eye size={14} className="mr-1" />
                      View
                    </button>
                    <button className="flex items-center text-sm font-medium text-foreground-secondary hover:text-foreground">
                      <Settings size={14} className="mr-1" />
                      Manage
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-foreground/5 rounded-2xl border border-foreground/20 overflow-hidden">
              <table className="w-full">
                <thead className="bg-foreground/10 border-b border-foreground/20">
                  <tr>
                    <th className="text-left p-4 font-medium">Project</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Progress</th>
                    <th className="text-left p-4 font-medium">Team</th>
                    <th className="text-left p-4 font-medium">Last Updated</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <motion.tr
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * index }}
                      className="border-b border-foreground/10 hover:bg-foreground/5"
                    >
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="bg-primary/10 p-2 rounded-lg mr-3">
                            <FolderOpen className="text-primary" size={16} />
                          </div>
                          <div>
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-foreground-secondary">{project.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]} text-white`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="w-32">
                          <div className="flex justify-between text-sm mb-1">
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-foreground/20 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {project.team}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {project.lastUpdated}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-lg hover:bg-foreground/10">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-foreground/10">
                            <Settings size={16} />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-foreground/10">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}