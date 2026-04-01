'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-16 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text — left on desktop, top on mobile */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            About Texas Home Construction
          </h2>

          <p className="font-body text-gray-brand text-base leading-relaxed mb-4">
            Founded in 2005, Texas Home Construction has spent nearly two decades building homes,
            commercial spaces, and custom projects across the Lone Star State. What started as a
            small family operation has grown into a trusted regional contractor with hundreds of
            completed projects and a reputation for quality craftsmanship.
          </p>

          <p className="font-body text-gray-brand text-base leading-relaxed mb-8">
            Our mission is simple: deliver reliable, high-quality construction services that turn
            your vision into reality — on time and on budget. We combine deep local expertise with
            modern building techniques to create spaces that stand the test of time.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-accent text-primary font-heading font-bold text-base px-8 py-3 rounded min-w-[44px] min-h-[44px] hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
          >
            Meet Our Team
          </Link>
        </div>

        {/* Image — right on desktop, top on mobile */}
        <div className="flex-1 order-1 md:order-2 w-full">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/team/800/600"
              alt="Texas Home Construction team on a completed project"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
