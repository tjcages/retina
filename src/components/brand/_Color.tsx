"use client";

import { cn, delay } from "@/utils";
import { useState } from "react";

import { Button, Icon, Text } from "@/components/ui";

interface ColorBlockProps {
  hexCode: string;
  backgroundColor: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ hexCode, backgroundColor }) => {
  const [copied, setCopied] = useState(false);

  const copyHexCode = () => {
    navigator.clipboard.writeText(hexCode);
    setCopied(true);
    delay(2000).then(() => setCopied(false));
  };

  return (
    <div className={`group relative aspect-[4/1] w-full rounded-[20px] ${backgroundColor}`}>
      <Button
        variant="ghost"
        size="md"
        className="absolute bottom-3 right-3 rounded-xl bg-background p-2.5 text-secondary-foreground opacity-0 group-hover:opacity-100"
        onClick={copyHexCode}
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
        <Text>{copied ? `Copied ${hexCode}` : `Copy ${hexCode}`}</Text>
      </Button>
    </div>
  );
};

const _: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Color</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">03</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-start gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>Pink</h3>
            <h5 className="text-secondary-foreground">
              It&apos;s Unichain&apos;s primary color and secondary color — that&apos;s how strongly
              we feel about it. Pink is what people associate with the brand and makes Unichain
              instantly recognizable.
              <br />
              <br />
              Black, white, and greys supplement our pinks. Black and White can be applied to the
              logo when additional contrast is necessary.
            </h5>
          </div>
          <div className="relative col-span-full flex flex-col gap-5 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <ColorBlock hexCode="#F50DB4" backgroundColor="bg-pink-primary" />
            <ColorBlock hexCode="#FEAFF0" backgroundColor="bg-pink-secondary" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
