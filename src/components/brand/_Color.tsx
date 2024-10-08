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
            <h3>Pink</h3>
            <h5 className="text-secondary-foreground">
              It&apos;s Unichain&apos;s primary color and secondary color — that&apos;s how strongly
              we feel about it. Pink is what people associate with the brand and makes Unichain
              instantly recognizable.
              <br />
              <br />
              *Black, white, and greys supplement our Pinks. Black and White can be applied to the
              logo when additional contrast is necessary.
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
