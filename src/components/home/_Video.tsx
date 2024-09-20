const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-12">
        <div className="col-span-full flex items-center justify-center">
          <h1 className="text-pink col-span-full text-center md:col-span-10">
            Where <strong>liquidity</strong>&nbsp;lives
          </h1>
        </div>
        <div className="col-span-full row-start-2 flex aspect-[2/1] w-full items-center justify-center rounded-3xl bg-secondary md:col-start-2 md:-col-end-2">
          {/* TODO: Add video */}
          <h2 className="text-muted-foreground/10">Teaser video</h2>
        </div>
        <div className="col-span-full row-start-3 md:col-start-7 md:-col-end-7">
          <h4 className="max-w-2xl">
            Unichain is designed to support deep and broad liquidity for the DeFi community:
            allowing anyone, anywhere to create new apps, launch markets, swap assets, and unlock
            value.
          </h4>
        </div>
      </article>
    </section>
  );
};

export default _;
