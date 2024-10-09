import { envClient } from "@/lib";

import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Developer docs",
    description: "Explore Unichain documentation, resources and tutorials.",
    icon: "NoteText",
    href: envClient.NEXT_PUBLIC_DOCS_URL
  },
  {
    header: "Support",
    description: "Reach out to our team in Discord for support.",
    icon: "MessagesText",
    href: "https://discord.gg/AhgRNru9"
  }
  // {
  //   header: "Join builder registry",
  //   description: "Join weekly sessions with our team to ask questions live.",
  //   icon: "UsersGroup",
  //   href: "SignUpForm"
  // }
];

const _ = () => {
  return (
    <section className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Get Started</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">01</small>
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
