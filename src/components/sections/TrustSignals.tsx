import React from 'react';

interface TrustSignal {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
  logo: React.ReactNode;
}

const trustSignals: TrustSignal[] = [
  {
    id: 'bbb',
    name: 'BBB Accredited Business',
    href: 'https://www.bbb.org',
    ariaLabel: 'BBB Accredited Business — opens in a new tab',
    logo: (
      <svg
        viewBox="0 0 80 40"
        aria-hidden="true"
        className="h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="40" rx="4" fill="#003f87" />
        <text
          x="40"
          y="15"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          BBB
        </text>
        <text
          x="40"
          y="26"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          ACCREDITED
        </text>
        <text
          x="40"
          y="35"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          BUSINESS
        </text>
      </svg>
    ),
  },
  {
    id: 'lba',
    name: 'Local Builders Association',
    href: 'https://www.nahb.org',
    ariaLabel: 'Local Builders Association member — opens in a new tab',
    logo: (
      <svg
        viewBox="0 0 120 40"
        aria-hidden="true"
        className="h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="40" rx="4" fill="#1e2330" />
        {/* House icon */}
        <polygon points="20,28 20,18 28,12 36,18 36,28" fill="#FFA500" />
        <rect x="24" y="22" width="8" height="6" fill="#1e2330" />
        {/* Text */}
        <text
          x="68"
          y="17"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="7"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          LOCAL BUILDERS
        </text>
        <text
          x="68"
          y="28"
          textAnchor="middle"
          fill="#FFA500"
          fontSize="7"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          ASSOCIATION
        </text>
      </svg>
    ),
  },
  {
    id: 'licensed',
    name: 'Texas Licensed Contractor',
    href: 'https://www.tdlr.texas.gov',
    ariaLabel: 'Texas Licensed Contractor — opens in a new tab',
    logo: (
      <svg
        viewBox="0 0 110 40"
        aria-hidden="true"
        className="h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="110" height="40" rx="4" fill="#bf0a30" />
        <text
          x="55"
          y="15"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="7"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          TEXAS LICENSED
        </text>
        <text
          x="55"
          y="26"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="7"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
        >
          CONTRACTOR
        </text>
        <text
          x="55"
          y="36"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="6"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          TDLR Verified
        </text>
      </svg>
    ),
  },
];

export default function TrustSignals() {
  return (
    <section
      aria-label="Certifications and affiliations"
      className="w-full bg-gray-50 border-y border-gray-200 py-6 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm font-body text-gray-brand uppercase tracking-widest">
          Trusted &amp; Certified
        </p>
        <ul
          className="flex flex-wrap justify-center items-center gap-6 list-none m-0 p-0"
          role="list"
        >
          {trustSignals.map((signal) => (
            <li key={signal.id}>
              <a
                href={signal.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={signal.ariaLabel}
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                {signal.logo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
