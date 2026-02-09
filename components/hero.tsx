"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [showContent, setShowContent] = useState(false)
  const fullText = "Exploring code across the digital galaxy..."

  useEffect(() => {
    setShowContent(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#38bdf8]/[0.06] animate-rotate-slow" />
        <div
          className="absolute w-[560px] h-[560px] rounded-full border border-[#a78bfa]/[0.05] animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full border border-[#fbbf24]/[0.03] animate-rotate-slow"
          style={{ animationDuration: "50s" }}
        />
      </div>

      <div
        className={`text-center z-10 max-w-3xl mx-auto transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#fbbf24] bg-clip-text text-transparent">
            Dewan
          </span>{" "}
          Gurung
        </h1>

        {/* Role */}
        <p className="font-[family-name:var(--font-orbitron)] text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-8">
          Front-end Developer
        </p>

        {/* Typewriter */}
        <div className="h-8 flex items-center justify-center mb-12">
          <p className="text-lg md:text-xl text-secondary-foreground/70">
            {text}
            <span className="inline-block w-0.5 h-5 bg-[#38bdf8] ml-1 animate-pulse" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#38bdf8] text-[#0a0e17] font-semibold text-sm hover:bg-[#38bdf8]/90 transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-semibold text-sm hover:bg-white/[0.08] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
