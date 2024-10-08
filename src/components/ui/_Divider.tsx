"use client";

import { useInView } from "@/hooks";
import { cn } from "@/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { useRef } from "react";

const dividerVariants = cva("col-span-full h-px w-full", {
  variants: {
    variant: {
      default: "bg-pink-secondary",
      secondary: "bg-border",
      tertiary: "bg-pink-secondary"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

export const Divider = ({ className, variant = "default", ...props }: DividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} className="py-6">
      <article>
        <div
          className={cn(
            dividerVariants({ variant }),
            "origin-center scale-x-0 transition-transform delay-0 duration-100 ease-out",
            inView && "scale-x-100 delay-100 duration-1000",
            className
          )}
          {...props}
        />
        {variant === "default" && (
          <div
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform delay-0 duration-100",
              inView && "scale-100 delay-100 duration-1000"
            )}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 19.6195C29.1593 19.6195 20.3806 10.8319 20.3806 0H19.6195V19.6195H0V20.3805C10.8407 20.3805 19.6195 29.1681 19.6195 40H20.3806V20.3805H40V19.6195Z"
                fill="#FDAFF0"
              />
            </svg>
          </div>
        )}
      </article>
    </section>
  );
};
