"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface MagneticInfoProps {
  children: React.ReactNode;
  tooltip: React.ReactNode;
  className?: string;
}

const MagneticInfo: React.FC<MagneticInfoProps> = ({ children, tooltip, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 30 });

  const tooltipX = useTransform(mouseX, x => x); // Position 20px to the left of the cursor
  const tooltipY = useTransform(mouseY, y => y - 40); // Position 20px above the cursor

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
        className="pointer-events-none absolute"
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
