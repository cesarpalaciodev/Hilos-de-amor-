import Image from "next/image"
import Link from "next/link"
import { site } from "@/data/site"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { type TranslationKey } from "@/lib/i18n"

interface FooterProps {
  t: TranslationKey
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-forest/[0.06] bg-cream-warm px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-cream shadow-[0_4px_12px_rgba(27,58,45,0.1)] ring-2 ring-cream">
                <Image
                  src="/images/logo.png"
                  alt={site.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest">
                {site.name}
              </h3>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-forest/40">
              {site.description}
            </p>
            <div className="mt-5 h-[1px] w-10 bg-gradient-to-r from-gold/25 to-transparent" />
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest/30">
              {t.footer.followUs}
            </h4>
            <div className="mt-5 flex gap-3.5">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/8 text-forest/40 transition-all duration-700 hover:border-forest/15 hover:bg-forest/[0.03] hover:text-forest"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/8 text-forest/40 transition-all duration-700 hover:border-forest/15 hover:bg-forest/[0.03] hover:text-forest"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-forest/30">
              {t.footer.contact}
            </h4>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-[13px] text-forest/50 transition-all duration-700 hover:text-forest"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {site.email}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[13px] text-forest/50 transition-all duration-700 hover:text-forest"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-forest/[0.06] pt-10 text-center">
          <p className="text-[11px] tracking-wide text-forest/25">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name}. {t.footer.rights}
          </p>
          <Link
            href="/privacidad"
            className="mt-3 inline-block text-[11px] text-forest/30 transition-colors hover:text-forest/50"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
