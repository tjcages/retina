"use client";

import { useLocalState } from "@/store";
import { cn } from "@/utils";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

// Create a context for scroll-related data and functions
interface ScrollContextType {
  scrollOffset: number;
  scrollProgress: number;
  onScroll: (callback: () => void) => void;
  scrollToTop: () => void; // Add this line
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// Custom hook to use the scroll context
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    console.error("useScroll must be used within a ScrollProvider");
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

interface Props {
  className?: string;
  direction?: "x" | "y";
  children?: React.ReactNode | React.ReactNode[];
  snap?: boolean;
  drag?: boolean;
}

export const Scroll: React.FC<Props> = ({ className, direction = "y", children, snap, drag }) => {
  const { menuVisible } = useLocalState();
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollCallbacks = useRef<(() => void)[]>([]);

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
      const walk = (x - startX) * 1;
      if (drag && containerRef.current) {
        containerRef.current.scrollLeft = scrollLeft - walk;
        setScrollProgress(containerRef.current.scrollLeft);
      }
    },
    [drag, isDragging, startX, scrollLeft]
  );

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      if (drag)
        setScrollProgress(
          direction === "x" ? containerRef.current.scrollLeft : containerRef.current.scrollTop
        );
      else {
        const progress = containerRef.current.scrollTop / containerRef.current.scrollHeight;
        setScrollOffset(containerRef.current.scrollTop);
        setScrollProgress(progress);
        // Call all registered scroll callbacks
        scrollCallbacks.current.forEach(callback => callback());
      }
    }
  }, [direction, drag]);

  const onScroll = useCallback((callback: () => void) => {
    scrollCallbacks.current.push(callback);
  }, []);

  const scrollToTop = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    if (drag) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (drag) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [drag, handleMouseDown, handleMouseLeave, handleMouseMove, handleMouseUp, handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const contextValue: ScrollContextType = {
    scrollOffset,
    scrollProgress,
    onScroll,
    scrollToTop // Add this line
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn(
          direction === "x"
            ? "overflow-x-auto overflow-y-hidden"
            : "overflow-y-auto overflow-x-hidden",
          snap &&
            (direction === "x" ? "lg:snap-x lg:snap-mandatory" : "lg:snap-y lg:snap-mandatory"),
          drag && "cursor-grab",
          isDragging && "cursor-grabbing",
          menuVisible && "pointer-events-none",
          className
        )}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
