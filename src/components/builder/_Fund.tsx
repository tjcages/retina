import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Builder open call",
    description: "Apply to receive funding, technical support, and marketing resources.",
    icon: "Tool",
    href: "https://share.hsforms.com/1br6jbotQSvussdlWepfayQsdca9"
  },
  {
    header: "Infinite hackathon",
    description: "Enter any Unichain project into the Infinite Hackathon, with monthly grants.",
    icon: "TrophyStar",
    href: "https://share.hsforms.com/113Gp09xPRbeZl5EKkDo93Qsdca9"
  },
  {
    header: "Retro grants",
    description: "Nominate a builder or team for retroactive funding.",
    icon: "DollarSquare",
    href: "https://share.hsforms.com/1vZfQM5elQD-JSFCtwVLZhQsdca9"
  }
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
