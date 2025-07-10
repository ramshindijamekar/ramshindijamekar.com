"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"

// 🔥 CUSTOMIZE: Replace with your own projects
// 📁 IMPORTANT: Add your project images to /public/images/projects/ folder
// 🔗 IMPORTANT: Update GitHub and demo URLs with your actual links
const projects = [
  {
    title: "InvoicePay", // 🔥 Your project title
    description:
      "AI-powered invoice assistant that extracts payment details and generates actionable messages — from image to instruction.", // 🔥 Your project description
    // 📸 CUSTOMIZE: Replace with your own image path - add images to /public/images/projects/
    image: "/images/invoice.svg?height=400&width=600", // 🔥 Replace with: "/images/projects/diffusion-model.jpg"
    tags: ["Python", "OCR", "Computer Vision", "HuggingFace", "LLMs", "Agents"], // 🔥 Your tech stack
    github: "#", // 🔥 CUSTOMIZE: Add your GitHub repo URL
    demo: "#", // 🔥 CUSTOMIZE: Add your live demo URL
  },
  {
    title: "Multi-modal Transformer",
    description:
      "A transformer-based architecture that can process and generate content across multiple modalities, including text, images, and audio.",
    image: "/images/multi-1.jpg?height=400&width=600", // 🔥 Replace with: "/images/projects/multimodal-transformer.jpg"
    tags: ["Transformers", "Multi-modal", "TensorFlow", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "AgroBound",
    description:
      "Developed an AI pipeline for real-time farm boundary detection using Segment Anything Model (SAM) on live satellite imagery, with fine-tuning for occlusions like tree cover and curved fields.",
    image: "/images/agribound1.jpg?height=400&width=600", // 🔥 Replace with: "/images/projects/rl-environment.jpg"
    tags: ["Python", "SAM", "Computer Vision", "Fine-Tuning", "OpenCV", "pytorch" ],
    github: "#",
    demo: "#",
  },
  {
    title: "RacketDL",
    description:
      "RacketDL leverages deep learning to analyze tennis performance, utilizing advanced computer vision for player and ball tracking.",
    image: "/images/racketdl.png?height=400&width=600", // 🔥 Replace with: "/images/projects/neural-architecture.jpg"
    tags: ["Python", "Pytorch", "YOLO", "OpenCV", "Game Analytics"],
    github: "#",
    demo: "#",
  },
  {
    title: "RaceTrackML",
    description:
      "RaceTrackML employs machine learning to analyze Formula 1 race data, providing insights into driver performance and race dynamics.",
    image: "/images/f1.jpg?height=400&width=600", // 🔥 Replace with: "/images/projects/time-series.jpg"
    tags: ["Time Series", "Forecasting", "LSTM", "Statistics"],
    github: "#",
    demo: "#",
  },
  // 💡 Add more projects like this:
  // {
  //   title: "Your New Project",
  //   description: "Description of your project...",
  //   image: "/images/projects/your-project.jpg",
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   github: "https://github.com/yourusername/project",
  //   demo: "https://your-demo-url.com",
  // },
]

export function ProjectsSection() {
  // Reference for scroll animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Projects
          </motion.h2>

          {/* Project grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card-hover"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full overflow-hidden cursor-pointer group border-gray-200 dark:border-gray-800">
                  {/* Project image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project details */}
                  <CardContent className="p-6 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    {/* Project tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project links */}
                    <div className="flex justify-between opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-0 transition-transform duration-300 hover:translate-x-[-2px] text-gray-600 dark:text-gray-400"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.github, "_blank")
                        }}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-0 transition-transform duration-300 hover:translate-x-[2px] text-gray-600 dark:text-gray-400"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.demo, "_blank")
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal - shows when a project is clicked */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative h-64 md:h-80 w-full bg-gray-100 dark:bg-gray-800">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => window.open(selectedProject.github, "_blank")}
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject.demo, "_blank")}
                  className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
