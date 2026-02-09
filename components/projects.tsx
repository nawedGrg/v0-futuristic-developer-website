"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    name: "AI Portfolio Website",
    description: "A futuristic personal developer portfolio showcasing skills, projects, and modern UI design.",
    color: "#38bdf8",
    tech: ["React", "Tailwind CSS", "Modern UI Design"],
    details: "A futuristic personal developer portfolio showcasing my skills, projects, and modern UI design. Built with responsive layouts and interactive components.",
    demo: "https://v0-futuristic-developer-website.vercel.app",
    github: "https://github.com/nawedGrg/v0-futuristic-developer-website",
  },
  {
    id: 2,
    name: "CodeQuest",
    description: "A programming quiz platform to help beginners practice coding concepts through interactive quizzes.",
    color: "#a78bfa",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    details: "A programming quiz platform designed to help beginners practice coding concepts through interactive quizzes and score tracking.",
    demo: null,
    github: "https://github.com/nawedGrg/CodeQuest---Code-Learning-Quiz-Game/tree/main/codequest",
  },
  {
    id: 3,
    name: "Weather App",
    description: "A web app displaying real-time weather information for any city using API integration.",
    color: "#fbbf24",
    tech: ["JavaScript", "API Integration", "Responsive Design"],
    details: "A web application that displays real-time weather information for any city using API integration and responsive UI.",
    demo: "https://vivid-sky-view.lovable.app",
    github: null,
  },
  {
    id: 4,
    name: "Fashion Store",
    description: "An e-commerce fashion store interface with product browsing and modern responsive layouts.",
    color: "#34d399",
    tech: ["HTML", "CSS", "JavaScript"],
    details: "An e-commerce fashion store interface featuring product browsing, modern layouts, and responsive design.",
    demo: "https://sleek-wardrobe-explorer.lovable.app",
    github: null,
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true) }, { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div ref={ref} className="max-w-5xl w-full">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-[0.3em] uppercase text-[#fbbf24] mb-3">
            Selected Work
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Project Galaxy
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each project is a different planet in my coding universe
          </p>

          
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-2xl glass p-6 text-left transition-all duration-500 hover:bg-white/[0.06] cursor-pointer delay-${index * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Top row: number + arrow */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-[family-name:var(--font-orbitron)] text-xs text-muted-foreground tracking-wider">
                  {String(project.id).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>

              {/* Project name */}
              <h3
                className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-2 transition-colors duration-300"
                style={{ color: project.color }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: `${project.color}10`,
                      color: project.color,
                      border: `1px solid ${project.color}20`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}40, transparent)` }}
              />
            </button>
          ))}
        </div>

        {/* Project details modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className="max-w-lg glass-strong rounded-2xl border"
            style={{ borderColor: `${selectedProject?.color}30` }}
          >
            <DialogHeader>
              <DialogTitle
                className="font-[family-name:var(--font-orbitron)] text-2xl"
                style={{ color: selectedProject?.color }}
              >
                {selectedProject?.name}
              </DialogTitle>
              <DialogDescription className="text-base pt-4 space-y-6">
                <p className="text-foreground/80 leading-relaxed">{selectedProject?.details}</p>

                <div>
                  <h4 className="text-xs font-[family-name:var(--font-orbitron)] uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium"
                        style={{
                          backgroundColor: `${selectedProject.color}12`,
                          color: selectedProject.color,
                          border: `1px solid ${selectedProject.color}25`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {selectedProject?.demo ? (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        className="w-full font-[family-name:var(--font-orbitron)] text-xs rounded-xl"
                        style={{ backgroundColor: selectedProject.color, color: "#0a0e17" }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button disabled className="flex-1 font-[family-name:var(--font-orbitron)] text-xs rounded-xl opacity-30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      No Demo
                    </Button>
                  )}
                  {selectedProject?.github ? (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full font-[family-name:var(--font-orbitron)] text-xs rounded-xl bg-transparent"
                        style={{ borderColor: `${selectedProject.color}40`, color: selectedProject.color }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  ) : (
                    <Button disabled variant="outline" className="flex-1 font-[family-name:var(--font-orbitron)] text-xs rounded-xl bg-transparent opacity-30">
                      <Github className="w-4 h-4 mr-2" />
                      No Source
                    </Button>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
