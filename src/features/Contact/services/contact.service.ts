import type {
  ContactFormData,
  ContactResponse,
} from '../types/contact.types';

export async function sendContactMessage(
  data: ContactFormData
): Promise<ContactResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to send message');
  }

  return result;
}