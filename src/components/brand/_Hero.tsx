import { Background, Button, Icon } from "@/components/ui";

const _ = () => {
  return (
    <>
      <Background variant="secondary" />
      <section className="flex items-center border-b border-pink-secondary bg-transparent py-16 md:min-h-[50vh] md:py-24">
        <article className="gap-10 text-white">
          <h1 className="text-pink col-span-full">
            Unichain
            <br />
            <strong>Brand Kit</strong>
          </h1>
          <div className="col-span-full">
            <Button>
              Download Brand Kit
              <Icon icon="ArrowDown" className="ml-2 h-5 w-5 text-inherit" />
            </Button>
          </div>
        </article>
      </section>
    </>
  );
};

export default _;
