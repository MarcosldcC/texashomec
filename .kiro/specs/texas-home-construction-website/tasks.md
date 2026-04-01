# Implementation Plan: Texas Home Construction Website

## Overview

Build a Next.js (App Router) marketing website with Tailwind CSS, covering all homepage sections, inner pages, API routes, SEO infrastructure, and a full test suite using Jest + React Testing Library + fast-check.

## Tasks

- [x] 1. Project scaffolding and configuration
  - Initialize Next.js app with App Router, TypeScript, and Tailwind CSS
  - Configure `tailwind.config.ts` with brand colors (`#1e2330`, `#818181`, `#FFA500`) and custom fonts (SQMarket-Medium, Arial/Helvetica)
  - Add `next-sitemap` as a post-build dependency and create `next-sitemap.config.js`
  - Create `src/types/index.ts` exporting `PortfolioImage`, `Testimonial`, `ServiceCard`, `ContactFormPayload`, `NewsletterPayload`, and `PageMetadata` interfaces
  - Create `src/lib/brand.ts` exporting the `BrandConfig` constant
  - Create `src/lib/schema.ts` exporting the `LocalBusiness` JSON-LD object
  - Set up Jest + React Testing Library + fast-check; add `jest.config.ts` and `jest.setup.ts`
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 14.1_

- [ ] 2. Layout components
  - [x] 2.1 Implement `Header` component
    - Sticky header with logo (left), nav links (Home, Services, About Us, Portfolio, Testimonials, Contact Us), and "Get a Quote" CTA button
    - "Get a Quote" scrolls to `#contact` or navigates to `/#contact`
    - Hamburger menu below `md` breakpoint using `MobileNav`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [x] 2.2 Implement `MobileNav` component
    - Full-screen overlay with vertical nav links; accepts `isOpen` and `onClose` props
    - _Requirements: 1.5, 1.6_

  - [x] 2.3 Implement `Footer` component
    - Nav links, Privacy Policy / Terms of Service links, social media icons (open in new tab), newsletter signup form wired to `/api/newsletter`
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

  - [ ]* 2.4 Write unit tests for Header and Footer
    - Assert nav links present, "Get a Quote" href, social icons have `target="_blank"`, Privacy Policy and Terms links present
    - _Requirements: 1.2, 1.3, 11.1, 11.2, 11.3_

- [ ] 3. Homepage section components
  - [x] 3.1 Implement `HeroSection` component
    - Full-width background image via `next/image` (priority), headline, subheadline, "View Our Services" CTA scrolling to `#services`
    - Apply brand overlay ensuring WCAG AA contrast
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [ ]* 3.2 Write property test for Hero contrast (Property 1)
    - **Property 1: WCAG AA Contrast for Hero Text**
    - **Validates: Requirements 2.6**
    - Generate random text/overlay color pairs; assert contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text

  - [x] 3.3 Implement `TrustSignals` component
    - Row of certification/affiliation logos (BBB Accredited, Local Builders Association); each logo is an anchor with `target="_blank"`
    - Positioned above the fold (between Hero and Services)
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ]* 3.4 Write property test for external links (Property 9)
    - **Property 9: External Links Open in New Tab**
    - **Validates: Requirements 9.3, 11.3**
    - Collect all external link elements from rendered pages; assert each has `target="_blank"` and non-empty `href`

  - [x] 3.5 Implement `ServicesSection` and `ServiceCard` components
    - Introductory paragraph, responsive grid (4 cols desktop / 2 tablet / 1 mobile), each card with SVG icon and description
    - Entries: Residential Construction, Commercial Construction, Remodeling, Custom Builds
    - "Learn More About Our Services" CTA → `/services`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 3.6 Write property test for service cards (Property 2)
    - **Property 2: Service Cards Contain Icon and Description**
    - **Validates: Requirements 3.2**
    - Generate arbitrary `ServiceCard` data; render; assert icon element and non-empty description present

  - [x] 3.7 Implement `AboutSection` component
    - Company history + mission statement, team/project image via `next/image`, "Meet Our Team" CTA → `/about`
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 3.8 Implement `PortfolioSection` and `PortfolioCard` components
    - Responsive grid (3 cols desktop / 2 tablet / 1 mobile), each card with thumbnail, title, description
    - Click opens `Lightbox`; "See More Projects" CTA → `/portfolio`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [ ]* 3.9 Write property test for portfolio items (Property 3)
    - **Property 3: Portfolio Items Include Description**
    - **Validates: Requirements 5.3**
    - Generate arbitrary `PortfolioImage` data; render; assert non-empty description present

  - [x] 3.10 Implement `Lightbox` component
    - Full-screen overlay, large image, prev/next controls, close button; focus trap; closes on Escape key
    - Single-image edge case: no prev/next controls
    - _Requirements: 5.2_

  - [ ]* 3.11 Write unit tests for Lightbox
    - Assert opens on portfolio image click, closes on Escape key, no prev/next when single image
    - _Requirements: 5.2_

  - [x] 3.12 Implement `TestimonialsSection` carousel
    - Auto-advancing carousel (3-second interval), each slide with quote, client name, optional photo
    - Manual prev/next controls; "Read More Reviews" CTA
    - Single-item edge case: no auto-advance, no controls
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 3.13 Write property test for testimonials client name (Property 4)
    - **Property 4: Testimonials Include Client Name**
    - **Validates: Requirements 6.1**
    - Generate arbitrary `Testimonial` data; render; assert non-empty `clientName` present

  - [ ]* 3.14 Write property test for carousel auto-advance (Property 5)
    - **Property 5: Carousel Auto-Advances**
    - **Validates: Requirements 6.3**
    - Generate N-item testimonial list (N > 1); advance timer by interval; assert active index increments (mod N)

  - [ ]* 3.15 Write property test for carousel manual navigation (Property 6)
    - **Property 6: Carousel Manual Navigation**
    - **Validates: Requirements 6.4**
    - Generate N-item list; click next/prev arbitrary times; assert index = expected (mod N)

