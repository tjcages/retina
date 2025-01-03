"use client";

import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { Spinner, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1 whitespace-nowrap rounded-md !leading-none font-medium pointer-events-auto transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 active:opacity-70 disabled:pointer-events-none disabled:!opacity-50 disabled:!cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-pink-primary text-white shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        tertiary: "uppercase p-2 bg-transparent hover:opacity-70 active:opacity-90",
        ghost: "hover:opacity-80 transition-all",
        link: "underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode | React.ReactNode[];
  asChild?: boolean;
  loading?: boolean;
  tooltip?: string;
  tooltipAlign?: "center" | "end" | "start";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      loading = false,
      tooltip,
      tooltipAlign,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      setIsMounted(true);
    }, []);

    const buttonElement = (
      <Comp className={cn("relative", buttonVariants({ variant, className }))} ref={ref} {...props}>
        <div
          className={cn(
            "flex select-none items-center transition-opacity duration-200 ease-in-out",
            {
              "opacity-0": loading
            }
          )}
        >
          {children}
        </div>
        {loading && <Spinner className="absolute h-5 w-5" isLoading={loading} />}
      </Comp>
    );

    if (!isMounted || !tooltip) {
      return buttonElement;
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
          <TooltipContent align={tooltipAlign}>{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
