"use client";

import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { EmailSignup } from "@/components/shared";
import { Button } from "@/components/ui";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const _ = () => {
  const handleClick = (href: string) => {
    window.open(href);
  };

  const [hoveredLetters, setHoveredLetters] = useState<boolean[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const lastMousePositionRef = useRef<{ x: number; y: number } | null>(null);

  const superchainText = "Powered by the Superchain.";
  const duration = 1000;

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setHoveredLetters(prev => {
          const newState = [...prev];
          const falseIndices = newState.reduce<number[]>(
            (acc, val, idx) => (!val ? [...acc, idx] : acc),
            []
          );
          if (falseIndices.length > 0) {
            const lastMousePosition = lastMousePositionRef.current;
            if (lastMousePosition) {
              const closestIndex = falseIndices.reduce((closest, current) => {
                const currentRect = document
                  .getElementById(`letter-${current}`)
                  ?.getBoundingClientRect();
                if (currentRect) {
                  const currentDistance = Math.sqrt(
                    Math.pow(currentRect.left + currentRect.width / 2 - lastMousePosition.x, 2) +
                      Math.pow(currentRect.top + currentRect.height / 2 - lastMousePosition.y, 2)
                  );
                  const closestRect = document
                    .getElementById(`letter-${closest}`)
                    ?.getBoundingClientRect();
                  if (closestRect) {
                    const closestDistance = Math.sqrt(
                      Math.pow(closestRect.left + closestRect.width / 2 - lastMousePosition.x, 2) +
                        Math.pow(closestRect.top + closestRect.height / 2 - lastMousePosition.y, 2)
                    );
                    return currentDistance < closestDistance ? current : closest;
                  }
                }
                return closest;
              }, falseIndices[0]);
              newState[closestIndex] = true;
            } else {
              const randomIndex = falseIndices[Math.floor(Math.random() * falseIndices.length)];
              newState[randomIndex] = true;
            }
          }
          return newState;
        });
      }, duration / superchainText.length);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setHoveredLetters(prev => {
          const newState = [...prev];
          const trueIndices = newState.reduce<number[]>(
            (acc, val, idx) => (val ? [...acc, idx] : acc),
            []
          );
          if (trueIndices.length > 0) {
            const randomIndex = trueIndices[Math.floor(Math.random() * trueIndices.length)];
            newState[randomIndex] = false;
          }
          return newState;
        });
      }, duration / superchainText.length);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLHeadingElement>) => {
    setIsHovered(true);
    lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
    setHoveredLetters(Array(superchainText.length).fill(false));
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLHeadingElement>) => {
    setIsHovered(false);
    lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    if (isHovered) {
      lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
    }
  };

  return (
    <section className="flex snap-start items-center pb-8 pt-16 md:min-h-[75vh] md:py-24">
      <motion.article
        className="gap-6 text-white md:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="col-span-full row-start-1 flex flex-col md:col-[1_/_span_20]"
          variants={item}
        >
          <h1>
            <strong>Designed</strong> for DeFi.
          </h1>
          <h1>
            <strong>Built</strong> by Uniswap.
          </h1>
        </motion.div>
        <motion.h4
          className="col-span-full row-start-2 md:col-span-10 lg:col-span-9"
          variants={item}
        >
          Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity
          across&nbsp;chains.
        </motion.h4>
        <motion.div className="col-span-7 row-start-3 flex items-center gap-3" variants={item}>
          <Button
            className="w-full"
            onClick={() => handleClick("https://unichain-docs.vercel.app/docs/getting-started")}
          >
            <ArrowRightIcon className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button
            className="w-full"
            onClick={() => handleClick("https://unichain-docs.vercel.app/docs")}
          >
            <CodeIcon className="mr-2 h-5 w-5" />
            Read Docs
          </Button>
        </motion.div>
        <div className="col-span-full flex items-start justify-start">
          <h5
            className="h-4 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => window.open("https://www.optimism.io/", "_blank")}
          >
            {superchainText.split("").map((letter, index) => (
              <span
                key={index}
                id={`letter-${index}`}
                className={hoveredLetters[index] ? "font-riegraf text-[1.35rem] italic" : ""}
              >
                {letter}
              </span>
            ))}
          </h5>
        </div>
      </motion.article>
      <EmailSignup />
    </section>
  );
};

export default _;
