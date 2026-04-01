import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Texas Home Construction',
  description: 'Learn how Texas Home Construction collects, uses, and protects your personal information. Read our full privacy policy.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="w-full bg-primary py-16 px-4" aria-labelledby="privacy-page-heading">
        <div className="max-w-3xl mx-auto">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto text-center mt-4">
          <h1 id="privacy-page-heading" className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-lg text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="font-body text-base text-gray-700 leading-relaxed mb-10">
          Texas Home Construction is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for services.
        </p>

        {[
          { title: '1. Information We Collect', content: 'When you fill out our contact form or book a consultation, we collect personally identifiable information such as your name, email address, phone number, and message content. Our servers may also automatically log standard data including your IP address, browser type, and pages viewed.' },
          { title: '2. Cookies and Tracking Technologies', content: 'We may use cookies and similar tracking technologies to help customize the site and improve your experience. You can instruct your browser to refuse all cookies, however some portions of the site may not function properly without them.' },
          { title: '3. Disclosure to Third Parties', content: 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted service providers who assist us in operating our website, subject to confidentiality agreements, or when required by law.' },
          { title: '4. Data Security', content: 'We implement security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.' },
        ].map(({ title, content }) => (
          <article key={title} className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">{title}</h2>
            <p className="font-body text-base text-gray-700 leading-relaxed">{content}</p>
          </article>
        ))}

        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
          <address className="font-body text-base text-gray-700 leading-relaxed not-italic">
            <strong>Texas Home Construction</strong><br />
            123 Construction Blvd, Houston, TX 77001<br />
            Phone: (555) 000-0000<br />
            Email: <a href="mailto:privacy@texashomeconstruction.com" className="text-accent underline hover:text-orange-600">privacy@texashomeconstruction.com</a>
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
