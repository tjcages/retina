"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";

interface SpinnerProps {
  isLoading?: boolean;
  className?: string;
}

const Spinner = ({ isLoading, className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative h-10 w-10 opacity-0 transition-opacity duration-200 ease-in-out",
        isLoading && "opacity-100",
        className
      )}
      aria-label="Loading"
    >
      <svg className="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Track */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="15"
          strokeLinecap="round"
        />
        {/* Progress */}
        <motion.circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="#F50DB4"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray="66.76 200.28" // 25% of circumference (266.90)
          initial={{ strokeDashoffset: 0 }}
          animate={{
            strokeDashoffset: isLoading ? -266.9 : 0,
            rotate: isLoading ? 360 : 0
          }}
          transition={{
            strokeDashoffset: {
              repeat: isLoading ? Infinity : 0,
              duration: 2,
              ease: "linear"
            },
            rotate: {
              repeat: isLoading ? Infinity : 0,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          style={{
            transformOrigin: "center"
          }}
        />
      </svg>
    </div>
  );
};

export { Spinner };
