"use client";

import { envClient } from "@/lib";
import { useState } from "react";

import { ActionItem, type ActionItemProps } from "@/components/shared";

const items: ActionItemProps[] = [
  {
    header: "Deploy a smart contract",
    description: "Sample app to help kickstart your development process.",
    icon: "Code",
    href: envClient.NEXT_PUBLIC_DOCS_URL + "/building-on-unichain/deploy-a-smart-contract"
  },
  {
    header: "Launch an ERC-20",
    description: "Example token implementation.",
    icon: "DesignSquare",
    href: envClient.NEXT_PUBLIC_DOCS_URL + "/building-on-unichain/launching-a-token"
  },
  {
    header: "Create a pool",
    description: "Resources for creating pools on Unichain.",
    icon: "ActivityCircle",
    href: envClient.NEXT_PUBLIC_DOCS_URL + "/building-on-unichain/create-a-pool"
  },
  {
    header: "Read docs",
    description: "Get started with Unichain's developer docs.",
    icon: "NoteText",
    href: envClient.NEXT_PUBLIC_DOCS_URL
  }
];

const _ = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="z-20 bg-transparent py-12 md:py-24">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full">
          <h2>
            Start building on the <strong>liquidity network</strong>.
          </h2>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <div className="grid grid-cols-2 items-center justify-items-center gap-3 lg:grid-cols-4 lg:gap-6">
            {items.map((item, index) => (
              <ActionItem
                key={index}
                index={index}
                header={item.header}
                description={item.description}
                icon={item.icon}
                href={item.href}
                setHovered={setHovered}
                disabled={hovered !== null && hovered !== index}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
