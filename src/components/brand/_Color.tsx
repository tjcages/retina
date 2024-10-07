"use client";

import { Button } from "@/components/ui";

const Typography: React.FC = () => {
  const copyHexCode = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };
  return (
    <section className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Color</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">03</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-start gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>Vibrant Pink</h3>
            <h5 className="text-secondary-foreground">
              Primary Pink is the hero brand color. The Primary color is supported by Secondary
              Pink, and Neutral shades fill out the palette with options for contrast.
            </h5>
          </div>
          <div className="relative col-span-full flex flex-col gap-5 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <Button
              variant="ghost"
              tooltip="Copy hex code"
              className="aspect-[4/1] w-full rounded-[20px] bg-pink-primary"
              onClick={() => copyHexCode("#f50db4")}
            />
            <Button
              variant="ghost"
              tooltip="Copy hex code"
              className="aspect-[4/1] w-full rounded-[20px] bg-pink-secondary"
              onClick={() => copyHexCode("#feaff0")}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Typography;
