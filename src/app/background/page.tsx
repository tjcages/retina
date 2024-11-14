import { Canvas } from "@/components/canvas";

export default async function HomePage() {
  return (
    <>
      <section className="h-screen">
        <Canvas />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#fef4ff] from-10% to-30%" />
      </section>
    </>
  );
}
