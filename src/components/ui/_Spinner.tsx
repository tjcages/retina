"use client";

import { cn } from "@/utils";

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={cn("relative h-10 w-10", className)} aria-label="Loading">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="absolute w-[15%] rounded-full bg-gray-400"
          style={{
            height: "35%",
            top: "32.5%",
            left: "42.5%",
            transform: `rotate(${index * 45}deg) translate(0, -120%)`,
            animation: `ios-spinner-fade 1s linear ${index * 0.125}s infinite`,
            borderRadius: "4px"
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ios-spinner-fade {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export { Spinner };
