'use client';

import type { SimpleWaitlistFormData } from '@/validations/WaitlistValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SimpleWaitlistValidation } from '@/validations/WaitlistValidation';

export const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SimpleWaitlistFormData>({
    resolver: zodResolver(SimpleWaitlistValidation),
  });

  const onSubmit = async (data: SimpleWaitlistFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          isVrOwner: false,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setIsSuccess(true);
      setWaitlistPosition(result.position);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Oxanium, monospace' }}>
          Welcome to the future
        </h3>
        <p className="text-gray-400" style={{ fontFamily: 'Oxanium, monospace' }}>
          You're on the waitlist
        </p>
        {waitlistPosition && (
          <p className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-2 inline-block" style={{ fontFamily: 'Oxanium, monospace' }}>
            Position #
            {waitlistPosition}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-3">
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all duration-200 text-white placeholder-gray-400"
            placeholder="Enter your email address"
            style={{ fontFamily: 'Oxanium, monospace' }}
          />
          {errors.email && (
            <p className="text-sm text-red-400" style={{ fontFamily: 'Oxanium, monospace' }}>{errors.email.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
            <p className="text-sm text-red-400" style={{ fontFamily: 'Oxanium, monospace' }}>{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-400 hover:bg-green-300 text-black font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          style={{ fontFamily: 'Oxanium, monospace' }}
        >
          {isSubmitting
            ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  JOINING...
                </span>
              )
            : (
                'JOIN THE WAITLIST'
              )}
        </button>
      </form>
    </div>
  );
};
