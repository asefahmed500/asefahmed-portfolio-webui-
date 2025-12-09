"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CustomLogo() {
  const logoRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!logoRef.current) return
    
    // Advanced GSAP animations for the logo
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    
    // Animate the outer ring with a more complex rotation
    tl.to(logoRef.current.querySelector('.outer-ring'), {
      rotation: 360,
      duration: 15,
      ease: "none"
    }, 0)
    
    // Animate the inner circle pulse with more emphasis
    tl.to(logoRef.current.querySelector('.inner-circle'), {
      scale: 1.1,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    }, 0.5)
    
    // Animate the "A" elements with staggered sequence and more dynamic effects
    tl.to(logoRef.current.querySelectorAll('.logo-letter'), {
      opacity: 1,
      scale: 1,
      stagger: 0.15,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, 1)
    
    // Animate the glow effect with more intensity
    tl.to(logoRef.current.querySelector('.glow-effect'), {
      opacity: 0.8,
      scale: 1.2,
      duration: 1.2,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    }, 1.5)
    
    // Add a special animation for the connection element
    tl.to(logoRef.current.querySelector('.connection-element'), {
      opacity: 0.3,
      duration: 0.33,
    }, 2)
    .to(logoRef.current.querySelector('.connection-element'), {
      opacity: 1,
      duration: 0.33,
    }, 2.33)
    .to(logoRef.current.querySelector('.connection-element'), {
      opacity: 0.3,
      duration: 0.34,
    }, 2.66)
    
    // Return cleanup function
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <motion.div 
      ref={logoRef}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-20 h-20 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 200,
        delay: 0.2
      }}
    >
      <svg 
        width="80" 
        height="80" 
        viewBox="0 0 64 64" 
        className="absolute inset-0 w-full h-full"
      >
        {/* Definitions for gradients and filters */}
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066ff" />
            <stop offset="50%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 1 0
            " result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="
              0 0 0 0 0
              0 0 0 0 0.8
              0 0 0 0 1
              0 0 0 1 0
            " result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
        </defs>
        
        {/* Outer rotating ring with gradient */}
        <motion.circle 
          className="outer-ring"
          cx="32" 
          cy="32" 
          r="28" 
          fill="none" 
          stroke="url(#outerGradient)" 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Inner circle with gradient and glow */}
        <motion.circle 
          className="inner-circle"
          cx="32" 
          cy="32" 
          r="20" 
          fill="url(#innerGradient)" 
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        />
        
        {/* Stylized monogram "AA" for Asef Ahmed */}
        {/* First "A" - main letter with enhanced styling */}
        <motion.path 
          className="logo-letter"
          d="M24 40 L30 26 L36 40" 
          stroke="white" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#innerGlow)"
          initial={{ opacity: 0, pathLength: 0, scale: 0 }}
          animate={{ opacity: 1, pathLength: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        {/* Crossbar of first "A" */}
        <motion.line 
          className="logo-letter"
          x1="27" 
          y1="34" 
          x2="33" 
          y2="34" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          filter="url(#innerGlow)"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Second "A" - smaller and connected with enhanced styling */}
        <motion.path 
          className="logo-letter"
          d="M35 40 L37 36 L39 40" 
          stroke="white" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#innerGlow)"
          initial={{ opacity: 0, pathLength: 0, scale: 0 }}
          animate={{ opacity: 1, pathLength: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Connection element between the two "A"s with special animation */}
        <motion.line 
          className="logo-letter connection-element"
          x1="37" 
          y1="36" 
          x2="33" 
          y2="34" 
          stroke="#00d9ff" 
          strokeWidth="2" 
          strokeLinecap="round"
          filter="url(#innerGlow)"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
        
        {/* Glow effect ring */}
        <motion.circle 
          className="glow-effect"
          cx="32" 
          cy="32" 
          r="24" 
          fill="none" 
          stroke="#0066ff" 
          strokeWidth="1.5" 
          opacity="0.5"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </svg>
    </motion.div>
  )
}