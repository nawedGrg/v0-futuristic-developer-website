"use client"

export default function LogoHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-foreground hover:text-[#38bdf8] transition-colors"
        >
          DG
        </button>
      </div>
    </header>
  )
}
