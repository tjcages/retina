import { seo } from "@/seo";
import type { Metadata } from "next";

import {
  Community,
  Details,
  Features,
  Footer,
  Header,
  Hero,
  Roadmap,
  Vision
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
      <Roadmap />
      <Divider />
      {/* <Video />
      <Divider /> */}
      {/* <Volume />
      <Divider /> */}
      <Details />
      <Divider />
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
