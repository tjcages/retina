import { seo } from "@/seo";
import type { Metadata } from "next";

import { Color, Concept, Faqs, Guidelines, Hero, Logo, Typography } from "@/components/brand";
import { EmailSignup, Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
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
      <Guidelines />
      <Divider variant="tertiary" />
      <Faqs />
      <Divider variant="secondary" />
      <Footer />
      <EmailSignup />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
