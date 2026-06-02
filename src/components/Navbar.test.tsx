import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import type { TranslationKey } from '@/lib/i18n'

const mockTranslations: TranslationKey = {
  nav: {
    catalog: 'Catálogo',
    about: 'Nosotros',
    contact: 'Contacto'
  },
  hero: { title: '', subtitle: '', cta: '' },
  catalog: { title: '', subtitle: '', viewDetails: '', askWhatsApp: '' },
  testimonials: { title: '', subtitle: '' },
  about: { title: '', text: '', badge1: '', badge2: '', badge3: '' },
  cta: { title: '', subtitle: '', button: '' },
  footer: { rights: '', followUs: '', contact: '' },
  language: ''
}

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar t={mockTranslations} />)

    expect(screen.getByText('Catálogo')).toBeInTheDocument()
    expect(screen.getByText('Nosotros')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders WhatsApp button', () => {
    render(<Navbar t={mockTranslations} />)

    const whatsappButton = screen.getByLabelText('WhatsApp')
    expect(whatsappButton).toBeInTheDocument()
    expect(whatsappButton).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar t={mockTranslations} />)

    const menuButton = screen.getByLabelText('Abrir menú')
    await user.click(menuButton)

    expect(screen.getByLabelText('Cerrar menú')).toBeInTheDocument()
  })
})