- [ ] 4. Contact section and API routes
  - [x] 4.1 Implement `ContactForm` component
    - Fields: Name, Email, Phone Number, Message (all required)
    - Client-side validation with inline errors on blur and submit; whitespace-only treated as empty
    - POST to `/api/contact`; show confirmation on 200, generic error on failure or timeout (10s)
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 4.2 Write property test for contact form incomplete submissions (Property 7)
    - **Property 7: Contact Form Rejects Incomplete Submissions**
    - **Validates: Requirements 7.3**
    - Generate all non-empty subsets of required fields as empty; submit; assert inline errors shown and API not called

  - [ ]* 4.3 Write property test for contact form invalid email (Property 8)
    - **Property 8: Contact Form Rejects Invalid Email**
    - **Validates: Requirements 7.4**
    - Generate arbitrary non-email strings; enter in email field; submit; assert validation error shown and API not called

  - [x] 4.4 Implement `/api/contact` Next.js API route
    - Validate payload, forward to Formspree/Resend; return 200 on success, 4xx/5xx on error
    - _Requirements: 7.2_

  - [x] 4.5 Implement `ContactSection` component
    - Embeds `ContactForm`, company address/phone/email, Google Maps embed, and `BookingWidget`
    - Fallback message with phone number if booking embed fails to load
    - _Requirements: 7.5, 7.6, 8.1, 8.5_

  - [x] 4.6 Implement `BookingWidget` component
    - Inline Calendly/Cal.com embed; accessible from Contact section and "Get a Quote" CTA
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ]* 4.7 Write unit tests for ContactForm
    - All fields empty → four inline errors; whitespace-only → treated as empty; success state (mock 200 → confirmation); error state (mock 500 → generic error)
    - Assert booking widget embed rendered within contact section
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 4.8 Implement `/api/newsletter` Next.js API route
    - Validate email, subscribe to mailing list provider; return 200 on success
    - _Requirements: 11.5_

  - [ ]* 4.9 Write property test for newsletter invalid email (Property 14)
    - **Property 14: Newsletter Form Rejects Invalid Email**
    - **Validates: Requirements 11.6**
    - Generate arbitrary non-email strings; enter in newsletter field; submit; assert error shown and API not called

  - [ ]* 4.10 Write unit tests for newsletter form
    - Valid email → confirmation shown; empty string → validation error
    - _Requirements: 11.5, 11.6_

- [x] 5. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Inner pages
  - [x] 6.1 Implement `ServicesPage` (`/services`)
    - Detailed service descriptions, optional pricing tiers, CTA; unique `PageMetadata`
    - _Requirements: 3.5, 14.1_

  - [x] 6.2 Implement `PortfolioPage` (`/portfolio`)
    - Full gallery with filtering by `category` (`residential`, `commercial`, `remodeling`, `custom`); unique `PageMetadata`
    - _Requirements: 5.5, 14.1_

  - [x] 6.3 Implement `AboutPage` (`/about`)
    - Team bios, company timeline; unique `PageMetadata`
    - _Requirements: 4.4, 14.1_

  - [x] 6.4 Implement `PrivacyPolicyPage` and `TermsPage`
    - Static legal content; unique `PageMetadata` for each
    - _Requirements: 11.1, 14.1_

  - [ ]* 6.5 Write unit tests for inner pages
    - Assert each page renders expected headings and CTAs; assert booking widget accessible from contact section
    - _Requirements: 3.5, 4.4, 5.5, 8.5_

