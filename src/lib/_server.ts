/* eslint-disable no-process-env */
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string(),
  POSTGRES_PRISMA_URL: z.string(),
  POSTGRES_URL_NON_POOLING: z.string(),
  RPC_URL: z.string(),
  CONTRACT_ADDRESS: z.string(),
  CRON_SECRET: z.string()
});

export const envServer = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  RPC_URL: process.env.RPC_URL,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  CRON_SECRET: process.env.CRON_SECRET
});
