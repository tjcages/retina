"use client";

import { cn } from "@/utils";
import { useState } from "react";

import { Icon } from "@/components/ui";

const items = [
  {
    header: "Full Logo",
    description:
      "The full logo locks up the Unichain icon with the wordmark, for use in more formal settings or lorem ipsum dolor sit amet consecetetur dolorem "
  },
  {
    header: "Unichain Icon",
    description:
      "The full logo locks up the Unichain icon with the wordmark, for use in more formal settings or lorem ipsum dolor sit amet consecetetur dolorem "
  },
  {
    header: "Vertical Lockup",
    description:
      "The full logo locks up the Unichain icon with the wordmark, for use in more formal settings or lorem ipsum dolor sit amet consecetetur dolorem "
  }
];

const _ = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Logo</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">01</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-12 lg:col-span-11 xl:col-span-9">
            {items.map((item, index) => (
              <div
                key={item.header}
                className={cn(
                  "flex flex-col gap-3 border-t border-secondary py-5 opacity-50 transition-all duration-200 ease-in-out last-of-type:pb-0",
                  selected === index && "border-pink-secondary opacity-100"
                )}
                onPointerEnter={() => setSelected(index)}
              >
                <h3>{item.header}</h3>
                <h5 className="text-secondary-foreground">{item.description}</h5>
              </div>
            ))}
          </div>
          <div className="relative col-span-full flex h-full items-center justify-center rounded-[20px] bg-secondary md:col-span-12 lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <Icon
              icon="Logo"
              className={cn(
                "absolute h-auto w-2/3 scale-50 text-pink-primary opacity-0 transition-all duration-200 ease-in-out",
                selected === 0 && "scale-100 opacity-100 delay-100"
              )}
            />
            <Icon
              icon="LogoIcon"
              className={cn(
                "absolute h-1/2 w-auto scale-50 text-pink-primary opacity-0 transition-all duration-200 ease-in-out",
                selected === 1 && "scale-100 opacity-100 delay-100"
              )}
            />
            <Icon
              icon="LogoVertical"
              className={cn(
                "absolute h-2/3 w-auto scale-50 text-pink-primary opacity-0 transition-all duration-200 ease-in-out",
                selected === 2 && "scale-100 opacity-100 delay-100"
              )}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
