"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-cream-warm border-t border-forest/10 p-4 md:p-6 shadow-[0_-4px_20px_rgba(27,58,45,0.1)]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-forest/70 text-center md:text-left">
          Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.{" "}
          <Link href="/privacidad" className="text-christmas-red underline hover:text-christmas-red-light">
            Política de privacidad
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="rounded-full border border-forest/20 px-6 py-2.5 text-sm font-medium text-forest/70 transition-all hover:bg-forest/5 active:scale-95"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-christmas-red px-6 py-2.5 text-sm font-medium text-cream transition-all hover:bg-christmas-red-light active:scale-95"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
