'use client';

interface BookingWidgetProps {
  fallback?: React.ReactNode;
}

/**
 * BookingWidget — inline Calendly/Cal.com embed.
 * Replace the placeholder iframe src with your actual embed URL.
 */
export default function BookingWidget({ fallback }: BookingWidgetProps) {
  // TODO: Replace with real Calendly/Cal.com embed URL (Task 4.6)
  const embedUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? '';

  if (!embedUrl) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg" style={{ minHeight: 600 }}>
      <iframe
        src={embedUrl}
        title="Schedule a consultation"
        width="100%"
        height="600"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        aria-label="Booking calendar — select a date and time for your consultation"
      />
    </div>
  );
}
