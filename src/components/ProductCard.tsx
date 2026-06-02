"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { trackWhatsAppClick, trackProductView } from "@/lib/analytics"
import { type Product } from "@/data/products"
import { type Locale } from "@/lib/i18n"
import { site } from "@/data/site"
import { ChristmasOrnament } from "./ChristmasDecorations"

interface ProductCardProps {
  product: Product
  locale: Locale
  index: number
  onViewDetails: () => void
  viewDetailsLabel: string
  askWhatsAppLabel: string
}

export function ProductCard({
  product,
  index,
  onViewDetails,
  viewDetailsLabel,
  askWhatsAppLabel,
}: ProductCardProps) {
  const { name, description, badge } = product

  const handleViewDetails = () => {
    trackProductView(name, product.id)
    onViewDetails()
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      <ChristmasOrnament className="absolute -top-4 right-10 h-7 w-7 text-christmas-red opacity-0 transition-all duration-700 group-hover:opacity-60" />
      
      <div className="rounded-[2rem] bg-forest/[0.025] p-2 ring-1 ring-forest/[0.06] transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-christmas-red/[0.15] group-hover:shadow-[0_20px_60px_rgba(196,30,58,0.1)]">
        <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-card shadow-premium">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <div className="absolute inset-4 rounded-xl bg-sand/20" />
            <Image
              src={product.image}
              alt={name}
              fill
              className="object-contain p-4 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/15 via-transparent to-transparent opacity-0 transition-opacity duration-800 group-hover:opacity-100" />
            {badge && (
              <span className="absolute top-5 left-5 rounded-full bg-christmas-red/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm shadow-[0_4px_12px_rgba(196,30,58,0.3)]">
                {badge}
              </span>
            )}
          </div>

          <div className="flex flex-col p-7">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl font-medium leading-snug text-forest">
                {name}
              </h3>
              <span className="shrink-0 font-serif text-xl font-semibold text-gold">
                {site.currencySymbol}{product.price.toLocaleString("es-CO")}
              </span>
            </div>

            <p className="mt-3 text-[13px] leading-relaxed text-forest/50">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleViewDetails}
                className="w-full rounded-full border border-forest/10 py-3.5 text-[13px] font-medium text-forest/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-forest/20 hover:bg-forest/[0.02] hover:text-forest active:scale-[0.97]"
              >
                {viewDetailsLabel}
              </button>
              <a
                href={getWhatsAppUrl({ name, price: product.price })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(name)}
                className="group/btn flex w-full items-center justify-center gap-2.5 rounded-full bg-christmas-red py-3.5 text-[13px] font-medium text-cream shadow-[0_4px_16px_rgba(196,30,58,0.2)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-christmas-red-light hover:shadow-[0_6px_24px_rgba(196,30,58,0.3)] active:scale-[0.97]"
                aria-label={`${askWhatsAppLabel} - ${name}`}
              >
                {askWhatsAppLabel}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/15 transition-all duration-700 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
