"use client";

import { cn } from "@/utils";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  direction = "left",
  speed = 20
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [children]);

  const marqueeStyle = {
    "--marquee-duration": `${contentWidth / speed}s`,
    "--marquee-direction": direction === "left" ? "normal" : "reverse"
  } as React.CSSProperties;

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div ref={containerRef} className="inline-block animate-marquee" style={marqueeStyle}>
        {children}
      </div>
      <div className="inline-block animate-marquee" aria-hidden="true" style={marqueeStyle}>
        {children}
      </div>
    </div>
  );
};

export { Marquee };
