"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone,
  Calendar,
  Settings,
  Menu,
  X,
  Check,
  UserPlus,
  Crown
} from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Product Manager',
      email: 'alex@workdemo.com',
      status: 'online',
      avatar: 'AJ',
      permissions: ['admin'],
      projects: 12,
      lastActive: '2 min ago'
    },
    {
      id: 2,
      name: 'Sam Smith',
      role: 'Frontend Developer',
      email: 'sam@workdemo.com',
      status: 'online',
      avatar: 'SS',
      permissions: ['editor'],
      projects: 8,
      lastActive: '5 min ago'
    },
    {
      id: 3,
      name: 'Taylor Brown',
      role: 'UX Designer',
      email: 'taylor@workdemo.com',
      status: 'away',
      avatar: 'TB',
      permissions: ['editor'],
      projects: 15,
      lastActive: '1 hour ago'
    },
    {
      id: 4,
      name: 'Jordan Lee',
      role: 'Backend Developer',
      email: 'jordan@workdemo.com',
      status: 'offline',
      avatar: 'JL',
      permissions: ['viewer'],
      projects: 6,
      lastActive: '3 hours ago'
    },
    {
      id: 5,
      name: 'Casey Wilson',
      role: 'Data Analyst',
      email: 'casey@workdemo.com',
      status: 'online',
      avatar: 'CW',
      permissions: ['editor'],
      projects: 9,
      lastActive: '10 min ago'
    },
    {
      id: 6,
      name: 'Morgan Taylor',
      role: 'DevOps Engineer',
      email: 'morgan@workdemo.com',
      status: 'away',
      avatar: 'MT',
      permissions: ['admin'],
      projects: 7,
      lastActive: '30 min ago'
    }
  ]

  const statusColors: Record<string, string> = {
    online: 'bg-foreground',
    away: 'bg-foreground',
    offline: 'bg-foreground'
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Team</span>
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
            <UserPlus size={20} className="mr-2" />
            Invite Member
          </button>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground-secondary mb-2">FILTERS</h3>
            <div className="space-y-1">
              {[
                { name: 'All Members', count: 24 },
                { name: 'Online', count: 12 },
                { name: 'Away', count: 3 },
                { name: 'Offline', count: 9 }
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
            <h3 className="text-sm font-medium text-foreground-secondary mb-2">ROLES</h3>
            <div className="space-y-1">
              {[
                { name: 'Admin', count: 3 },
                { name: 'Editor', count: 12 },
                { name: 'Viewer', count: 9 }
              ].map((role) => (
                <button
                  key={role.name}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-left hover:bg-foreground/10"
                >
                  <span>{role.name}</span>
                  <span className="text-sm text-foreground-secondary">{role.count}</span>
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
              <h1 className="text-2xl font-bold">Team Management</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search team members..."
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
                <UserPlus size={16} className="mr-2" />
                Invite Member
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-foreground/5 rounded-2xl border border-foreground/20 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary font-bold mr-3">
                            {member.avatar}
                          </div>
                          <div className={`absolute bottom-0 right-3 w-3 h-3 rounded-full border-2 border-background ${statusColors[member.status]}`}></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold flex items-center">
                            {member.name}
                            {member.permissions.includes('admin') && (
                              <Crown size={16} className="text-foreground ml-2" />
                            )}
                          </h3>
                          <p className="text-foreground-secondary text-sm">{member.role}</p>
                        </div>
                      </div>
                      <button className="p-1 rounded-full hover:bg-foreground/10">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Mail size={14} className="mr-2 text-foreground/50" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="mr-2 text-foreground/50" />
                        <span>Last active: {member.lastActive}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-foreground-secondary mb-4">
                      <div>
                        <span className="font-medium">{member.projects}</span> projects
                      </div>
                      <div className="flex space-x-1">
                        {member.permissions.map((perm) => (
                          <span key={perm} className="px-2 py-1 bg-foreground/10 rounded text-xs">
                            {perm}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-foreground/5 border-t border-foreground/10 flex justify-between">
                    <button className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                      <Mail size={14} className="mr-1" />
                      Message
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
                    <th className="text-left p-4 font-medium">Member</th>
                    <th className="text-left p-4 font-medium">Role</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Projects</th>
                    <th className="text-left p-4 font-medium">Permissions</th>
                    <th className="text-left p-4 font-medium">Last Active</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * index }}
                      className="border-b border-foreground/10 hover:bg-foreground/5"
                    >
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-primary font-bold mr-3">
                              {member.avatar}
                            </div>
                            <div className={`absolute bottom-0 right-3 w-2 h-2 rounded-full border-2 border-background ${statusColors[member.status]}`}></div>
                          </div>
                          <div>
                            <div className="font-medium flex items-center">
                              {member.name}
                              {member.permissions.includes('admin') && (
                                <Crown size={12} className="text-foreground ml-1" />
                              )}
                            </div>
                            <div className="text-sm text-foreground-secondary">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">{member.role}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]} text-white`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="p-4">{member.projects}</td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          {member.permissions.map((perm) => (
                            <span key={perm} className="px-2 py-1 bg-foreground/10 rounded text-xs">
                              {perm}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">{member.lastActive}</td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-lg hover:bg-foreground/10">
                            <Mail size={16} />
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