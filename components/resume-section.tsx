"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileDown, Award, GraduationCap, BookOpen } from "lucide-react"

// 🔥 CUSTOMIZE: Update with your own education history
const education = [
  {
    degree: "Bachelor Of Engineering", // 🔥 Your degree
    institution: "SSGMCE", // 🔥 Your university
    period: "2019 - 2023", // 🔥 Time period
    description:
      "Specialized in Machine Learning and Artificial Intelligence. Thesis on 'Deep Reinforcement Learning for Autonomous Systems'.", // 🔥 Description of your studies
  },
  // {
  //   degree: "M.S. in Computer Science",
  //   institution: "Massachusetts Institute of Technology",
  //   period: "2010 - 2012",
  //   description:
  //     "Focus on Artificial Intelligence and Machine Learning. Research on neural network architectures for computer vision.",
  // },
  // {
  //   degree: "B.S. in Computer Engineering",
  //   institution: "University of California, Berkeley",
  //   period: "2006 - 2010",
  //   description: "Graduated with honors. Senior project on natural language processing for sentiment analysis.",
  // },
  // 💡 Add more education like this:
  // {
  //   degree: "Your Degree",
  //   institution: "Your School",
  //   period: "Start - End",
  //   description: "What you studied...",
  // },
]

// 🔥 CUSTOMIZE: Update with your own certifications
const certifications = [
{
  title: "Microsoft Certified: Azure AI Fundamentals",
  issuer: "Microsoft",
  date: "2024",
  description:
    "Fundamental certification covering core concepts in AI and machine learning, responsible AI principles, and Azure services for building and deploying AI solutions.",
},
{
  title: "Python for Machine Learning & Data Science Masterclass",
  issuer: "Udemy",
  date: "2024",
  description:
    "Hands-on program covering supervised and unsupervised learning, deep learning with TensorFlow and Keras, model evaluation, and deployment using Python.",
},
{
  title: "Introduction to Artificial Intelligence (AI)",
  issuer: "IBM",
  date: "2020",
  description:
    "Foundational course introducing AI concepts including search algorithms, logic, machine learning, and applications in natural language processing and computer vision.",
}

  // 💡 Add more certifications like this:
  // {
  //   title: "Your Certification",
  //   issuer: "Issuing Organization",
  //   date: "Year",
  //   description: "What it covers...",
  // },
]

// 🔥 CUSTOMIZE: Update with your own publications
const publications = [
{
  title: "Detection of Brain Tumor in MRI Images Using Machine Learning",
  journal: "IEEE-INSCIRD",
  date: "2023",
  description:
    "Proposed a machine learning-based diagnostic pipeline for accurate detection of brain tumors in MRI scans, combining image preprocessing, feature extraction, and classification techniques to improve early-stage tumor recognition accuracy.",
},

  // {
  //   title: "Efficient Fine-Tuning of Large Language Models for Domain-Specific Applications",
  //   journal: "Conference on Neural Information Processing Systems (NeurIPS)",
  //   date: "2020",
  //   description: "Method for efficiently fine-tuning large language models with limited computational resources.",
  // },
  // {
  //   title: "Generative Adversarial Networks for Realistic Image Synthesis",
  //   journal: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   date: "2019",
  //   description: "New architecture for GANs that produces more realistic images with fewer artifacts.",
  // },
  // 💡 Add more publications like this:
  // {
  //   title: "Your Paper Title",
  //   journal: "Conference/Journal Name",
  //   date: "Year",
  //   description: "Brief description...",
  // },
]

export function ResumeSection() {
  // Reference for scroll animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("education")

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
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Resume</h2>
            {/* 📄 Resume download button - Make sure to add your resume.pdf to /public/ folder */}
            <Button
              className="group bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
              asChild
            >
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="education" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="education" className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Certifications</span>
                </TabsTrigger>
                <TabsTrigger value="publications" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Publications</span>
                </TabsTrigger>
              </TabsList>

              {/* Education tab content */}
              <TabsContent value="education" className="space-y-6">
                {education.map((item) => (
                  <Card key={item.degree} className="card-hover border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                      </div>
                      <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">{item.institution}</h4>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Certifications tab content */}
              <TabsContent value="certifications" className="space-y-6">
                {certifications.map((item) => (
                  <Card key={item.title} className="card-hover border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.date}</span>
                      </div>
                      <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">{item.issuer}</h4>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Publications tab content */}
              <TabsContent value="publications" className="space-y-6">
                {publications.map((item) => (
                  <Card key={item.title} className="card-hover border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.date}</span>
                      </div>
                      <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">{item.journal}</h4>
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
