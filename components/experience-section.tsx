"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from "react-type-animation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !inView) return

    // Animate experience items with staggered delays
    gsap.utils.toArray(sectionRef.current.querySelectorAll('.experience-item')).forEach((el, i) => {
      const element = el as HTMLElement;
      gsap.fromTo(element,
        {
          opacity: 0,
          x: -30,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          } as gsap.plugins.ScrollTriggerInstanceVars,
        }
      )
    })

    // Animate timeline connectors
    gsap.utils.toArray(sectionRef.current.querySelectorAll('.timeline-connector')).forEach((el, i) => {
      const element = el as HTMLElement;
      gsap.fromTo(element,
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          } as gsap.plugins.ScrollTriggerInstanceVars,
        }
      )
    })
  }, [inView])

  const experiences = [
    {
      company: "Flowmingo AI",
      position: "Business Partner",
      type: "Part-time",
      duration: "Oct 2025 - Present",
      location: "Remote",
      description: "Collaborating on AI-driven business solutions and partnerships",
      skills: ["Business Development", "AI Integration"],
    },
    {
      company: "ProduceX",
      position: "Web Developer",
      type: "Internship",
      duration: "Aug 2025 - Present",
      location: "Remote",
      description: "Building responsive web applications with modern frontend technologies",
      skills: ["Front-End Design", "Software Design"],
    },
    {
      company: "NexGenix",
      position: "Full-stack Developer",
      type: "Internship",
      duration: "Aug 2025 - Present",
      location: "Remote",
      description: "Developing e-commerce solutions with full-stack capabilities",
      skills: ["E-Commerce", "Software Design", "Database Design"],
    },
    {
      company: "XYZ",
      position: "Software Engineer",
      type: "Internship",
      duration: "Jul 2025 - Present",
      location: "Remote",
      description: "Contributing to software development and frontend design projects",
      skills: ["Front-End Design", "Software Design"],
    },
    {
      company: "Culturelligence",
      position: "Human Resources Intern",
      type: "Internship",
      duration: "May 2025 - Aug 2025",
      location: "Remote",
      description: "Supported R&D team on PeopleOps innovation projects with Agile practices",
      skills: ["HR Operations", "Agile Methodology"],
    },
    {
      company: "HexSoftwares",
      position: "Web Developer",
      type: "Internship",
      duration: "Apr 2025 - May 2025",
      location: "Remote",
      description: "Built real-world JavaScript projects and enhanced frontend skills",
      skills: ["CSS", "JavaScript", "Web Development"],
    },
    {
      company: "Itransition Group",
      position: "Frontend Developer",
      type: "Internship",
      duration: "Mar 2025 - May 2025",
      location: "Remote",
      description: "Built responsive UIs using React and Next.js with Tailwind CSS",
      skills: ["React.js", "TypeScript", "Next.js", "Express.js"],
    },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
      id="experience" 
      ref={ref} 
      className="py-20 px-6 relative animate-section"
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
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
        >
          <TypeAnimation
            sequence={[
              'Work Experience',
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
          className="text-lg text-foreground mb-12 max-w-2xl"
        >
          A timeline of my professional journey and internships across various companies
        </motion.p>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/20 timeline-connector" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.position}`}
                className={`experience-item relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 pl-8 md:pl-0`}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-foreground bg-background flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-foreground" />
                </div>
                
                {/* Content card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="p-6 rounded-xl glass-effect border border-foreground/20 bg-background">
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                    <p className="font-medium text-foreground mb-2">{exp.company}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 my-3 text-sm text-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground">{exp.type}</span>
                    </div>
                    
                    <p className="text-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-foreground/10 rounded-full text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}