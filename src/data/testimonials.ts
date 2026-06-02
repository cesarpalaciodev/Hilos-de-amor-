export interface Testimonial {
  id: string
  name: string
  text: { es: string; en: string }
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María G.",
    text: {
      es: "Los muñecos son hermosos, la calidad es increíble. Mi hija los ama.",
      en: "The plush toys are beautiful, the quality is amazing. My daughter loves them.",
    },
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos R.",
    text: {
      es: "Perfectos para regalo. El empaque y la atención fueron excelentes.",
      en: "Perfect for gifting. The packaging and service were excellent.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: "Ana L.",
    text: {
      es: "Cada detalle está cuidado al máximo. Se nota que son hechos con amor.",
      en: "Every detail is carefully crafted. You can tell they are made with love.",
    },
    rating: 5,
  },
]
