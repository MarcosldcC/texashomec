import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import type { ServiceCard as ServiceCardType } from '@/types/index';

const services: ServiceCardType[] = [
  {
    id: 'residential',
    icon: 'residential',
    title: 'Residential Construction',
    description:
      'From custom single-family homes to multi-unit developments, we bring your vision to life with quality craftsmanship and attention to detail.',
  },
  {
    id: 'commercial',
    icon: 'commercial',
    title: 'Commercial Construction',
    description:
      'We deliver functional, code-compliant commercial spaces — offices, retail, and industrial facilities — on time and within budget.',
  },
  {
    id: 'remodeling',
    icon: 'remodeling',
    title: 'Remodeling',
    description:
      'Transform your existing space with our full-service remodeling solutions, from kitchen and bath renovations to whole-home makeovers.',
  },
  {
    id: 'custom',
    icon: 'custom',
    title: 'Custom Builds',
    description:
      'Have a unique project in mind? Our team specializes in one-of-a-kind custom builds tailored precisely to your specifications and lifestyle.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="w-full bg-gray-50 py-16 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center max-w-2xl">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold text-primary mb-4"
          >
            Our Services
          </h2>
          <p className="font-body text-base text-gray-600 leading-relaxed">
            Texas Home Construction brings decades of expertise to every project. Whether you are
            building from the ground up, expanding an existing structure, or refreshing a space you
            love, our licensed team delivers reliable, high-quality results across Texas.
          </p>
        </div>

        {/* Service cards grid: 1 col mobile / 2 col tablet / 4 col desktop */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full list-none m-0 p-0"
          role="list"
        >
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/services"
          className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
        >
          Learn More About Our Services
        </Link>
      </div>
    </section>
  );
}
