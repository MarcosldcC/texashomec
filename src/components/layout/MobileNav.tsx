'use client';

import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-primary"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-heading text-lg font-bold text-white">Texas Home Construction</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col px-6 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="inline-flex items-center min-h-[44px] py-4 text-lg font-medium text-white border-b border-white/10 hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={onClose}
          className="mt-6 flex min-h-[44px] items-center justify-center rounded bg-accent px-6 py-3 font-heading font-bold text-primary hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </Link>
      </nav>
    </div>
  );
}
