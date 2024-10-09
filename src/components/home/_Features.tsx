"use client";

import { useIsDesktop } from "@/hooks";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";

import { Badge, Icon, Image, Link, Scroll } from "@/components/ui";

interface Props {
  index: number;
  header: string;
  description: string;
  graphic?: string;
  tertiary: string;
  style?: React.CSSProperties;
}

const Item = forwardRef<HTMLDivElement, Props>(
  ({ index, header, description, graphic, tertiary, style }, ref) => {
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
        ref={ref}
        className="relative flex h-full max-h-[380px] w-full max-w-[80vw] flex-shrink-0 select-none flex-col items-start justify-start gap-3 overflow-hidden rounded-3xl bg-secondary md:max-w-[360px] lg:max-h-[380px] xl:h-auto xl:max-w-[500px]"
        variants={variants}
        initial={"hidden"}
        animate={"visible"}
        style={style}
      >
        <div className="aspect-square w-full overflow-hidden">
          {graphic !== undefined && (
            <Image
              className="pointer-events-none h-full w-full select-none object-cover"
              src={graphic}
              alt={header}
              width={800}
              height={800}
            />
          )}
        </div>
        <Badge className="absolute left-3 top-3">{tertiary}</Badge>
        <div className="-mt-10 flex w-full flex-col gap-3 p-6">
          <h3>{header}</h3>
          <h5 className="text-base text-secondary-foreground md:text-xl">{description}</h5>
        </div>
      </motion.div>
    );
  }
);
Item.displayName = "FeatureItem";

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
  const [displayedSections, setDisplayedSections] = useState(sections.slice(0, 2));
  const firstItemRef = useRef<HTMLDivElement>(null);
  const [articleMaxHeight, setArticleMaxHeight] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!isDesktop) {
      const timer = setTimeout(() => {
        setDisplayedSections(sections);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setDisplayedSections(sections);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop && firstItemRef.current) {
      const updateMaxHeight = () => {
        const height = firstItemRef.current?.offsetHeight;
        setArticleMaxHeight(height ? `${height}px` : undefined);
      };

      updateMaxHeight();
      window.addEventListener("resize", updateMaxHeight);

      return () => window.removeEventListener("resize", updateMaxHeight);
    } else {
      setArticleMaxHeight(undefined);
    }
  }, [isDesktop]);

  return (
    <section className="max-w-full px-0 py-6 md:pb-24 md:pt-12 xl:px-20 2xl:px-24">
      <article className="gap-y-12" style={{ maxHeight: articleMaxHeight }}>
        <Scroll
          drag={!isDesktop}
          direction="x"
          className="col-span-full flex w-full gap-6 px-3 md:px-12 lg:grid lg:grid-cols-3 lg:px-16 xl:px-0"
        >
          {displayedSections.map((section, index) => (
            <Item
              key={index}
              index={index}
              header={section.header}
              description={section.description}
              graphic={section.graphic}
              tertiary={section.tertiary}
              ref={index === 0 ? firstItemRef : undefined}
              style={{ maxHeight: articleMaxHeight }}
            />
          ))}
        </Scroll>
        <div className="col-span-full flex flex-col items-center justify-center gap-3 text-center">
          <Link href="https://docs.unichain.org/whitepaper.pdf" target="_blank">
            <h5>Read the whitepaper</h5>
            <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default _;
