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
        "absolute grid aspect-square h-[353.5px] grid-cols-5 grid-rows-5 items-center justify-items-center transition-opacity delay-0 duration-500 ease-in-out md:h-[453.5px]",
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
      <PartnershipGrid className={cn("opacity-10", inView && "opacity-100 delay-500")} />
    </div>
  );
};

const _ = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <section ref={ref} className="py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Concept</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">04</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <div className="flex flex-col gap-3 py-5">
              <h3>The Graph</h3>
              <h5 className="text-secondary-foreground">
                Rooted deep in the origins of Uniswap (even before the Unicorn) is the x*y=k formula
                that powers the AMM, enabling permissionless trading. The icon extend vertically and
                horizontally alluding to the breadth and depth of Unichain&apos;s vision for
                liquidity.
              </h5>
            </div>
          </div>
          <div className="relative col-span-full flex aspect-[4/3] items-center justify-center rounded-[20px] bg-secondary p-10 md:col-[9_/_span_16] lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <div
              className={cn(
                "relative h-full opacity-10 transition-opacity delay-0 duration-500 ease-in-out",
                isInView && "opacity-100 delay-500"
              )}
            >
              <Image
                className="aspect-square h-full w-auto object-contain"
                src="/assets/graphics/grid.png"
                alt="The Grid"
                width={1200}
                height={1200}
              />
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 463 472"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 right-0 top-0 xl:-bottom-2 xl:-right-2 xl:left-2 xl:top-2"
              >
                <motion.path
                  d="M248.955 18.3047C248.955 137.089 323.919 216.471 440.602 216.471"
                  stroke="#F50DB4"
                  strokeWidth="2"
                  variants={pathVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
                <motion.path
                  d="M211.799 451.141C211.799 332.356 136.835 252.975 20.1515 252.975"
                  stroke="#F50DB4"
                  strokeWidth="2"
                  variants={pathVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              </svg>
              <h5 className="absolute -bottom-2 -right-14 text-primary">
                <strong>Fig. 1</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-8 lg:col-span-10 xl:col-span-8">
            <div className="flex flex-col gap-3 py-5">
              <h3>Partners and Community</h3>
              <h5 className="text-secondary-foreground">
                The graph comes to life with color and interactivity — revealing shapes that
                represent users, assets, projects, apps, and networks that scale Unichain, Ethereum,
                and DeFi.
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
