"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { VanityBadge } from "@/components/home";
import { Button, Icon } from "@/components/ui";

interface ScoreProps {
  rank: string;
  user: {
    pfpSrc: string;
    username?: string;
    wallet: string;
  };
  v4Address: string;
  score: string;
  badge?: "longest" | "blaze" | "four" | "zero" | "general";
}

const ITEMS_PER_PAGE = 10;

const truncateAddress = (address: string) => {
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

const ScoreItem: React.FC<ScoreProps> = ({ rank, user, v4Address, score, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full grid cursor-pointer grid-cols-subgrid items-center border-b p-3 transition-all duration-200 ease-out hover:bg-pink-primary/10"
    >
      <div className="relative col-span-3 ml-4 flex items-center p-2 pl-4 font-mono text-secondary-foreground">
        {rank === "1" && (
          <Icon icon="Crown" className="absolute -left-1 h-4 w-4 text-pink-primary" />
        )}
        <p>{rank}</p>
      </div>
      <div className="col-span-4 flex items-center gap-2.5 p-2 md:col-span-5">
        <div className="h-9 min-h-9 w-9 min-w-9 rounded-full bg-pink-primary" />
        <div className="flex flex-col">
          <p>{user.username ?? user.wallet}</p>
          {user.username !== undefined && (
            <p className="text-sm text-secondary-foreground">{user.wallet}</p>
          )}
        </div>
      </div>
      <div className="col-span-12 flex items-center gap-2 p-2 md:col-span-11">
        <p className="max-w-[300px] truncate font-mono" title={v4Address}>
          {truncateAddress(v4Address)}
        </p>
        <VanityBadge badge={badge} />
      </div>
      <p className="col-span-3 p-2 font-mono">{score}</p>
    </motion.div>
  );
};

const scoreData: ScoreProps[] = [
  {
    rank: "1",
    user: {
      pfpSrc: "path/to/pfp1.png",
      username: "ldelisle.uni.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "2,129",
    badge: "longest"
  },
  {
    rank: "2",
    user: {
      pfpSrc: "path/to/pfp2.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "984",
    badge: "blaze"
  },
  {
    rank: "3",
    user: {
      pfpSrc: "path/to/pfp3.png",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "743"
  },
  {
    rank: "4",
    user: {
      pfpSrc: "path/to/pfp4.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129",
    badge: "four"
  },
  {
    rank: "5",
    user: {
      pfpSrc: "path/to/pfp5.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "6",
    user: {
      pfpSrc: "path/to/pfp6.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129",
    badge: "zero"
  },
  {
    rank: "7",
    user: {
      pfpSrc: "path/to/pfp7.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "8",
    user: {
      pfpSrc: "path/to/pfp8.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "9",
    user: {
      pfpSrc: "path/to/pfp9.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "10",
    user: {
      pfpSrc: "path/to/pfp10.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129",
    badge: "general"
  },
  {
    rank: "11",
    user: {
      pfpSrc: "path/to/pfp11.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "12",
    user: {
      pfpSrc: "path/to/pfp12.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  },
  {
    rank: "13",
    user: {
      pfpSrc: "path/to/pfp13.png",
      username: "toda.eth",
      wallet: "0x1234...1234"
    },
    v4Address: "0x00044444444444444444444444444444444123418289",
    score: "129"
  }
];

const _ = () => {
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
    setVisibleItems(prev => Math.min(prev + ITEMS_PER_PAGE, scoreData.length));
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
            {scoreData.slice(0, visibleItems).map((score, index) => (
              <motion.div
                key={index}
                variants={item}
                className="col-span-full grid grid-cols-subgrid"
              >
                <ScoreItem {...score} />
              </motion.div>
            ))}
          </motion.div>
          {visibleItems < scoreData.length && (
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
