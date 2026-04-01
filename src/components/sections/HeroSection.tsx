'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] scroll-mt-16">
      {/* Background image */}
      <Image
        src="https://picsum.photos/seed/construction/1920/1080"
        alt="Construction project in Texas"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Brand overlay — primary color at 70% opacity ensures WCAG AA contrast */}
      <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
          Building Your Dreams in Texas
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Reliable, Quality Construction Services
        </p>
        <a
          href="#services"
          className="inline-flex items-center justify-center bg-accent text-primary font-heading font-bold text-base px-8 py-3 rounded min-w-[44px] min-h-[44px] hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-colors"
        >
          View Our Services
        </a>
      </div>
    </section>
  );
}
