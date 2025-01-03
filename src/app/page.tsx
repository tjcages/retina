import { Canvas } from "@/components/canvas";
import { ActionBar, Controls } from "@/components/controls";
import { Layout } from "@/components/shared";

export default async function _() {
  return (
    <section className="h-screen">
      <Layout>
        <Canvas />
        <Controls />
      </Layout>
      <ActionBar />
    </section>
  );
}
