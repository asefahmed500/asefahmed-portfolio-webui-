"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Settings, 
  User, 
  Shield, 
  Bell, 
  Palette, 
  CreditCard, 
  Globe, 
  Mail, 
  Key, 
  Menu, 
  X,
  ChevronRight,
  Save,
  Upload,
  Camera
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('account')
  
  const settingsSections = [
    { id: 'account', name: 'Account', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'integrations', name: 'Integrations', icon: Globe }
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-foreground/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-foreground/20">
          <Link href="/work-demo/dashboard" className="flex items-center">
            <CustomLogo />
            <span className="ml-2 text-xl font-bold">Settings</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {settingsSections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === section.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-foreground hover:bg-foreground/10'
                }`}
              >
                <Icon size={20} className="mr-3" />
                {section.name}
                <ChevronRight size={16} className="ml-auto" />
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
              <h1 className="text-2xl font-bold">Settings</h1>
            </div>
            
            <button className="flex items-center py-2 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:from-primary/90 hover:to-accent/90">
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'account' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl"
            >
              <h2 className="text-xl font-bold mb-6">Account Settings</h2>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary font-bold text-2xl mr-6">
                      AJ
                    </div>
                    <button className="absolute bottom-0 right-6 bg-background rounded-full p-1 border border-foreground/20">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Alex Johnson</h3>
                    <p className="text-foreground-secondary">alex@workdemo.com</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue="Alex"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue="Johnson"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="alex@workdemo.com"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Product manager at Work Demo with 5+ years of experience in SaaS products."
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6">
                <h3 className="text-lg font-bold mb-4">Danger Zone</h3>
                <div className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg border border-foreground/20">
                  <div>
                    <h4 className="font-medium">Delete Account</h4>
                    <p className="text-sm text-foreground-secondary">Permanently delete your account and all associated data</p>
                  </div>
                  <button className="px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90">
                    Delete Account
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeSection === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl"
            >
              <h2 className="text-xl font-bold mb-6">Security Settings</h2>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <button className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  Update Password
                </button>
              </div>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg">
                  <div>
                    <h4 className="font-medium">Authenticator App</h4>
                    <p className="text-sm text-foreground-secondary">Use an authenticator app to generate time-based codes</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                    Enable
                  </button>
                </div>
              </div>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6">
                <h3 className="text-lg font-bold mb-4">Active Sessions</h3>
                <div className="space-y-4">
                  {[
                    { device: 'Chrome on Windows', location: 'New York, NY', time: 'Active now' },
                    { device: 'Safari on iPhone', location: 'New York, NY', time: '2 hours ago' },
                    { device: 'Firefox on macOS', location: 'San Francisco, CA', time: '1 day ago' }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg">
                      <div>
                        <h4 className="font-medium">{session.device}</h4>
                        <p className="text-sm text-foreground-secondary">{session.location} • {session.time}</p>
                      </div>
                      <button className="text-foreground hover:text-foreground/80 text-sm font-medium">
                        Revoke
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {activeSection === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl"
            >
              <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6">
                <h3 className="text-lg font-bold mb-4">Email Notifications</h3>
                
                <div className="space-y-4">
                  {[
                    { id: 'project-updates', label: 'Project Updates', description: 'Get notified about project progress and milestones' },
                    { id: 'team-activity', label: 'Team Activity', description: 'Receive updates about team member activities' },
                    { id: 'security-alerts', label: 'Security Alerts', description: 'Important security notifications and alerts' },
                    { id: 'billing-notifications', label: 'Billing Notifications', description: 'Payment confirmations and subscription updates' },
                    { id: 'marketing-emails', label: 'Marketing Emails', description: 'Product updates and company news' }
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg">
                      <div>
                        <h4 className="font-medium">{notification.label}</h4>
                        <p className="text-sm text-foreground-secondary">{notification.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-foreground/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {activeSection === 'appearance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl"
            >
              <h2 className="text-xl font-bold mb-6">Appearance Settings</h2>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Theme</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: 'light', name: 'Light', preview: 'bg-white border border-foreground/20' },
                    { id: 'dark', name: 'Dark', preview: 'bg-gray-900 border border-foreground/20' },
                    { id: 'system', name: 'System', preview: 'bg-gradient-to-r from-white to-gray-900 border border-foreground/20' }
                  ].map((theme) => (
                    <div key={theme.id} className="border border-foreground/20 rounded-lg overflow-hidden">
                      <div className={`h-32 ${theme.preview}`}></div>
                      <div className="p-4 flex items-center">
                        <input 
                          type="radio" 
                          id={theme.id} 
                          name="theme" 
                          className="mr-3" 
                          defaultChecked={theme.id === 'light'}
                        />
                        <label htmlFor={theme.id} className="font-medium">{theme.name}</label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-foreground/5 rounded-2xl border border-foreground/20 p-6">
                <h3 className="text-lg font-bold mb-4">Layout</h3>
                <div className="space-y-4">
                  {[
                    { id: 'compact', name: 'Compact', description: 'More information in less space' },
                    { id: 'comfortable', name: 'Comfortable', description: 'Balanced spacing and readability' },
                    { id: 'spacious', name: 'Spacious', description: 'More room for content and elements' }
                  ].map((layout) => (
                    <div key={layout.id} className="flex items-center justify-between p-4 bg-foreground/10 rounded-lg">
                      <div>
                        <h4 className="font-medium">{layout.name}</h4>
                        <p className="text-sm text-foreground-secondary">{layout.description}</p>
                      </div>
                      <input 
                        type="radio" 
                        id={layout.id} 
                        name="layout" 
                        className="h-5 w-5 text-primary focus:ring-primary border-foreground/20" 
                        defaultChecked={layout.id === 'comfortable'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}