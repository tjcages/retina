import { ArrowUpRight, NoteText } from "@/assets/icons";

interface Props {
  header: string;
  description: string;
}

const Item: React.FC<Props> = ({ header, description }) => {
  return (
    <div className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-between gap-3 overflow-hidden rounded-3xl bg-secondary p-4 text-primary transition-colors duration-300 ease-in-out hover:bg-[#F50DB4] hover:text-white md:p-6 lg:max-w-[300px]">
      <div className="mb-6 flex w-full items-center justify-between gap-3">
        <NoteText className="h-5 w-5 text-inherit" />
        <ArrowUpRight className="h-5 w-5 text-inherit" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3>{header}</h3>
        <h5 className="text-base leading-none opacity-50 md:text-xl">{description}</h5>
      </div>
    </div>
  );
};

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-6">
        <div className="col-span-full">
          <h2 className="text-center">
            Start <strong>building on</strong> Unichain
          </h2>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <div className="col-span-full grid grid-cols-2 items-center justify-items-center gap-3 lg:gap-6">
            <Item
              header="Developer Docs"
              description="Resources to get started building on Unichain."
            />
            <Item
              header="Support"
              description="Have questions or need support along the way? Join the Discord."
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