- [ ] 7. SEO infrastructure and accessibility
  - [x] 7.1 Add `PageMetadata` exports to every page using Next.js `generateMetadata`
    - Unique `title` and `description` per page; canonical URLs
    - _Requirements: 14.1_

  - [ ]* 7.2 Write property test for unique page metadata (Property 11)
    - **Property 11: Every Page Has Unique Title and Meta Description**
    - **Validates: Requirements 14.1**
    - Enumerate all page metadata exports; assert non-empty title + description, all titles unique

  - [x] 7.3 Audit and enforce non-empty `alt` text on all `next/image` and `<img>` elements
    - Add `onError` handler to swap to placeholder image on load failure
    - _Requirements: 14.2_

  - [ ]* 7.4 Write property test for image alt text (Property 12)
    - **Property 12: All Images Have Non-Empty Alt Text**
    - **Validates: Requirements 14.2**
    - Collect all img/Image elements from rendered pages; assert `alt` is a non-empty string

  - [x] 7.5 Audit and enforce semantic heading hierarchy on every page
    - Exactly one `<h1>` per page; `<h2>` elements follow `<h1>`; `<h3>` elements follow `<h2>`
    - _Requirements: 14.3_

  - [ ]* 7.6 Write property test for heading hierarchy (Property 13)
    - **Property 13: Heading Hierarchy Is Valid on Every Page**
    - **Validates: Requirements 14.3**
    - Render each page; parse heading elements; assert exactly one H1, H2s follow H1, H3s follow H2

  - [x] 7.7 Add `LocalBusiness` JSON-LD script tag to homepage via `schema.ts`
    - _Requirements: 14.6_

  - [ ]* 7.8 Write unit test for JSON-LD structured data
    - Assert homepage contains script tag with `@type: LocalBusiness`
    - _Requirements: 14.6_

  - [x] 7.9 Configure `next-sitemap` post-build script; verify `/sitemap.xml` and `robots.txt` output
    - `robots.txt` must not disallow public pages; sitemap must include all page URLs
    - _Requirements: 14.4, 14.5_

  - [ ]* 7.10 Write unit tests for sitemap and robots.txt
    - Assert sitemap contains all expected page URLs; assert robots.txt does not disallow public pages
    - _Requirements: 14.4, 14.5_

  - [x] 7.11 Audit all interactive elements for minimum 44×44 CSS pixel tap targets
    - _Requirements: 13.2_

  - [ ]* 7.12 Write property test for touch target sizes (Property 10)
    - **Property 10: Touch Targets Meet Minimum Size**
    - **Validates: Requirements 13.2**
    - Collect all interactive elements; assert computed min tap target ≥ 44×44px

- [ ] 8. Live chat integration
  - [x] 8.1 Embed Tawk.to or Crisp live chat widget in root layout
    - Persistent on every page; handles offline mode natively
    - _Requirements: 10.1, 10.2, 10.3_

- [ ] 9. Wiring and integration
  - [x] 9.1 Assemble homepage (`/`) with all sections in order
    - `Header` → `HeroSection` → `TrustSignals` → `ServicesSection` → `AboutSection` → `PortfolioSection` → `TestimonialsSection` → `ContactSection` → `Footer`
    - Anchor IDs: `#hero`, `#services`, `#about`, `#portfolio`, `#testimonials`, `#contact`
    - _Requirements: 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 9.2_

  - [x] 9.2 Verify all CTA scroll targets and page navigation routes work end-to-end
    - "Get a Quote" → `#contact`; "View Our Services" → `#services`; "Learn More" → `/services`; "Meet Our Team" → `/about`; "See More Projects" → `/portfolio`
    - _Requirements: 1.4, 2.5, 3.5, 4.4, 5.5_

  - [x] 9.3 Apply brand config globally via Tailwind theme
    - Confirm all pages use correct colors and fonts per `BrandConfig`
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

  - [x] 9.4 Verify responsive layout at 320px, 768px, 1280px, and 2560px viewports
    - Hamburger menu, single-column service grid, single/two-column portfolio grid
    - _Requirements: 13.1, 1.5, 3.6, 5.6_

- [x] 10. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with a minimum of 100 iterations each
- Each property test must include the comment: `// Feature: texas-home-construction-website, Property {N}: {property_text}`
- Unit tests use Jest + React Testing Library
