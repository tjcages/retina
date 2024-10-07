"use client";

import { svgContent as logoSVGContent } from "@/assets/icons/_logo";
import { svgContent as logoIconSVGContent } from "@/assets/icons/_logo-icon";
import { svgContent as logoVerticalSVGContent } from "@/assets/icons/_logo-vertical";
import { useInView } from "@/hooks";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { Button, Icon } from "@/components/ui";

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
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const isInView = useInView(ref);
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);

  // if copy is successful, show a success message and reset the copied state
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const copySVG = () => {
    // const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    // copy to clipboard
    switch (selected) {
      case 0:
        navigator.clipboard.writeText(logoSVGContent);
        break;
      case 1:
        navigator.clipboard.writeText(logoIconSVGContent);
        break;
      case 2:
        navigator.clipboard.writeText(logoVerticalSVGContent);
        break;
      default:
        break;
    }
    handleCopy();
  };

  return (
    <section ref={ref} className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Logo</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">01</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            {items.map((item, index) => (
              <div
                key={item.header}
                className={cn(
                  "flex flex-col gap-3 border-secondary py-5 transition-all duration-200 ease-in-out last-of-type:pb-0 md:border-t md:opacity-50",
                  selected === index && "border-pink-secondary md:opacity-100"
                )}
                onPointerEnter={() => setSelected(index)}
              >
                <div className="relative col-span-full flex aspect-[7/3] items-center justify-center rounded-[20px] bg-secondary md:hidden">
                  {index === 0 && <Icon icon="Logo" className="h-auto w-2/3 text-pink-primary" />}
                  {index === 1 && (
                    <Icon icon="LogoIcon" className="h-1/2 w-auto text-pink-primary" />
                  )}
                  {index === 2 && (
                    <Icon icon="LogoVertical" className="h-1/2 w-auto text-pink-primary" />
                  )}
                </div>
                <h3>{item.header}</h3>
                <h5 className="text-secondary-foreground">{item.description}</h5>
              </div>
            ))}
          </div>
          <motion.div
            className="relative col-span-full hidden h-full items-center justify-center rounded-[20px] bg-secondary md:col-[9_/_span_16] md:flex lg:col-[12_/_span_15] xl:col-[10_/_span_15]"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: isInView ? 1 : 0.1 }}
            transition={{ duration: 0.5 }}
          >
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
            <Button
              variant="outline"
              size="md"
              tooltip="Copy SVG icon"
              className="absolute bottom-3 right-3 bg-background"
              onClick={copySVG}
            >
              <Icon
                icon="Copy"
                className={cn(
                  "h-5 w-5 text-secondary-foreground transition-all delay-0 duration-200 ease-in",
                  copied && "scale-0 opacity-0 delay-0"
                )}
              />
              <Icon
                icon="Check"
                className={cn(
                  "absolute h-5 w-5 scale-0 text-pink-primary opacity-0 transition-all delay-0 duration-200 ease-out",
                  copied && "scale-100 opacity-100 delay-100"
                )}
              />
            </Button>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default _;
