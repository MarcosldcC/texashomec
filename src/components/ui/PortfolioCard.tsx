'use client';

import React from 'react';
import Image from 'next/image';
import type { PortfolioImage } from '@/types/index';

interface PortfolioCardProps {
  image: PortfolioImage;
  onClick: (image: PortfolioImage) => void;
}

export default function PortfolioCard({ image, onClick }: PortfolioCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(image);
    }
  };

  return (
    <article className="group rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
      <button
        type="button"
        className="relative w-full aspect-[4/3] block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 min-h-[44px]"
        onClick={() => onClick(image)}
        onKeyDown={handleKeyDown}
        aria-label={`View larger image of ${image.title}`}
      >
        <Image
          src={image.thumbnail}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.src = 'https://picsum.photos/seed/fallback/800/600';
          }}
        />
        {/* Hover overlay */}
        <span
          className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white"
            aria-hidden="true"
          >
            <path
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-primary mb-1 leading-snug">
          {image.title}
        </h3>
        <p className="font-body text-sm text-gray-600 leading-relaxed">{image.description}</p>
      </div>
    </article>
  );
}
