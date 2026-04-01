'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import type { Testimonial } from '@/types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'James Harrington',
    quote:
      'Texas Home Construction built our dream home from the ground up. The craftsmanship is outstanding and the team kept us informed every step of the way. We couldn\'t be happier with the result.',
    photoSrc: 'https://picsum.photos/seed/jh/64/64',
    photoAlt: 'James Harrington, satisfied homeowner',
  },
  {
    id: '2',
    clientName: 'Maria Gonzalez',
    quote:
      'We hired them for a full kitchen and master bath remodel. They finished on time, on budget, and the quality exceeded our expectations. Highly recommend to anyone in the Dallas area.',
    photoSrc: 'https://picsum.photos/seed/mg/64/64',
    photoAlt: 'Maria Gonzalez, remodeling client',
  },
  {
    id: '3',
    clientName: 'David & Susan Patel',
    quote:
      'From the initial consultation to the final walkthrough, the professionalism was top-notch. Our custom build turned out exactly as we envisioned. True craftsmen.',
  },
  {
    id: '4',
    clientName: 'Robert Calloway',
    quote:
      'They handled our commercial office expansion with minimal disruption to our business. The project manager was responsive and the crew was respectful of our workspace.',
    photoSrc: 'https://picsum.photos/seed/rc/64/64',
    photoAlt: 'Robert Calloway, commercial client',
  },
  {
    id: '5',
    clientName: 'Linda Tran',
    quote:
      'I was nervous about a major renovation, but the team made the process smooth and stress-free. The attention to detail in the finish work is remarkable. Five stars without hesitation.',
  },
];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Texas+Home+Construction/@0,0,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d0!4d0!9m1!1b1';

const AUTO_ADVANCE_INTERVAL = 3000;

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({
  testimonials = TESTIMONIALS,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isSingle = testimonials.length === 1;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % testimonials.length) + testimonials.length) % testimonials.length);
    },
    [testimonials.length],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  // Auto-advance — only when more than one testimonial
  useEffect(() => {
    if (isSingle) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ADVANCE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSingle, testimonials.length]);

  // Reset timer on manual navigation
  const handleManualNav = useCallback(
    (fn: () => void) => {
      if (timerRef.current) clearInterval(timerRef.current);
      fn();
      if (!isSingle) {
        timerRef.current = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, AUTO_ADVANCE_INTERVAL);
      }
    },
    [isSingle, testimonials.length],
  );

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="w-full bg-primary py-16 px-4 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="font-body text-gray-300 text-base max-w-xl mx-auto">
            Real stories from homeowners and businesses across Texas.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full"
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Slide */}
          <div className="bg-white/10 rounded-2xl p-8 md:p-12 flex flex-col items-center gap-6 text-center min-h-[260px]">
            {/* Optional photo */}
            {active.photoSrc && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent flex-shrink-0">
                <Image
                  src={active.photoSrc}
                  alt={active.photoAlt ?? `Photo of ${active.clientName}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://placehold.co/64x64/1e2330/818181?text=Photo';
                  }}
                />
              </div>
            )}

            {/* Quote */}
            <blockquote className="font-body text-white text-lg md:text-xl leading-relaxed max-w-2xl">
              <span aria-hidden="true" className="text-accent text-4xl leading-none mr-1">
                &ldquo;
              </span>
              {active.quote}
              <span aria-hidden="true" className="text-accent text-4xl leading-none ml-1">
                &rdquo;
              </span>
            </blockquote>

            {/* Client name */}
            <p className="font-heading text-accent text-base tracking-wide">
              — {active.clientName}
            </p>
          </div>

          {/* Prev / Next controls — hidden when single item */}
          {!isSingle && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => handleManualNav(goPrev)}
                aria-label="Previous testimonial"
                className="inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => handleManualNav(() => goTo(i))}
                    className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeIndex ? 'bg-accent' : 'bg-white/30 hover:bg-white/60'
                    }`} />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleManualNav(goNext)}
                aria-label="Next testimonial"
                className="inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/10 hover:bg-accent hover:text-primary text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-8 py-3 rounded-lg bg-accent text-primary font-heading text-base font-semibold hover:bg-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
        >
          Read More Reviews
        </a>
      </div>
    </section>
  );
}
