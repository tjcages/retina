import { Button } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-6 md:gap-12">
        <div className="col-span-full flex items-center justify-center">
          <h1 className="text-pink col-span-full text-center md:col-span-10">
            Scale <strong>for</strong>&nbsp;Ethereum
          </h1>
        </div>
        <div className="col-span-full row-start-2 flex flex-col items-center justify-center gap-3 md:col-start-2 md:-col-end-2">
          <div className="aspect-[2/1] w-full rounded-3xl bg-secondary"></div>
          <p className="text-center">Provable block building</p>
        </div>
        <div className="col-span-full row-start-4 grid grid-cols-subgrid items-center gap-6 md:col-start-4 md:-col-end-4">
          <div className="col-span-full flex flex-col items-start gap-3 md:col-span-9">
            <h3>Innovation for every chain</h3>
            <h5 className="text-secondary-foreground">
              Unichain is built on, and built to extend, the open source OP stack. As part of the
              Superchain, Unichain will empower swift, secure cross-chain transactions on day one,
              and will introduce a new, fast finality system that allows users to safely move assets
              across chains in less than a second, at near zero cost.
            </h5>
          </div>
          <div className="col-span-full row-start-1 aspect-[4/3] rounded-2xl bg-secondary md:col-span-9 md:row-start-auto"></div>
        </div>
        <div className="col-span-full row-start-5 grid grid-cols-subgrid items-center gap-6 md:col-start-4 md:-col-end-4">
          <div className="col-span-full aspect-[4/3] rounded-2xl bg-secondary md:col-span-9"></div>
          <div className="col-span-full flex flex-col items-start gap-3 md:col-span-9">
            <h3>Pioneering new standards for trustless systems</h3>
            <h5 className="text-secondary-foreground">
              With Unichain, we’re introducing a new Community Verification Service that allows apps
              and users to rely on a distributed network of attestors, instead of a single
              sequencer. We’re also partnering with Flashbots to launch Provable Block Building, a
              new system that leverages TEEs to manage block building, enabling 250ms trustless
              state transitions.
            </h5>
            <Button variant="outline" className="-ml-5">
              Learn more
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
