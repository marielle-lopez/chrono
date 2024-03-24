import * as z from 'zod';

export const schema = z
  .object({
    name: z.string().min(1, { message: 'Must be at least 1 character long' }),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z
      .string()
      .min(1, { message: 'Must be at least 1 character long' }),
    label: z.string().min(1, { message: 'Must be at least 1 character long' }),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'End date must be after or the same as start date',
    path: ['endDate'],
  });
