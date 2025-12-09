"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from "react-type-animation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !inView) return

    // Animate skill items with staggered delays
    gsap.utils.toArray(sectionRef.current.querySelectorAll('.skill-item')).forEach((el, i) => {
      gsap.fromTo(el as HTMLElement,
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
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          } as gsap.plugins.ScrollTriggerInstanceVars,
        }
      )
    })
  }, [inView])

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "Figma", "Stripe"] },
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

  return (
    <section 
      id="about" 
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
              'About Me',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={0}
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-foreground leading-relaxed"
            >
              I'm a full-stack developer with a passion for building scalable web applications. With expertise in
              JavaScript/TypeScript ecosystems, I create seamless experiences from frontend to backend.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-foreground leading-relaxed"
            >
              Currently, I'm focused on mastering modern web technologies and contributing to innovative projects. I
              believe in writing clean, maintainable code and creating intuitive user interfaces.
            </motion.p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={skillGroup.category} 
                variants={itemVariants}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <motion.h3 
                  className="text-lg font-semibold text-accent mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: groupIndex * 0.1 + 0.2,
                    ease: "easeOut"
                  }}
                >
                  {skillGroup.category}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-item px-4 py-2 bg-foreground/10 rounded-lg text-sm font-medium text-foreground hover:text-background transition-colors cursor-pointer"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "var(--color-primary)",
                        boxShadow: "0 5px 15px rgba(0, 102, 255, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}