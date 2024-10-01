"use client";

import React from "react";

const Typography: React.FC = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Typography</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">02</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-start gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>Basel Grotesk</h3>
            <h5 className="text-secondary-foreground">
              Unichain uses Basel Grotesk from Optimo as its primary typeface. It’s a strong,
              trustworthy workhorse sans.
            </h5>
          </div>
          <div className="relative col-span-full row-start-1 flex flex-col gap-5 border-b md:col-[9_/_span_16] md:row-start-auto lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <h1 className="text-[12.5vw] md:-mb-3 md:text-[15.5vw]">AaBbCc</h1>
          </div>
        </div>
        <div className="col-span-full mt-6 grid grid-cols-subgrid items-start gap-6 md:mt-0">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <h3>Riegraf</h3>
            <h5 className="text-secondary-foreground">
              Riegraf’s italics bring a unique character to balance Basel’s solidity, punctuating
              the sans with emphasis.
            </h5>
          </div>
          <div className="relative col-span-full row-start-1 flex flex-col gap-5 border-b md:col-[9_/_span_16] md:row-start-auto md:border-b-0 lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <h1 className="text-[12.5vw] md:-mt-9 md:text-[15.5vw]">
              <strong>AaBbCc</strong>
            </h1>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Typography;
