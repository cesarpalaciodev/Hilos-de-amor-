# 🎄 Hilos de Amor

A premium Christmas plush e-commerce landing page built with Next.js 16, TypeScript, and Tailwind CSS. Features a festive design with smooth animations, WhatsApp integration, and optimized for conversions.

## ✨ Features

- 🎨 **Premium Design**: Festive Christmas theme with smooth animations
- 📱 **Mobile-First**: Fully responsive design optimized for all devices
- 🌐 **Bilingual**: Spanish/English language support
- 💬 **WhatsApp Integration**: Direct contact with pre-filled message
- ⚡ **Performance**: Optimized images and fast loading times
- 🔒 **Security**: Security headers and rate limiting middleware
- ♿ **Accessibility**: WCAG AA compliant
- 🧪 **Testing**: Unit tests with Jest and React Testing Library
- 📊 **Analytics**: Google Analytics 4 and Meta Pixel integration

## 🚀 Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd pagina-madre

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report
```

## 🧪 Testing

The project includes unit tests for components and utilities:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test files are located alongside their components (e.g., `ProductCard.test.tsx`).

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Hero section
│   ├── ProductGrid.tsx   # Product grid
│   ├── ProductCard.tsx   # Product card
│   ├── ProductModal.tsx  # Product detail modal
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── About.tsx         # About section
│   ├── WhatsAppCTA.tsx   # WhatsApp call-to-action
│   ├── FloatingWhatsApp.tsx # Floating WhatsApp button
│   ├── Footer.tsx        # Footer
│   ├── Snowfall.tsx      # Snowfall animation
│   └── LanguageSwitcher.tsx # Language toggle
├── data/                 # Static data
│   ├── site.ts          # Site configuration
│   ├── products.ts      # Product catalog
│   └── testimonials.ts  # Testimonials data
├── lib/                 # Utilities
│   ├── utils.ts         # Helper functions
│   ├── i18n.ts          # Internationalization
│   ├── whatsapp.ts      # WhatsApp URL generator
│   └── analytics.ts     # Analytics helpers
└── middleware.ts        # Security middleware

public/
├── images/              # Product images
├── logo.png            # Site logo
└── favicon.ico         # Favicon
```

## 🎨 Customization

### Colors

Edit `src/app/globals.css` to customize the color palette:

```css
--color-cream: #FDFBF7;
--color-forest: #1B3A2D;
--color-christmas-red: #C41E3A;
--color-gold: #B8963E;
```

### Products

Edit `src/data/products.ts` to add/remove products:

```typescript
{
  id: "product-id",
  name: "Product Name",
  price: 180000,
  description: "Product description",
  image: "/images/product.png",
  badge: "Handmade"
}
```

### Site Configuration

Edit `src/data/site.ts` to update site-wide settings:

```typescript
export const site = {
  name: "The Festive Plushery",
  whatsapp: "+573001234567",
  currency: "COP",
  currencySymbol: "$"
}
```

## 🌍 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+573001234567
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

The project includes security middleware that adds:
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Content Security Policy (CSP)
- Rate limiting (60 requests per minute)

## 📊 Analytics

Configure Google Analytics 4 and Meta Pixel by adding the tracking IDs to your `.env.local` file.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and confidential.

## 📧 Contact

For questions or support, please contact the development team.

---

Built with ❤️ for Hilos de Amor
