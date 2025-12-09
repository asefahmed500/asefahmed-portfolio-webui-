"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from "react-type-animation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !inView) return

    // Animate project cards with advanced scroll-triggered animations
    const elements = sectionRef.current.querySelectorAll('.project-card');
    elements.forEach((el, i) => {
      const element = el as HTMLElement;
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 50,
          rotationX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          } as gsap.plugins.ScrollTriggerInstanceVars,
        }
      )
    })
  }, [inView])

  const projects = [
    {
      title: "JobPortalX",
      description: "Job platform with employer dashboards and applicant tracking system",
      tech: ["Next.js", "Node.js", "MongoDB"],
      links: { 
        live: "https://job-portal-example.vercel.app", 
        code: "https://github.com/asefahmed/job-portal" 
      },
    },
    {
      title: "TourX",
      description: "Travel booking platform with dynamic pricing and Stripe integration",
      tech: ["React", "Node.js", "Stripe"],
      links: { 
        live: "https://tour-booking-example.vercel.app", 
        code: "https://github.com/asefahmed/tour-booking" 
      },
    },
    {
      title: "PortfolioZ",
      description: "Portfolio builder with customizable templates for profiles",
      tech: ["React", "MongoDB", "Express"],
      links: { 
        live: "https://portfolio-builder-example.vercel.app", 
        code: "https://github.com/asefahmed/portfolio-builder" 
      },
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-16 sm:py-20 px-4 sm:px-6 relative animate-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 gradient-text text-balance"
        >
          <TypeAnimation
            sequence={[
              'Featured Projects',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={0}
          />
        </motion.h2>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 },
                zIndex: 10
              }}
              style={{
                rotateX: hoveredIndex === index ? 5 : 0,
                rotateY: hoveredIndex === index ? -5 : 0,
                transformStyle: "preserve-3d",
              }}
              layout
              transition={{ 
                layout: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
            >
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 bg-foreground/5 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                animate={{
                  opacity: hoveredIndex === index ? 0.2 : 0,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative glass-effect rounded-xl p-6 h-full flex flex-col justify-between border border-foreground/20 transition-all duration-300 bg-background"
                animate={{
                  borderColor: hoveredIndex === index ? "var(--color-foreground)" : "var(--color-foreground)/20%",
                  y: hoveredIndex === index ? -10 : 0,
                  boxShadow: hoveredIndex === index 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <div>
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-foreground mb-3"
                    animate={{
                      color: hoveredIndex === index ? "var(--color-foreground)" : "var(--color-foreground)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-foreground mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1 bg-foreground/10 text-foreground rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1 text-sm px-3 py-2 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-colors text-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </motion.a>
                    <motion.a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1 text-sm px-3 py-2 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-colors text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}