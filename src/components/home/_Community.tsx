"use client";

import { Button, Icon, Image, Marquee } from "@/components/ui";

interface Props {
  name: string;
  src: string;
}

const Item: React.FC<Props> = ({ name, src }) => {
  return (
    <div className="pointer-events-none col-span-1 flex min-w-20 select-none flex-col items-center justify-center gap-3">
      <Image
        className="pointer-events-none h-16 w-16 select-none lg:h-20 lg:w-20"
        src={src}
        alt={name}
        width={400}
        height={400}
      />
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
  // {
  //   name: "Circle",
  //   src: "/assets/community/circle.png"
  // },
  // {
  //   name: "Coinbase",
  //   src: "/assets/community/coinbase.png"
  // },
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
  }
  // {
  //   name: "OKX",
  //   src: "/assets/community/okx.png"
  // }
] as Props[];

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:max-w-2xl">
            <strong>Trusted</strong> by the best
          </h2>
        </div>
        <Marquee
          direction="right"
          className="col-span-full flex w-full items-center gap-3 gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4 lg:gap-8 xl:gap-12"
        >
          <div className="col-span-full row-start-3 mx-auto flex justify-items-center gap-3 md:col-start-2 md:-col-end-2 lg:gap-8 xl:gap-12">
            {community.map((item, index) => (
              <Item key={index} name={item.name} src={item.src} />
            ))}
          </div>
        </Marquee>
        <Marquee
          direction="left"
          className="col-span-full flex w-full items-center gap-3 gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4 lg:gap-8 xl:gap-12"
        >
          <div className="col-span-full row-start-3 mx-auto flex justify-items-center gap-3 md:col-start-2 md:-col-end-2 lg:gap-8 xl:gap-12">
            {community.reverse().map((item, index) => (
              <Item key={index} name={item.name} src={item.src} />
            ))}
          </div>
        </Marquee>
        <div className="col-span-full row-start-4 flex flex-col items-center justify-center gap-3 text-center md:col-start-5 md:-col-end-5">
          <Button variant="outline" className="-ml-5 -mt-5">
            Apply for a developer grant
            <Icon icon="ArrowUpRight" className="h-5 w-5 text-inherit" />
          </Button>
        </div>
        {/* <div className="col-span-full row-start-4 flex flex-col items-center justify-center gap-3 text-center md:col-start-5 md:-col-end-5">
          <h3 className="max-w-2xl">Platforming the next big idea in DeFi:&nbsp;Yours</h3>
          <h5 className="max-w-md text-secondary-foreground">
            We are dedicated to supporting every DeFi builder with programs, events, and grants.
          </h5>
          <Button variant="outline" className="-mt-2.5">
            Learn more
          </Button>
        </div> */}
      </article>
    </section>
  );
};

export default _;
