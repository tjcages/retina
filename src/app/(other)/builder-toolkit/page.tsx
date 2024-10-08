import { seo } from "@/seo";
import type { Metadata } from "next";

import { Discover, Email, Fund, Hero, Start } from "@/components/builder";
import { EmailSignup, Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Header variant="secondary" />
      <Hero />
      <Start />
      <Divider variant="tertiary" />
      <Fund />
      <Divider variant="tertiary" />
      <Discover />
      <Divider />
      <Email />
      <Divider variant="secondary" />
      <Footer />
      <EmailSignup />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
