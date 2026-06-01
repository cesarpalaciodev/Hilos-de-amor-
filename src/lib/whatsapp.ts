const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "521234567890"

interface ProductInfo {
  name: string
  price?: number
  description?: string
}

export function getWhatsAppUrl(product?: string | ProductInfo): string {
  let message: string

  if (!product) {
    message = "Hola, me interesa conocer más sobre sus productos navideños."
  } else if (typeof product === "string") {
    message = `Hola, me interesa el producto "${product}" que vi en la página. ¿Podrían darme más información?`
  } else {
    const parts = [`Hola, me interesa el producto "${product.name}" que vi en la página.`]
    if (product.price) {
      parts.push(`Precio: $${product.price.toLocaleString("es-CO")}`)
    }
    parts.push("¿Podrían darme más información?")
    message = parts.join("\n")
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
