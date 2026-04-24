import { z } from 'zod';

export const consultantRegisterSchema = z.object({
  displayName: z.string().min(2).max(80),
  country: z.string().length(2),
  languages: z.array(z.string().min(2)).min(1),
  headline: z.string().max(120).optional(),
  about: z.string().max(2000).optional(),
  categories: z.array(z.string()).min(1),
  currency: z.string().default('USD'),
  hourlyRateCents: z.number().int().min(0).optional()
});
