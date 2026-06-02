"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/analytics"
import { type TranslationKey } from "@/lib/i18n"
import { Star, PineBranch, HollyLeaf } from "./ChristmasDecorations"
import { ChristmasTree } from "./ChristmasIcons"

interface HeroSectionProps {
  t: TranslationKey
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[100dvh] items-end justify-center overflow-hidden px-4 pb-24 pt-36 md:pb-36">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/placeholder-hero.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/60 to-cream" />
      </div>

      <div className="absolute top-28 left-10 hidden md:block">
        <PineBranch className="h-24 w-48 text-pine opacity-35" />
      </div>
      <div className="absolute top-36 right-16 hidden md:block">
        <PineBranch className="h-20 w-40 -scale-x-100 text-pine opacity-25" />
      </div>

      <div className="absolute top-24 left-24 hidden md:block">
        <HollyLeaf className="h-12 w-12 text-pine opacity-45" />
      </div>
      <div className="absolute top-32 right-28 hidden md:block">
        <HollyLeaf className="h-10 w-10 text-pine opacity-35" />
      </div>

      <Star className="animate-twinkle absolute top-20 right-1/4 hidden h-5 w-5 text-gold md:block" />
      <Star className="animate-twinkle absolute top-36 left-1/3 hidden h-3.5 w-3.5 text-gold opacity-60 md:block" style={{ animationDelay: "1.2s" }} />
      <Star className="animate-twinkle absolute top-28 right-1/3 hidden h-4 w-4 text-gold opacity-70 md:block" style={{ animationDelay: "2.4s" }} />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-christmas-red/20 bg-christmas-red/[0.05] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-christmas-red">
            <span className="h-1 w-1 rounded-full bg-christmas-red" />
            <ChristmasTree className="h-3.5 w-3.5" />
            Colección Navidad 2026
            <ChristmasTree className="h-3.5 w-3.5" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-forest sm:text-6xl md:text-7xl lg:text-[5.75rem] whitespace-pre-line text-balance"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-forest/50 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <a
            href="#catalog"
            className="group flex items-center gap-3 rounded-full bg-christmas-red px-9 py-4.5 text-sm font-medium text-cream shadow-[0_8px_28px_rgba(196,30,58,0.25)] transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light hover:shadow-[0_12px_36px_rgba(196,30,58,0.35)] active:scale-[0.97]"
          >
            {t.hero.cta}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-cream/25">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6" />
              </svg>
            </span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick()}
            className="rounded-full border border-forest/15 px-9 py-4.5 text-sm font-medium text-forest/70 transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-forest/25 hover:bg-forest/[0.03] hover:text-forest"
            aria-label="Contactar por WhatsApp"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>

    </section>
  )
}
