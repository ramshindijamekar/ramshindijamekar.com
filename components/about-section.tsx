"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  // Reference for scroll animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </motion.h2>

          {/* 🔥 CUSTOMIZE: Update your bio paragraphs here - Replace with your own story */}
          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              I'm Ram, an AI/ML Engineer with expertise in building intelligent systems that push the boundaries of
              what's possible. My journey in artificial intelligence began with a fascination for how machines can learn
              and adapt, and has evolved into a career focused on developing cutting-edge solutions in the fields of
              Machine Learning, Generative AI, and Agentic Systems.
            </p>
            <p>
              With a strong foundation in both theoretical concepts and practical implementation, I specialize in
              designing and deploying models that not only process data effectively but also generate meaningful
              insights and content. My work spans from traditional machine learning algorithms to state-of-the-art
              generative models and autonomous agent architectures.
            </p>
            <p>
              I believe in the transformative power of AI when developed responsibly and ethically. My approach combines
              technical rigor with a deep understanding of the domains I work in, ensuring that the solutions I build
              are not just technically sound but also meaningful and impactful.
            </p>
          </motion.div>

          {/* 🔥 CUSTOMIZE: Update your key areas of expertise here */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deep expertise in supervised, unsupervised, and reinforcement learning techniques.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-2">Generative AI</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in diffusion models, transformers, and generative adversarial networks.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-2">Agentic Systems</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building autonomous agents that can reason, plan, and execute complex tasks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
