import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Variants } from "framer-motion"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Advanced Framer Motion Variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
}

// Advanced GSAP Animations
export const initHeroAnimations = (imageRef: React.RefObject<HTMLDivElement | null>) => {
  // Check if ref is valid
  if (!imageRef || !imageRef.current) return

  // Image floating animation with more complex movement
  gsap.to(imageRef.current, {
    y: -20,
    x: 5,
    rotation: 2,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  })

  // Add subtle scale animation
  gsap.to(imageRef.current, {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
  })
}

export const initScrollAnimations = () => {
  // Section entrance animations
  gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })

  // Skill item animations
  gsap.utils.toArray<HTMLElement>(".animate-skill").forEach((skill, i) => {
    gsap.fromTo(
      skill,
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: skill,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })

  // Project card animations
  gsap.utils.toArray<HTMLElement>(".animate-project").forEach((project, i) => {
    gsap.fromTo(
      project,
      {
        opacity: 0,
        y: 30,
        rotationX: 15,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Text animation utilities
export const animateText = (element: HTMLElement) => {
  if (!element) return

  const text = element.textContent || ""
  element.innerHTML = ""

  text.split("").forEach((char, i) => {
    const span = document.createElement("span")
    span.textContent = char
    span.style.display = "inline-block"
    element.appendChild(span)

    gsap.fromTo(
      span,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.03,
      }
    )
  })
}

// Dotted line animation for connections
export const createDottedLineAnimation = (lineElement: HTMLElement) => {
  if (!lineElement) return

  const dots = lineElement.querySelectorAll(".dot")
  if (dots.length === 0) return

  // Animate dots sequentially to create flowing effect
  gsap.to(dots, {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  })
}