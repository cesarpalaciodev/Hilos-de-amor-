"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { site } from "@/data/site"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { type TranslationKey } from "@/lib/i18n"

interface NavbarProps {
  t: TranslationKey
}

export function Navbar({ t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.catalog, href: "#catalog" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "w-[calc(100%-2rem)] max-w-3xl"
            : "w-[calc(100%-2rem)] max-w-4xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border px-6 py-3.5 transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "border-forest/10 bg-cream/95 shadow-[0_8px_40px_rgba(27,58,45,0.1)] backdrop-blur-2xl"
              : "border-forest/5 bg-cream/80 shadow-[0_4px_20px_rgba(27,58,45,0.06)] backdrop-blur-xl"
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-2 transition-premium hover:opacity-80"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-cream shadow-[0_4px_12px_rgba(27,58,45,0.1)] ring-2 ring-cream">
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={60}
                height={60}
                className="h-full w-full object-cover"
              />
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-5 py-2.5 text-[13px] font-medium text-forest/60 transition-premium hover:bg-forest/5 hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center md:flex">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full bg-christmas-red px-6 py-2.5 text-[13px] font-medium text-cream shadow-[0_4px_16px_rgba(196,30,58,0.25)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light hover:shadow-[0_6px_24px_rgba(196,30,58,0.35)] active:scale-[0.97]"
              aria-label="WhatsApp"
            >
              <span>WhatsApp</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream/15 transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-cream/25">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-forest transition-premium hover:bg-forest/5 md:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-forest transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  mobileOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-forest transition-all duration-400 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-forest transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream/98 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="font-serif text-4xl font-light text-forest transition-premium hover:text-forest-light"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex flex-col items-center gap-5 pt-6"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-christmas-red px-10 py-4 text-base font-medium text-cream shadow-[0_8px_24px_rgba(196,30,58,0.25)] transition-all duration-700 hover:bg-christmas-red-light active:scale-[0.97]"
                >
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
