"use client";

import { cn } from "@/utils";
import React, { useEffect, useRef, useState } from "react";

interface SuperchainTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  duration?: number;
}

const ChainText = React.forwardRef<HTMLHeadingElement, SuperchainTextProps>(
  ({ text, duration = 500, className, ...props }, ref) => {
    const lastMousePositionRef = useRef<{ x: number; y: number } | null>(null);
    const [hoveredLetters, setHoveredLetters] = useState<boolean[]>([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) {
        const interval = setInterval(() => {
          setHoveredLetters(prev => {
            const newState = [...prev];
            const falseIndices = newState.reduce<number[]>(
              (acc, val, idx) => (!val ? [...acc, idx] : acc),
              []
            );
            if (falseIndices.length > 0) {
              const lastMousePosition = lastMousePositionRef.current;
              if (lastMousePosition) {
                const closestIndex = falseIndices.reduce((closest, current) => {
                  const currentRect = document
                    .getElementById(`letter-${current}`)
                    ?.getBoundingClientRect();
                  if (currentRect) {
                    const currentDistance = Math.sqrt(
                      Math.pow(currentRect.left + currentRect.width / 2 - lastMousePosition.x, 2) +
                        Math.pow(currentRect.top + currentRect.height / 2 - lastMousePosition.y, 2)
                    );
                    const closestRect = document
                      .getElementById(`letter-${closest}`)
                      ?.getBoundingClientRect();
                    if (closestRect) {
                      const closestDistance = Math.sqrt(
                        Math.pow(
                          closestRect.left + closestRect.width / 2 - lastMousePosition.x,
                          2
                        ) +
                          Math.pow(
                            closestRect.top + closestRect.height / 2 - lastMousePosition.y,
                            2
                          )
                      );
                      return currentDistance < closestDistance ? current : closest;
                    }
                  }
                  return closest;
                }, falseIndices[0]);
                newState[closestIndex] = true;
              } else {
                const randomIndex = falseIndices[Math.floor(Math.random() * falseIndices.length)];
                newState[randomIndex] = true;
              }
            }
            return newState;
          });
        }, duration / text.length);

        return () => clearInterval(interval);
      } else {
        const interval = setInterval(() => {
          setHoveredLetters(prev => {
            const newState = [...prev];
            const trueIndices = newState.reduce<number[]>(
              (acc, val, idx) => (val ? [...acc, idx] : acc),
              []
            );
            if (trueIndices.length > 0) {
              const randomIndex = trueIndices[Math.floor(Math.random() * trueIndices.length)];
              newState[randomIndex] = false;
            }
            return newState;
          });
        }, duration / text.length);

        return () => clearInterval(interval);
      }
    }, [isHovered, duration, text]);

    const handleMouseEnter = (event: React.MouseEvent<HTMLHeadingElement>) => {
      setIsHovered(true);
      lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
      setHoveredLetters(Array(text.length).fill(false));
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLHeadingElement>) => {
      setIsHovered(false);
      lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
      if (isHovered) {
        lastMousePositionRef.current = { x: event.clientX, y: event.clientY };
      }
    };

    return (
      <h5
        ref={ref}
        className={cn("h-4 cursor-pointer", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {text.split("").map((letter, index) => (
          <span
            key={index}
            id={`letter-${index}`}
            className={hoveredLetters[index] ? "font-riegraf text-[1.25rem] italic" : ""}
          >
            {letter}
          </span>
        ))}
      </h5>
    );
  }
);

ChainText.displayName = "ChainText";

export { ChainText };
