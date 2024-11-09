"use client";

import { LeaderboardEntry } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  breakdown?: LeaderboardEntry["scoreBreakdown"];
  children: React.ReactNode;
}

const _: React.FC<Props> = ({ breakdown, children }) => {
  const [hover, setHovered] = useState(false);
  return (
    <>
      <div
        className="contents"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
      {breakdown && (
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.2
              }}
              className="absolute -bottom-[160%] right-32 z-30 flex w-[300px] flex-col items-start justify-start gap-1 rounded-2xl border bg-background px-4 py-3 shadow-light"
            >
              <div className="absolute -right-[10px] top-1/2 h-7 w-7 -translate-y-1/2 scale-x-[-1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1.99615 7.6641C0.808685 6.87246 0.808685 5.12754 1.99615 4.3359L8.5 -3.93402e-07L8.5 12L1.99615 7.6641Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.55077 5.16783L7.49992 1.86839L7.49992 5.99988L7.49992 10.1314L2.55077 6.83193C1.95704 6.43611 1.95704 5.56365 2.55077 5.16783ZM1.99607 4.33578L7.49992 0.666545L8.49992 -0.000122394L8.49992 1.20173L8.49992 1.99988L7.5 1.99988L7.5 9.99988L8.49992 9.99988L8.49992 10.798L8.49992 11.9999L7.49992 11.3332L1.99607 7.66398C0.808602 6.87233 0.808602 5.12742 1.99607 4.33578Z"
                    fill="#222222"
                    fill-opacity="0.08"
                  />
                </svg>
              </div>

              <p>Score breakdown</p>
              {breakdown.leadingZeroNibbles !== undefined && (
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-secondary-foreground">Leading 0 nibbles</p>
                  <p className="text-pink-primary">
                    {breakdown.leadingZeroNibbles}{" "}
                    {breakdown.leadingZeroNibbles === 1 ? "pt" : "pts"}
                  </p>
                </div>
              )}
              {breakdown.firstFourIsFollowedByThreeFours !== undefined && (
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-secondary-foreground">First 4 is followed by three 4s</p>
                  <p className="text-pink-primary">
                    {breakdown.firstFourIsFollowedByThreeFours}{" "}
                    {breakdown.firstFourIsFollowedByThreeFours === 1 ? "pt" : "pts"}
                  </p>
                </div>
              )}
              {breakdown.lastFourNibblesAreFours !== undefined && (
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-secondary-foreground">Last four nibbles are 4s</p>
                  <p className="text-pink-primary">
                    {breakdown.lastFourNibblesAreFours}{" "}
                    {breakdown.lastFourNibblesAreFours === 1 ? "pt" : "pts"}
                  </p>
                </div>
              )}
              {breakdown.numberOfFours !== undefined && (
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-secondary-foreground">Number of 4s</p>
                  <p className="text-pink-primary">
                    {breakdown.numberOfFours} {breakdown.numberOfFours === 1 ? "pt" : "pts"}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default _;
