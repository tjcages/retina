import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Unichain ambassadors",
    description: "Join and steward our developer community.",
    icon: "Ranking",
    href: "https://share.hsforms.com/1Q8dDENc5SJi5OyHOa18ZJgsdca9"
  }
  // {
  //   header: "Builder channel",
  //   description: "Share your project with the community on Farcaster.",
  //   icon: "Farcaster",
  //   href: "https://warpcast.com/~/channel/unichain"
  // }
];

const _ = () => {
  return (
    <section className="py-12 md:py-16">
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
                href={item.href}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
