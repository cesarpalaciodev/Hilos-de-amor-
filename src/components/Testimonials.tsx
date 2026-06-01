"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/data/testimonials"
import { type TranslationKey, type Locale } from "@/lib/i18n"
import { Star } from "./ChristmasDecorations"
import { Sparkles } from "./ChristmasIcons"

interface TestimonialsProps {
  t: TranslationKey
  locale: Locale
}

export function Testimonials({ t, locale }: TestimonialsProps) {
  return (
    <section className="relative overflow-hidden bg-forest px-4 py-32 md:py-44">
      <div className="absolute inset-0 bg-forest" />

      <Star className="animate-twinkle absolute top-14 right-20 hidden h-5 w-5 text-gold opacity-30 md:block" />
      <Star className="animate-twinkle absolute bottom-20 left-24 hidden h-4 w-4 text-gold opacity-25 md:block" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-24 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold/70">
            <Sparkles className="h-3.5 w-3.5" />
            {t.testimonials.title}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
            {t.testimonials.subtitle}
          </h2>
          <div className="mx-auto mt-8 h-[1px] w-16 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: index * 0.18,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group relative"
            >
              <div className="rounded-[2rem] bg-cream/[0.04] p-2 ring-1 ring-cream/[0.08] transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-cream/[0.15] group-hover:shadow-[0_16px_48px_rgba(255,255,255,0.05)]">
                <div className="rounded-[calc(2rem-0.5rem)] bg-cream/[0.03] p-9 backdrop-blur-sm">
                  <svg
                    className="mb-8 h-9 w-9 text-gold/30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-[15px] leading-[1.8] text-cream/60 italic">
                    &ldquo;{testimonial.text[locale]}&rdquo;
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/[0.06] font-serif text-base font-medium text-cream/50">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cream/80">
                        {testimonial.name}
                      </p>
                      <div className="mt-1 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 text-gold/50" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
