"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    name: "Planet Alpha",
    description: "E-commerce platform with modern UI",
    color: "#00FFFF",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    details: "A fully functional e-commerce platform with cart management, payment integration, and admin dashboard.",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Planet Beta",
    description: "Social media dashboard",
    color: "#B026FF",
    tech: ["React", "TypeScript", "Firebase", "Chart.js"],
    details: "Real-time social media analytics dashboard with interactive charts and data visualization.",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Planet Gamma",
    description: "AI-powered chat application",
    color: "#F8D568",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    details: "Intelligent chatbot application with conversation history and context-aware responses.",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Planet Delta",
    description: "Portfolio template builder",
    color: "#00FFFF",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    details: "Drag-and-drop portfolio builder with customizable themes and export functionality.",
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    name: "Planet Epsilon",
    description: "Task management system",
    color: "#B026FF",
    tech: ["Next.js", "Supabase", "Zustand", "DnD Kit"],
    details: "Collaborative task management with real-time updates, drag-and-drop, and team features.",
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    name: "Planet Zeta",
    description: "Weather forecast app",
    color: "#F8D568",
    tech: ["React", "OpenWeather API", "Recharts"],
    details: "Beautiful weather application with 7-day forecasts, interactive maps, and weather alerts.",
    demo: "#",
    github: "#",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-bold glow-text text-[#F8D568]">
            🌌PROJECT GALAXY
          </h2>
          <p className="text-lg text-slate-100 text-slate-100">Each project is a different planet in my coding universe</p>

          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#F8D568] to-transparent" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-sm font-[family-name:var(--font-orbitron)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
            </span>
            UPCOMING PROJECTS WILL BE DISPLAYED HERE
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => null)}
        </div>

        {/* Project details modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className="max-w-2xl bg-card/95 backdrop-blur-sm border-2"
            style={{ borderColor: selectedProject?.color }}
          >
            <DialogHeader>
              <DialogTitle
                className="font-[family-name:var(--font-orbitron)] text-3xl"
                style={{ color: selectedProject?.color }}
              >
                {selectedProject?.name}
              </DialogTitle>
              <DialogDescription className="text-base pt-4 space-y-4">
                <p className="text-foreground/90">{selectedProject?.details}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded text-sm"
                        style={{
                          backgroundColor: `${selectedProject.color}20`,
                          color: selectedProject.color,
                          border: `1px solid ${selectedProject.color}40`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 font-[family-name:var(--font-orbitron)]"
                    style={{
                      backgroundColor: selectedProject?.color,
                      color: "#0d1b2a",
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LIVE DEMO
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 font-[family-name:var(--font-orbitron)] bg-transparent"
                    style={{
                      borderColor: selectedProject?.color,
                      color: selectedProject?.color,
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    SOURCE CODE
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
