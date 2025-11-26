"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Mail } from "lucide-react"

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 ${
              isActive
                ? "bg-[#00FFFF]/20 border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                : "bg-background/80 border-[#00FFFF]/30 hover:border-[#00FFFF] hover:bg-[#00FFFF]/10"
            } backdrop-blur-sm`}
            aria-label={item.label}
          >
            <Icon
              className={`w-6 h-6 transition-colors ${
                isActive ? "text-[#00FFFF]" : "text-foreground/60 group-hover:text-[#00FFFF]"
              }`}
            />

            {/* Tooltip */}
            <span
              className="absolute right-full mr-3 px-3 py-1.5 bg-background/90 border border-[#00FFFF]/30 rounded-lg 
                         text-sm font-[family-name:var(--font-orbitron)] text-[#00FFFF] whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
                         backdrop-blur-sm"
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
