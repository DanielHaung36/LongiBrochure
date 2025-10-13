# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js product brochure viewer** for Longi Magnet Australia's magnetic solutions catalog. It's a single-page application that displays a PDF catalog with an interactive viewer, supporting desktop, mobile, and WeChat browser environments.

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router with React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: Radix UI primitives (via shadcn/ui)
- **PDF Rendering**: react-pdf with pdfjs-dist
- **Fonts**: Geist Sans and Geist Mono
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Architecture

### App Structure
```
app/
├── layout.tsx          # Root layout with metadata and fonts
├── page.tsx            # Main page composing Hero, CatalogViewer, Contact, Footer
└── globals.css         # Tailwind base styles and CSS variables

components/
├── catalog-viewer.tsx              # PDF viewer with mobile/desktop/WeChat detection
├── catalog-viewer-wrapper.tsx      # Client-side wrapper for catalog viewer
├── hero.tsx                        # Landing hero section
├── contact-section.tsx             # Contact information section
├── footer.tsx                      # Footer component
├── theme-provider.tsx              # Theme context provider
└── ui/                            # shadcn/ui components (50+ components)
```

### Key Features
- **Responsive PDF Viewer**: Different rendering strategies for desktop (iframe), mobile (react-pdf), and WeChat (download prompt)
- **PDF Navigation**: Page-by-page navigation with controls
- **Fullscreen Mode**: Immersive catalog viewing experience
- **Device Detection**: Automatic detection of mobile devices and WeChat browser
- **Download Functionality**: Direct PDF download option

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Component System

### shadcn/ui Configuration
- **Style**: New York variant
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Icon Library**: Lucide React
- **Path Aliases**: `@/` maps to project root

### Import Aliases
```typescript
@/components  → components/
@/lib         → lib/
@/hooks       → hooks/
@/components/ui → components/ui/
```

## PDF Handling

The catalog viewer (`components/catalog-viewer.tsx:14-245`) implements three rendering strategies:

1. **WeChat Browser** (lines 132-150): Shows download prompt only, as WeChat doesn't support PDF previews
2. **Mobile Devices** (lines 151-189): Uses react-pdf with PDF.js for cross-browser compatibility
3. **Desktop** (lines 190-199): Uses native browser iframe for optimal performance

PDF.js worker is loaded from CDN: `cdnjs.cloudflare.com/ajax/libs/pdf.js/{version}/pdf.worker.min.mjs`

## Important Configuration Notes

### Next.js Config (`next.config.mjs`)
- **Build Errors Ignored**: `eslint` and `typescript` errors don't block builds
- **Images Unoptimized**: Image optimization is disabled

### TypeScript Config
- **Target**: ES6
- **Strict Mode**: Enabled
- **Path Mapping**: `@/*` resolves to project root

## Public Assets

PDF files should be placed in `public/` directory. The current catalog is at:
```
/LONGi CRITICAL MINERALS PRODUCT BROCHURE ( 3rd Edition) 0825-Latest_compressed.pdf
```

## Styling Approach

- **Tailwind CSS v4**: Using PostCSS with `@tailwindcss/postcss`
- **CSS Variables**: Theme colors defined in `app/globals.css`
- **Dark Mode**: Supported via next-themes
- **Responsive Design**: Mobile-first with md/lg breakpoints

## Browser Compatibility

The app handles multiple environments:
- Modern desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- WeChat in-app browser (provides fallback download button)

Mobile detection checks `window.innerWidth < 768`, and WeChat detection looks for `micromessenger` in user agent.
