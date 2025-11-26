"use client"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "HTML", icon: "🌐", color: "#00FFFF" },
  { name: "CSS", icon: "🎨", color: "#B026FF" },
  { name: "JavaScript", icon: "⚡", color: "#F8D568" },
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
  { name: "MySQL", icon: "🗄️", color: "#00758F" },
]

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-bold glow-text text-[#B026FF]">
            🚀 MISSION LOG
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#B026FF] to-transparent" />
        </div>

        {/* Mission story */}
        <Card className="neon-border backdrop-blur-sm p-8 md:p-12 bg-foreground">
          <p className="text-lg md:text-xl leading-relaxed text-center text-primary-foreground">
            {
              "As a futuristic front-end developer,  my mission is to explore the infinite expanse of creativity through code. I aim to design digital experiences that feel alive — interfaces that connect, inspire, and evolve.Each line of code is a step toward innovation; each project, a star in my growing constellation. \nThe journey continues — to craft not just websites, but worlds."
            }
          </p>
        </Card>

        {/* Skills orbit */}
        <div className="space-y-8">
          <h3 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center text-[#F8D568]">
            🪐 SKILLS ORBIT
          </h3>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-lg text-center font-[family-name:var(--font-orbitron)] font-semibold"
                style={{
                  backgroundColor: `${skill.color}10`,
                  border: `1px solid ${skill.color}40`,
                  color: skill.color,
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <h3 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center text-[#00FFFF]">
            ✨ JOURNEY TIMELINE
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FFFF] via-[#B026FF] to-[#F8D568]" />

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "First Line of Code",
                  desc: "Discovered HTML & CSS. Laid the foundation for building web pages and learning design basics.",
                },
                {
                  year: "2024",
                  title: "JavaScript Journey",
                  desc: "Progressed to intermediate JavaScript — interactive UI, DOM manipulation, and basic app logic.",
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
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="inline-block p-6 backdrop-blur-sm border-[#00FFFF]/30 bg-card text-background">
                      <p className="font-[family-name:var(--font-orbitron)] text-[#F8D568] font-bold text-xl mb-2">
                        {item.year}
                      </p>
                      <h4 className="font-semibold text-lg mb-1 text-foreground">{item.title}</h4>
                      <p className="text-foreground">{item.desc}</p>
                    </Card>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.8)] z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
