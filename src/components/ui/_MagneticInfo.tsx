"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface MagneticInfoProps {
  children: React.ReactNode;
  tooltip: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const MagneticInfo: React.FC<MagneticInfoProps> = ({
  children,
  tooltip,
  className,
  align = "left"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  const tooltipX = useTransform(mouseX, x => {
    switch (align) {
      case "center":
        return x - tooltipWidth / 2;
      case "right":
        return x + tooltipWidth / 2;
      default:
        return x - tooltipWidth / 2;
    }
  });
  const tooltipY = useTransform(mouseY, y => y - 40);

  const scale = useSpring(0, { stiffness: 400, damping: 25 });
  const opacity = useSpring(0, { stiffness: 400, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (isHovered) {
      scale.set(1);
      opacity.set(1);
    } else {
      scale.set(0);
      opacity.set(0);
    }
  }, [isHovered, scale, opacity]);

  useEffect(() => {
    if (tooltipRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          setTooltipWidth(entry.contentRect.width);
        }
      });

      resizeObserver.observe(tooltipRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        ref={tooltipRef}
        className="pointer-events-none absolute z-20 whitespace-nowrap"
        style={{
          x: tooltipX,
          y: tooltipY,
          scale,
          opacity,
          transformOrigin: "center top",
          transform: "translate(-50%, -50%)"
        }}
      >
        {tooltip}
      </motion.div>
    </div>
  );
};

export { MagneticInfo };
