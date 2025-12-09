"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github, Phone, CheckCircle, AlertCircle, Send } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from "react-type-animation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    if (!sectionRef.current || !inView) return

    // Animate social links with staggered delays
    gsap.utils.toArray(sectionRef.current.querySelectorAll('.social-link')).forEach((el, i) => {
      const element = el as HTMLElement;
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          } as gsap.plugins.ScrollTriggerInstanceVars,
        }
      )
    })
  }, [inView])

  const socialLinks = [
    { icon: Mail, href: "mailto:asefahmed500@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/asefahmed11",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/asefahmed500", label: "GitHub" },
    { icon: Phone, href: "tel:+8801779795750", label: "Phone" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus("error")
      // Add shake animation to form
      if (sectionRef.current) {
        const form = sectionRef.current.querySelector('form');
        if (form) {
          gsap.to(form, {
            x: -10,
            duration: 0.1,
            yoyo: true,
            repeat: 4,
            ease: "power1.inOut"
          });
        }
      }
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    setSubmitStatus("loading")

    // Simulate form submission with loading animation
    setTimeout(() => {
      setSubmitStatus("success")
      setFormState({ name: "", email: "", message: "" })
      
      // Add success animation
      if (sectionRef.current) {
        const form = sectionRef.current.querySelector('form');
        if (form) {
          gsap.fromTo(form,
            { scale: 1 },
            { 
              scale: 1.02, 
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut"
            }
          );
        }
      }
      
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-16 sm:py-20 px-4 sm:px-6 relative animate-section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text text-center text-balance"
        >
          <TypeAnimation
            sequence={[
              'Let\'s Connect',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={0}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: 0.1,
            ease: "easeOut"
          }}
          className="text-center text-foreground-secondary mb-12 text-sm sm:text-base"
        >
          Have a project in mind? Let's collaborate and create something amazing together.
        </motion.p>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-5 sm:p-6 rounded-xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border border-foreground glass-effect"
                  aria-label={link.label}
                  title={link.label}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                  }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="max-w-2xl mx-auto glass-effect rounded-2xl p-6 sm:p-8 border border-foreground"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-foreground rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-foreground rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-foreground rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all text-foreground"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={submitStatus === "loading"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitStatus === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-foreground/10 text-foreground rounded-lg border border-foreground"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-foreground/10 text-foreground rounded-lg border border-foreground"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Please fill in all required fields.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}