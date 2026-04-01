'use client';

import React, { useState } from 'react';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Lightbox from '@/components/ui/Lightbox';
import type { PortfolioImage } from '@/types/index';

type Category = 'all' | 'residential' | 'commercial' | 'remodeling' | 'custom';

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Remodeling', value: 'remodeling' },
  { label: 'Custom Builds', value: 'custom' },
];

const P = 'https://picsum.photos/seed/';
const img = (seed: string) => `${P}${seed}/800/600`;

const ALL_PORTFOLIO_ITEMS: PortfolioImage[] = [
  { id: 'portfolio-1', src: img('house1'), thumbnail: img('house1'), alt: 'Custom two-story residential home with stone facade in Austin, Texas', title: 'Stone Ridge Residence', description: 'A custom two-story home featuring a stone facade, open floor plan, and energy-efficient design in Austin.', category: 'residential' },
  { id: 'portfolio-2', src: img('office1'), thumbnail: img('office1'), alt: 'Modern commercial office building with glass exterior in Dallas, Texas', title: 'Lakewood Office Complex', description: 'A 12,000 sq ft commercial office complex with modern glass exterior and LEED-certified construction.', category: 'commercial' },
  { id: 'portfolio-3', src: img('kitchen1'), thumbnail: img('kitchen1'), alt: 'Full kitchen and living room remodel with open concept layout', title: 'Highland Park Kitchen Remodel', description: 'Complete kitchen and living area transformation featuring quartz countertops, custom cabinetry, and an open-concept layout.', category: 'remodeling' },
  { id: 'portfolio-4', src: img('luxury1'), thumbnail: img('luxury1'), alt: 'Custom luxury home with pool and outdoor entertainment area in Houston', title: 'Cypress Creek Custom Estate', description: 'A luxury custom estate with resort-style pool, outdoor kitchen, and 5,200 sq ft of living space.', category: 'custom' },
  { id: 'portfolio-5', src: img('retail1'), thumbnail: img('retail1'), alt: 'Retail strip center with brick exterior in San Antonio, Texas', title: 'Alamo Heights Retail Center', description: 'A 6-unit retail strip center built to Class A standards with ample parking and modern storefronts.', category: 'commercial' },
  { id: 'portfolio-6', src: img('bath1'), thumbnail: img('bath1'), alt: 'Master bathroom remodel with walk-in shower and freestanding tub', title: 'Westlake Master Bath Renovation', description: 'Spa-inspired master bathroom renovation featuring a walk-in rainfall shower, freestanding soaking tub, and heated floors.', category: 'remodeling' },
  { id: 'portfolio-7', src: img('house2'), thumbnail: img('house2'), alt: 'New single-family home with brick exterior and two-car garage in Plano, Texas', title: 'Plano Family Home', description: 'A 2,800 sq ft single-family home with brick exterior, open-concept kitchen, and a spacious two-car garage.', category: 'residential' },
  { id: 'portfolio-8', src: img('office2'), thumbnail: img('office2'), alt: 'Medical office building with modern facade in Fort Worth, Texas', title: 'Fort Worth Medical Plaza', description: 'A purpose-built medical office plaza with ADA-compliant design, private exam rooms, and a welcoming reception area.', category: 'commercial' },
  { id: 'portfolio-9', src: img('reno1'), thumbnail: img('reno1'), alt: 'Whole-home remodel with updated flooring and open living spaces', title: 'Katy Whole-Home Renovation', description: 'Full interior renovation of a 3,200 sq ft home including new flooring, updated bathrooms, and an expanded living area.', category: 'remodeling' },
  { id: 'portfolio-10', src: img('barn1'), thumbnail: img('barn1'), alt: 'Custom barndominium with metal roof and wraparound porch in Hill Country', title: 'Hill Country Barndominium', description: 'A custom barndominium blending rustic charm with modern amenities, featuring a metal roof, wraparound porch, and open living space.', category: 'custom' },
  { id: 'portfolio-11', src: img('house3'), thumbnail: img('house3'), alt: 'Craftsman-style residential home with covered front porch in Round Rock', title: 'Round Rock Craftsman Home', description: 'A craftsman-style residence with a covered front porch, hardwood floors, and custom built-in shelving throughout.', category: 'residential' },
  { id: 'portfolio-12', src: img('farm1'), thumbnail: img('farm1'), alt: 'Custom modern farmhouse with black window frames and shiplap interior', title: 'Georgetown Modern Farmhouse', description: "A modern farmhouse with black-framed windows, shiplap accent walls, and a chef's kitchen with a large island.", category: 'custom' },
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = activeFilter === 'all'
    ? ALL_PORTFOLIO_ITEMS
    : ALL_PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const handleCardClick = (image: PortfolioImage) => {
    const index = filtered.findIndex((item) => item.id === image.id);
    setActiveIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <>
      <h2 className="sr-only">Project Gallery</h2>

      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3 justify-center mb-10">
        {FILTERS.map(({ label, value }) => {
          const isActive = activeFilter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setActiveFilter(value)}
              aria-pressed={isActive}
              className={[
                'min-w-[44px] min-h-[44px] px-5 py-2 rounded font-heading font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                isActive ? 'bg-accent text-primary' : 'bg-white text-primary border border-gray-200 hover:border-accent hover:text-accent',
              ].join(' ')}
            >
              {label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-gray-500 text-center py-16">No projects found in this category.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full list-none m-0 p-0" role="list">
          {filtered.map((item) => (
            <li key={item.id}>
              <PortfolioCard image={item} onClick={handleCardClick} />
            </li>
          ))}
        </ul>
      )}

      {lightboxOpen && (
        <Lightbox images={filtered} activeIndex={activeIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}
