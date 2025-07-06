import { z } from 'zod/v4';

export const WaitlistValidation = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  isVrOwner: z.boolean().default(false),
  vrHeadset: z.string().optional(),
  referralCode: z.string().optional(),
});

export const SimpleWaitlistValidation = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type WaitlistFormData = z.infer<typeof WaitlistValidation>;
export type SimpleWaitlistFormData = z.infer<typeof SimpleWaitlistValidation>;
