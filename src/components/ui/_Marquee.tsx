"use client";

import { useInView } from "@/hooks";
import { cn } from "@/utils";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  direction = "left",
  speed = 50,
  className = "",
  pauseOnHover = true
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
      setContentWidth(contentRef.current.offsetWidth);
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children]);

  useEffect(() => {
    let distance: number;
    let duration: number;

    if (direction === "left" || direction === "right") {
      distance = contentWidth;
      duration = (distance / speed) * 1000;
    } else {
      distance = contentHeight;
      duration = (distance / speed) * 1000;
    }

    if (inView) {
      controls.start({
        x: direction === "left" ? -distance : direction === "right" ? distance : 0,
        y: direction === "up" ? -distance : direction === "down" ? distance : 0,
        transition: {
          duration: duration / 1000,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }
      });
    } else {
      controls.stop();
    }
  }, [controls, direction, speed, contentWidth, contentHeight, inView]);

  const isHorizontal = direction === "left" || direction === "right";
  const dragConstraints = isHorizontal
    ? { left: -contentWidth, right: containerWidth }
    : { top: -contentHeight, bottom: containerHeight };

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <motion.div
        ref={ref}
        className={cn("overflow-hidden", className)}
        style={{
          x,
          y
        }}
        animate={controls}
        drag={isHorizontal ? "x" : "y"}
        dragConstraints={dragConstraints}
        dragElastic={0.2}
        onHoverStart={() => pauseOnHover && controls.stop()}
        onHoverEnd={() => {
          if (pauseOnHover) {
            controls.start({
              x: direction === "left" ? -contentWidth : direction === "right" ? contentWidth : 0,
              y: direction === "up" ? -contentHeight : direction === "down" ? contentHeight : 0,
              transition: {
                duration: (isHorizontal ? contentWidth : contentHeight) / speed,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            });
          }
        }}
      >
        <div ref={contentRef} className="flex">
          {children}
        </div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
}
