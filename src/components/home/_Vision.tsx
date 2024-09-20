import { Button } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="justify-center gap-12">
        <div className="col-span-full flex flex-col items-center justify-center gap-3 text-center">
          <h3>Our vision</h3>
          <h1 className="text-pink">Every market. Onchain.</h1>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <Button size="lg">Learn more</Button>
        </div>
      </article>
    </section>
  );
};

export default _;
