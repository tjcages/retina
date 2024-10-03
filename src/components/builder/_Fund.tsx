import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Unichain builder open call",
    description: "Bring your project to life with support from the Uniswap Foundation.",
    icon: "Tool",
    href: "https://airtable.com/appx3c28q91Ii1iQs/pagCUSPfAVBKUEAK9"
  },
  {
    header: "Unichain retro grants",
    description: "Nominate impactful Unichain projects for funding.",
    icon: "DollarSquare",
    href: "https://airtable.com/appx3c28q91Ii1iQs/pagqdZpJLh0HXT1vI"
  },
  {
    header: "Unichain infinite hackathon",
    description:
      "Enter your hackathon project into our ongoing competition, with bi-weekly rewards.",
    icon: "TrophyStar",
    href: "https://airtable.com/appx3c28q91Ii1iQs/pagoCxdfobQ9ykXx2"
  },
  // {},
  // {
  //   header: "Unigames",
  //   description: "Compete with the best builders in crypto at 2025’s Unigames.",
  //   icon: "UsersGroup",
  //   comingSoon: true
  // },
  {
    header: "Gas subsidies",
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
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 lg:grid-cols-4 lg:gap-6">
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
