import type { Metadata } from 'next';
import './globals.css';
import LiveChat from '@/components/LiveChat';

export const metadata: Metadata = {
  title: {
    default: 'Texas Home Construction | Reliable Quality Construction Services',
    template: '%s | Texas Home Construction',
  },
  description:
    'Texas Home Construction offers residential, commercial, remodeling, and custom build services across Texas. Get a free quote today.',
  metadataBase: new URL(
    process.env.SITE_URL || 'https://texashomeconstruction.com'
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl mx-auto">
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
