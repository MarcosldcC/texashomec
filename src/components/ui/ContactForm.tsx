'use client';

import { useState, useCallback } from 'react';
import type { ContactFormPayload } from '@/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIMEOUT_MS = 10_000;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type FormFields = keyof ContactFormPayload;

function validate(values: ContactFormPayload): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormPayload>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormFields, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Re-validate field if already touched
      if (touched[name as FormFields]) {
        const updated = { ...values, [name]: value };
        const fieldError = validate(updated)[name as FormFields];
        setErrors((prev) => ({ ...prev, [name]: fieldError }));
      }
    },
    [values, touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const fieldError = validate(values)[name as FormFields];
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Mark all fields as touched
      setTouched({ name: true, email: true, phone: true, message: true });
      const allErrors = validate(values);
      setErrors(allErrors);
      if (Object.keys(allErrors).length > 0) return;

      setStatus('submitting');
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch {
        clearTimeout(timer);
        setStatus('error');
      }
    },
    [values]
  );

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-lg bg-green-50 border border-green-300 p-6 text-center"
      >
        <p className="text-lg font-semibold text-green-800">
          Thank you! Your message has been sent.
        </p>
        <p className="mt-2 text-green-700">
          We&apos;ll be in touch with you shortly.
        </p>
      </div>
    );
  }

  const fields: {
    id: FormFields;
    label: string;
    type?: string;
    autoComplete?: string;
    multiline?: boolean;
  }[] = [
    { id: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { id: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
    { id: 'message', label: 'Message', multiline: true },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {status === 'error' && (
        <div role="alert" className="mb-4 rounded-md bg-red-50 border border-red-300 p-4 text-red-800 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className="space-y-5">
        {fields.map(({ id, label, type, autoComplete, multiline }) => {
          const errorId = `${id}-error`;
          const hasError = touched[id] && !!errors[id];
          return (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium mb-1"
                style={{ color: '#1e2330' }}
              >
                {label}
                <span className="text-red-600 ml-1" aria-hidden="true">*</span>
              </label>

              {multiline ? (
                <textarea
                  id={id}
                  name={id}
                  rows={5}
                  value={values[id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={hasError ? 'true' : 'false'}
                  aria-describedby={hasError ? errorId : undefined}
                  className={`w-full rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-vertical min-h-[44px] ${
                    hasError
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-orange-400'
                  }`}
                />
              ) : (
                <input
                  id={id}
                  name={id}
                  type={type}
                  autoComplete={autoComplete}
                  value={values[id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-required="true"
                  aria-invalid={hasError ? 'true' : 'false'}
                  aria-describedby={hasError ? errorId : undefined}
                  className={`w-full rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                    hasError
                      ? 'border-red-500 focus:ring-red-400'
                      : 'border-gray-300 focus:ring-orange-400'
                  }`}
                />
              )}

              {hasError && (
                <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
                  {errors[id]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60 min-h-[44px]"
        style={{ backgroundColor: '#FFA500' }}
        aria-label="Send message"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
