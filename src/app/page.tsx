"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Snowfall } from "@/components/Snowfall"
import { ScrollTracker } from "@/components/ScrollTracker"
import { getTranslations } from "@/lib/i18n"

const ProductGrid = dynamic(() => import("@/components/ProductGrid").then(mod => mod.ProductGrid), {
  loading: () => <div className="py-20 text-center text-forest/40">Cargando productos...</div>,
})

const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="py-20 text-center text-cream/40">Cargando testimonios...</div>,
})

const About = dynamic(() => import("@/components/About").then(mod => mod.About), {
  loading: () => <div className="py-20 text-center text-forest/40">Cargando...</div>,
})

const WhatsAppCTA = dynamic(() => import("@/components/WhatsAppCTA").then(mod => mod.WhatsAppCTA), {
  loading: () => <div className="py-20 text-center text-forest/40">Cargando...</div>,
})

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer), {
  loading: () => <div className="py-10 text-center text-forest/40">Cargando...</div>,
})

const FloatingWhatsApp = dynamic(() => import("@/components/WhatsAppButton").then(mod => mod.FloatingWhatsApp), {
  loading: () => null,
})

export default function Home() {
  const t = getTranslations("es")

  return (
    <>
      <Snowfall />
      <ScrollTracker />
      <Navbar t={t} />
      <main id="main-content">
        <HeroSection t={t} />
        <ProductGrid t={t} locale="es" />
        <Testimonials t={t} locale="es" />
        <About t={t} />
        <WhatsAppCTA t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp />
    </>
  )
}
