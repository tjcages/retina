import { seo } from "@/seo";
import type { Metadata } from "next";

import { Builder, Community, Details, Features, Hero, Roadmap, Volume } from "@/components/home";
import { Footer, Header, Vision } from "@/components/shared";
import { Background, Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Background />
      <Header />
      <Hero />
      <Features />
      <Divider />
      <Volume />
      <Divider />
      <Community />
      <Divider />
      <Builder />
      <Divider />
      <Details />
      <Divider />
      <Roadmap />
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
