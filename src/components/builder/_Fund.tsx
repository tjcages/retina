import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Unichain builder open call",
    description:
      "Apply for opportunities to receive funding, technical support, and go-to-market resources for your project.",
    icon: "Tool",
    href: "https://share.hsforms.com/1Bc0BcWqPTW-no_TIM5hbFAsdca9"
  },
  {
    header: "Unichain infinite hackathon",
    description:
      "Enter any project developed on Unichain into our Infinite Hackathon, with grants awarded monthly.",
    icon: "TrophyStar",
    href: "https://airtable.com/appx3c28q91Ii1iQs/pagKA897Zhcy4K0NR/form"
  },
  {
    header: "Unichain retro grants",
    description:
      "Nominate a builder or team that’s creating impact with their Unichain project for retroactive funding.",
    icon: "DollarSquare",
    href: "https://airtable.com/appx3c28q91Ii1iQs/pagk50WNKL0c4rfa6/form"
  }
  // {},
  // {
  //   header: "Unigames",
  //   description: "Compete with the best builders in crypto at 2025’s Unigames.",
  //   icon: "UsersGroup",
  //   comingSoon: true
  // },
  // {
  //   header: "Gas subsidies",
  //   description: "Get reimbursed for gas spent through hooks.",
  //   icon: "LaptopCode",
  //   comingSoon: true
  // }
];

const _ = () => {
  return (
    <section className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Get Support</h2>
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
