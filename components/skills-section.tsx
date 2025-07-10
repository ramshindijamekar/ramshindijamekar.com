"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

// 🔥 CUSTOMIZE: Update with your own skills - Add/remove categories and skills as needed
const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision", "NLP"],
  },
  {
    title: "Generative AI",
    skills: ["Langchain" , "LLMs","Diffusion Models", "Transformers", "GANs", "LoRA", "RAG", "Multimodal Models"],
  },
  {
    title: "Agentic Systems",
    skills: [
      "Autonomous Agents",
      "Multi-agent Systems",
      "Reinforcement Learning",
      "Planning Algorithms",
    ],
  },
  {
    title: "Data Engineering",
    skills: ["SQL", "NoSQL", "Data Pipelines", "ETL", "Data Visualization"],
  },
  {
    title: "Programming",
    skills: ["Python", ],
  },
  // 💡 Add more categories like this:
  // {
  //   title: "Cloud & DevOps",
  //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "MLOps", "Terraform"],
  // },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Skills & Expertise
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card-hover"
              >
                <Card className="h-full bg-card border-gray-200 dark:border-gray-800 overflow-hidden relative group">
                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-4 transition-transform duration-300 group-hover:translate-y-[-5px]">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:translate-y-[-5px]">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100/20 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 CUSTOMIZE: Update this description about your skills */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical expertise is complemented by strong problem-solving abilities, effective communication
              skills, and a commitment to continuous learning in this rapidly evolving field.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
