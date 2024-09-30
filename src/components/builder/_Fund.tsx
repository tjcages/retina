import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Unichain Builder Fund",
    description:
      "Bring your project to life with resourcing and mentorship from the Uniswap community.",
    icon: "Tool"
  },
  {
    header: "Retro Grants",
    description:
      "Projects that have impacted the Unichain ecosystem are eligible for retro funding. Learn more.",
    icon: "DollarSquare"
  },
  {
    header: "Hackathons",
    description:
      "Participate in upcoming hackathon to win rewards, and rise up the Unichain leaderboard.",
    icon: "TrophyStar"
  }
];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Fund your Project</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">02</small>
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
