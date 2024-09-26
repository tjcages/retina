import { ArrowUpRight, NoteText } from "@/assets/icons";

interface Props {
  header: string;
  description: string;
}

const Item: React.FC<Props> = ({ header, description }) => {
  return (
    <div className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-start gap-3 overflow-hidden rounded-3xl bg-secondary p-4 text-primary transition-colors duration-300 ease-in-out hover:bg-[#F50DB4] hover:text-white md:p-6 lg:max-w-[300px]">
      <div className="mb-6 flex w-full items-center justify-between gap-3">
        <NoteText className="h-5 w-5 text-inherit" />
        <ArrowUpRight className="h-5 w-5 text-inherit" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3>{header}</h3>
        <p className="text-pretty text-base !leading-none text-inherit opacity-50 md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

const items = [
  {
    header: "Host a Meetup",
    description: "Sign up to host an event for the Unichain community."
  },
  {
    header: "Events Calendar",
    description: "Come join our team IRL."
  },
  {
    header: "UniDay",
    description:
      "You’re invited to a global celebration of the Uniswap builder community. Apply for Uniday Devcon."
  }
];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Join the Community</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">04</small>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 lg:grid-cols-4 lg:gap-6">
            {items.map((item, index) => (
              <Item key={index} header={item.header} description={item.description} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
