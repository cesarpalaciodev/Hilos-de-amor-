"use client"

import { motion } from "framer-motion"
import { type TranslationKey } from "@/lib/i18n"
import { PineBranch, HollyLeaf } from "./ChristmasDecorations"
import { SantaHat, GiftBox, ChristmasTree, Sparkles } from "./ChristmasIcons"

interface AboutProps {
  t: TranslationKey
}

export function About({ t }: AboutProps) {
  const badges = [
    { label: t.about.badge1, icon: GiftBox },
    { label: t.about.badge2, icon: Sparkles },
    { label: t.about.badge3, icon: ChristmasTree },
  ]

  return (
    <section id="about" className="relative px-4 py-32 md:py-44">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent to-christmas-red/20 hidden lg:block" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[1px] w-20 bg-gradient-to-l from-transparent to-christmas-red/20 hidden lg:block" />

      <div className="absolute top-24 left-10 hidden md:block">
        <PineBranch className="h-20 w-40 text-pine opacity-20" />
      </div>
      <div className="absolute bottom-24 right-14 hidden md:block">
        <PineBranch className="h-16 w-32 -scale-x-100 text-pine opacity-15" />
      </div>

      <div className="absolute top-36 left-28 hidden md:block">
        <HollyLeaf className="h-10 w-10 text-pine opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 md:grid-cols-2 md:gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-christmas-red">
              <SantaHat className="h-3.5 w-3.5" />
              {t.about.title}
            </span>
            <h2 className="font-serif text-4xl font-light leading-[1.15] text-forest md:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>
            <div className="mt-8 h-[1px] w-16 bg-gradient-to-r from-christmas-red/30 to-transparent" />
            <p className="mt-10 text-[15px] leading-[1.9] text-forest/50">
              {t.about.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col gap-6"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.12,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="group rounded-[1.75rem] bg-forest/[0.02] p-1.5 ring-1 ring-forest/[0.05] transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-christmas-red/[0.12] hover:shadow-[0_12px_32px_rgba(196,30,58,0.06)]"
              >
                <div className="flex items-center gap-6 rounded-[calc(1.75rem-0.375rem)] bg-card p-7 shadow-premium">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-christmas-red/[0.07] text-christmas-red transition-all duration-700 group-hover:bg-christmas-red/[0.12]">
                    <badge.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-forest">
                      {badge.label}
                    </h3>
                    <div className="mt-2 h-[1px] w-10 bg-gradient-to-r from-christmas-red/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
