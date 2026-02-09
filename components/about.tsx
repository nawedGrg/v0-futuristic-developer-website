"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, FileCode2, Globe, Layout, Server } from "lucide-react"

const skills = [
  { name: "HTML", icon: Globe, color: "#38bdf8" },
  { name: "CSS", icon: Layout, color: "#a78bfa" },
  { name: "JavaScript", icon: FileCode2, color: "#fbbf24" },
  { name: "Java", icon: Code2, color: "#f97316" },
  { name: "PHP", icon: Server, color: "#a78bfa" },
  { name: "MySQL", icon: Database, color: "#38bdf8" },
]

const timeline = [
  {
    year: "2024",
    title: "First Line of Code",
    desc: "Discovered HTML & CSS. Laid the foundation for building web pages and learning design basics.",
  },
  {
    year: "2024",
    title: "JavaScript Journey",
    desc: "Progressed to intermediate JavaScript -- interactive UI, DOM manipulation, and basic app logic.",
  },
  {
    year: "2025",
    title: "Java",
    desc: "Learned core syntax, classes, loops, and OOP principles.",
  },
  {
    year: "2025",
    title: "MySQL",
    desc: "Implemented databases for persistent data storage and integrated backend data with frontend apps.",
  },
  {
    year: "2025",
    title: "PHP",
    desc: "Built dynamic web pages, connected MySQL databases, and implemented server-side logic to create responsive, data-driven user experiences.",
  },
  {
    year: "2026",
    title: "Mission",
    desc: "Launching next phase: build immersive, accessible web experiences and ship meaningful projects.",
  },
]

function useInView(threshold = 0.15) {
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

export default function About() {
  const { ref: sectionRef, inView } = useInView()

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div ref={sectionRef} className="max-w-5xl w-full">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-[0.3em] uppercase text-[#a78bfa] mb-3">
            About Me
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Mission Log
          </h2>
        </div>

        {/* Bio card */}
        <div className={`glass rounded-2xl p-8 md:p-12 mb-16 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground/80 text-center text-pretty">
            As a front-end developer, my mission is to explore the infinite expanse of creativity through code.
            I design digital experiences that feel alive -- interfaces that connect, inspire, and evolve.
            Each line of code is a step toward innovation; each project, a star in my growing constellation.
          </p>
        </div>

        {/* Skills */}
        <div className={`mb-20 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold text-center text-foreground mb-8 tracking-wide">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: skill.color }} />
                  </div>
                  <span className="font-[family-name:var(--font-orbitron)] text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold text-center text-foreground mb-12 tracking-wide">
            Journey
          </h3>

          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#38bdf8]/40 via-[#a78bfa]/40 to-[#fbbf24]/40" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-12 md:pl-0`}>
                    <div className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-all duration-300">
                      <span
                        className="font-[family-name:var(--font-orbitron)] text-xs font-bold tracking-wider"
                        style={{ color: index % 3 === 0 ? "#38bdf8" : index % 3 === 1 ? "#a78bfa" : "#fbbf24" }}
                      >
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1 mb-1.5">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-6 w-[11px] h-[11px] rounded-full border-2 border-[#38bdf8]/60 bg-background z-10" />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
