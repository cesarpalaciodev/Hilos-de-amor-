export type Locale = "es" | "en"

interface Translations {
  nav: { catalog: string; about: string; contact: string }
  hero: { title: string; subtitle: string; cta: string }
  catalog: { title: string; subtitle: string; viewDetails: string; askWhatsApp: string }
  testimonials: { title: string; subtitle: string }
  about: { title: string; text: string; badge1: string; badge2: string; badge3: string }
  cta: { title: string; subtitle: string; button: string }
  footer: { rights: string; followUs: string; contact: string }
  language: string
}

const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      catalog: "Catálogo",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title: "Peluches Navideños\nHechos con Amor",
      subtitle:
        "Cada pieza es única, artesanal y diseñada para llenar tu hogar de magia esta temporada.",
      cta: "Ver Colección",
    },
    catalog: {
      title: "Nuestra Colección",
      subtitle: "Peluches artesanales perfectos para regalar o decorar",
      viewDetails: "Ver detalles",
      askWhatsApp: "Preguntar por WhatsApp",
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Historias reales de quienes ya tienen su peluche navideño",
    },
    about: {
      title: "Nuestra Historia",
      text: "Somos un taller artesanal dedicado a crear peluches navideños únicos. Cada pieza es elaborada a mano con materiales de la más alta calidad, cuidando cada detalle para que se convierta en un regalo especial o una pieza de colección que acompañe a tu familia por años.",
      badge1: "Hecho a mano",
      badge2: "Materiales premium",
      badge3: "Edición limitada",
    },
    cta: {
      title: "¿Te Enamoraste de Alguno?",
      subtitle:
        "Escríbenos por WhatsApp y te ayudamos a elegir el peluche perfecto para ti o para regalar.",
      button: "Escríbenos por WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      followUs: "Síguenos",
      contact: "Contacto",
    },
    language: "EN",
  },
  en: {
    nav: {
      catalog: "Catalog",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Christmas Plush Toys\nMade with Love",
      subtitle:
        "Each piece is unique, handcrafted and designed to fill your home with magic this season.",
      cta: "View Collection",
    },
    catalog: {
      title: "Our Collection",
      subtitle: "Handcrafted plush toys perfect for gifting or decorating",
      viewDetails: "View details",
      askWhatsApp: "Ask on WhatsApp",
    },
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Real stories from those who already have their Christmas plush",
    },
    about: {
      title: "Our Story",
      text: "We are an artisan workshop dedicated to creating unique Christmas plush toys. Each piece is handcrafted with the highest quality materials, taking care of every detail so it becomes a special gift or a collectible that accompanies your family for years.",
      badge1: "Handmade",
      badge2: "Premium materials",
      badge3: "Limited edition",
    },
    cta: {
      title: "Fell in Love with One?",
      subtitle:
        "Message us on WhatsApp and we'll help you choose the perfect plush for you or as a gift.",
      button: "Message us on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      followUs: "Follow us",
      contact: "Contact",
    },
    language: "ES",
  },
}

export type TranslationKey = Translations

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}
