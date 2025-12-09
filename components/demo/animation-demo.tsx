"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  MousePointer,
  Sparkles,
  Check,
  Zap,
  RotateCcw,
  Maximize2,
  Play,
  Pause,
  Square,
} from "lucide-react"
import Link from "next/link"

export function AnimationDemo({ isPlaying }: { isPlaying: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Handle card hover with 3D effect
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 15
    const rotateX = ((centerY - y) / centerY) * 15

    // Apply rotation directly for immediate feedback
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeaveCard = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  return (
    <section id="animations" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Interactive <span className="text-foreground">Animations</span>
          </h2>
          <p className="text-2xl text-foreground-secondary max-w-4xl mx-auto">
            Experience the fusion of GSAP and Framer Motion for cinematic web interactions
          </p>
        </div>

        {/* Animation Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-foreground/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">3D Interactive Card</h3>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              className="bg-gradient-to-br from-foreground/20 to-foreground/20 rounded-2xl p-8 backdrop-blur-sm border border-foreground/20 h-64 flex items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <div className="inline-block p-4 bg-foreground/20 rounded-full mb-4">
                  <MousePointer size={32} className="text-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Move Cursor</h4>
                <p className="text-foreground-secondary">Experience 3D transformation</p>
              </div>
            </div>
          </motion.div>

          {/* Particle System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-foreground/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Particle System</h3>
            <div className="bg-gradient-to-br from-foreground/20 to-foreground/20 rounded-2xl p-8 backdrop-blur-sm border border-foreground/20 h-64 flex items-center justify-center relative overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-foreground rounded-full"
                  animate={
                    isPlaying
                      ? {
                          x: [0, Math.random() * 200 - 100],
                          y: [0, Math.random() * 200 - 100],
                          opacity: [0.2, 1, 0.2],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              <div className="text-center z-10">
                <div className="inline-block p-4 bg-foreground/20 rounded-full mb-4">
                  <Sparkles size={32} className="text-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Dynamic Particles</h4>
                <p className="text-foreground-secondary">Animated particle system</p>
              </div>
            </div>
          </motion.div>

          {/* Morphing Shapes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-foreground/10 to-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-foreground/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Morphing Shapes</h3>
            <div className="bg-gradient-to-br from-foreground/20 to-foreground/20 rounded-2xl p-8 backdrop-blur-sm border border-foreground/20 h-64 flex items-center justify-center">
              <motion.div
                animate={
                  isPlaying
                    ? {
                        borderRadius: ["20%", "50%", "20%"],
                        rotate: [0, 90, 180, 270, 360],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 bg-gradient-to-r from-foreground to-foreground/80"
              />
            </div>
          </motion.div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Parallax mouse tracking",
            "3D perspective transforms",
            "Particle system animations",
            "Morphing shape transitions",
            "Staggered sequence animations",
            "Hover scaling effects",
            "Color transition effects",
            "Entrance animations",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-6 border border-foreground/20 shadow-sm flex items-center"
            >
              <Check className="text-foreground mr-3" size={24} />
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-4 bg-foreground/5 rounded-full p-2 border border-foreground/20">
            <button
              className={`p-3 rounded-full ${isPlaying ? "bg-foreground text-background" : "bg-foreground/10"}`}
              onClick={() => {}}
            >
              <Play size={20} />
            </button>
            <button
              className={`p-3 rounded-full ${!isPlaying ? "bg-foreground text-background" : "bg-foreground/10"}`}
              onClick={() => {}}
            >
              <Pause size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Square size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <RotateCcw size={20} />
            </button>
            <button className="p-3 rounded-full bg-foreground/10">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        {/* View Full Demo Button */}
        <div className="text-center mt-16">
          <Link href="/work-demo">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg"
            >
              View Full Animation Demo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
