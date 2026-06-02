import { Metadata } from 'next'
import { products } from '@/data/products'
import { site } from '@/data/site'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = `https://${site.domain}`

  const productSchema = products.map((product) => ({
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: site.currency,
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/#product-${product.id}`,
    },
  }))

  return {
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            name: site.name,
            description: site.description,
            url: baseUrl,
          },
          ...productSchema,
        ],
      }),
    },
  }
}

export default function JsonLd() {
  return null
}
