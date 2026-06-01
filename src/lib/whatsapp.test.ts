import { getWhatsAppUrl } from '@/lib/whatsapp'

describe('WhatsApp Utils', () => {
  it('generates WhatsApp URL with product name as string', () => {
    const url = getWhatsAppUrl('Test Product')
    
    expect(url).toContain('https://wa.me/')
    expect(url).toContain('text=')
    expect(url).toContain('Test%20Product')
  })

  it('generates WhatsApp URL without product', () => {
    const url = getWhatsAppUrl()
    
    expect(url).toContain('https://wa.me/')
    expect(url).toContain('text=')
  })

  it('generates WhatsApp URL with product name and price', () => {
    const url = getWhatsAppUrl({
      name: 'Nieve Regalo',
      price: 180000,
    })
    
    expect(url).toContain('https://wa.me/')
    expect(url).toContain('Nieve%20Regalo')
    expect(url).toContain('180.000')
  })

  it('includes encoded message in URL', () => {
    const url = getWhatsAppUrl('Producto de Prueba')
    
    expect(url).toContain('Producto%20de%20Prueba')
  })

  it('includes price formatted in product message', () => {
    const url = getWhatsAppUrl({ name: 'Test', price: 270000 })
    
    expect(url).toContain('270.000')
  })
})
