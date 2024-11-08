import { PrismaClient } from "@prisma/client";

import { envServer } from "./_server";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (envServer.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
