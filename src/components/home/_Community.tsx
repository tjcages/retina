"use client";

import { useMemo } from "react";

import { Button, Icon, Image, Marquee } from "@/components/ui";

interface Props {
  name: string;
  src: string;
}

const Item: React.FC<Props> = ({ name, src }) => {
  return (
    <div className="pointer-events-none col-span-1 flex min-w-16 select-none flex-col items-center justify-center gap-3 text-center lg:min-w-20">
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
    name: "Optimism",
    src: "/assets/community/optimism.png"
  },
  {
    name: "Flashbots",
    src: "/assets/community/flashbots.png"
  },
  {
    name: "Quicknode",
    src: "/assets/community/quicknode.png"
  },
  {
    name: "Tenderly",
    src: "/assets/community/tenderly.png"
  },
  {
    name: "Alchemy",
    src: "/assets/community/alchemy.png"
  },
  {
    name: "ThirdWeb",
    src: "/assets/community/thirdweb.png"
  },
  {
    name: "The Graph",
    src: "/assets/community/the-graph.png"
  },
  {
    name: "OpenZeppelin",
    src: "/assets/community/openzeppelin.png"
  },
  {
    name: "Moralis",
    src: "/assets/community/moralis.png"
  },
  {
    name: "Goldsky",
    src: "/assets/community/goldsky.png"
  },
  {
    name: "Subquery",
    src: "/assets/community/subquery.png"
  },
  {
    name: "Zerion",
    src: "/assets/community/zerion.png"
  },
  {
    name: "Pyth",
    src: "/assets/community/pyth.png"
  },
  {
    name: "Redstone",
    src: "/assets/community/redstone.png"
  },
  {
    name: "Etherscan",
    src: "/assets/community/etherscan.png"
  },
  {
    name: "Blockscout",
    src: "/assets/community/blockscout.png"
  },
  {
    name: "Parsec",
    src: "/assets/community/parsec.png"
  },
  {
    name: "LayerZero",
    src: "/assets/community/layerzero.png"
  },
  {
    name: "Brid.gg",
    src: "/assets/community/bridgg.png"
  },
  {
    name: "Superbridge",
    src: "/assets/community/okx.png"
  },
  {
    name: "Bitstamp",
    src: "/assets/community/bitstamp.png"
  },
  {
    name: "Transak",
    src: "/assets/community/transak.png"
  },
  {
    name: "Moonpay",
    src: "/assets/community/moonpay.png"
  },
  {
    name: "Meld",
    src: "/assets/community/meld.png"
  },
  {
    name: "Across",
    src: "/assets/community/across.png"
  },
  {
    name: "Topper",
    src: "/assets/community/topper.png"
  },
  {
    name: "ZeroHash",
    src: "/assets/community/zerohash.png"
  },
  {
    name: "Stripe",
    src: "/assets/community/stripe.png"
  },
  {
    name: "Dune",
    src: "/assets/community/dune.png"
  },
  {
    name: "Coingecko",
    src: "/assets/community/coingecko.png"
  },
  {
    name: "Allium",
    src: "/assets/community/allium.png"
  },
  {
    name: "Coinmarketcap",
    src: "/assets/community/coinmarketcap.png"
  },
  {
    name: "DEXScreener",
    src: "/assets/community/dexscreener.png"
  },
  {
    name: "Hexagate",
    src: "/assets/community/hexagate.png"
  },
  {
    name: "Hypernative",
    src: "/assets/community/hypernative.png"
  },
  {
    name: "Wormhole",
    src: "/assets/community/wormhole.png"
  },
  {
    name: "Stargate",
    src: "/assets/community/stargate.png"
  },
  {
    name: "Axelar",
    src: "/assets/community/axelar.png"
  },
  {
    name: "Squid Router",
    src: "/assets/community/squid-router.png"
  },
  {
    name: "Zerion Wallet",
    src: "/assets/community/zerion-wallet.png"
  },
  {
    name: "Fireblocks",
    src: "/assets/community/fireblocks.png"
  },
  {
    name: "WalletConnect",
    src: "/assets/community/walletconnect.png"
  },
  {
    name: "Safe",
    src: "/assets/community/safe.png"
  },
  {
    name: "RainbowKit",
    src: "/assets/community/rainbowkit.png"
  },
  {
    name: "Binance",
    src: "/assets/community/binance.png"
  },
  {
    name: "OKX",
    src: "/assets/community/okx.png"
  },
  {
    name: "Chainlink",
    src: "/assets/community/chainlink.png"
  }
] as Props[];

const _ = () => {
  const shuffledCommunity = useMemo(() => community.sort(() => 0.5 - Math.random()), []);
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
            {shuffledCommunity.map((item, index) => (
              <Item key={index} name={item.name} src={item.src} />
            ))}
          </div>
        </Marquee>
        <Marquee
          direction="left"
          className="col-span-full flex w-full items-center gap-3 gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4 lg:gap-8 xl:gap-12"
        >
          <div className="col-span-full row-start-3 mx-auto flex justify-items-center gap-3 md:col-start-2 md:-col-end-2 lg:gap-8 xl:gap-12">
            {shuffledCommunity.reverse().map((item, index) => (
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
