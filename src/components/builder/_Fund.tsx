import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Unichain Builder Open Call",
    description: "Bring your project to life with support from the Uniswap Foundation.",
    icon: "Tool"
  },
  {
    header: "Unichain Spark Grants",
    description: "Nominate impactful Unichain projects for funding.",
    icon: "DollarSquare"
  },
  {
    header: "Universal Hackathon",
    description:
      "Enter your hackathon project into our ongoing competition, with bi-weekly rewards.",
    icon: "TrophyStar"
  },
  {},
  {
    header: "Unigames",
    description: "Compete with the best builders in crypto at 2025’s Unigames.",
    icon: "UsersGroup",
    comingSoon: true
  },
  {
    header: "Gas Subsidies",
    description: "Get reimbursed for gas spent through hooks.",
    icon: "LaptopCode",
    comingSoon: true
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
          <div className="grid grid-cols-2 grid-rows-[repeat(3,_1fr)] items-center justify-items-center gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(2,_1fr)] lg:gap-6">
            {items.map((item, index) => (
              <ActionItem
                key={index}
                header={item.header}
                description={item.description}
                icon={item.icon}
                href={item.href}
                comingSoon={item.comingSoon}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
