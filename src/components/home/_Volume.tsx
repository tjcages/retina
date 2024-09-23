import { Nbsp } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-y-12 md:gap-y-16 xl:gap-x-12">
        <div className="col-span-full flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-pink col-span-full">
            Expanding the Uniswap
            <Nbsp />
            <strong>ecosystem</strong>
          </h2>
          <h3 className="max-w-2xl">
            Informed by learnings from building the world&apos;s most popular decentralized trading
            protocol.
          </h3>
        </div>
        <div className="col-span-full flex items-center justify-between gap-6 px-3 md:grid md:grid-cols-subgrid md:gap-3 md:px-0">
          <div className="flex flex-col items-center justify-center md:col-span-8 md:gap-3">
            <h1 className="text-4xl md:text-8xl 2xl:text-9xl">
              <strong>$2.36T+</strong>
            </h1>
            <h5 className="text-base md:text-xl">Trading Volume</h5>
          </div>
          <div className="flex flex-col items-center justify-center md:col-span-8 md:gap-3">
            <h1 className="text-4xl md:text-8xl 2xl:text-9xl">
              <strong>25M+</strong>
            </h1>
            <h5 className="text-base md:text-xl">Swapping Wallets</h5>
          </div>
          <div className="flex flex-col items-center justify-center md:col-span-8 md:gap-3">
            <h1 className="text-4xl md:text-8xl 2xl:text-9xl">
              <strong>465M+</strong>
            </h1>
            <h5 className="text-base md:text-xl">All-Time Trades</h5>
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
