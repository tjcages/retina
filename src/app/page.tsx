import { seo } from "@/seo";
import type { Metadata } from "next";

import { Canvas } from "@/components/canvas";
import { Hero, Leaderboard } from "@/components/home";
import { Footer, Header, Rules } from "@/components/shared";
import { Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <>
      <Scroll className="relative h-full w-full">
        <Header variant="secondary" />
        <section>
          <Canvas />
          <Hero />
          <Leaderboard />
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
