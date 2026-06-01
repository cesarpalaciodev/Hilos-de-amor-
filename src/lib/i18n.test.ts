import { getTranslations } from '@/lib/i18n'

describe('i18n', () => {
  it('returns Spanish translations', () => {
    const t = getTranslations('es')
    
    expect(t.nav.catalog).toBe('Catálogo')
    expect(t.nav.about).toBe('Nosotros')
    expect(t.nav.contact).toBe('Contacto')
  })

  it('returns English translations', () => {
    const t = getTranslations('en')
    
    expect(t.nav.catalog).toBe('Catalog')
    expect(t.nav.about).toBe('About')
    expect(t.nav.contact).toBe('Contact')
  })

  it('has all required translation keys', () => {
    const es = getTranslations('es')
    const en = getTranslations('en')
    
    expect(Object.keys(es)).toEqual(Object.keys(en))
    expect(es.nav).toBeDefined()
    expect(es.hero).toBeDefined()
    expect(es.catalog).toBeDefined()
    expect(es.testimonials).toBeDefined()
    expect(es.about).toBeDefined()
    expect(es.cta).toBeDefined()
    expect(es.footer).toBeDefined()
  })
})
