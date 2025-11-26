"use client"

import { useEffect, useState } from "react"
import { MouseIcon } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Exploring code across the digital galaxy..."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      {/* Floating HUD rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#00FFFF]/20 animate-rotate-slow" />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#B026FF]/20 animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full border border-[#F8D568]/10 animate-rotate-slow"
          style={{ animationDuration: "40s" }}
        />
      </div>

      <div className="text-center z-10 space-y-8">
        {/* Floating code symbols */}
        <div className="absolute top-20 left-1/4 text-[#00FFFF] text-4xl opacity-30 animate-float">{"{ }"}</div>
        <div
          className="absolute top-40 right-1/4 text-[#B026FF] text-4xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        >
          {"</>"}
        </div>
        <div
          className="absolute bottom-40 left-1/3 text-[#F8D568] text-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        >
          {"<>"}
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="font-[family-name:var(--font-orbitron)] text-6xl md:text-8xl font-bold glow-text text-[#00FFFF]">
            DEWAN GURUNG
          </h1>
          <p className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl text-[#F8D568]">
            Futuristic Front-end Developer
          </p>
        </div>

        {/* Typewriter text */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-lg md:text-xl text-white">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow text-[#00FFFF]">
          <span className="font-[family-name:var(--font-orbitron)] border-0 text-xl">SCROLL</span>
          <MouseIcon className="my-0 mx-0 w-10 h-8" />
        </div>
      </div>
    </section>
  )
}
