'use client';

import type { WaitlistFormData } from '@/validations/WaitlistValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { WaitlistValidation } from '@/validations/WaitlistValidation';

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
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(WaitlistValidation),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
      <div className="max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Welcome to FEVR!
          </h3>
          <p className="text-green-700 mb-4">
            You're successfully added to our exclusive waitlist.
          </p>
          {waitlistPosition && (
            <p className="text-sm text-green-600">
              Your position: #
              {waitlistPosition}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            {...register('isVrOwner')}
            type="checkbox"
            id="isVrOwner"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="isVrOwner" className="text-sm font-medium text-gray-700">
            I own a VR headset
          </label>
        </div>

        <div>
          <label htmlFor="vrHeadset" className="block text-sm font-medium text-gray-700 mb-1">
            VR Headset (if applicable)
          </label>
          <select
            {...register('vrHeadset')}
            id="vrHeadset"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select your headset</option>
            <option value="Meta Quest 3">Meta Quest 3</option>
            <option value="Meta Quest 2">Meta Quest 2</option>
            <option value="Apple Vision Pro">Apple Vision Pro</option>
            <option value="PICO 4">PICO 4</option>
            <option value="HTC Vive">HTC Vive</option>
            <option value="Valve Index">Valve Index</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-1">
            Referral Code (optional)
          </label>
          <input
            {...register('referralCode')}
            type="text"
            id="referralCode"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter referral code"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
        </button>
      </form>
    </div>
  );
};
