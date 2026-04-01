'use client';

import { useEffect } from 'react';

export default function LiveChat() {
  const propertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

  useEffect(() => {
    if (!propertyId || !widgetId) return;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    document.head.appendChild(s1);

    return () => {
      document.head.removeChild(s1);
    };
  }, [propertyId, widgetId]);

  if (!propertyId || !widgetId) return null;

  return null;
}
