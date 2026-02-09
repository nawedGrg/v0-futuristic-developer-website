"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Mail } from "lucide-react"

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)

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

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed bottom-8 right-8 z-50 flex flex-col gap-2 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="glass-strong rounded-2xl p-2 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-[#38bdf8]/15 text-[#38bdf8]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.06]"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />

              {/* Tooltip */}
              <span
                className="absolute right-full mr-3 px-3 py-1.5 glass-strong rounded-lg 
                           text-xs font-medium text-foreground whitespace-nowrap
                           opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0
                           transition-all duration-200 pointer-events-none"
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
