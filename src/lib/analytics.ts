declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(productName?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: productName || "general",
      value: 1,
    })
  }
}

export function trackProductView(productName: string, productId: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "ecommerce",
      items: [
        {
          item_id: productId,
          item_name: productName,
        },
      ],
    })
  }
}

export function trackScrollDepth(depth: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll", {
      event_category: "engagement",
      percent_scrolled: depth,
    })
  }
}

export function trackContactClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "contact_click", {
      event_category: "engagement",
      event_label: "contact_section",
    })
  }
}
