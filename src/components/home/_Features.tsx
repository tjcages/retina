"use client";

import { useIsDesktop } from "@/hooks";
import { motion } from "framer-motion";

import { Badge, Image, Scroll } from "@/components/ui";

interface Props {
  index: number;
  header: string;
  description: string;
  graphic?: string;
  tertiary: string;
}

const Item: React.FC<Props> = ({ index, header, description, graphic, tertiary }) => {
  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + 0.25 * index
      }
    }
  };

  return (
    <motion.div
      className="relative flex w-[80vw] max-w-[500px] flex-shrink-0 select-none flex-col items-start justify-end gap-3 overflow-hidden rounded-3xl bg-secondary md:w-[60vw] lg:w-[40vw] xl:col-span-8 xl:h-full xl:w-full xl:max-w-none"
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
    >
      <div className="mb-auto w-full">
        {graphic !== undefined && (
          <Image
            className="pointer-events-none h-auto w-full select-none object-contain"
            src={graphic}
            alt={header}
            width={800}
            height={800}
          />
        )}
      </div>
      <Badge className="absolute left-3 top-3">{tertiary}</Badge>
      <div className="relative -mt-10 flex w-full flex-col gap-3 p-6">
        <h3>{header}</h3>
        <h5 className="text-base leading-none text-secondary-foreground md:text-xl">
          {description}
        </h5>
      </div>
    </motion.div>
  );
};

const sections = [
  {
    header: "Instant Transactions",
    description:
      "Unichain will launch with 1 second block times, with 250 ms block times coming soon.",
    graphic: "/assets/graphics/speed.png",
    tertiary: "Speed"
  },
  {
    header: "Cheaper Execution",
    description:
      "Lower costs for creating and accessing liquidity. Transaction fees on Unichain will be 20x lower than Ethereum.",
    graphic: "/assets/graphics/savings.png",
    tertiary: "Value"
  },
  {
    header: "Cross-chain Liquidity",
    description:
      "Unichain is built to support seamless transactions across dozens of chains, so tokens are always just a few clicks away.",
    graphic: "/assets/graphics/interoperability.png",
    tertiary: "Interoperability"
  }
];

const _ = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="snap-start bg-background px-0 py-12 md:py-24 xl:px-20 2xl:px-24">
      <article className="w-full max-w-none gap-12">
        <Scroll
          drag={!isDesktop}
          direction="x"
          className="col-span-full flex gap-6 px-3 md:px-12 lg:px-16 xl:grid xl:grid-cols-subgrid xl:overflow-hidden xl:px-0"
        >
          {sections.map((section, index) => (
            <Item
              key={index}
              index={index}
              header={section.header}
              description={section.description}
              graphic={section.graphic}
              tertiary={section.tertiary}
            />
          ))}
        </Scroll>
      </article>
    </section>
  );
};

export default _;
