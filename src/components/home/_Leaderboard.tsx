"use client";

import { LeaderboardEntry } from "@/lib/types";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { VanityBadge } from "@/components/home";
import { ScoreBreakdown } from "@/components/shared";
import { Button, Icon, MagneticInfo } from "@/components/ui";

const ITEMS_PER_PAGE = 10;

const calculateVisibleCharacters = (element: HTMLElement, address: string) => {
  const containerWidth = element.offsetWidth;
  const charWidth = 8.5;
  const possibleChars = Math.floor(containerWidth / charWidth);
  const minChars = 9;
  if (possibleChars < minChars) {
    return 4;
  }
  const charsPerSide = Math.floor((possibleChars - 3) / 2);
  return Math.min(charsPerSide, Math.floor(address.length / 2));
};

const truncateAddress = (address: string, containerRef?: React.RefObject<HTMLElement>) => {
  if (!containerRef?.current) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }
  const charsPerSide = calculateVisibleCharacters(containerRef.current, address);
  return `${address.slice(0, charsPerSide)}...${address.slice(-charsPerSide)}`;
};

const ScoreItem: React.FC<{ leader: LeaderboardEntry }> = ({ leader }) => {
  const minterAddressRef = useRef<HTMLParagraphElement>(null);
  const v4AddressRef = useRef<HTMLParagraphElement>(null);

  const [truncatedMinterAddress, setTruncatedMinterAddress] = useState(() =>
    truncateAddress(leader.minterAddress)
  );
  const [truncatedV4Address, setTruncatedV4Address] = useState(() =>
    truncateAddress(leader.v4Address)
  );

  useEffect(() => {
    const handleResize = () => {
      if (minterAddressRef.current) {
        setTruncatedMinterAddress(truncateAddress(leader.minterAddress, minterAddressRef));
      }
      if (v4AddressRef.current) {
        setTruncatedV4Address(truncateAddress(leader.v4Address, v4AddressRef));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [leader.minterAddress, leader.v4Address]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full grid cursor-pointer grid-cols-subgrid items-center border-b p-3 transition-all duration-200 ease-out hover:bg-pink-primary/10"
    >
      <div className="relative col-span-3 ml-4 flex items-center p-2 pl-4 font-mono text-secondary-foreground">
        {leader.rank === 1 && (
          <Icon icon="Crown" className="absolute -left-1 h-4 w-4 text-pink-primary" />
        )}
        <p>{String(leader.rank)}</p>
      </div>
      <div className="col-span-7 flex items-center gap-2.5 p-2 md:col-span-5">
        <div
          className={cn(
            "relative h-9 min-h-9 w-9 min-w-9 overflow-hidden rounded-full bg-pink-primary",
            leader.avatarSrc ? "bg-transparent" : ""
          )}
        >
          {leader.avatarSrc && (
            <Image
              src={leader.avatarSrc}
              alt={leader.username ?? "pfp"}
              fill
              className="object-cover"
            />
          )}
        </div>
        <MagneticInfo
          align="center"
          tooltip={
            <p className="rounded-xl bg-secondary px-3 py-1.5 shadow-md">{leader.minterAddress}</p>
          }
          className="flex flex-col"
        >
          <div className="flex items-center gap-1">
            <p className={cn(leader.username === undefined && "font-mono")}>
              {leader.username ?? truncatedMinterAddress}
            </p>
            {leader.username !== undefined && leader.username.endsWith(".uni.eth") && (
              <Icon icon="UniswapUsername" className="h-6 w-6" />
            )}
          </div>
          {leader.username !== undefined && (
            <p ref={minterAddressRef} className="text-sm text-secondary-foreground">
              {truncatedMinterAddress}
            </p>
          )}
        </MagneticInfo>
      </div>
      <div className="col-span-9 flex items-center gap-6 p-2 md:col-span-11 md:gap-10">
        <MagneticInfo
          align="center"
          tooltip={
            <p className="rounded-xl bg-secondary px-3 py-1.5 shadow-md">{leader.v4Address}</p>
          }
          className="w-full max-w-[300px]"
        >
          <p ref={v4AddressRef} className="font-mono" title={leader.v4Address}>
            {truncatedV4Address}
          </p>
        </MagneticInfo>
        <VanityBadge badges={leader.badges} />
      </div>
      <div className="relative col-span-2 p-2 md:col-span-3">
        {/* <ScoreBreakdown breakdown={leader.scoreBreakdown}> */}
        <ScoreBreakdown
          breakdown={{
            leadingZeroNibbles: 1,
            firstFourIsFollowedByThreeFours: 1,
            lastFourNibblesAreFours: 1,
            numberOfFours: 1
          }}
        >
          <p className="font-mono">{leader.score.toLocaleString()}</p>
        </ScoreBreakdown>
      </div>
    </motion.div>
  );
};

const LeaderboardList: React.FC<{ leaders: LeaderboardEntry[] }> = ({ leaders }) => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleSeeMore = () => {
    setVisibleItems(prev => Math.min(prev + ITEMS_PER_PAGE, leaders.length));
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="col-span-full row-start-2 grid grid-cols-subgrid items-center"
      >
        {leaders.slice(0, visibleItems).map((leader, index) => (
          <motion.div key={index} variants={item} className="col-span-full grid grid-cols-subgrid">
            <ScoreItem leader={leader} />
          </motion.div>
        ))}
      </motion.div>
      {visibleItems < leaders.length && (
        <Button
          variant="ghost"
          className="col-span-full text-base text-pink-primary"
          onClick={handleSeeMore}
        >
          See More
        </Button>
      )}
    </>
  );
};

export const LeaderboardContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <section className="pointer-events-auto overflow-visible pb-12 md:pb-24">
      <article className="grid-cols-[repeat(24,_1fr)] gap-8 overflow-x-auto overflow-y-visible lg:gap-12 lg:overflow-x-hidden">
        <div className="pointer-events-auto col-span-full row-start-2 grid w-full max-w-full grid-cols-[repeat(24,_1fr)] grid-rows-[auto_1fr] items-start gap-0 rounded-3xl border border-pink-light bg-background/80 shadow-pink backdrop-blur-sm md:col-start-2 md:-col-end-2 lg:grid-cols-subgrid">
          <div className="col-span-full grid grid-cols-subgrid items-center border-b p-3 font-mono uppercase text-pink-primary">
            <p className="col-span-3 p-2 pl-4">Rank</p>
            <p className="col-span-7 p-2 md:col-span-5">Wallet</p>
            <p className="col-span-9 p-2 md:col-span-11">V4 Address</p>
            <p className="col-span-2 p-2 md:col-span-3">Score</p>
          </div>
          {children}
        </div>
      </article>
    </section>
  );
};

const _: React.FC<{ leaders: LeaderboardEntry[] }> = ({ leaders }) => {
  return (
    <LeaderboardContainer>
      <LeaderboardList leaders={leaders} />
    </LeaderboardContainer>
  );
};

export default _;
