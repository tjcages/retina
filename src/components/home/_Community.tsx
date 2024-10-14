"use client";

import React, { useEffect, useMemo, useState } from "react";

import { Icon, Image, Link, Marquee } from "@/components/ui";

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
  // Confirmed for 10/10
  {
    name: "Optimism",
    src: "/assets/partners/optimism.png"
  },
  {
    name: "Flashbots",
    src: "/assets/partners/flashbots.png"
  },
  {
    name: "QuickNode",
    src: "/assets/partners/quicknode.png"
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
    name: "Goldsky",
    src: "/assets/partners/goldsky.png"
  },
  {
    name: "Subquery",
    src: "/assets/partners/subquery.png"
  },
  {
    name: "Pyth",
    src: "/assets/partners/pyth.png"
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
    name: "Redstone",
    src: "/assets/partners/redstone.png"
  },
  {
    name: "Etherscan",
    src: "/assets/partners/etherscan.png"
  },
  {
    name: "Zerion",
    src: "/assets/partners/zerion.png"
  },
  {
    name: "Tenderly",
    src: "/assets/partners/tenderly.png"
  },
  {
    name: "Blockscout",
    src: "/assets/partners/blockscout.png"
  },
  {
    name: "Superbridge",
    src: "/assets/partners/superbridge.png"
  },
  {
    name: "Privy",
    src: "/assets/partners/privy.png"
  },
  {
    name: "Across",
    src: "/assets/partners/across.png"
  },
  {
    name: "Allium",
    src: "/assets/partners/allium.png"
  },
  {
    name: "Axelar",
    src: "/assets/partners/axelar.png"
  },
  {
    name: "Hexagate",
    src: "/assets/partners/hexagate.png"
  },
  // {
  //   name: "Safe",
  //   src: "/assets/partners/safe.png"
  // },
  // {
  //   name: "RainbowKit",
  //   src: "/assets/partners/rainbowkit.png"
  // },
  {
    name: "Wormhole",
    src: "/assets/partners/wormhole.png"
  },
  {
    name: "LayerZero",
    src: "/assets/partners/layerzero.png"
  },
  {
    name: "Brid.gg",
    src: "/assets/partners/bridgg.png"
  }

  // Awaiting confirmation for 10/10
  // {
  //   name: "WalletConnect",
  //   src: "/assets/partners/walletconnect.png"
  // },
  // {
  //   name: "Meld",
  //   src: "/assets/partners/meld.png"
  // },
  // {
  //   name: "Topper",
  //   src: "/assets/partners/topper.png"
  // },
  // {
  //   name: "Transak",
  //   src: "/assets/partners/transak.png"
  // },
  // {
  //   name: "Evervault",
  //   src: "/assets/partners/evervault.png" // TODO
  // },
  // {
  //   name: "Fireblocks",
  //   src: "/assets/partners/fireblocks.png"
  // }

  // Others
  // {
  //   name: "Moralis",
  //   src: "/assets/partners/moralis.png"
  // },
  // {
  //   name: "Parsec",
  //   src: "/assets/partners/parsec.png"
  // },
  // {
  //   name: "Bitstamp",
  //   src: "/assets/partners/bitstamp.png"
  // },
  // {
  //   name: "Moonpay",
  //   src: "/assets/partners/moonpay.png"
  // },
  // {
  //   name: "ZeroHash",
  //   src: "/assets/partners/zerohash.png"
  // },
  // {
  //   name: "Stripe",
  //   src: "/assets/partners/stripe.png"
  // },
  // {
  //   name: "Dune",
  //   src: "/assets/partners/dune.png"
  // },
  // {
  //   name: "Coingecko",
  //   src: "/assets/partners/coingecko.png"
  // },
  // {
  //   name: "Coinmarketcap",
  //   src: "/assets/partners/coinmarketcap.png"
  // },
  // {
  //   name: "DEXScreener",
  //   src: "/assets/partners/dexscreener.png"
  // },
  // {
  //   name: "Hypernative",
  //   src: "/assets/partners/hypernative.png"
  // },
  // {
  //   name: "Stargate",
  //   src: "/assets/partners/stargate.png"
  // },
  // {
  //   name: "Squid Router",
  //   src: "/assets/partners/squid-router.png"
  // }
  // {
  //   name: "Binance",
  //   src: "/assets/partners/binance.png"
  // },
  // {
  //   name: "OKX",
  //   src: "/assets/partners/okx.png"
  // },
  // {
  //   name: "Chainlink",
  //   src: "/assets/partners/chainlink.png"
  // }
] as Props[];

const Community = () => {
  const [isMounted, setIsMounted] = useState(false);

  const shuffledCommunity = useMemo(() => partners.sort(() => 0.5 - Math.random()), []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-12 md:py-24">
      <article className="gap-y-3 md:gap-y-12">
        <div className="col-span-full mb-8 flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:max-w-2xl">
            Join the community <strong>building</strong> on Unichain
          </h2>
        </div>
        {isMounted && (
          <>
            <Marquee
              direction="left"
              speed={20}
              className="col-span-full mb-6 gradient-mask-l-90-d md:mb-0 lg:col-start-4 lg:-col-end-4"
            >
              <div className="flex items-center gap-6 lg:mr-8 lg:gap-8 xl:mr-12 xl:gap-12">
                {shuffledCommunity
                  .slice(0, Math.ceil(shuffledCommunity.length / 2))
                  .map((item, index) => (
                    <Item key={index} name={item.name} src={item.src} />
                  ))}
              </div>
            </Marquee>
            <Marquee
              direction="right"
              speed={20}
              className="col-span-full gradient-mask-l-90-d lg:col-start-4 lg:-col-end-4"
            >
              <div className="flex items-center gap-6 lg:mr-8 lg:gap-8 xl:mr-12 xl:gap-12">
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
        <div className="col-span-full mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <Link href="/builder-toolkit" routed>
            <h5>Resources for builders</h5>
            <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Community;
