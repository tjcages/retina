import { Button, Image, Nbsp } from "@/components/ui";

interface Props {
  name: string;
  src: string;
}

const Item: React.FC<Props> = ({ name, src }) => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center gap-3">
      <Image className="h-20 w-20" src={src} alt={name} width={400} height={400} />
      <p>{name}</p>
    </div>
  );
};

const community = [
  {
    name: "Etherscan",
    src: "/assets/community/etherscan.png"
  },
  {
    name: "Flashbots",
    src: "/assets/community/flashbots.png"
  },
  {
    name: "Chainlink",
    src: "/assets/community/chainlink.png"
  },
  {
    name: "Subquery",
    src: "/assets/community/subquery.png"
  },
  {
    name: "Blockscout",
    src: "/assets/community/blockscout.png"
  },
  {
    name: "Goldsky",
    src: "/assets/community/goldsky.png"
  },
  {
    name: "Pyth",
    src: "/assets/community/pyth.png"
  },
  {
    name: "Circle",
    src: "/assets/community/circle.png"
  },
  {
    name: "Coinbase",
    src: "/assets/community/coinbase.png"
  },
  {
    name: "The Graph",
    src: "/assets/community/thegraph.png"
  },
  {
    name: "Axelar",
    src: "/assets/community/axelar.png"
  },
  {
    name: "Arrakis",
    src: "/assets/community/arrakis.png"
  },
  {
    name: "Bunni",
    src: "/assets/community/bunni.png"
  },
  {
    name: "Fireblocks",
    src: "/assets/community/fireblocks.png"
  },
  {
    name: "OKX",
    src: "/assets/community/okx.png"
  }
] as Props[];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-12">
        <div className="col-span-full flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:max-w-2xl">
            Join the community building
            <Nbsp />
            on
            <Nbsp />
            Unichain
          </h2>
        </div>
        <div className="col-span-full row-start-2 mx-auto flex gap-6 md:col-start-2 md:-col-end-2 md:gap-12">
          {community.slice(0, 8).map((item, index) => (
            <Item key={index} name={item.name} src={item.src} />
          ))}
        </div>
        <div className="col-span-full row-start-3 mx-auto flex gap-6 md:col-start-2 md:-col-end-2 md:gap-12">
          {community.slice(8, 15).map((item, index) => (
            <Item key={index} name={item.name} src={item.src} />
          ))}
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
