import { seo } from "@/seo";
import type { Metadata } from "next";

import { Community, Details, Features, Hero, Roadmap, Volume } from "@/components/home";
import { Builder, EmailSignup, Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Header />
      <Hero />
      <Features />
      <Divider />
      <Volume />
      <Divider />
      <Details />
      <Divider />
      <Roadmap />
      <Divider />
      <Community />
      <Divider />
      <Builder />
      <Divider variant="secondary" />
      <Footer />
      <EmailSignup />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
