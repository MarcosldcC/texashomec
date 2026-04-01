import type { Metadata } from 'next';
import PortfolioGallery from '@/components/sections/PortfolioGallery';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Portfolio | Texas Home Construction',
  description: 'Browse our full portfolio of completed construction projects across Texas — residential homes, commercial buildings, remodels, and custom builds.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <BackButton />
      </div>

      <section aria-labelledby="portfolio-page-heading" className="bg-primary py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 id="portfolio-page-heading" className="font-heading text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="font-body text-base text-white/80 leading-relaxed">
            From custom dream homes to large-scale commercial projects and full renovations, every build reflects our commitment to quality craftsmanship across Texas.
          </p>
        </div>
      </section>

      <section aria-label="Project gallery" className="max-w-6xl mx-auto px-4 py-14">
        <PortfolioGallery />
      </section>
    </>
  );
}
