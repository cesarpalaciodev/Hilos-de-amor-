"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick } from "@/lib/analytics"
import { type Product } from "@/data/products"
import { type Locale } from "@/lib/i18n"
import { site } from "@/data/site"

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
  locale: Locale
  askWhatsAppLabel: string
}

export function ProductModal({
  product,
  open,
  onOpenChange,
  askWhatsAppLabel,
}: ProductModalProps) {
  if (!product) return null

  const { name, description, badge } = product

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-forest/25 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg"
          >
            <div className="rounded-[2.25rem] bg-forest/[0.03] p-2.5 ring-1 ring-forest/[0.08] shadow-premium-lg">
              <div className="overflow-hidden rounded-[calc(2.25rem-0.625rem)] bg-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <div className="absolute inset-4 rounded-xl bg-sand/20" />
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 90vw, 500px"
                  />
                  {badge && (
                    <span className="absolute top-5 left-5 rounded-full bg-christmas-red/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm shadow-[0_4px_12px_rgba(196,30,58,0.3)]">
                      {badge}
                    </span>
                  )}
                </div>

                <div className="p-9">
                  <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-7 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-forest/5 text-forest/40 transition-all duration-500 hover:bg-forest/10 hover:text-forest"
                    aria-label="Cerrar"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M1 1L13 13M13 1L1 13" />
                    </svg>
                  </button>

                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-serif text-3xl font-medium text-forest">
                      {name}
                    </h2>
                    <span className="shrink-0 font-serif text-2xl font-semibold text-gold">
                      {site.currencySymbol}{product.price.toLocaleString("es-CO")}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-forest/50">
                    {description}
                  </p>

                  <a
                    href={getWhatsAppUrl({ name, price: product.price })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(name)}
                    className="group mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-christmas-red py-4.5 text-sm font-medium text-cream shadow-[0_8px_28px_rgba(196,30,58,0.25)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light hover:shadow-[0_12px_36px_rgba(196,30,58,0.35)] active:scale-[0.97]"
                    aria-label={`${askWhatsAppLabel} - ${name}`}
                  >
                    {askWhatsAppLabel}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
