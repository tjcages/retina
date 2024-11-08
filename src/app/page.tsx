import { computeLeaderboard } from "@/lib/compute-leaderboard";
import { seo } from "@/seo";
import type { Metadata } from "next";
import { Suspense } from "react";

import { Canvas } from "@/components/canvas";
import { Hero, Leaderboard } from "@/components/home";
import { LeaderboardContainer } from "@/components/home/_Leaderboard";
import { Footer, Header, Rules } from "@/components/shared";
import { Scroll } from "@/components/ui";

export const revalidate = 240; // 4 minutes

const LeaderboardServer = async () => {
  const leaders = await computeLeaderboard();
  return <Leaderboard leaders={leaders} />;
};

export default async function HomePage() {
  return (
    <>
      <Scroll className="relative h-full w-full">
        <Header variant="secondary" />
        <section>
          <Canvas />
          <Hero />
          <Suspense fallback={<LeaderboardContainer />}>
            <LeaderboardServer />
          </Suspense>
        </section>
        <Footer />
      </Scroll>
      <Rules />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
