# Tharakan Traders - Luxury Beauty Distribution Platform

## Overview

Tharakan Traders is a premium luxury beauty and fragrance distribution platform serving India and the Middle East. The application is a React-based single-page application (SPA) built with Vite, featuring a sophisticated e-commerce showcase for luxury cosmetics, fragrances, and skincare products from prestigious brands like Tom Ford, Amouage, Dior, Chanel, and others.

The platform is designed with a premium dark theme aesthetic targeting B2B distribution and high-end retail partnerships, emphasizing luxury branding, elegant UI/UX, and comprehensive product cataloging.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot-module replacement
- **React Router** for client-side routing with multiple page views (Home, Products, Brands, Collections, About, Contact)
- **SPA Architecture** - All routing handled client-side with no backend server

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable interface elements
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theming, enabling consistent color palette across the application
- **Luxury Design System** - Custom color palette (luxury-gold, luxury-silver, luxury-dark) defined in CSS variables
- **Premium Dark Theme** - Default dark mode aesthetic with HSL color values

**State Management**
- **React Hooks** (useState, useEffect) for local component state
- **TanStack Query** (React Query) for data fetching and caching (though currently using static product data)
- **LocalStorage** for persistent state (wishlist, filter preferences)
- Custom event system (`wishlistUpdated` events) for cross-component synchronization

**Key Design Patterns**
- Component-based architecture with reusable UI components
- Container/Presentational component separation
- Custom hooks for shared logic (use-toast, use-mobile)
- Modal/Dialog patterns for quick views and interactions

### Data Layer

**Product Data Structure**
- Static product catalog defined in `/src/data/products.ts`
- Product interface includes: id, name, brand, category, gender, description, images, metadata (isNew, isFeatured)
- Fragrance-specific fields: fragranceFamily, notes (top/heart/base), relatedProducts
- No database integration - all data is hardcoded in TypeScript files

**Categories & Taxonomy**
- Categories: fragrance, cosmetics, skincare
- Gender segmentation: women, men, unisex
- Fragrance families: Oriental, Woody, Floral, Fresh, Citrus, Spicy
- Brand-based organization with brand showcase pages

### Navigation & Routing

**Route Structure**
- `/` - Home page with hero carousel and featured content
- `/products` - Product listing with advanced filtering
- `/products/:brand/:slug` - Individual product detail pages
- `/brands` - Brand directory with alphabetical listing
- `/brands/:brandSlug` - Individual brand showcase pages
- `/collections` - Curated collections view
- `/collections/:slug` - Specific collection pages
- `/about` - Company information, team, facilities
- `/contact` - Multi-form contact system (general, partnerships, careers)
- `*` - 404 Not Found catch-all route

**Navigation Features**
- Fixed navigation bar with mega menu on products
- Mobile-responsive hamburger menu
- Breadcrumb navigation support
- Dynamic active state indication

### Component Architecture

**Core Components**
- `Navigation` - Top nav bar with mega menu and mobile drawer
- `MegaMenu` - Dropdown navigation showing categories, brands, and featured collections
- `Footer` - Site-wide footer with links and contact info
- `ProductCard` - Reusable product display card with wishlist and quick view
- `QuickViewModal` - Product quick view dialog
- Form components using react-hook-form with zod validation

**Page Components**
- Each route has a dedicated page component in `/src/pages/`
- Pages are self-contained with their own state and layout logic

**UI Component Library**
- 30+ shadcn/ui components in `/src/components/ui/`
- Includes: Button, Card, Dialog, Form, Input, Select, Tabs, Toast, and more
- All components follow consistent theming and accessibility patterns

### Features & Functionality

**Product Filtering**
- Multi-select filters for categories, brands, genders, fragrance families
- Filter persistence via localStorage
- Wishlist filtering toggle
- Real-time filter application without page reload

**Wishlist System**
- Client-side wishlist stored in localStorage
- Cross-component synchronization via custom events
- Add/remove functionality on product cards and detail pages
- Wishlist filter on products page

**Image Handling**
- Multiple images per product support
- Image carousel on product detail pages
- Hover effects showing alternate images on product cards
- Zoom capability on product details (UI present, functionality noted for implementation)

