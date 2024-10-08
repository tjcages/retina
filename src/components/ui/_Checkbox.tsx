"use client";

import { cn } from "@/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { Icon } from "@/components/ui";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 rounded-[4px] border border-secondary-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-secondary-foreground/0 data-[state=checked]:bg-pink-500 data-[state=checked]:text-primary-foreground",
      "transition-all duration-200 ease-in-out",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Icon
        icon="Check"
        className="h-4 w-4 text-white transition-opacity duration-200 ease-in-out"
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
