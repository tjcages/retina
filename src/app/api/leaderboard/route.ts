import { computeLeaderboard } from "@/lib/compute-leaderboard";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Compute new leaderboard
    await computeLeaderboard();

    // Revalidate the leaderboard page
    revalidatePath("/");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update leaderboard:", error);
    return NextResponse.json({ error: "Failed to update leaderboard" }, { status: 500 });
  }
}
