'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';
import ContactForm from '@/components/ui/ContactForm';
import type BookingWidgetType from '@/components/ui/BookingWidget';

const BookingWidget = dynamic<ComponentProps<typeof BookingWidgetType>>(
  () => import('@/components/ui/BookingWidget'),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-600">Loading booking calendar…</p>
      </div>
    ),
  }
);

const COMPANY_PHONE = '(555) 000-0000';

function BookingFallback() {
  return (
    <div role="alert" className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
      Unable to load the booking calendar. Please call us at{' '}
      <a
        href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`}
        className="font-semibold underline min-h-[44px] inline-flex items-center"
        style={{ color: '#FFA500' }}
      >
        {COMPANY_PHONE}
      </a>{' '}
      to schedule your consultation.
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      style={{ backgroundColor: '#f9fafb' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-heading font-semibold"
            style={{ color: '#1e2330' }}
          >
            Contact Us
          </h2>
          <p className="mt-2 text-base" style={{ color: '#818181' }}>
            Ready to start your project? Reach out or book a consultation below.
          </p>
        </div>

        {/* Two-column layout: form left, info/map right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left column — Contact form */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3
              className="mb-6 text-xl font-semibold"
              style={{ color: '#1e2330' }}
            >
              Send Us a Message
            </h3>
            <ContactForm />
          </div>

          {/* Right column — Company info, map, booking */}
          <div className="flex flex-col gap-8">
            {/* Company info */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3
                className="mb-4 text-xl font-semibold"
                style={{ color: '#1e2330' }}
              >
                Our Information
              </h3>
              <address className="not-italic space-y-3 text-sm" style={{ color: '#1e2330' }}>
                <div className="flex items-start gap-3">
                  <svg
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: '#FFA500' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Construction Blvd, Houston, TX 77001</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                    style={{ color: '#FFA500' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:5550000000"
                    className="min-h-[44px] inline-flex items-center hover:underline"
                    style={{ color: '#1e2330' }}
                    aria-label="Call us at (555) 000-0000"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                    style={{ color: '#FFA500' }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:info@texashomeconstruction.com"
                    className="min-h-[44px] inline-flex items-center hover:underline break-all"
                    style={{ color: '#1e2330' }}
                    aria-label="Email us at info@texashomeconstruction.com"
                  >
                    info@texashomeconstruction.com
                  </a>
                </div>
              </address>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-xl shadow-sm">
              <iframe
                title="Texas Home Construction location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221938.64!2d-95.6349715!3d29.8168371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Texas Home Construction location in Houston, TX"
              />
            </div>

            {/* Booking widget */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3
                className="mb-4 text-xl font-semibold"
                style={{ color: '#1e2330' }}
              >
                Schedule a Consultation
              </h3>
              <BookingWidget fallback={<BookingFallback />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
