"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileDown, ExternalLink } from "lucide-react"
import { useRef, useState } from "react"

export function HeroSection() {
  // Ref for the hero section to track mouse movement
  const heroRef = useRef<HTMLDivElement>(null)
  const [tiltX, setTiltX] = useState(0)
  const [tiltY, setTiltY] = useState(0)

  // Handle mouse movement for the 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltAmountX = ((x - centerX) / centerX) * 10
    const tiltAmountY = ((y - centerY) / centerY) * 10

    setTiltX(-tiltAmountY)
    setTiltY(tiltAmountX)
  }

  // Reset tilt when mouse leaves the section
  const resetTilt = () => {
    setTiltX(0)
    setTiltY(0)
  }

  const handleProjectsClick = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center justify-center pt-24"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Main heading with 3D tilt effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* 🔥 CUSTOMIZE: Update your name here */}
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter gradient-text">RAM SHINDIJAMEKAR</h1> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">RAM SHINDIJAMEKAR</h1>

            {/* 🔥 CUSTOMIZE: Update your title/role here */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-400">
              AI Engineer | Generative AI | Agentic Systems
            </h2>
          </motion.div>

          {/* 🔥 CUSTOMIZE: Update your short bio/description here */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8 text-lg"
          >
            Building intelligent systems that understand, create, and evolve. Specializing in machine learning
            architectures, generative models, and autonomous agents.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* 📄 Resume download button - Make sure to add your resume.pdf to /public/ folder */}
            <Button
              className="group bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
              asChild
            >
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </a>
            </Button>

            {/* Projects button - scrolls to projects section */}
            <Button
              variant="outline"
              className="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
              onClick={handleProjectsClick}
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
