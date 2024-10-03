import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Host a meetup",
    description: "Sign up to host an event for the Unichain community.",
    icon: "UsersGroup"
  },
  {
    header: "Events calendar",
    description: "Come join our team IRL.",
    icon: "Calendar"
  },
  {
    header: "UniDay",
    description:
      "You’re invited to a global celebration of the Uniswap builder community. Apply for Uniday Devcon.",
    icon: "LaptopCode"
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
              <ActionItem
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
