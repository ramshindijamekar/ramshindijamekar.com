"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 🔥 CUSTOMIZE: Update with your own work experience
// 💼 Replace all the experience data with your actual work history
const experiences = [
  {
    title: "Junior Software Engineer", // 🔥 Your job title
    company: "KAPL", // 🔥 Company name
    period: "2024 - Present", // 🔥 Time period
description:
  "Built scalable backend systems, integrated AI models, and implemented data ingestion pipelines for enterprise applications. Contributed to backend development, API development, SQL-based data handling, and workflow automation . Focused on delivering clean, maintainable code and collaborating across teams to support production-ready deployments.",

technologies: [
  "Python",
  "PyTorch",
  "REST APIs",
  "MySQL",
  "Tensorflow",
  "OpenCV",
  "Superset",
  "ETL",
  "MongoDB",
  "Git",
  "Docker",
  "MLOps"
],
},
  // {
  //   title: "Senior Machine Learning Engineer",
  //   company: "DataVision Corp",
  //   period: "2019 - 2022",
  //   description:
  //     "Designed and implemented computer vision systems for autonomous navigation. Developed a novel approach to object detection that improved accuracy by 15% in low-light conditions.",
  //   technologies: ["TensorFlow", "Computer Vision", "GANs", "CUDA", "C++", "Python"],
  // },
  // {
  //   title: "AI Research Scientist",
  //   company: "Neural Systems Research",
  //   period: "2017 - 2019",
  //   description:
  //     "Conducted research on reinforcement learning algorithms for robotic control. Published 3 papers in top-tier conferences on multi-agent reinforcement learning.",
  //   technologies: ["Reinforcement Learning", "Multi-agent Systems", "ROS", "PyTorch", "Simulation"],
  // },
  // {
  //   title: "Machine Learning Engineer",
  //   company: "Cognitive Solutions Inc",
  //   period: "2015 - 2017",
  //   description:
  //     "Developed natural language processing models for sentiment analysis and text classification. Implemented a production-ready pipeline for real-time text processing.",
  //   technologies: ["NLP", "BERT", "Spacy", "FastAPI", "Docker", "AWS"],
  // },
  // 💡 Add more experiences like this:
  // {
  //   title: "Your Job Title",
  //   company: "Company Name",
  //   period: "Start - End",
  //   description: "What you did and achieved...",
  //   technologies: ["Tech1", "Tech2", "Tech3"],
  // },
]

export function ExperienceSection() {
  // Reference for scroll animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

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
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-300 dark:bg-gray-700" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`mb-12 md:mb-24 relative ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "md:pl-12 md:ml-1/2"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:-mr-2.5" : "left-0 -ml-2.5"
                  } h-5 w-5 rounded-full border-4 border-gray-900 dark:border-gray-100 bg-background`}
                />

                <Card className="card-hover group border-gray-200 dark:border-gray-800">
                  <CardContent className="p-6 transition-all duration-300 group-hover:translate-y-[-5px]">
                    <div className="mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100/20 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
