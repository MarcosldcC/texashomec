import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Terms of Service | Texas Home Construction',
  description: 'Review the terms and conditions governing your use of the Texas Home Construction website and services.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsPage() {
  return (
    <>
      <section className="w-full bg-primary py-16 px-4" aria-labelledby="terms-page-heading">
        <div className="max-w-3xl mx-auto">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto text-center mt-4">
          <h1 id="terms-page-heading" className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-lg text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="font-body text-base text-gray-700 leading-relaxed mb-10">
          Please read these Terms of Service carefully before using the Texas Home Construction website. By accessing or using the site, you agree to be bound by these Terms.
        </p>

        {[
          { title: '1. Use of the Site', content: 'You may use this site for lawful purposes only. We reserve the right to terminate your access for any violation of these Terms at our sole discretion and without notice.' },
          { title: '2. Intellectual Property', content: 'The site and its entire contents are owned by Texas Home Construction and protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce or distribute any material without our prior written consent.' },
          { title: '3. Disclaimer of Warranties', content: 'THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.' },
          { title: '4. Limitation of Liability', content: 'TO THE FULLEST EXTENT PROVIDED BY LAW, TEXAS HOME CONSTRUCTION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SITE.' },
          { title: '5. Governing Law', content: 'All matters relating to the site and these Terms shall be governed by the internal laws of the State of Texas. Any legal proceedings shall be instituted in the courts of Travis County, Texas.' },
          { title: '6. Changes to These Terms', content: 'We may revise these Terms at our sole discretion. All changes are effective immediately when posted. Your continued use of the site means you accept the changes.' },
        ].map(({ title, content }) => (
          <article key={title} className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">{title}</h2>
            <p className="font-body text-base text-gray-700 leading-relaxed">{content}</p>
          </article>
        ))}

        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">Questions about these Terms should be sent to:</p>
          <address className="font-body text-base text-gray-700 leading-relaxed not-italic">
            <strong>Texas Home Construction</strong><br />
            123 Construction Blvd, Houston, TX 77001<br />
            Phone: (555) 000-0000<br />
            Email: <a href="mailto:legal@texashomeconstruction.com" className="text-accent underline hover:text-orange-600">legal@texashomeconstruction.com</a>
          </address>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-primary text-white font-heading font-semibold text-base rounded hover:opacity-90 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
