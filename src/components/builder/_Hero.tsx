import { EmailSignup } from "@/components/shared";

const _ = () => {
  return (
    <section className="flex snap-start items-center border-b border-pink-secondary pb-16 pt-32 md:min-h-[50vh] md:py-24">
      <article className="gap-12 text-white">
        <h1 className="text-pink col-span-full row-start-1 md:col-[1_/_span_16]">
          <strong>Builder</strong>
          <br />
          Toolkit
        </h1>
      </article>
      <EmailSignup />
    </section>
  );
};

export default _;
