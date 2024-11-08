import prisma from "@/lib/db";

export async function GET() {
  try {
    const [syncState, eventCount] = await Promise.all([
      prisma.syncState.findUnique({
        where: { id: "current" }
      }),
      prisma.event.count()
    ]);

    return Response.json({
      lastSyncedBlock: syncState?.lastBlock.toString(),
      lastSyncTime: syncState?.lastSyncTime,
      totalEvents: eventCount
    });
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
