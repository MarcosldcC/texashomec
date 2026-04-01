import { NextRequest, NextResponse } from 'next/server';
import type { NewsletterPayload } from '@/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): body is NewsletterPayload {
  if (!body || typeof body !== 'object') return false;
  const { email } = body as Record<string, unknown>;
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) return false;
  return true;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  if (!validatePayload(body)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const endpoint = process.env.NEWSLETTER_API_ENDPOINT;
  if (!endpoint) {
    console.warn('NEWSLETTER_API_ENDPOINT is not set — skipping subscription (development mode)');
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
