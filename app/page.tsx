import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import StarField from "@/components/star-field"
import CursorTrail from "@/components/cursor-trail"
import FloatingNav from "@/components/floating-nav"
import LogoHeader from "@/components/logo-header"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated star field background */}
      <StarField />

      {/* Custom cursor trail */}
      <CursorTrail />

      <LogoHeader />

      <FloatingNav />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