**Forms & User Input**
- React Hook Form for form state management
- Multiple specialized contact forms (general inquiry, partnerships, retail, careers)
- Form validation (framework in place, specific validators to be added)
- Toast notifications for user feedback

**Visual Features**
- Embla Carousel for hero image rotation with autoplay
- Parallax effects and animations
- Responsive image galleries
- Loading skeletons (component available but not widely implemented)

### Styling & Design Tokens

**Color System (HSL-based)**
- Background: 0 0% 7% (near-black)
- Foreground: 0 0% 98% (near-white)
- Accent Gold: 38 60% 65%
- Luxury palette with metallics and dark grays
- Semantic color tokens: primary, secondary, accent, destructive, muted

**Typography**
- Custom fonts loaded: Playfair Display, Montserrat, Cinzel
- Font-light weights for luxury aesthetic
- Wide letter-spacing (tracking) for elegant appearance
- Responsive text sizes with Tailwind utilities

**Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Responsive navigation (desktop mega menu, mobile drawer)
- Grid layouts that adapt to screen size
- Custom mobile hook for conditional rendering

### Build & Development

**Build Configuration**
- Vite with SWC for fast compilation
- TypeScript with relaxed linting rules (strict: false, noImplicitAny: false)
- Path aliases (`@/*` maps to `./src/*`)
- Development server on port 5000
- Production build outputs to `/dist`

**Code Quality Tools**
- ESLint with TypeScript support
- React Hooks linting rules
- React Refresh for fast development
- Unused variable warnings disabled for development flexibility

**Environment**
- Node.js/npm based project
- No backend server required
- Static site deployment ready
- Lovable.dev integration for prompting-based development

## External Dependencies

### Core Dependencies

**React Ecosystem**
- `react` & `react-dom` (18.3.1) - Core framework
- `react-router-dom` - Client-side routing
- `@tanstack/react-query` (5.83.0) - Data fetching and caching (currently minimal usage)

**UI Libraries**
- `@radix-ui/*` (20+ packages) - Headless UI primitives for accessible components
- `lucide-react` (0.462.0) - Icon library
- `embla-carousel-react` (8.6.0) - Carousel functionality
- `embla-carousel-autoplay` (8.6.0) - Auto-rotating carousels
- `react-icons` - Additional icons including brand icons (WhatsApp, etc.)

**Form Management**
- `react-hook-form` - Form state and validation
- `@hookform/resolvers` (3.10.0) - Validation schema integration
- `zod` - Schema validation (installed but minimal usage detected)

**Styling**
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `class-variance-authority` (0.7.1) - Component variant handling
- `clsx` (2.1.1) - Conditional className utilities
- `tailwind-merge` - Tailwind class merging

**Utilities**
- `date-fns` (3.6.0) - Date manipulation
- `next-themes` (0.3.0) - Theme switching capability
- `cmdk` (1.1.1) - Command menu component
- `input-otp` (1.4.2) - OTP input component
- `recharts` - Charting library (component present but not actively used)
- `vaul` - Drawer component primitives

**Development Tools**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react-swc` - React plugin with SWC
- `typescript` - Type checking
- `eslint` - Code linting
- `lovable-tagger` - Development mode component tagging

### Third-Party Services

**Currently No Active Integrations**
- No payment processing
- No backend API calls
- No authentication service
- No analytics tracking (configured but not implemented)
- No email service integration
- No CDN for assets (using Unsplash URLs for placeholder images)

**Potential Future Integrations**
- Email service for contact forms (Resend, SendGrid, or similar)
- CMS for product data management
- Analytics (Google Analytics, Plausible)
- Image hosting/optimization service
- Authentication provider for B2B portal
- WhatsApp Business API for direct communication

### Assets & Media

**Image Sources**
- Unsplash.com URLs for product imagery (placeholder content)
- Local assets directory (`/src/assets/`) for brand-specific images
- No image optimization pipeline currently implemented

**SEO & Meta**
- OpenGraph tags configured in index.html
- Twitter card meta tags
- Robots.txt allowing all crawlers
- Sitemap not present