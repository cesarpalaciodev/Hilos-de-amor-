"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products, type Product } from "@/data/products"
import { type TranslationKey, type Locale } from "@/lib/i18n"
import { ProductCard } from "./ProductCard"
import { ProductModal } from "./ProductModal"
import { ChristmasTree } from "./ChristmasIcons"

interface ProductGridProps {
  t: TranslationKey
  locale: Locale
}

export function ProductGrid({ t, locale }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="catalog" className="px-4 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-christmas-red">
            <ChristmasTree className="h-3.5 w-3.5" />
            {t.catalog.title}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-forest md:text-5xl lg:text-6xl">
            {t.catalog.subtitle}
          </h2>
          <div className="mx-auto mt-8 h-[1px] w-16 bg-gradient-to-r from-transparent via-christmas-red/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              index={index}
              onViewDetails={() => {
                setSelectedProduct(product)
                setModalOpen(true)
              }}
              viewDetailsLabel={t.catalog.viewDetails}
              askWhatsAppLabel={t.catalog.askWhatsApp}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
        locale={locale}
        askWhatsAppLabel={t.catalog.askWhatsApp}
      />
    </section>
  )
}
