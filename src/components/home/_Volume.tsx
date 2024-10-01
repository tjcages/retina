"use client";

import { useInView } from "@/hooks";
import MotionNumber from "motion-number";
import { useRef } from "react";

import { Nbsp } from "@/components/ui";

interface Props {
  value: number;
  multiple?: string;
  description: string;
}

const Item: React.FC<Props> = ({ value, multiple, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center md:col-span-8 md:gap-3">
      <h1 className="whitespace-nowrap text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl">
        <strong>
          <MotionNumber
            value={inView ? value : 0}
            format={{
              style: "currency",
              currency: "USD",
              notation: "compact"
            }}
          />
          <span className="ml-2 align-text-bottom">{multiple}+</span>
        </strong>
      </h1>
      <h5 className="text-base leading-none md:text-xl">{description}</h5>
    </div>
  );
};

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-y-12 md:gap-y-16 xl:gap-x-12">
        <div className="col-span-full flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-pink col-span-full">
            <strong>Expanding</strong> the Uniswap
            <Nbsp />
            ecosystem
          </h2>
          <h3 className="max-w-2xl">
            Informed by our experience building the world&apos;s largest decentralized trading
            protocol.
          </h3>
        </div>
        <div className="col-span-full flex items-start justify-between gap-6 px-3 text-center md:grid md:grid-cols-subgrid md:gap-3 md:px-0">
          <Item value={2.36} multiple="T" description="Trading Volume" />
          <Item value={25} multiple="M" description="Swapping Wallets" />
          <Item value={465} multiple="M" description="All-Time Trades" />
        </div>
      </article>
    </section>
  );
};

export default _;
