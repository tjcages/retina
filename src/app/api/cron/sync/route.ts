import { syncEvents } from "@/lib/sync";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // if (request.headers.get("Authorization") !== `Bearer ${envServer.CRON_SECRET}`) {
  //   return new Response("Unauthorized", { status: 401 });
  // }

  try {
    const result = await syncEvents();
    // Revalidate the leaderboard page after sync
    revalidatePath("/");
    return Response.json(result);
  } catch (error) {
    console.error("Cron job failed:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
