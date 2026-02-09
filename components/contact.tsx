"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/myzavrqw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-bold glow-text text-[#00FFFF]">
            🛰️ SEND TRANSMISSION
          </h2>
          <p className="text-lg text-card">Reach out to the command station</p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <Card className="neon-border backdrop-blur-sm p-8 bg-foreground">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-[family-name:var(--font-orbitron)] text-[#00FFFF]">SENDER ID</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-[family-name:var(--font-orbitron)] text-[#00FFFF]">
                  SIGNAL FREQUENCY
                </label>
                <Input
                  type="email"
                  placeholder="your.email@galaxy.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-[family-name:var(--font-orbitron)] text-[#00FFFF]">
                  MESSAGE CONTENT
                </label>
                <Textarea
                  placeholder="Transmit your message..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-[#00FFFF]/30 focus:border-[#00FFFF] focus:ring-[#00FFFF]/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full font-[family-name:var(--font-orbitron)] bg-[#00FFFF] text-[#0d1b2a] hover:bg-[#00FFFF]/90 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
              </Button>

              {submitted && (
                <div className="text-center p-4 rounded bg-[#00FFFF]/10 border border-[#00FFFF]/30 animate-pulse-glow">
                  <p className="text-[#00FFFF] font-[family-name:var(--font-orbitron)]">✓ TRANSMISSION RECEIVED</p>
                </div>
              )}
            </form>
          </Card>

          {/* Social links */}
          <div className="space-y-8">
            <Card className="backdrop-blur-sm p-8 border-[#B026FF]/30 bg-foreground">
              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-[#B026FF] mb-6">
                COMMUNICATION CHANNELS
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    handle: "@nawedGrgh",
                    color: "#00FFFF",
                    url: "https://github.com/nawedGrg",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    handle: "Dewan Gurung",
                    color: "#B026FF",
                    url: "https://www.linkedin.com/in/dewan-gurung-b3a127304/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    handle: "@dewangurung_",
                    color: "#F8D568",
                    url: "https://x.com/dewangurung_?s=21",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    handle: "dewangurung34g@icloud.com",
                    color: "#00FFFF",
                    url: "mailto:dewangurung34g@icloud.com",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg transition-all hover:scale-105"
                    style={{
                      backgroundColor: `${social.color}10`,
                      border: `1px solid ${social.color}30`,
                    }}
                  >
                    <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    <div>
                      <p className="font-semibold" style={{ color: social.color }}>
                        {social.label}
                      </p>
                      <p className="text-sm text-chart-2">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Status card */}
            <Card className="backdrop-blur-sm p-8 border-[#F8D568]/30 text-background bg-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#F8D568] animate-pulse-glow" />
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#F8D568]">
                  SYSTEM STATUS
                </h3>
              </div>
              <p className="text-chart-2">
                All systems operational. Currently accepting new missions and collaborations.
              </p>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border/30">
          <p className="text-card">© 2025 Dewan Gurung. Exploring the digital cosmos, one line of code at a time.</p>
        </div>
      </div>
    </section>
  )
}
