import { useState } from 'react';
import { sendContactMessage } from '../services/contact.service';
import type { ContactFormData } from '../types/contact.types';

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submitContact = async (data: ContactFormData) => {
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await sendContactMessage(data);

      setSuccess(response.message);

      return true;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Failed to send message';

      setError(message);

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitContact,
    isLoading,
    error,
    success,
  };
}