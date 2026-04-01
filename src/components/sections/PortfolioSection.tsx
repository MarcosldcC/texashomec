'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Lightbox from '@/components/ui/Lightbox';
import type { PortfolioImage } from '@/types/index';

const P = 'https://picsum.photos/seed/';
const img = (seed: string) => `${P}${seed}/800/600`;

const portfolioItems: PortfolioImage[] = [
  {
    id: 'portfolio-1',
    src: img('house1'), thumbnail: img('house1'),
    alt: 'Custom two-story residential home with stone facade in Austin, Texas',
    title: 'Stone Ridge Residence',
    description: 'A custom two-story home featuring a stone facade, open floor plan, and energy-efficient design in Austin.',
    category: 'residential',
  },
  {
    id: 'portfolio-2',
    src: img('office1'), thumbnail: img('office1'),
    alt: 'Modern commercial office building with glass exterior in Dallas, Texas',
    title: 'Lakewood Office Complex',
    description: 'A 12,000 sq ft commercial office complex with modern glass exterior and LEED-certified construction.',
    category: 'commercial',
  },
  {
    id: 'portfolio-3',
    src: img('kitchen1'), thumbnail: img('kitchen1'),
    alt: 'Full kitchen and living room remodel with open concept layout',
    title: 'Highland Park Kitchen Remodel',
    description: 'Complete kitchen and living area transformation featuring quartz countertops, custom cabinetry, and an open-concept layout.',
    category: 'remodeling',
  },
  {
    id: 'portfolio-4',
    src: img('luxury1'), thumbnail: img('luxury1'),
    alt: 'Custom luxury home with pool and outdoor entertainment area in Houston',
    title: 'Cypress Creek Custom Estate',
    description: 'A luxury custom estate with resort-style pool, outdoor kitchen, and 5,200 sq ft of living space.',
    category: 'custom',
  },
  {
    id: 'portfolio-5',
    src: img('retail1'), thumbnail: img('retail1'),
    alt: 'Retail strip center with brick exterior in San Antonio, Texas',
    title: 'Alamo Heights Retail Center',
    description: 'A 6-unit retail strip center built to Class A standards with ample parking and modern storefronts.',
    category: 'commercial',
  },
  {
    id: 'portfolio-6',
    src: img('bath1'), thumbnail: img('bath1'),
    alt: 'Master bathroom remodel with walk-in shower and freestanding tub',
    title: 'Westlake Master Bath Renovation',
    description: 'Spa-inspired master bathroom renovation featuring a walk-in rainfall shower, freestanding soaking tub, and heated floors.',
    category: 'remodeling',
  },
];

export default function PortfolioSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (image: PortfolioImage) => {
    const index = portfolioItems.findIndex((item) => item.id === image.id);
    setActiveIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="w-full bg-white py-16 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center max-w-2xl">
          <h2 id="portfolio-heading" className="font-heading text-3xl font-bold text-primary mb-4">
            Our Work
          </h2>
          <p className="font-body text-base text-gray-600 leading-relaxed">
            Browse a selection of completed projects across Texas. From custom homes to commercial
            builds and full remodels, every project reflects our commitment to quality and craftsmanship.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full list-none m-0 p-0" role="list">
          {portfolioItems.map((item) => (
            <li key={item.id}>
              <PortfolioCard image={item} onClick={handleCardClick} />
            </li>
          ))}
        </ul>

        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
        >
          See More Projects
        </Link>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={portfolioItems}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
