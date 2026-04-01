import React from 'react';
import type { ServiceCard as ServiceCardType } from '@/types/index';

interface ServiceCardProps {
  service: ServiceCardType;
}

const icons: Record<string, React.ReactNode> = {
  residential: (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House icon */}
      <polygon points="24,6 4,22 8,22 8,42 20,42 20,30 28,30 28,42 40,42 40,22 44,22" fill="#FFA500" />
      <rect x="20" y="30" width="8" height="12" fill="#1e2330" />
    </svg>
  ),
  commercial: (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building icon */}
      <rect x="8" y="10" width="32" height="34" fill="#FFA500" />
      <rect x="12" y="14" width="6" height="6" fill="#1e2330" />
      <rect x="22" y="14" width="6" height="6" fill="#1e2330" />
      <rect x="30" y="14" width="6" height="6" fill="#1e2330" />
      <rect x="12" y="24" width="6" height="6" fill="#1e2330" />
      <rect x="22" y="24" width="6" height="6" fill="#1e2330" />
      <rect x="30" y="24" width="6" height="6" fill="#1e2330" />
      <rect x="18" y="34" width="12" height="10" fill="#1e2330" />
      <rect x="4" y="44" width="40" height="2" fill="#1e2330" />
    </svg>
  ),
  remodeling: (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tools / wrench icon */}
      <path
        d="M34 6a8 8 0 0 0-7.94 9.06L8 33a4 4 0 1 0 5.66 5.66l18.28-18.28A8 8 0 1 0 34 6zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        fill="#FFA500"
      />
      <circle cx="11" cy="36" r="2.5" fill="#1e2330" />
    </svg>
  ),
  custom: (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Star icon */}
      <polygon
        points="24,4 29,18 44,18 32,27 37,42 24,33 11,42 16,27 4,18 19,18"
        fill="#FFA500"
      />
    </svg>
  ),
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = icons[service.id] ?? icons['custom'];

  return (
    <article className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-primary"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-primary">{service.title}</h3>
      <p className="font-body text-sm text-gray-600 leading-relaxed">{service.description}</p>
    </article>
  );
}
