import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormPayload } from '@/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): body is ContactFormPayload {
  if (!body || typeof body !== 'object') return false;
  const { name, email, phone, message } = body as Record<string, unknown>;
  if (typeof name !== 'string' || name.trim() === '') return false;
  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) return false;
  if (typeof phone !== 'string' || phone.trim() === '') return false;
  if (typeof message !== 'string' || message.trim() === '') return false;
  return true;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  if (!validatePayload(body)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.warn('FORMSPREE_ENDPOINT is not set — skipping form submission (development mode)');
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
