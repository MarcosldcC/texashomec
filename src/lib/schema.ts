export const LocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Texas Home Construction',
  description:
    'Reliable, quality construction services in Texas — residential, commercial, remodeling, and custom builds.',
  url: 'https://texashomeconstruction.com',
  telephone: '+1-555-000-0000',
  email: 'info@texashomeconstruction.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Construction Blvd',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77001',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7604,
    longitude: -95.3698,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/texashomeconstruction',
    'https://www.instagram.com/texashomeconstruction',
  ],
};
