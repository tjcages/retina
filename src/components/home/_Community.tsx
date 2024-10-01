"use client";

import React, { useEffect, useMemo, useState } from "react";

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

const partners = [
  {
    name: "Optimism",
    src: "/assets/partners/optimism.png"
  },
  {
    name: "Flashbots",
    src: "/assets/partners/flashbots.png"
  },
  {
    name: "Quicknode",
    src: "/assets/partners/quicknode.png"
  },
  {
    name: "Tenderly",
    src: "/assets/partners/tenderly.png"
  },
  {
    name: "Alchemy",
    src: "/assets/partners/alchemy.png"
  },
  {
    name: "ThirdWeb",
    src: "/assets/partners/thirdweb.png"
  },
  {
    name: "The Graph",
    src: "/assets/partners/the-graph.png"
  },
  {
    name: "OpenZeppelin",
    src: "/assets/partners/openzeppelin.png"
  },
  {
    name: "Moralis",
    src: "/assets/partners/moralis.png"
  },
  {
    name: "Goldsky",
    src: "/assets/partners/goldsky.png"
  },
  {
    name: "Subquery",
    src: "/assets/partners/subquery.png"
  },
  {
    name: "Zerion",
    src: "/assets/partners/zerion.png"
  },
  {
    name: "Pyth",
    src: "/assets/partners/pyth.png"
  },
  {
    name: "Redstone",
    src: "/assets/partners/redstone.png"
  },
  {
    name: "Etherscan",
    src: "/assets/partners/etherscan.png"
  },
  {
    name: "Blockscout",
    src: "/assets/partners/blockscout.png"
  },
  {
    name: "Parsec",
    src: "/assets/partners/parsec.png"
  },
  {
    name: "LayerZero",
    src: "/assets/partners/layerzero.png"
  },
  {
    name: "Brid.gg",
    src: "/assets/partners/bridgg.png"
  },
  {
    name: "Superbridge",
    src: "/assets/partners/superbridge.png"
  },
  {
    name: "Bitstamp",
    src: "/assets/partners/bitstamp.png"
  },
  {
    name: "Transak",
    src: "/assets/partners/transak.png"
  },
  {
    name: "Moonpay",
    src: "/assets/partners/moonpay.png"
  },
  {
    name: "Meld",
    src: "/assets/partners/meld.png"
  },
  {
    name: "Across",
    src: "/assets/partners/across.png"
  },
  {
    name: "Topper",
    src: "/assets/partners/topper.png"
  },
  {
    name: "ZeroHash",
    src: "/assets/partners/zerohash.png"
  },
  {
    name: "Stripe",
    src: "/assets/partners/stripe.png"
  },
  {
    name: "Dune",
    src: "/assets/partners/dune.png"
  },
  {
    name: "Coingecko",
    src: "/assets/partners/coingecko.png"
  },
  {
    name: "Allium",
    src: "/assets/partners/allium.png"
  },
  {
    name: "Coinmarketcap",
    src: "/assets/partners/coinmarketcap.png"
  },
  {
    name: "DEXScreener",
    src: "/assets/partners/dexscreener.png"
  },
  {
    name: "Hexagate",
    src: "/assets/partners/hexagate.png"
  },
  {
    name: "Hypernative",
    src: "/assets/partners/hypernative.png"
  },
  {
    name: "Wormhole",
    src: "/assets/partners/wormhole.png"
  },
  {
    name: "Stargate",
    src: "/assets/partners/stargate.png"
  },
  {
    name: "Axelar",
    src: "/assets/partners/axelar.png"
  },
  {
    name: "Squid Router",
    src: "/assets/partners/squid-router.png"
  },
  {
    name: "Fireblocks",
    src: "/assets/partners/fireblocks.png"
  },
  {
    name: "WalletConnect",
    src: "/assets/partners/walletconnect.png"
  },
  {
    name: "Safe",
    src: "/assets/partners/safe.png"
  },
  {
    name: "RainbowKit",
    src: "/assets/partners/rainbowkit.png"
  },
  {
    name: "Binance",
    src: "/assets/partners/binance.png"
  },
  {
    name: "OKX",
    src: "/assets/partners/okx.png"
  },
  {
    name: "Chainlink",
    src: "/assets/partners/chainlink.png"
  }
] as Props[];

const _ = () => {
  const [isMounted, setIsMounted] = useState(false);
  const shuffledCommunity = useMemo(() => partners.sort(() => 0.5 - Math.random()), []);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className="snap-start bg-background py-12 md:py-24">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:max-w-2xl">
            <strong>Trusted</strong> by the best
          </h2>
        </div>
        {isMounted && (
          <>
            <Marquee
              direction="right"
              className="col-span-full flex w-full items-center gap-3 gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4 lg:gap-8 xl:gap-12"
            >
              <div className="col-span-full row-start-3 mx-auto flex justify-items-center gap-3 md:col-start-2 md:-col-end-2 lg:gap-8 xl:gap-12">
                {shuffledCommunity
                  .slice(0, Math.ceil(shuffledCommunity.length / 2))
                  .map((item, index) => (
                    <Item key={index} name={item.name} src={item.src} />
                  ))}
              </div>
            </Marquee>
            <Marquee
              direction="left"
              className="col-span-full flex w-full items-center gap-3 gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4 lg:gap-8 xl:gap-12"
            >
              <div className="col-span-full row-start-3 mx-auto flex justify-items-center gap-3 md:col-start-2 md:-col-end-2 lg:gap-8 xl:gap-12">
                {shuffledCommunity
                  .slice(Math.ceil(shuffledCommunity.length / 2))
                  .reverse()
                  .map((item, index) => (
                    <Item key={index} name={item.name} src={item.src} />
                  ))}
              </div>
            </Marquee>
          </>
        )}
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
