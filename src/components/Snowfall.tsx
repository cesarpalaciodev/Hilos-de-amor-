"use client"

import { useEffect, useState } from "react"

const snowflakes = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: ((i * 37) % 100),
  delay: ((i * 13) % 100) / 10,
  duration: 12 + ((i * 7) % 100) / 10,
  size: 2 + ((i * 3) % 5),
}))

export function Snowfall() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const reducedSnowflakes = isMobile ? snowflakes.slice(0, 8) : snowflakes

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {reducedSnowflakes.map((flake) => (
        <div
          key={flake.id}
          className="animate-snowfall absolute text-forest/8"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
