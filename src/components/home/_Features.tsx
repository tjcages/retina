import { Badge, Scroll } from "@/components/ui";

interface Props {
  header: string;
  description: string;
  tertiary: string;
}

const Item: React.FC<Props> = ({ header, description, tertiary }) => {
  return (
    <div className="relative flex aspect-square w-[80vw] flex-shrink-0 flex-col items-start justify-end gap-3 overflow-hidden rounded-3xl bg-secondary lg:w-[40vw]">
      <div className="absolute flex h-full w-full items-center justify-center bg-pink-primary/10 gradient-mask-b-50">
        {/* TODO: Add illustation */}
        <h2 className="mb-[30%] text-muted-foreground/10">Illustration here</h2>
      </div>
      <Badge className="absolute left-3 top-3">{tertiary}</Badge>
      <div className="flex w-full flex-col gap-3 p-6">
        <h3>{header}</h3>
        <h5 className="text-base leading-none text-secondary-foreground md:text-xl">
          {description}
        </h5>
      </div>
    </div>
  );
};

const _ = () => {
  return (
    <section className="snap-start bg-background px-0 py-12 md:py-24">
      <article className="w-full max-w-none gap-12">
        <div className="col-span-full w-full px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <h1>
              Designed <strong>for</strong>&nbsp;DeFi
            </h1>
          </div>
        </div>
        <Scroll
          drag
          direction="x"
          className="col-span-full flex gap-6 px-3 md:px-12 lg:px-16 xl:px-[calc(max(calc((100vw-80rem)/2),_0px))]"
        >
          <Item
            header="Realtime block times"
            description="Designed for market efficiency and seamless UX, Unichain transactions are nearly instant. Unichain will launch with 1 second block times, with 250 ms block times coming soon."
            tertiary="speed"
          />
          <Item
            header="Cheaper execution"
            description="Unichain is a network purpose built for swappers and DeFi developers: offering faster transactions, with significant cost savings."
            tertiary="Value"
          />
          <Item
            header="Cross-chain liquidity"
            description="Unichain is designed to serve as a liquidity hub within the Superchain ecosystem, providing access to liquidity across rollups."
            tertiary="Interoperability"
          />
          <Item
            header="Community-driven development"
            description="Unichain is optimized to more efficiently allocate resources to its contributors: returning value to DeFi users by reducing fees paid to MEV searchers and Ethereum validators."
            tertiary="By and for DeFi Builders"
          />
        </Scroll>
      </article>
    </section>
  );
};

export default _;
