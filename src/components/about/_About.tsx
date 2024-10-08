"use client";

import { Link, Nbsp } from "@/components/ui";

const _ = () => {
  return (
    <section className="pb-12 pt-8 md:pb-24 md:pt-16">
      <article className="gap-6">
        <div className="col-span-12">
          <h2>
            The home for
            <Nbsp />
            DeFi
          </h2>
        </div>
        <div className="col-span-12 flex flex-col gap-3">
          <h4>For DeFi natives. By DeFi natives.</h4>
          <h4>
            The development of Unichain has been a collaborative effort across many organizations:{" "}
            <Link href="https://uniswap.org">Uniswap Labs</Link> is the primary technical provider
            for Unichain and operates the Unichain Sequencer.{" "}
            <Link href="https://www.uniswapfoundation.org/">Uniswap Foundation</Link> leads grants
            and support for developers. Unichain was developed alongside partners at{" "}
            <Link href="https://optimism.io/" variant="ghost">
              Optimism
            </Link>
            ,{" "}
            <Link href="https://www.flashbots.net/" variant="ghost">
              Flashbots
            </Link>
            , and{" "}
            <Link href="https://www.paradigm.xyz/" variant="ghost">
              Paradigm
            </Link>
            .
          </h4>
        </div>
      </article>
    </section>
  );
};

export default _;
