"use client";

import { cn } from "@/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { type VariantProps, cva } from "class-variance-authority";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import * as React from "react";
import { useEffect, useId } from "react";

gsap.registerPlugin(Flip);

const switchVariants = cva(
  "relative flex flex-shrink-0 cursor-pointer items-start overflow-hidden rounded-full shadow-[inset_0px_1px_2px_0px_rgba(0,0,0,0.25)] transition-colors duration-300 ease-in",
  {
    variants: {
      variant: {
        default: ""
      },
      size: {
        default: "h-10 w-20",
        sm: "h-9 w-16"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, variant, size, ...props }, ref) => {
    const id = useId().replaceAll(":", "");

    useEffect(() => {
      const component = document.querySelector(`#switch-component-${id}`);
      if (!component) return;
      const state = Flip.getState(component);
      const componentSelected = "left-auto right-0";
      const componentUnselected = "left-0 right-auto";
      if (props.checked) {
        component.classList.remove(...componentUnselected.split(" "));
        component.classList.add(...componentSelected.split(" "));
      } else {
        component.classList.remove(...componentSelected.split(" "));
        component.classList.add(...componentUnselected.split(" "));
      }
      Flip.from(state, {
        duration: 0.4,
        ease: "expo.inOut"
      });
    }, [id, props.checked]);

    console.log(props.checked);

    return (
      <SwitchPrimitives.Root
        className={cn(
          switchVariants({ variant, size, className }),
          props.checked ? "bg-[#fe621b]" : "bg-secondary"
        )}
        {...props}
        ref={ref}
        onClick={props.onChange}
      >
        <SwitchPrimitives.Thumb
          id={`switch-component-${id}`}
          className="absolute bottom-0 left-0 top-0 aspect-square h-full p-[3px]"
        >
          <div className="relative aspect-square h-full origin-center rounded-full bg-white bg-gradient-to-b from-white to-[#d1d1d150] shadow-[0px_0.824357px_1.1541px_-0.625px_rgba(0,0,0,0.26),0px_2.10766px_2.95072px_-1.25px_rgba(0,0,0,0.25),0px_4.22539px_5.91554px_-1.875px_rgba(0,0,0,0.243),0px_8.00987px_11.2138px_-2.5px_rgba(0,0,0,0.224),0px_15.9212px_22.2897px_-3.125px_rgba(0,0,0,0.184),0px_35px_49px_-3.75px_rgba(0,0,0,0.086)]"></div>
          <div
            className={cn(
              "absolute -left-1/2 top-1/2 h-4 w-[3px] -translate-y-1/2 bg-white",
              size === "sm" && "-left-1/3"
            )}
          />
          <div
            className={cn(
              "absolute -right-2/3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-blue-500",
              size === "sm" && "-right-1/2"
            )}
          />
        </SwitchPrimitives.Thumb>
      </SwitchPrimitives.Root>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
