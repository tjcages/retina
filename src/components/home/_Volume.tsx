import { Nbsp } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-12 md:gap-x-12 md:gap-y-16">
        <div className="col-span-full flex items-center justify-center">
          <h1 className="text-pink col-span-full text-center">
            Created with the Uniswap
            <Nbsp />
            Community
          </h1>
        </div>
        <div className="col-span-full grid grid-cols-subgrid gap-6 md:gap-3">
          <div className="col-span-8 flex flex-col items-center justify-center md:gap-3">
            <h1>
              <strong>$2.28T</strong>
            </h1>
            <h5>Trading Volume</h5>
          </div>
          <div className="col-span-8 flex flex-col items-center justify-center md:gap-3">
            <h1>
              <strong>30M</strong>
            </h1>
            <h5>Users</h5>
          </div>
          <div className="col-span-8 flex flex-col items-center justify-center md:gap-3">
            <h1>
              <strong>625M</strong>
            </h1>
            <h5>All-time Trades</h5>
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
