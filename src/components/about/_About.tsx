"use client";

import Link from "next/link";

import { Nbsp } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background pb-12 pt-8 md:pb-24 md:pt-16">
      <article className="gap-6">
        <div className="col-span-12">
          <h2>
            The home for
            <Nbsp />
            Defi
          </h2>
        </div>
        <div className="col-span-12 flex flex-col gap-3">
          <h4>By DeFi natives. For DeFi natives.</h4>
          <h4>
            The development of Unichain has been a collaborative effort across many organizations:{" "}
            <Link
              href="https://uniswap.org"
              target="_blank"
              className="text-pink transition-opacity duration-200 ease-in-out hover:opacity-80"
            >
              Uniswap Labs
            </Link>{" "}
            is the primary technical provider for Unichain and operates the Unichain Sequencer.
            <Link
              href="https://www.uniswapfoundation.org/"
              target="_blank"
              className="text-pink transition-opacity duration-200 ease-in-out hover:opacity-80"
            >
              Uniswap Foundation
            </Link>{" "}
            leads grants and support for developers building on Unichain. Unichain was developed
            alongside partners at Optimism, Flashbots, and Paradigm.
          </h4>
        </div>
      </article>
    </section>
  );
};

export default _;
