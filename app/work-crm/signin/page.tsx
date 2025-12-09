"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  ArrowRight, 
  Lock, 
  Eye, 
  EyeOff,
  Users
} from "lucide-react"
import Link from "next/link"

export default function WorkCRMSignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log("Sign in with:", { email, password })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-6">
            <CustomLogo />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to Work CRM</h1>
          <p className="text-foreground-secondary">Sign in to manage your customer relationships</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-foreground/5 rounded-2xl p-8 border border-foreground/20"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-4 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-foreground/50 hover:text-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-foreground/50 hover:text-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-foreground/20 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">Remember me</label>
              </div>
              <div className="text-sm">
                <Link href="/work-crm/forgot-password" className="font-medium text-primary hover:text-primary/80">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:from-green-500/90 hover:to-emerald-500/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
            >
              Sign in
              <ArrowRight className="ml-2 mt-0.5" size={20} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link href="/work-crm/signup" className="font-medium text-primary hover:text-primary/80">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}