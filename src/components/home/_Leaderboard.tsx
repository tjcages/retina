"use client";

import { LeaderboardEntry } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";

import { VanityBadge } from "@/components/home";
import { Button, Icon } from "@/components/ui";

const ITEMS_PER_PAGE = 10;

const truncateAddress = (address: string) => {
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

const ScoreItem: React.FC<{ leader: LeaderboardEntry }> = ({ leader }) => {
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
      <div className="col-span-4 flex items-center gap-2.5 p-2 md:col-span-5">
        <div className="h-9 min-h-9 w-9 min-w-9 rounded-full bg-pink-primary" />
        <div className="flex flex-col">
          <p>{leader.uniUsername ?? truncateAddress(leader.minterAddress)}</p>
          {leader.uniUsername !== undefined && (
            <p className="text-sm text-secondary-foreground">
              {truncateAddress(leader.minterAddress)}
            </p>
          )}
        </div>
      </div>
      <div className="col-span-12 flex items-center gap-2 p-2 md:col-span-11">
        <p className="max-w-[300px] truncate font-mono" title={leader.v4Address}>
          {truncateAddress(leader.v4Address)}
        </p>
        <VanityBadge badge={leader.badge} />
      </div>
      <p className="col-span-3 p-2 font-mono">{leader.score.toLocaleString()}</p>
    </motion.div>
  );
};

const _: React.FC<{ leaders: LeaderboardEntry[] }> = ({ leaders }) => {
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
    <section className="pb-12 md:pb-24">
      <article className="grid-cols-[repeat(24,_1fr)] gap-8 overflow-x-auto lg:gap-12 lg:overflow-x-hidden">
        <div className="pointer-events-auto col-span-full row-start-2 grid w-full max-w-full grid-cols-[repeat(24,_1fr)] grid-rows-[auto_1fr] items-start gap-0 rounded-3xl border border-pink-light bg-background/80 shadow-pink backdrop-blur-sm md:col-start-2 md:-col-end-2 lg:grid-cols-subgrid">
          <div className="col-span-full grid grid-cols-subgrid items-center border-b p-3 font-mono uppercase text-pink-primary">
            <p className="col-span-3 p-2 pl-4">Rank</p>
            <p className="col-span-4 p-2 md:col-span-5">Wallet</p>
            <p className="col-span-12 p-2 md:col-span-11">V4 Address</p>
            <p className="col-span-3 p-2">Score</p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="col-span-full row-start-2 grid grid-cols-subgrid items-center"
          >
            {leaders.slice(0, visibleItems).map((leader, index) => (
              <motion.div
                key={index}
                variants={item}
                className="col-span-full grid grid-cols-subgrid"
              >
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
        </div>
      </article>
    </section>
  );
};

export default _;
