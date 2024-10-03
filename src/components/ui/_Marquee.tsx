"use client";

import { cn } from "@/utils";
import { motion, useAnimationControls } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  direction = "left",
  speed = 20,
  pauseOnHover = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const innerWidth = innerRef.current.offsetWidth;
    const distance = innerWidth;

    const animate = async () => {
      await controls.start({
        x: direction === "left" ? [0, -distance] : [-distance / 2, distance / 2],
        transition: {
          duration: distance / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    animate();
  }, [controls, direction, speed]);

  return (
    <div className={cn("marquee-container overflow-hidden", className)} ref={containerRef}>
      <motion.div
        className="marquee flex"
        ref={innerRef}
        animate={controls}
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
};

// ... (keep the existing MarqueeItem component if needed)
