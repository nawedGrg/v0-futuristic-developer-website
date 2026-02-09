"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    name: "AI Portfolio Website",
    description:
      "A futuristic personal developer portfolio showcasing my skills, projects, and modern UI design. Built with responsive layouts and interactive components.",
    color: "#00FFFF",
    tech: ["React", "Tailwind CSS", "Modern UI Design"],
    demo: "https://v0-futuristic-developer-website.vercel.app",
    github: "https://github.com/nawedGrg/v0-futuristic-developer-website",
  },
  {
    id: 2,
    name: "CodeQuest",
    subtitle: "Code Learning Quiz Game",
    description:
      "A programming quiz platform designed to help beginners practice coding concepts through interactive quizzes and score tracking.",
    color: "#B026FF",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: null,
    github: "https://github.com/nawedGrg/CodeQuest---Code-Learning-Quiz-Game/tree/main/codequest",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "A web application that displays real-time weather information for any city using API integration and responsive UI.",
    color: "#F8D568",
    tech: ["JavaScript", "API Integration", "Responsive Design"],
    demo: "https://vivid-sky-view.lovable.app",
    github: null,
  },
  {
    id: 4,
    name: "Fashion Store Website",
    description:
      "An e-commerce fashion store interface featuring product browsing, modern layouts, and responsive design.",
    color: "#00FFFF",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sleek-wardrobe-explorer.lovable.app",
    github: null,
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
            PROJECT GALAXY
          </h2>
          <p className="text-lg text-slate-300">
            Each project is a different planet in my coding universe
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#F8D568] to-transparent" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl p-px text-left transition-all duration-500 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={
                {
                  "--card-color": project.color,
                } as React.CSSProperties
              }
            >
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40, transparent 50%, ${project.color}20)`,
                }}
              />

              {/* Card content */}
              <div className="relative rounded-xl border border-white/10 bg-[#0a0f1a]/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0a0f1a]/95">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                {/* Project number indicator */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="font-[family-name:var(--font-orbitron)] text-xs tracking-widest opacity-60"
                      style={{ color: project.color }}
                    >
                      PROJECT {String(project.id).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-bold mt-1 text-balance"
                      style={{ color: project.color }}
                    >
                      {project.name}
                    </h3>
                    {"subtitle" in project && project.subtitle && (
                      <p
                        className="font-[family-name:var(--font-orbitron)] text-sm mt-0.5 opacity-70"
                        style={{ color: project.color }}
                      >
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Status dot */}
                  <span className="relative mt-2 flex h-3 w-3 shrink-0">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: project.color }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-3 w-3"
                      style={{ backgroundColor: project.color }}
                    />
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-[family-name:var(--font-orbitron)] tracking-wide"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-4">
                  {project.demo && (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-orbitron)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: project.color }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE DEMO
                    </span>
                  )}
                  {project.github && (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-[family-name:var(--font-orbitron)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: project.color }}
                    >
                      <Github className="w-4 h-4" />
                      SOURCE
                    </span>
                  )}
                  {!project.demo && !project.github && (
                    <span className="text-sm font-[family-name:var(--font-orbitron)] text-slate-500">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Project details modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent
            className="max-w-2xl border-2 backdrop-blur-sm"
            style={{
              borderColor: selectedProject?.color,
              backgroundColor: "rgba(10, 15, 26, 0.95)",
            }}
          >
            <DialogHeader>
              <DialogTitle
                className="font-[family-name:var(--font-orbitron)] text-2xl md:text-3xl"
                style={{ color: selectedProject?.color }}
              >
                {selectedProject?.name}
                {"subtitle" in (selectedProject ?? {}) &&
                  (selectedProject as typeof projects[0] & { subtitle?: string })?.subtitle && (
                    <span className="block text-base font-normal opacity-70 mt-1">
                      {(selectedProject as typeof projects[0] & { subtitle?: string }).subtitle}
                    </span>
                  )}
              </DialogTitle>
              <DialogDescription className="text-base pt-4 space-y-6" asChild>
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject?.description}
                  </p>

                  <div>
                    <h4
                      className="font-[family-name:var(--font-orbitron)] text-sm font-semibold mb-3 tracking-wider"
                      style={{ color: selectedProject?.color }}
                    >
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-sm font-[family-name:var(--font-orbitron)]"
                          style={{
                            backgroundColor: `${selectedProject.color}15`,
                            color: selectedProject.color,
                            border: `1px solid ${selectedProject.color}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {selectedProject?.demo ? (
                      <Button
                        asChild
                        className="flex-1 font-[family-name:var(--font-orbitron)] text-sm"
                        style={{
                          backgroundColor: selectedProject?.color,
                          color: "#0a0f1a",
                        }}
                      >
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          LIVE DEMO
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 font-[family-name:var(--font-orbitron)] text-sm opacity-40"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        NO DEMO
                      </Button>
                    )}
                    {selectedProject?.github ? (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 font-[family-name:var(--font-orbitron)] text-sm bg-transparent"
                        style={{
                          borderColor: selectedProject?.color,
                          color: selectedProject?.color,
                        }}
                      >
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          SOURCE CODE
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        variant="outline"
                        className="flex-1 font-[family-name:var(--font-orbitron)] text-sm bg-transparent opacity-40"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        NO SOURCE
                      </Button>
                    )}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
