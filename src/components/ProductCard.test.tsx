import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from './ProductCard'
import type { Product } from '@/data/products'

const mockProduct: Product = {
  id: 'test-product',
  name: 'Producto Test',
  price: 150000,
  description: 'Descripción del producto test',
  image: '/images/test.png',
  badge: 'Test Badge'
}

describe('ProductCard', () => {
  it('renders product name and price', () => {
    render(
      <ProductCard
        product={mockProduct}
        locale="es"
        index={0}
        onViewDetails={() => {}}
        viewDetailsLabel="Ver detalles"
        askWhatsAppLabel="Preguntar por WhatsApp"
      />
    )

    expect(screen.getByText('Producto Test')).toBeInTheDocument()
    expect(screen.getByText('$150.000')).toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(
      <ProductCard
        product={mockProduct}
        locale="es"
        index={0}
        onViewDetails={() => {}}
        viewDetailsLabel="Ver detalles"
        askWhatsAppLabel="Preguntar por WhatsApp"
      />
    )

    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('calls onViewDetails when button is clicked', async () => {
    const user = userEvent.setup()
    const onViewDetails = jest.fn()

    render(
      <ProductCard
        product={mockProduct}
        locale="es"
        index={0}
        onViewDetails={onViewDetails}
        viewDetailsLabel="Ver detalles"
        askWhatsAppLabel="Preguntar por WhatsApp"
      />
    )

    await user.click(screen.getByText('Ver detalles'))
    expect(onViewDetails).toHaveBeenCalledTimes(1)
  })

  it('renders WhatsApp link with correct href', () => {
    render(
      <ProductCard
        product={mockProduct}
        locale="es"
        index={0}
        onViewDetails={() => {}}
        viewDetailsLabel="Ver detalles"
        askWhatsAppLabel="Preguntar por WhatsApp"
      />
    )

    const whatsappLink = screen.getByLabelText('Preguntar por WhatsApp - Producto Test')
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('Producto%20Test'))
  })
})
