"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  ArrowRight, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  Mail,
  Workflow
} from "lucide-react"
import Link from "next/link"

export default function WorkFlowSignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log("Sign up with:", { name, email, password })
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
          <h1 className="text-3xl font-bold mb-2">Join Work Flow</h1>
          <p className="text-foreground-secondary">Create an account to start automating your business processes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-foreground/5 rounded-2xl p-8 border border-foreground/20"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-foreground/50" />
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
                  autoComplete="new-password"
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

            <div className="mb-6">
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl hover:from-amber-500/90 hover:to-orange-500/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              >
                Create Account
                <ArrowRight className="ml-2 mt-0.5" size={20} />
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link href="/work-flow/signin" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}