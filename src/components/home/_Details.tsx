import { Button, Nbsp } from "@/components/ui";

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-6">
        <div className="col-span-full flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:col-span-10">
            Advancing rollup <strong>decentralization</strong>
          </h2>
        </div>
        {/* <div className="col-span-full row-start-2 flex flex-col items-center justify-center gap-3 md:col-start-2 md:-col-end-2">
          <div className="flex aspect-[2/1] w-full items-center justify-center rounded-3xl bg-secondary">
            <h3 className="text-muted-foreground/10">Animated diagram</h3>
          </div>
          <p className="text-center">Provable block building</p>
        </div> */}
        <div className="col-span-full row-start-3 grid grid-cols-subgrid items-center gap-6 md:col-start-4 md:-col-end-4">
          <div className="col-span-full flex flex-col items-start gap-3 md:col-span-9">
            <h3>Community Verification Service</h3>
            <h5 className="text-secondary-foreground">
              A network of full nodes monitor and verify the actions of the sequencer, bringing
              faster settlement and more decentralization to Unichain.
            </h5>
            <Button variant="outline" className="-ml-5">
              Learn more
            </Button>
          </div>
          <div className="col-span-full row-start-1 aspect-[4/3] rounded-2xl bg-secondary md:col-span-9 md:row-start-auto"></div>
        </div>
        <div className="col-span-full row-start-4 grid grid-cols-subgrid items-center gap-6 md:col-start-4 md:-col-end-4">
          <div className="col-span-full aspect-[4/3] rounded-2xl bg-secondary md:col-span-9"></div>
          <div className="col-span-full flex flex-col items-start gap-3 md:col-span-9">
            <h3>Provable Block Building</h3>
            <h5 className="text-secondary-foreground">
              Block building will be delegated to a trusted execution environment developed by
              Flashbots, enabling trustless transaction ordering.
            </h5>
            <Button variant="outline" className="-ml-5">
              Learn more
            </Button>
          </div>
        </div>
        <div className="col-span-full row-start-5 grid grid-cols-subgrid items-center gap-6 md:col-start-4 md:-col-end-4">
          <div className="col-span-full flex flex-col items-start gap-3 md:col-span-9">
            <h3>
              Open Source Innovations for the
              <Nbsp />
              Superchain
            </h3>
            <h5 className="text-secondary-foreground">
              Unichain is built on the OP Stack. Technical innovations introduced by Unichain are
              open source, and available for any rollup to adopt.
            </h5>
          </div>
          <div className="col-span-full row-start-1 aspect-[4/3] rounded-2xl bg-secondary md:col-span-9 md:row-start-auto"></div>
        </div>
      </article>
    </section>
  );
};

export default _;
