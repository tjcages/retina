import { Canvas } from "@/components/canvas";
import { LogoOnly } from "@/components/home";

export default async function HomePage() {
  return (
    <>
      <section className="h-screen">
        <Canvas />
        <LogoOnly />
      </section>
    </>
  );
}
