import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Community Leaderboard",
    description:
      "Set up your profile, level up your builder score, and connect with Unichain teams.",
    icon: "Ranking"
  },
  {
    header: "Builder Channel",
    description: "Share your project with the community through our builder channel on Discord.",
    icon: "DiscordStroke"
  }
];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Get Discovered</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">03</small>
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
