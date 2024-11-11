import { cn } from "@/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-start justify-start rounded-xl px-3 pt-1.5 pb-1 uppercase text-sm font-mono font-light overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-secondary text-primary",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline:
          "px-1.5 py-0.5 whitespace-nowrap rounded-[8px] text-[12px] normal-case font-semibold border text-pink-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
