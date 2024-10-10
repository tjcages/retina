/* eslint-disable no-process-env */
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_DOCS_URL: z.string(),
  NEXT_PUBLIC_HUBSPOT_ID: z.string(),
  NEXT_PUBLIC_HUBSPOT_FORM_ID: z.string()
});

export const envClient = envSchema.parse({
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
  NEXT_PUBLIC_HUBSPOT_ID: process.env.NEXT_PUBLIC_HUBSPOT_ID,
  NEXT_PUBLIC_HUBSPOT_FORM_ID: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
});
