declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(productName?: string) {
  if (typeof window === "undefined") return

  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: productName || "general",
    })
  }

  if (window.fbq) {
    window.fbq("track", "Contact", {
      content_name: productName || "general",
    })
  }
}
