import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import type { TranslationKey } from '@/lib/i18n'

const mockTranslations: TranslationKey = {
  hero: {
    title: 'Muñecos Navideños\nHechos con Amor',
    subtitle: 'Cada pieza es única',
    cta: 'Ver Colección'
  },
  nav: { catalog: '', about: '', contact: '' },
  catalog: { title: '', subtitle: '', viewDetails: '', askWhatsApp: '' },
  testimonials: { title: '', subtitle: '' },
  about: { title: '', text: '', badge1: '', badge2: '', badge3: '' },
  cta: { title: '', subtitle: '', button: '' },
  footer: { rights: '', followUs: '', contact: '' },
  language: ''
}

describe('HeroSection', () => {
  it('renders hero title', () => {
    render(<HeroSection t={mockTranslations} />)

    expect(screen.getByText(/Muñecos Navideños/i)).toBeInTheDocument()
    expect(screen.getByText(/Hechos con Amor/i)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<HeroSection t={mockTranslations} />)

    const ctaButton = screen.getByText('Ver Colección')
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '#catalog')
  })

  it('renders WhatsApp link', () => {
    render(<HeroSection t={mockTranslations} />)

    const whatsappLink = screen.getByLabelText('Contactar por WhatsApp')
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })
})
