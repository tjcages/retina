import { Background } from "@/components/ui";

const _ = () => {
  return (
    <>
      <Background variant="secondary" />
      <section className="flex items-center border-b border-pink-secondary bg-transparent pb-16 pt-32 md:min-h-[50vh] md:py-24">
        <article className="gap-12 text-white">
          <h1 className="text-pink col-span-full row-start-1 md:col-[1_/_span_16]">
            <strong>Builder</strong>
            <br />
            Toolkit
          </h1>
        </article>
      </section>
    </>
  );
};

export default _;
