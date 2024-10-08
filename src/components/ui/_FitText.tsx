"use client";

import { cn } from "@/utils";
import { useCallback, useEffect, useRef, useState } from "react";

interface FitTextProps {
  children: React.ReactNode;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

const FitText = ({ children, className, minFontSize = 12, maxFontSize = 400 }: FitTextProps) => {
  const [fontSize, setFontSize] = useState(minFontSize);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateFontSize = useCallback(() => {
    console.log("Calculating");
    if (textRef.current && containerRef.current) {
      let low = minFontSize;
      let high = maxFontSize;
      let current = (low + high) / 2;

      while (low <= high) {
        textRef.current.style.fontSize = `${current}px`;
        if (textRef.current.scrollWidth <= containerRef.current.clientWidth) {
          low = current + 1;
        } else {
          high = current - 1;
        }
        current = (low + high) / 2;
      }

      setFontSize(high);
    }
  }, [minFontSize, maxFontSize]);

  useEffect(() => {
    calculateFontSize();

    const resizeObserver = new ResizeObserver(calculateFontSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", calculateFontSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateFontSize);
    };
  }, [calculateFontSize, children]);

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div ref={textRef} className="w-full whitespace-nowrap" style={{ fontSize: `${fontSize}px` }}>
        {children}
      </div>
    </div>
  );
};

export { FitText };
