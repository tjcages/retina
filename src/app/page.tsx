import { computeLeaderboard } from "@/lib/compute-leaderboard";
import { seo } from "@/seo";
import type { Metadata } from "next";

import { Canvas } from "@/components/canvas";
import { Hero, Leaderboard } from "@/components/home";
import { Footer, Header, Rules } from "@/components/shared";
import { Scroll } from "@/components/ui";

export const revalidate = 300; // 5 minutes

export default async function HomePage() {
  const leaders = await computeLeaderboard();

  return (
    <>
      <Scroll className="relative h-full w-full">
        <Header variant="secondary" />
        <section>
          <Canvas />
          <Hero />
          <Leaderboard leaders={leaders} />
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
