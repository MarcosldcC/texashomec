'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import type { PortfolioImage } from '@/types';

interface LightboxProps {
  images: PortfolioImage[];
  activeIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, activeIndex: initialIndex, onClose }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const hasPrevNext = images.length > 1;
  const current = images[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Focus trap + keyboard handling
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight' && hasPrevNext) {
        goNext();
        return;
      }
      if (e.key === 'ArrowLeft' && hasPrevNext) {
        goPrev();
        return;
      }
      // Focus trap: keep Tab within the overlay
      if (e.key === 'Tab' && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, hasPrevNext, goNext, goPrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image lightbox: ${current.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev button */}
      {hasPrevNext && (
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Image + caption */}
      <div className="flex flex-col items-center max-w-5xl w-full px-16 gap-4">
        <div className="relative w-full" style={{ maxHeight: '75vh' }}>
          <Image
            src={current.src}
            alt={current.alt}
            width={1200}
            height={800}
            className="object-contain w-full"
            style={{ maxHeight: '75vh' }}
            priority
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/fallback/1200/800';
            }}
          />
        </div>
        <div className="text-center text-white">
          <p className="text-lg font-semibold" style={{ fontFamily: 'SQMarket-Medium, sans-serif' }}>
            {current.title}
          </p>
          {current.description && (
            <p className="text-sm text-white/70 mt-1">{current.description}</p>
          )}
          {hasPrevNext && (
            <p className="text-xs text-white/50 mt-1">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>

      {/* Next button */}
      {hasPrevNext && (
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
