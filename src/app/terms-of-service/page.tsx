import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Texas Home Construction',
  description:
    'Review the terms and conditions governing your use of the Texas Home Construction website and services.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="w-full bg-primary py-20 px-4 text-center"
        aria-labelledby="terms-page-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h1
            id="terms-page-heading"
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Terms of Service
          </h1>
          <p className="font-body text-lg text-gray-300 leading-relaxed">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="font-body text-base text-gray-700 leading-relaxed mb-10">
          Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Texas
          Home Construction website operated by Texas Home Construction (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By accessing or using the site, you agree to be
          bound by these Terms. If you do not agree to all the terms and conditions, you may not
          access or use the site.
        </p>

        {/* Section 1 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            1. Use of the Site
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            You may use this site for lawful purposes only. You agree not to use the site:
          </p>
          <ul className="font-body text-base text-gray-700 leading-relaxed list-disc list-inside space-y-2 mb-4">
            <li>
              In any way that violates any applicable federal, state, local, or international law
              or regulation.
            </li>
            <li>
              To transmit, or procure the sending of, any unsolicited or unauthorized advertising
              or promotional material.
            </li>
            <li>
              To impersonate or attempt to impersonate Texas Home Construction, a company
              employee, another user, or any other person or entity.
            </li>
            <li>
              To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment
              of the site, or which may harm Texas Home Construction or users of the site.
            </li>
          </ul>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            We reserve the right to terminate your access to the site for any violation of these
            Terms, at our sole discretion and without notice.
          </p>
        </article>

        {/* Section 2 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            2. Intellectual Property
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            The site and its entire contents, features, and functionality — including but not
            limited to all information, software, text, displays, images, video, and audio, and
            the design, selection, and arrangement thereof — are owned by Texas Home Construction,
            its licensors, or other providers of such material and are protected by United States
            and international copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </p>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            You may not reproduce, distribute, modify, create derivative works of, publicly
            display, publicly perform, republish, download, store, or transmit any of the material
            on our site without our prior written consent.
          </p>
        </article>

        {/* Section 3 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            3. Disclaimer of Warranties
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS,
            WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER TEXAS HOME
            CONSTRUCTION NOR ANY PERSON ASSOCIATED WITH TEXAS HOME CONSTRUCTION MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY,
            QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE.
          </p>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            The foregoing does not affect any warranties that cannot be excluded or limited under
            applicable law. We do not warrant that the site will be uninterrupted, error-free, or
            free of viruses or other harmful components.
          </p>
        </article>

        {/* Section 4 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            4. Limitation of Liability
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL TEXAS HOME CONSTRUCTION, ITS
            AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR
            DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF
            OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED
            TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT,
            INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            The foregoing does not affect any liability that cannot be excluded or limited under
            applicable law. Some jurisdictions do not allow the exclusion or limitation of
            incidental or consequential damages, so the above limitation or exclusion may not
            apply to you.
          </p>
        </article>

        {/* Section 5 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            5. Governing Law
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            All matters relating to the site and these Terms, and any dispute or claim arising
            therefrom or related thereto, shall be governed by and construed in accordance with
            the internal laws of the State of Texas without giving effect to any choice or
            conflict of law provision or rule.
          </p>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            Any legal suit, action, or proceeding arising out of, or related to, these Terms or
            the site shall be instituted exclusively in the federal courts of the United States or
            the courts of the State of Texas, in each case located in Travis County. You waive
            any and all objections to the exercise of jurisdiction over you by such courts and to
            venue in such courts.
          </p>
        </article>

        {/* Section 6 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            6. Changes to These Terms
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed">
            We may revise and update these Terms from time to time at our sole discretion. All
            changes are effective immediately when we post them. Your continued use of the site
            following the posting of revised Terms means that you accept and agree to the changes.
            You are expected to check this page periodically so you are aware of any changes, as
            they are binding on you.
          </p>
        </article>

        {/* Section 7 */}
        <article className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">
            7. Contact Us
          </h2>
          <p className="font-body text-base text-gray-700 leading-relaxed mb-4">
            Questions about these Terms of Service should be sent to us at:
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
              href="mailto:legal@texashomeconstruction.com"
              className="text-accent underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              legal@texashomeconstruction.com
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
