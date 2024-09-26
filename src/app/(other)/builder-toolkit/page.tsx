import { seo } from "@/seo";
import type { Metadata } from "next";

import { Community, Discover, Fund, Hero, Start } from "@/components/builder";
import { Footer, Header, Vision } from "@/components/shared";
import { Background, Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Background variant="secondary" />
      <Header variant="secondary" />
      <Hero />
      <Start />
      <Divider variant="secondary" />
      <Fund />
      <Divider variant="secondary" />
      <Discover />
      <Divider variant="secondary" />
      <Community />
      <Divider />
      <Vision />
      <Divider variant="secondary" />
      <Footer />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
