"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  // Reference for scroll animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { toast } = useToast()

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 🔥 CUSTOMIZE: Replace with your actual form submission logic
    // You can integrate with services like Formspree, Netlify Forms, or your own backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact information card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-gray-200 dark:border-gray-800">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                  {/* 🔥 CUSTOMIZE: Update your contact description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    I'm currently available for freelance work, full-time positions, and collaborative research
                    projects. Feel free to reach out if you have any questions or would like to discuss potential
                    opportunities.
                  </p>

                  {/* 🔥 CUSTOMIZE: Update your email address */}
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400" />
                    <a
                      href="mailto:shindijamekar.1101@gmail.com"
                      className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      shindijamekar.1101@gmail.com
                    </a>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                    {/* 🔥 CUSTOMIZE: Update with your social media links */}
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700 bg-transparent"
                        aria-label="GitHub"
                        asChild
                      >
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700 bg-transparent"
                        aria-label="LinkedIn"
                        asChild
                      >
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700 bg-transparent"
                        aria-label="Twitter"
                        asChild
                      >
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 group-hover:border-gray-400 dark:group-hover:border-gray-600"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 dark:bg-gray-100 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                    <div className="relative group">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 group-hover:border-gray-400 dark:group-hover:border-gray-600"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 dark:bg-gray-100 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                    <div className="relative group">
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="transition-all duration-300 border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-100 group-hover:border-gray-400 dark:group-hover:border-gray-600"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 dark:bg-gray-100 transition-all duration-500 group-hover:w-full"></div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gray-800/10 dark:bg-gray-200/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
