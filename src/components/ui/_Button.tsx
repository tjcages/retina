"use client";

import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./_Tooltip";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-2xl text-primary font-medium pointer-events-auto transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 active:opacity-70 disabled:pointer-events-none disabled:!opacity-50 disabled:!cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-dark text-white shadow hover:bg-primary/90",
        outline: "text-pink-primary bg-transparent hover:opacity-70 active:opacity-90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:opacity-80 transition-all",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "px-5 py-3 text-xl",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "px-24 py-4 rounded-2xl text-xl",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  tooltip?: string;
  tooltipAlign?: "center" | "end" | "start";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, tooltip, tooltipAlign, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      setIsMounted(true);
    }, []);

    const buttonElement = (
      <Comp
        className={cn("relative", buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
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
