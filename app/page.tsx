"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { WelcomeModal } from "@/components/welcome-modal"
import { initScrollAnimations } from "@/lib/animations"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize advanced scroll animations
    initScrollAnimations()
    
    // Add page load animation
    gsap.fromTo("section",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power2.out"
      }
    )
  }, [])

  return (
    <main className="pt-16">
      <WelcomeModal />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}