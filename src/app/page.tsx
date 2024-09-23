import { seo } from "@/seo";
import type { Metadata } from "next";

import {
  Builder,
  Community,
  Details,
  Features,
  Footer,
  Header,
  Hero,
  Roadmap,
  Vision,
  Volume
} from "@/components/home";
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
      {/* <Video />
      <Divider /> */}
      <Vision />
      <Divider variant="secondary" />
      <Footer />
    </Scroll>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return seo;
}
