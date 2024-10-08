import { Background } from "@/components/ui";

const _ = () => {
  return (
    <>
      <section className="flex items-center bg-transparent pt-16 md:min-h-[40vh] md:py-24 md:pb-8">
        <Background variant="secondary" className="absolute -top-20 gradient-mask-b-0" />
        <article className="gap-12 text-white">
          <h1 className="text-pink col-span-full row-start-1 md:col-[1_/_span_16]">
            <strong>Bridge</strong> to
            <br />
            Unichain Testnet
          </h1>
        </article>
      </section>
    </>
  );
};

export default _;
