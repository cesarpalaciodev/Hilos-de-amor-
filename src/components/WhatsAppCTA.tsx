"use client"

import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/analytics"
import { type TranslationKey } from "@/lib/i18n"
import { Star } from "./ChristmasDecorations"
import { GiftBox } from "./ChristmasIcons"

interface WhatsAppCTAProps {
  t: TranslationKey
}

export function WhatsAppCTA({ t }: WhatsAppCTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-32 md:py-44"
    >
      <div className="absolute inset-0 -z-10 bg-cream" />

      <Star className="animate-twinkle absolute top-20 left-20 hidden h-6 w-6 text-gold opacity-35 md:block" />
      <Star className="animate-twinkle absolute top-28 right-24 hidden h-5 w-5 text-gold opacity-45 md:block" style={{ animationDelay: "1.8s" }} />
      <Star className="animate-twinkle absolute bottom-24 left-1/4 hidden h-4 w-4 text-gold opacity-25 md:block" style={{ animationDelay: "1s" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-christmas-red">
          <GiftBox className="h-3.5 w-3.5" />
          WhatsApp
        </span>
        <h2 className="font-serif text-4xl font-light leading-tight text-forest md:text-5xl lg:text-6xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-forest/50">
          {t.cta.subtitle}
        </p>

        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
          className="group mt-14 inline-flex items-center gap-3.5 rounded-full bg-christmas-red px-12 py-5.5 text-base font-medium text-cream shadow-[0_12px_40px_rgba(196,30,58,0.25)] transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light hover:shadow-[0_16px_52px_rgba(196,30,58,0.35)] active:scale-[0.97]"
          aria-label={t.cta.button}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t.cta.button}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-cream/25">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </section>
  )
}
