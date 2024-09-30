import { ArrowUpRight } from "@/assets/icons";

import { ActionItem, type ActionItemProps } from "@/components/shared";
import { Button, Nbsp } from "@/components/ui";

const items: ActionItemProps[] = [
  {
    header: "Launch a token",
    description: "Example token implementation.",
    icon: "DesignSquare"
  },
  {
    header: "Deploy an app",
    description: "Sample app to help kickstart your development process.",
    icon: "Code"
  },
  {
    header: "Create a pool",
    description: "Resources for creating pools on Unichain.",
    icon: "ActivityCircle"
  },
  {
    header: "Developer docs",
    description: "Resources to get started building on Unichain.",
    icon: "NoteText"
  }
];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full">
          <h2>
            Start <strong>building</strong> on
            <Nbsp />
            Unichain
          </h2>
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
        <div className="col-span-full">
          <Button variant="outline" className="-ml-5 -mt-5">
            Join the community building on Unichain
            <ArrowUpRight className="h-5 w-5 text-inherit" />
          </Button>
        </div>
      </article>
    </section>
  );
};

export default _;
