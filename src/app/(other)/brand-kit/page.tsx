import { seo } from "@/seo";
import type { Metadata } from "next";

import { Color, Concept, Hero, Logo, Typography } from "@/components/brand";
import { Footer, Header } from "@/components/shared";
import { Background, Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Background variant="secondary" />
      <Header variant="secondary" />
      <Hero />
      <Logo />
      <Divider variant="tertiary" />
      <Typography />
      <Divider variant="tertiary" />
      <Color />
      <Divider variant="tertiary" />
      <Concept />
      <Divider variant="tertiary" />
      <Footer />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
