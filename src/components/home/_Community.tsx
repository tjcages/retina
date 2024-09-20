import { Button, Nbsp } from "@/components/ui";

const Item = () => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center gap-3">
      <div className="h-20 w-20 rounded-full bg-secondary"></div>
      <p>Etherscan</p>
    </div>
  );
};

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-12">
        <div className="col-span-full flex items-center justify-center">
          <h1 className="text-pink col-span-full text-center md:col-span-10">
            Join the community building
            <Nbsp />
            on
            <Nbsp />
            Unichain
          </h1>
        </div>
        <div className="col-span-full row-start-2 mx-auto flex gap-6 md:col-start-2 md:-col-end-2 md:gap-12">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="col-span-full row-start-3 mx-auto flex gap-6 md:col-start-2 md:-col-end-2 md:gap-12">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <div className="col-span-full row-start-4 flex flex-col items-center justify-center gap-3 text-center md:col-start-5 md:-col-end-5">
          <h3 className="max-w-2xl">Platforming the next big idea in DeFi:&nbsp;Yours</h3>
          <h5 className="max-w-md text-secondary-foreground">
            We’re dedicated to providing a foundation for every DeFi builder. Learn more about
            Unichain builder programs, events, and grants.
          </h5>
          <Button variant="outline">Learn more</Button>
        </div>
      </article>
    </section>
  );
};

export default _;
