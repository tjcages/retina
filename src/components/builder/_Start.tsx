import { Icon, type Icons } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  icon: Icons;
}

const Item: React.FC<Props> = ({ header, description, icon }) => {
  return (
    <div className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-start gap-3 overflow-hidden rounded-3xl bg-secondary p-4 text-primary transition-colors duration-300 ease-in-out hover:bg-[#F50DB4] hover:text-white md:p-6 lg:max-w-[300px]">
      <div className="mb-6 flex w-full items-center justify-between gap-3">
        <Icon icon={icon} className="h-5 w-5 text-inherit" />
        <Icon icon="ArrowUpRight" className="h-5 w-5 text-inherit" />
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
    header: "Developer docs",
    description: "Explore Unichain documentation, resources and tutorials.",
    icon: "NoteText"
  },
  {
    header: "Office Hours",
    description: "Join weekly sessions with our team to ask questions live.",
    icon: "QuestionSquare"
  },
  {
    header: "Support",
    description:
      "If you have questions or need support along the way, reach out to our team in Discord.",
    icon: "MessagesText"
  }
] as Props[];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Get Started</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">01</small>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 lg:grid-cols-4 lg:gap-6">
            {items.map((item, index) => (
              <Item
                key={index}
                header={item.header}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
