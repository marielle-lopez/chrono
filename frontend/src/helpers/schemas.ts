import * as z from 'zod';

export const eventSchema = z
  .object({
    name: z.string().min(1, { message: 'Must be at least 1 character long' }),
    startedAt: z.coerce.date(),
    endedAt: z.coerce.date(),
    location: z
      .string()
      .min(1, { message: 'Must be at least 1 character long' }),
    labelId: z.coerce.number().int().gte(1),
  })
  .refine((data) => data.endedAt >= data.startedAt, {
    message: 'End date must be after or the same as start date',
    path: ['endDate'],
  });
