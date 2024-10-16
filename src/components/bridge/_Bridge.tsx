"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Button, Icon, Image } from "@/components/ui";

interface BridgeCardProps {
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  provider?: string;
}

const BridgeCard: React.FC<BridgeCardProps & { isLoaded: boolean }> = ({
  href,
  imageSrc,
  imageAlt,
  title,
  provider,
  isLoaded
}) => (
  <Link
    className={cn(
      "group col-span-12 flex cursor-pointer flex-col gap-6 rounded-[20px] bg-secondary p-5 transition-all duration-300 ease-in-out hover:opacity-90 active:scale-90",
      !href && "pointer-events-none"
    )}
    href={href || "/"}
    target="_blank"
  >
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl transition-opacity duration-500 ease-in-out",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
    >
      {imageSrc && imageAlt ? (
        <Image
          className="pointer-events-none aspect-[2/1] w-full select-none rounded-xl object-cover group-hover:scale-[1.01]"
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={800}
        />
      ) : (
        <div className="aspect-[2/1] w-full" />
      )}
    </div>
    <div
      className={`flex w-full flex-col gap-1 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <h3>{title || " "}</h3>
      <div className="flex w-full items-center justify-between gap-3">
        <h5 className="whitespace-nowrap text-secondary-foreground">by {provider}</h5>
        <Button variant="ghost" className="text-pink -my-4 -mr-5">
          Let&apos;s Bridge
          <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
        </Button>
      </div>
    </div>
  </Link>
);

const Bridge = () => {
  const [randomizedOptions, setRandomizedOptions] = useState<BridgeCardProps[]>([{}, {}]);
  const [isLoaded, setIsLoaded] = useState(false);

  const bridgeOptions: BridgeCardProps[] = useMemo(
    () => [
      {
        href: "https://testnet.brid.gg/unichain-sepolia",
        imageSrc: "/assets/graphics/bridgg.png",
        imageAlt: "Brid.gg graphic",
        title: "Brid.gg",
        provider: "Brid.gg"
      },
      {
        href: "https://superbridge.app/unichain-sepolia",
        imageSrc: "/assets/graphics/superbridge.png",
        imageAlt: "Superbridge graphic",
        title: "Superbridge",
        provider: "Blob Engineering"
      }
    ],
    []
  );

  useEffect(() => {
    const shuffleArray = (array: BridgeCardProps[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setRandomizedOptions(shuffleArray([...bridgeOptions]));
    setIsLoaded(true);
  }, [bridgeOptions]);

  return (
    <section className="bg-transparent py-12 md:pb-16 md:pt-0">
      <article className="gap-6 md:gap-y-12">
        {randomizedOptions.map((option, index) => (
          <BridgeCard key={index} {...option} isLoaded={isLoaded} />
        ))}
      </article>
    </section>
  );
};

export default Bridge;
