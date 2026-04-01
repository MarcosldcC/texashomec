import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Texas Home Construction',
  description:
    'Learn how Texas Home Construction collects, uses, and protects your personal information. Read our full privacy policy.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="w-full bg-primary py-20 px-4 text-center"
        aria-labelledby="privacy-page-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h1
            id="privacy-page-heading"
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Privacy Policy
          </h1>
          <p className="font-body text-lg text-gray-300 leading-relaxed">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="font-body text-base text-gray-700 leading-relaxed mb-10">
          Texas Home Construction (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
          to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website or contact us for services.
          Please read this policy carefully. If you disagree with its terms, please discontinue use
          of the site.
        </p>

        {/* Section 1 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            1. Information We Collect
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            We may collect information about you in a variety of ways. The information we may
            collect on the site includes:
          </p>
          <h3 className="font-heading text-lg font-semibold text-primary mb-2">
            Personal Data
          </h3>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            When you fill out our contact form or book a consultation, we collect personally
            identifiable information such as your name, email address, phone number, and any
            message content you provide. This information is used solely to respond to your
            inquiry or fulfill your service request.
          </p>
          <h3 className="font-heading text-lg font-semibold text-primary mb-2">
            Derivative Data
          </h3>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            Our servers may automatically log standard data when you visit the site, including
            your IP address, browser type, operating system, referring URLs, and pages viewed.
            This data is used for analytics and to improve site performance.
          </p>
        </article>

        {/* Section 2 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            2. Cookies and Tracking Technologies
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            We may use cookies, web beacons, pixel tags, and similar tracking technologies to
            help customize the site and improve your experience. When you access the site, your
            personal information is not collected through the use of tracking technology.
          </p>
          <h3 className="font-heading text-lg font-semibold text-primary mb-2">
            Types of Cookies We Use
          </h3>
          <ul className="font-body text-base text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for the site to function correctly,
              such as session management.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors interact with
              the site so we can improve it.
            </li>
            <li>
              <strong>Preference cookies:</strong> Remember your settings and preferences for
              future visits.
            </li>
          </ul>
          <p className="font-body text-base text-gray-700 leading-relaxed mt-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent. However, if you do not accept cookies, some portions of the site may not
            function properly.
          </p>
        </article>

        {/* Section 3 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            3. Disclosure to Third Parties
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personally identifiable information
            to outside parties except in the following circumstances:
          </p>
          <ul className="font-body text-base text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li>
              <strong>Service providers:</strong> We may share your information with trusted
              third-party vendors who assist us in operating our website, conducting our business,
              or servicing you (e.g., email delivery, scheduling platforms), provided those
              parties agree to keep this information confidential.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose your information when we
              believe release is appropriate to comply with the law, enforce our site policies,
              or protect ours or others&apos; rights, property, or safety.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger, acquisition, or
              sale of all or a portion of our assets, your information may be transferred as
              part of that transaction.
            </li>
          </ul>
          <p className="font-body text-base text-gray-700 leading-relaxed mt-4">
            Non-personally identifiable visitor information may be provided to other parties for
            marketing, advertising, or other uses.
          </p>
        </article>

        {/* Section 4 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            4. Data Security
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal
            information. Your personal information is contained behind secured networks and is
            only accessible by a limited number of persons who have special access rights to such
            systems and are required to keep the information confidential. However, no method of
            transmission over the Internet or method of electronic storage is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </article>

        {/* Section 5 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            5. Contact Us
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <address className="font-body text-base text-gray-700 leading-relaxed not-italic">
            <strong>Texas Home Construction</strong>
            <br />
            123 Builder&apos;s Way, Austin, TX 78701
            <br />
            Phone: (512) 555-0100
            <br />
            Email:{' '}
            <a
              href="mailto:privacy@texashomeconstruction.com"
              className="text-accent underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              privacy@texashomeconstruction.com
            </a>
          </address>
        </article>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-8 py-3 bg-primary text-white font-heading font-semibold text-base rounded hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
