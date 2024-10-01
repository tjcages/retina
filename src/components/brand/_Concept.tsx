"use client";

import { useInView, useIsDesktop } from "@/hooks";
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { GridComponent, Image } from "@/components/ui";

const PartnerItem: React.FC<{ index: number }> = ({ index }) => {
  return (
    <motion.div
      key={index}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.05 * index }}
      className="absolute flex h-full w-full items-center justify-center"
    >
      <Image
        src={`/assets/partner-icons/${index}.png`}
        alt={`Partner ${index}`}
        width={200}
        height={200}
        className="h-12 w-12 object-contain"
      />
    </motion.div>
  );
};

const PartnershipGrid: React.FC<{ className?: string }> = ({ className }) => {
  const [partners, setPartners] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({ id: i, index: i }))
  );

  // Shuffle the partners once every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPartners(prevPartners =>
        prevPartners
          .sort(() => Math.random() - 0.5)
          .map((partner, i) => ({
            ...partner,
            id: i
          }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "absolute grid aspect-square h-[353.5px] grid-cols-5 grid-rows-5 items-center justify-items-center transition-opacity delay-1000 duration-1000 ease-in-out md:h-[453.5px]",
        className
      )}
    >
      <AnimatePresence>
        {partners.map(({ id, index }) => (
          <div key={id} className="relative h-full w-full">
            <PartnerItem key={`${id}-${index}`} index={index} />
          </div>
        ))}
      </AnimatePresence>
      <div className="absolute -left-8 bottom-0 top-0 grid grid-rows-subgrid">
        <div className="h-[1px] w-4 bg-primary" />
        <div className="h-[1px] w-4 bg-primary" />
        <div className="h-[1px] w-4 bg-primary" />
        <div className="h-[1px] w-4 bg-primary" />
        <div className="h-[1px] w-4 bg-primary" />
        <div className="absolute bottom-0 h-[1px] w-4 bg-primary" />
      </div>
      <h5 className="absolute -bottom-2 -right-14 ">
        <strong>Fig. 2</strong>
      </h5>
    </div>
  );
};

const PartnershipFigure: React.FC<{ className?: string }> = ({ className }) => {
  const isDesktop = useIsDesktop(453.5);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[20px] bg-secondary p-10",
        className
      )}
    >
      <GridComponent
        border
        gridLines
        squareSize={isDesktop ? 90 : 70}
        gap={0.5}
        influenceRadius={400}
        pixelRatio={isDesktop ? 4 : undefined}
        lerpFactor={0.05}
        squareColor={[1.0, 1.0, 0.9960784314]}
        backgroundColor={[0.9607843137, 0.9607843137, 0.9568627451]}
        className={cn(
          "relative aspect-square h-[353.5px] opacity-0 mix-blend-normal delay-1000 duration-1000 md:h-[453.5px]",
          inView && "opacity-100 delay-0"
        )}
      />
      <PartnershipGrid className={cn("opacity-0", inView && "opacity-100 delay-0")} />
    </div>
  );
};

const _ = () => {
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Concept</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">04</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <div className="flex flex-col gap-3 py-5">
              <h3>The Grid</h3>
              <h5 className="text-secondary-foreground">
                The logo is based on the xy=k formula as plotted on a graph. With this equation as
                the core element, the lines and grid extend from this center and reflect the
                scalability of the underlying tech stack, alluding to the breadth and depth of its
                liquidity.
              </h5>
            </div>
          </div>
          <div className="relative col-span-full flex aspect-[4/3] items-center justify-center rounded-[20px] bg-secondary p-10 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <div className="relative h-full">
              <Image
                className="aspect-square h-full w-auto object-contain"
                src="/assets/graphics/grid.png"
                alt="The Grid"
                width={1200}
                height={1200}
              />
              <h5 className="absolute -bottom-2 -right-14 text-primary">
                <strong>Fig. 1</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <div className="flex flex-col gap-3 py-5">
              <h3>Partnership & Community-Centric</h3>
              <h5 className="text-secondary-foreground">
                The gridded shapes that continue infinitely allude to the ecosystem of developers,
                protocols, apps, assets that Unichain serves. The fluidity and liquidity of the
                elements reveals the sparkle shape within the grid, while also representing the
                users, apps, networks, and tokens.
              </h5>
            </div>
          </div>
          <PartnershipFigure className="col-span-full md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]" />
        </div>
      </article>
    </section>
  );
};

export default _;
