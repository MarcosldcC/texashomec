import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustSignals from '@/components/sections/TrustSignals';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import { LocalBusiness } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Texas Home Construction | Quality Construction Services in Texas',
  description:
    'Texas Home Construction offers residential, commercial, remodeling, and custom build services across Texas. Get a free quote today.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
      />
      <Header currentPath="/" />
      <main className="pt-16">
        <HeroSection />
        <TrustSignals />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
