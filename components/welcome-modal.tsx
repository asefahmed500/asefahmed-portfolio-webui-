"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CustomLogo } from "./custom-logo"
import { X, Github, Linkedin } from "lucide-react"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [hasVisited, setHasVisited] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("portfolio-visited")
    if (visited) {
      setIsOpen(false)
      setHasVisited(true)
    } else {
      // Show backdrop after a small delay for smooth appearance
      setTimeout(() => setShowBackdrop(true), 100)
    }
  }, [])

  useEffect(() => {
    if (isOpen && !hasVisited && !isExiting) {
      const timer = setTimeout(() => {
        handleClose()
      }, 10000) // Changed from 2000 (2 seconds) to 10000 (10 seconds)
      return () => clearTimeout(timer)
    }
  }, [isOpen, hasVisited, isExiting])

  const handleClose = () => {
    setIsExiting(true)
    setShowBackdrop(false)
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem("portfolio-visited", "true")
    }, 500)
  }

  const handleExplorePortfolio = () => {
    handleClose()
  }

  const handleViewResume = () => {
    // In a real app, this would link to the user's resume
    window.open("#", "_blank")
    handleClose()
  }

  return (
    <AnimatePresence>
      {isOpen && !hasVisited && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={showBackdrop ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-md z-50"
            onClick={handleClose}
            style={{
              backdropFilter: showBackdrop ? "blur(8px)" : "blur(0px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 30 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-8 sm:p-12 rounded-3xl overflow-hidden border border-foreground/20 bg-background shadow-2xl"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-foreground/2 to-foreground/5 opacity-100 rounded-3xl"
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-foreground/10 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-foreground" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Logo */}
                <motion.div 
                  animate={{ y: [0, -12, 0] }} 
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="mb-2"
                >
                  <CustomLogo />
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Asef Ahmed</h1>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-lg sm:text-xl text-foreground/80 font-semibold">
                    Full Stack Developer
                  </p>
                </motion.div>

                {/* Welcome message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="space-y-3"
                >
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">
                    Welcome to my digital portfolio. I craft elegant, scalable web experiences with modern technologies.
                  </p>
                  <p className="text-foreground-secondary text-xs sm:text-sm">
                    Explore my work, experience, and let's connect.
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 w-full mt-4"
                >
                  <button
                    onClick={handleExplorePortfolio}
                    className="flex-1 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center"
                  >
                    Explore Portfolio
                  </button>
                  <button
                    onClick={handleViewResume}
                    className="flex-1 px-6 py-3 bg-foreground/10 text-foreground rounded-xl font-semibold hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center"
                  >
                    View Resume
                  </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="flex gap-4 mt-4"
                >
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl -z-10"
                />
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="absolute bottom-0 left-0 w-32 h-32 bg-foreground/5 rounded-full blur-3xl -z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}