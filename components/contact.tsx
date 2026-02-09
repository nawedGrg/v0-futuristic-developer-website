"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle2 } from "lucide-react"

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

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@nawedGrg",
    url: "https://github.com/nawedGrg",
    color: "#38bdf8",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Dewan Gurung",
    url: "https://www.linkedin.com/in/dewan-gurung-b3a127304/",
    color: "#a78bfa",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@dewangurung_",
    url: "https://x.com/dewangurung_?s=21",
    color: "#fbbf24",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "dewangurung34g@icloud.com",
    url: "mailto:dewangurung34g@icloud.com",
    color: "#38bdf8",
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const { ref, inView } = useInView()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/myzavrqw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div ref={ref} className="max-w-5xl w-full">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-[family-name:var(--font-orbitron)] text-sm tracking-[0.3em] uppercase text-[#38bdf8] mb-3">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to say hello? Send me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact form */}
          <div className={`glass rounded-2xl p-8 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-[family-name:var(--font-orbitron)] uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/[0.03] border-white/[0.08] rounded-xl focus:border-[#38bdf8]/50 focus:ring-[#38bdf8]/20 placeholder:text-muted-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-[family-name:var(--font-orbitron)] uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/[0.03] border-white/[0.08] rounded-xl focus:border-[#38bdf8]/50 focus:ring-[#38bdf8]/20 placeholder:text-muted-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-[family-name:var(--font-orbitron)] uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/[0.03] border-white/[0.08] rounded-xl focus:border-[#38bdf8]/50 focus:ring-[#38bdf8]/20 resize-none placeholder:text-muted-foreground/40"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-wider bg-[#38bdf8] text-[#0a0e17] rounded-xl hover:bg-[#38bdf8]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  "Sending..."
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right column */}
          <div className={`flex flex-col gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Social links */}
            <div className="glass rounded-2xl p-8 flex-1">
              <h3 className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-wider text-muted-foreground mb-6">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${social.color}10` }}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </div>
                <p className="text-sm text-foreground">
                  Currently accepting new projects and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-muted-foreground">
            Dewan Gurung &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
