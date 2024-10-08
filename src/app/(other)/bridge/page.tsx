import { seo } from "@/seo";
import type { Metadata } from "next";

import { Bridge, Faqs, Hero } from "@/components/bridge";
import { EmailSignup, Footer, Header } from "@/components/shared";
import { Divider, Scroll } from "@/components/ui";

export default async function HomePage() {
  return (
    <Scroll className="h-full w-full">
      <Header variant="secondary" />
      <Hero />
      <Bridge />
      <Divider />
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
