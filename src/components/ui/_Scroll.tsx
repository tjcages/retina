"use client";

import { cn } from "@/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  direction?: "x" | "y";
  children?: React.ReactNode | React.ReactNode[];
  snap?: boolean;
  drag?: boolean;
}

export const Scroll: React.FC<Props> = ({ className, direction = "y", children, snap, drag }) => {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0));
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (containerRef.current?.offsetLeft ?? 0);
      const walk = (x - startX) * 1; // Adjust the multiplier to change scroll speed
      if (containerRef.current) containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (drag) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (drag) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        direction === "x"
          ? "overflow-x-auto overflow-y-hidden"
          : "overflow-y-auto overflow-x-hidden",
        snap && (direction === "x" ? "lg:snap-x lg:snap-mandatory" : "lg:snap-y lg:snap-mandatory"),
        className
      )}
    >
      {children}
    </div>
  );
};
