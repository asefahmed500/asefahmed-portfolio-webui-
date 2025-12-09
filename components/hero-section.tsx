"use client"

import { motion, easeOut, type Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { initHeroAnimations } from "@/lib/animations"
import { TypeAnimation } from "react-type-animation"


// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Use a type assertion to satisfy the function signature
    initHeroAnimations(imageRef as React.RefObject<HTMLDivElement>)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Set initial window size and update on resize
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
    window.addEventListener("mousemove", handleMouseMove)

    // Advanced parallax effect with smoother transitions
    const parallaxElements = document.querySelectorAll('.parallax-element')
    const handleParallax = () => {
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05')
        const x = (window.innerWidth / 2 - mousePosition.x) * speed
        const y = (window.innerHeight / 2 - mousePosition.y) * speed
        gsap.to(el, {
          x: x,
          y: y,
          duration: 0.8,
          ease: "power2.out"
        })
      })
    }

    handleParallax()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [mousePosition])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        type: "spring",
        stiffness: 100
      },
    },
  }

  const parallaxOffset = {
    x: windowSize.width > 0 ? (mousePosition.x - windowSize.width / 2) * 0.02 : 0,
    y: windowSize.height > 0 ? (mousePosition.y - windowSize.height / 2) * 0.02 : 0,
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div
        className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-3xl opacity-30"
        data-speed="0.04"
        style={{
          transform: `translate(${parallaxOffset.x * 1.2}px, ${parallaxOffset.y * 1.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        className="parallax-element absolute bottom-1/3 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-3xl opacity-30"
        data-speed="0.03"
        style={{
          transform: `translate(${parallaxOffset.x * -1}px, ${parallaxOffset.y * -1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Motion particles for subtle movement */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="parallax-element absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-foreground/40 rounded-full"
          data-speed={(0.02 + i * 0.005).toString()}
          animate={{
            y: [0, (i % 2 === 0 ? -20 : 20), 0],
            x: [0, (i % 3 === 0 ? -15 : 15), 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + i * 7}%`,
            transform: `translate(${parallaxOffset.x * (0.3 + i * 0.1)}px, ${parallaxOffset.y * (0.3 + i * 0.1)}px)`,
          }}
        />
      ))}

      {/* Split layout: Image on left, content on right */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between z-20 relative">
        {/* Left half - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg h-[500px]">
            <div className="absolute inset-0 rounded-2xl bg-foreground/10 p-1.5">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/asefio.png" // ensure this exists in public/images/
                  alt="Asef Ahmed"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-foreground/30 blur-xl -z-10 animate-pulse" />
          </div>
        </motion.div>


        {/* Right half - Content */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3
              }}
            >
              <TypeAnimation
                sequence={[
                  'Asef Ahmed',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={0}
              />
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 max-w-2xl mx-auto lg:mx-0 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5
              }}
            >
              <TypeAnimation
                sequence={[
                  'Creative Developer & Motion Systems Engineer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={0}
              />
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.7
            }}
          >
            Building immersive digital experiences with cutting-edge animation and design systems.
            Crafting interfaces that feel alive and purposeful.
          </motion.p>

          {/* Skills showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.9
            }}
          >
            {['React', 'Next.js', 'Framer Motion', 'GSAP', 'Three.js', 'Node.js'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-foreground/10 text-foreground rounded-full text-xs md:text-sm border border-foreground/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--foreground)/20%",
                  borderColor: "var(--foreground)/40%",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 md:gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1.1
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-xl font-bold hover:bg-foreground/90 transition-all duration-300 text-sm md:text-base relative overflow-hidden group shadow-lg"
            >
              <span className="relative z-10">View Projects</span>
              <motion.span
                className="absolute inset-0 bg-background/20 rounded-xl"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-foreground rounded-xl font-bold border-2 border-foreground/30 hover:border-foreground/50 transition-all duration-300 text-sm md:text-base relative overflow-hidden group shadow-lg"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute inset-0 bg-foreground/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          </motion.div>

          {/* Minimalist animated scroll indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              className="w-8 h-12 md:w-10 md:h-16 rounded-full border-2 border-foreground/40 flex justify-center p-1 md:p-1.5 relative"
            >
              <div className="w-1.5 h-4 md:w-2 md:h-6 bg-foreground rounded-full animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-foreground/20 animate-ping"></div>
            </motion.div>
            <motion.p
              className="text-xs md:text-sm text-foreground/60 mt-3 font-light tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              SCROLL TO EXPLORE
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom styles for glass cards and animations */}
      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}