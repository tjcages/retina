import { ArrowUpRight, NoteText } from "@/assets/icons";

import { Button } from "@/components/ui";

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
        <p className="text-base !leading-none text-inherit opacity-50 md:text-xl">{description}</p>
      </div>
    </div>
  );
};

const items = [
  {
    header: "Launch a token",
    description: "Example token implementation."
  },
  {
    header: "Deploy an app",
    description: "Sample app to help kickstart your development process."
  },
  {
    header: "Create a pool",
    description: "Resources for creating pools on Unichain."
  },
  {
    header: "Developer docs",
    description: "Resources to get started building on Unichain."
  }
  // {
  //   header: "Support for devs",
  //   description: "Have questions or need help building? Join the Discord."
  // }
];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-6 md:gap-12">
        <div className="col-span-full">
          <h2>
            Start <strong>building on</strong> Unichain
          </h2>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <div className="col-span-full grid grid-cols-4 items-center justify-items-center gap-3 lg:gap-6">
            {items.map((item, index) => (
              <Item key={index} header={item.header} description={item.description} />
            ))}
          </div>
        </div>
        <div className="col-span-full">
          <Button variant="outline" className="-ml-5 -mt-5">
            Join the community building on Unichain
            <ArrowUpRight className="h-5 w-5 text-inherit" />
          </Button>
        </div>
      </article>
    </section>
  );
};

export default _;
