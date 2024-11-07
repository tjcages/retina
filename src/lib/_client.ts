/* eslint-disable no-process-env */
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string().optional()
});

export const envClient = envSchema.parse({
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
});
