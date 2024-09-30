"use client";

import { useIsDesktop } from "@/hooks";

import { Badge, Nbsp, Scroll } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  tertiary: string;
}

const Item: React.FC<Props> = ({ header, description, tertiary }) => {
  return (
    <div className="relative flex aspect-square w-[80vw] max-w-[500px] flex-shrink-0 select-none flex-col items-start justify-end gap-3 overflow-hidden rounded-3xl bg-secondary md:w-[60vw] lg:w-[40vw] xl:col-span-8 xl:h-full xl:w-full xl:max-w-none">
      <div className="absolute flex h-full w-full items-center justify-center bg-pink-primary/10 gradient-mask-b-50">
        {/* TODO: Add illustation */}
        <h3 className="mb-[30%] text-muted-foreground/10">Illustration here</h3>
      </div>
      <Badge className="absolute left-3 top-3">{tertiary}</Badge>
      <div className="flex w-full flex-col gap-3 p-6">
        <h3>{header}</h3>
        <h5 className="text-base leading-none text-secondary-foreground md:text-xl">
          {description}
        </h5>
      </div>
    </div>
  );
};

const sections = [
  {
    header: "Instant Transactions",
    description:
      "Optimized for market efficiency and seamless UX, transactions are almost instant. Unichain will launch with 1 second block times, with 250 ms block times coming soon.",
    tertiary: "Speed"
  },
  {
    header: "Cheaper Execution",
    description:
      "Lower costs for creating and accessing liquidity. Unichain reduces value leakage to MEV bots and Ethereum validators, and redirects value back to users.",
    tertiary: "Value"
  },
  {
    header: "Cross-chain Liquidity",
    description:
      "Unichain is built to support seamless transactions across dozens of chains, so tokens are always just a few clicks away.",
    tertiary: "Interoperability"
  }
];

const _ = () => {
  const isDesktop = useIsDesktop();
  return (
    <section className="snap-start bg-background px-0 py-12 md:py-24 xl:px-20 2xl:px-24">
      <article className="w-full max-w-none gap-12">
        <div className="col-span-full w-full px-3 md:px-12 xl:px-0">
          <div className="mx-auto w-full max-w-7xl lg:max-w-none">
            <h2>
              The <strong>best place</strong> for DeFi
              <Nbsp />
              users
            </h2>
          </div>
        </div>
        <Scroll
          drag={!isDesktop}
          direction="x"
          className="col-span-full flex gap-6 px-3 md:px-12 lg:px-16 xl:grid xl:grid-cols-subgrid xl:overflow-hidden xl:px-0"
        >
          {sections.map((section, index) => (
            <Item
              key={index}
              header={section.header}
              description={section.description}
              tertiary={section.tertiary}
            />
          ))}
        </Scroll>
      </article>
    </section>
  );
};

export default _;
