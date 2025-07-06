import { z } from 'zod/v4';

export const WaitlistValidation = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  isVrOwner: z.boolean().optional().default(false),
  vrHeadset: z.string().optional(),
  referralCode: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof WaitlistValidation>;
