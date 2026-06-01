import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/ProductCard'
import { Product } from '@/data/products'

const mockProduct: Product = {
  id: 'test-product',
  name: 'Test Plush',
  price: 50000,
  description: 'Test description',
  image: '/images/test.png',
  badge: 'Test Badge',
}

const mockProps = {
  product: mockProduct,
  index: 0,
  onViewDetails: jest.fn(),
  viewDetailsLabel: 'View Details',
  askWhatsAppLabel: 'Ask on WhatsApp',
}

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard {...mockProps} />)
    expect(screen.getByText('Test Plush')).toBeInTheDocument()
  })

  it('renders product price', () => {
    render(<ProductCard {...mockProps} />)
    const priceElement = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.includes('50.000')
    })
    expect(priceElement).toBeInTheDocument()
  })

  it('renders product description', () => {
    render(<ProductCard {...mockProps} />)
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders product badge', () => {
    render(<ProductCard {...mockProps} />)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('renders view details button', () => {
    render(<ProductCard {...mockProps} />)
    expect(screen.getByText('View Details')).toBeInTheDocument()
  })

  it('renders WhatsApp button', () => {
    render(<ProductCard {...mockProps} />)
    expect(screen.getByText('Ask on WhatsApp')).toBeInTheDocument()
  })

  it('calls onViewDetails when view details button is clicked', () => {
    render(<ProductCard {...mockProps} />)
    screen.getByText('View Details').click()
    expect(mockProps.onViewDetails).toHaveBeenCalled()
  })
})
