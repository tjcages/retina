"use client";

import { cn } from "@/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
  "text-sm text-white/50 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      required?: boolean;
    }
>(({ required, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      { "after:ml-0.5 after:text-red-500 after:content-['*']": required },
      className
    )}
    aria-required={required}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
