'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav';

interface HeaderProps {
  currentPath: string;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Header({ currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ctaHref = currentPath === '/' ? '#contact' : '/#contact';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 bg-primary transition-shadow ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-h-[44px]" aria-label="Texas Home Construction — home">
            <span className="font-heading text-xl font-bold text-white leading-none">
              Texas Home<br />
              <span className="text-accent">Construction</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center min-h-[44px] text-sm font-medium text-white hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={ctaHref}
            className="hidden md:flex min-h-[44px] items-center rounded bg-accent px-5 py-2 font-heading font-bold text-primary hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="flex md:hidden h-11 w-11 items-center justify-center text-white"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div id="mobile-nav">
        <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}
