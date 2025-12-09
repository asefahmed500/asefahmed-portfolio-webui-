"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import Link from "next/link"
import { CustomLogo } from "./custom-logo"
import gsap from "gsap"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Animate navigation items on load
    if (typeof window !== 'undefined') {
      gsap.fromTo(".nav-item", 
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out"
        }
      )
    }
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Demo", href: "/demo" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className="fixed top-0 w-full z-50 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <CustomLogo />
            <span className="hidden sm:inline text-lg font-bold text-foreground">Asef Ahmed</span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-item text-sm font-medium text-foreground hover:text-foreground/80 transition-colors relative"
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ y: 1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground rounded-full"
                  whileHover={{ 
                    width: "100%",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.a>
            ))}
          </div>

          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors nav-item"
              aria-label="Toggle theme"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === "dark" ? 360 : 0,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 0.5,
                  rotate: { duration: 0.8, ease: "easeInOut" },
                  scale: { duration: 0.3, repeat: 1, repeatType: "reverse" }
                }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
              </motion.div>
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors nav-item"
            aria-label="Toggle menu"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              type: "spring",
              stiffness: 200
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 bg-background/95 backdrop-blur-xl rounded-b-2xl mx-4 shadow-xl border border-foreground/10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:text-foreground/80 rounded-xl transition-colors nav-item relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "var(--foreground)/5%",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-2 left-4 right-4 h-0.5 bg-foreground/20 rounded-full"
                    whileHover={{ 
                      backgroundColor: "var(--foreground)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}