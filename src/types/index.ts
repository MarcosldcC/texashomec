export interface PortfolioImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'remodeling' | 'custom';
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  photoSrc?: string;
  photoAlt?: string;
}

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
}
