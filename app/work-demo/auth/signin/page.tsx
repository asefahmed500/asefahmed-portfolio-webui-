"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight,
  Github,
  Chrome,
  Apple
} from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/work-demo">
            <CustomLogo className="mx-auto mb-6" />
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-foreground-secondary">Sign in to your Work Demo account</p>
        </div>

        <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email address</label>
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
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
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

            <div className="flex items-center justify-between">
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
                <Link href="/work-demo/auth/forgot-password" className="font-medium text-primary hover:text-primary/80">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-foreground/5 text-foreground-secondary">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-foreground/20 bg-background text-sm font-medium text-foreground hover:bg-foreground/10">
                <Github className="h-5 w-5" />
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-foreground/20 bg-background text-sm font-medium text-foreground hover:bg-foreground/10">
                <Chrome className="h-5 w-5" />
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-foreground/20 bg-background text-sm font-medium text-foreground hover:bg-foreground/10">
                <Apple className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-foreground-secondary">
          Don't have an account?{' '}
          <Link href="/work-demo/auth/signup" className="font-medium text-primary hover:text-primary/80">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}