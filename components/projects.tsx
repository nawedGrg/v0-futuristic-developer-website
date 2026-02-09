"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    name: "AI Portfolio Website",
    description: "A futuristic personal developer portfolio showcasing skills, projects, and modern UI design.",
    color: "#00FFFF",
    tech: ["React", "Tailwind CSS", "Modern UI Design"],
    details:
      "A futuristic personal developer portfolio showcasing my skills, projects, and modern UI design. Built with responsive layouts and interactive components.",
    demo: "https://v0-futuristic-developer-website.vercel.app",
    github: "https://github.com/nawedGrg/v0-futuristic-developer-website",
  },
  {
    id: 2,
    name: "CodeQuest",
    description: "A programming quiz platform to help beginners practice coding concepts through interactive quizzes.",
    color: "#B026FF",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    details:
      "A programming quiz platform designed to help beginners practice coding concepts through interactive quizzes and score tracking.",
    demo: null,
    github: "https://github.com/nawedGrg/CodeQuest---Code-Learning-Quiz-Game/tree/main/codequest",
  },
  {
    id: 3,
    name: "Weather App",
    description: "A web app displaying real-time weather information for any city using API integration.",
    color: "#F8D568",
    tech: ["JavaScript", "API Integration", "Responsive Design"],
    details:
      "A web application that displays real-time weather information for any city using API integration and responsive UI.",
    demo: "https://vivid-sky-view.lovable.app",
    github: null,
  },
  {
    id: 4,
    name: "Fashion Store",
    description: "An e-commerce fashion store interface with product browsing and modern responsive layouts.",
    color: "#00FFFF",
    tech: ["HTML", "CSS", "JavaScript"],
    details:
      "An e-commerce fashion store interface featuring product browsing, modern layouts, and responsive design.",
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
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-left transition-all duration-500 hover:scale-105 hover:border-transparent cursor-pointer"
              style={
                {
                  "--project-color": project.color,
                } as React.CSSProperties
              }
            >
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ backgroundColor: `${project.color}30` }}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${project.color}15, 0 0 30px ${project.color}20` }}
              />

              {/* Planet icon */}
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div
                  className="w-16 h-16 rounded-full animate-pulse"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${project.color}, ${project.color}40, transparent)`,
                    boxShadow: `0 0 25px ${project.color}50, 0 0 50px ${project.color}20`,
                  }}
                />
                <div
                  className="absolute inset-1 rounded-full border border-dashed opacity-40 animate-spin"
                  style={{
                    borderColor: project.color,
                    animationDuration: "8s",
                  }}
                />
              </div>

              {/* Project info */}
              <h3
                className="font-[family-name:var(--font-orbitron)] text-lg font-bold mb-2 text-center"
                style={{ color: project.color }}
              >
                {project.name}
              </h3>
              <p className="text-slate-300 text-sm text-center mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs"
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

              {/* View prompt */}
              <div
                className="mt-4 text-center text-xs font-[family-name:var(--font-orbitron)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: project.color }}
              >
                {"[ CLICK TO EXPLORE ]"}
              </div>
            </button>
          ))}
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
                  {selectedProject?.demo ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="w-full font-[family-name:var(--font-orbitron)]"
                        style={{
                          backgroundColor: selectedProject.color,
                          color: "#0d1b2a",
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LIVE DEMO
                      </Button>
                    </a>
                  ) : (
                    <Button
                      disabled
                      className="flex-1 font-[family-name:var(--font-orbitron)] opacity-40"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      NO DEMO
                    </Button>
                  )}
                  {selectedProject?.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full font-[family-name:var(--font-orbitron)] bg-transparent"
                        style={{
                          borderColor: selectedProject.color,
                          color: selectedProject.color,
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        SOURCE CODE
                      </Button>
                    </a>
                  ) : (
                    <Button
                      disabled
                      variant="outline"
                      className="flex-1 font-[family-name:var(--font-orbitron)] bg-transparent opacity-40"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      NO SOURCE
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
