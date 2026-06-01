"use client"

import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ProductGrid } from "@/components/ProductGrid"
import { Testimonials } from "@/components/Testimonials"
import { About } from "@/components/About"
import { WhatsAppCTA } from "@/components/WhatsAppCTA"
import { FloatingWhatsApp } from "@/components/WhatsAppButton"
import { Footer } from "@/components/Footer"
import { Snowfall } from "@/components/Snowfall"
import { getTranslations } from "@/lib/i18n"

export default function Home() {
  const t = getTranslations("es")

  return (
    <>
      <Snowfall />
      <Navbar t={t} />
      <main>
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
