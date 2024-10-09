"use client";

import { svgContent as logoSVGContent } from "@/assets/icons/_logo";
import { svgContent as logoIconSVGContent } from "@/assets/icons/_logo-icon";
import { svgContent as logoVerticalSVGContent } from "@/assets/icons/_logo-vertical";
import { useInView } from "@/hooks";
import { cn, delay } from "@/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { Button, Icon, Text } from "@/components/ui";

const items = [
  {
    header: "Full (Horizontal)",
    description:
      "This is the primary logo that is most recognizable. It works well in most environments. The vertical version is available when space is constrained or limited."
  },
  {
    header: "Full (Vertical)",
    description:
      "This version of the logo is available for instances where space is constrained or limited."
  },
  {
    header: "Logo",
    description:
      "It's called an icon because it's iconic. It's deceptively simple, and can be used as a shorthand for the Full logo."
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
    delay(2000).then(() => setCopied(false));
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
            className="group relative col-span-full hidden h-full items-center justify-center rounded-[20px] bg-secondary md:col-[9_/_span_16] md:flex lg:col-[12_/_span_15] xl:col-[10_/_span_15]"
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
              className="absolute bottom-3 right-3 rounded-xl bg-background p-2.5 text-secondary-foreground opacity-0 group-hover:opacity-100"
              onClick={copySVG}
            >
              <Icon
                icon="Copy"
                className={cn(
                  "mr-1 h-5 w-5 text-inherit transition-all delay-0 duration-200 ease-in",
                  copied && "scale-0 opacity-0 delay-0"
                )}
              />
              <Icon
                icon="Check"
                className={cn(
                  "absolute h-5 w-5 scale-0 text-[#21C95E] opacity-0 transition-all delay-0 duration-200 ease-out",
                  copied && "scale-100 opacity-100 delay-100"
                )}
              />
              <Text>{copied ? "Copied SVG" : "Copy SVG"}</Text>
            </Button>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default _;
