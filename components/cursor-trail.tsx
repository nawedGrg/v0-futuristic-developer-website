"use client"

import { useEffect, useState } from "react"

export default function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ }

      setTrails((prev) => {
        const updated = [...prev, newTrail]
        return updated.slice(-5) // Keep only last 5 trails
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
            opacity: ((index + 1) / trails.length) * 0.5,
          }}
        />
      ))}
    </>
  )
}
