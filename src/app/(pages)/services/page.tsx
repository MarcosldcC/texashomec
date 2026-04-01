import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Construction Services | Texas Home Construction',
  description:
    "Explore Texas Home Construction's full range of services: residential construction, commercial builds, remodeling, and custom projects. Request a free quote today.",
  alternates: { canonical: '/services' },
};

const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description:
      'From custom single-family homes to multi-unit developments, we bring your vision to life with quality craftsmanship and meticulous attention to detail. Our residential team manages every phase — site preparation, framing, mechanical, and finishing — so you have a single point of accountability from groundbreaking to move-in day.',
    details: ['Custom single-family homes', 'Multi-unit residential developments', 'New construction on your lot', 'Spec homes and investment properties'],
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="w-14 h-14" fill="none">
        <polygon points="24,6 4,22 8,22 8,42 20,42 20,30 28,30 28,42 40,42 40,22 44,22" fill="#FFA500" />
        <rect x="20" y="30" width="8" height="12" fill="#1e2330" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description:
      'We deliver functional, code-compliant commercial spaces on time and within budget. Whether you need a new office building, retail storefront, or industrial facility, our project managers keep every stakeholder informed and every milestone on schedule.',
    details: ['Office buildings and corporate campuses', 'Retail and restaurant fit-outs', 'Warehouses and industrial facilities', 'Mixed-use developments'],
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="w-14 h-14" fill="none">
        <rect x="8" y="10" width="32" height="34" fill="#FFA500" />
        <rect x="12" y="14" width="6" height="6" fill="#1e2330" />
        <rect x="22" y="14" width="6" height="6" fill="#1e2330" />
        <rect x="30" y="14" width="6" height="6" fill="#1e2330" />
        <rect x="12" y="24" width="6" height="6" fill="#1e2330" />
        <rect x="22" y="24" width="6" height="6" fill="#1e2330" />
        <rect x="30" y="24" width="6" height="6" fill="#1e2330" />
        <rect x="18" y="34" width="12" height="10" fill="#1e2330" />
      </svg>
    ),
  },
  {
    id: 'remodeling',
    title: 'Remodeling',
    description:
      'Transform your existing space with our full-service remodeling solutions. From kitchen and bath renovations to whole-home makeovers, we combine thoughtful design with skilled execution to maximize both function and value.',
    details: ['Kitchen and bathroom renovations', 'Whole-home remodels', 'Room additions and expansions', 'Basement and attic conversions'],
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="w-14 h-14" fill="none">
        <path d="M34 6a8 8 0 0 0-7.94 9.06L8 33a4 4 0 1 0 5.66 5.66l18.28-18.28A8 8 0 1 0 34 6zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#FFA500" />
        <circle cx="11" cy="36" r="2.5" fill="#1e2330" />
      </svg>
    ),
  },
  {
    id: 'custom',
    title: 'Custom Builds',
    description:
      'Have a unique project in mind? Our team specializes in one-of-a-kind custom builds tailored precisely to your specifications and lifestyle. We collaborate closely with architects, designers, and you to ensure every detail reflects your vision.',
    details: ['Architect-designed custom homes', 'Unique structural and aesthetic features', 'Sustainable and energy-efficient builds', 'Luxury finishes and smart-home integration'],
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="w-14 h-14" fill="none">
        <polygon points="24,4 29,18 44,18 32,27 37,42 24,33 11,42 16,27 4,18 19,18" fill="#FFA500" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <BackButton />
      </div>

      {/* Hero */}
      <section className="w-full bg-primary py-16 px-4 text-center" aria-labelledby="services-page-heading">
        <div className="max-w-3xl mx-auto">
          <h1 id="services-page-heading" className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="font-body text-lg text-gray-300 leading-relaxed mb-8">
            From the ground up or a fresh start — Texas Home Construction delivers reliable, high-quality results across every type of project.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Service Sections */}
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-20">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className={`flex flex-col md:flex-row gap-10 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-primary">
              {service.icon}
            </div>
            <div className="flex flex-col gap-4">
              <h2 id={`${service.id}-heading`} className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="font-body text-base text-gray-700 leading-relaxed">{service.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {service.details.map((detail) => (
                  <li key={detail} className="font-body text-sm text-gray-600">{detail}</li>
                ))}
              </ul>
              <Link href="/#contact" className="inline-flex items-center justify-center self-start min-h-[44px] px-6 py-3 bg-accent text-primary font-heading font-semibold text-sm rounded hover:bg-orange-400 transition-colors">
                Get a Quote
              </Link>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="w-full bg-primary py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="font-body text-base text-gray-300 mb-8">Contact us today for a free consultation and quote.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
