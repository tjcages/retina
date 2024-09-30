import { EmailSignup } from "@/components/shared";
import { Button, Icon } from "@/components/ui";

const _ = () => {
  return (
    <section className="flex snap-start items-center border-b border-pink-secondary pb-16 pt-32 md:min-h-[50vh] md:py-24">
      <article className="gap-10 text-white">
        <h1 className="text-pink col-span-full row-start-1">
          Unichain
          <br />
          <strong>Brand Kit</strong>
        </h1>
        <Button>
          Download Brand Kit
          <Icon icon="ArrowDown" className="ml-2 h-5 w-5 text-inherit" />
        </Button>
      </article>
      <EmailSignup />
    </section>
  );
};

export default _;
