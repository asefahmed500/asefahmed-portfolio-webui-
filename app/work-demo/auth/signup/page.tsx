"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CustomLogo } from "@/components/custom-logo"
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User,
  ArrowRight,
  Github,
  Chrome,
  Apple
} from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
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
          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-foreground-secondary">Get started with Work Demo today</p>
        </div>

        <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full name</label>
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

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-foreground/20 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the <Link href="#" className="text-primary hover:text-primary/80">Terms of Service</Link> and <Link href="#" className="text-primary hover:text-primary/80">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Create account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-foreground/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-foreground/5 text-foreground-secondary">Or sign up with</span>
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
          Already have an account?{' '}
          <Link href="/work-demo/auth/signin" className="font-medium text-primary hover:text-primary/80">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}