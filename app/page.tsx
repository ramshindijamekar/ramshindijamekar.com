import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { NeuralNetworkBackground } from "@/components/neural-network-background"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <NeuralNetworkBackground />
      <div className="container mx-auto px-4 relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </main>
  )
}
