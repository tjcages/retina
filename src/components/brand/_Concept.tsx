"use client";

import { useIsDesktop } from "@/hooks";

import { GridComponent, Image } from "@/components/ui";

const _ = () => {
  const isDesktop = useIsDesktop();
  const partners = Array.from({ length: 25 });
  return (
    <section className="snap-start bg-background py-12 md:py-16">
      <article className="gap-y-6 md:gap-y-12">
        <div className="col-span-full flex items-end gap-5">
          <h2>Concept</h2>
          <small className="mb-2.5 font-mono text-secondary-foreground">04</small>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-12 lg:col-span-11 xl:col-span-9">
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
          <div className="relative col-span-full flex aspect-[4/3] items-center justify-center rounded-[20px] bg-secondary p-10 md:col-span-12 lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <h5 className="absolute bottom-5 right-5 text-secondary-foreground">
              <strong>Fig. 1</strong>
            </h5>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-6">
          <div className="col-span-full flex h-full flex-col items-start gap-5 md:col-span-12 lg:col-span-11 xl:col-span-9">
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
          <div className="relative col-span-full flex items-center justify-center overflow-hidden rounded-[20px] bg-secondary p-10 md:col-span-12 lg:col-[12_/_span_15] xl:col-[10_/_span_15]">
            <GridComponent
              border
              gridLines
              squareSize={90}
              gap={0.5}
              maxRadius={45}
              influenceRadius={400}
              pixelRatio={isDesktop ? 4 : undefined}
              lerpFactor={0.05}
              squareColor={[1.0, 1.0, 0.9960784314]}
              backgroundColor={[0.9607843137, 0.9607843137, 0.9568627451]}
              className="relative aspect-square h-[453.5px] opacity-100 mix-blend-normal"
            />
            <div className="absolute grid aspect-square h-[453.5px] grid-cols-5 grid-rows-5 items-center justify-items-center">
              {partners.map((_, i) => (
                <Image
                  key={i}
                  src={`/assets/partner-icons/${i}.png`}
                  alt={`Partner ${i}`}
                  width={200}
                  height={200}
                  className="h-12 w-12 object-contain"
                />
              ))}
            </div>
            <h5 className="absolute bottom-5 right-5 text-secondary-foreground">
              <strong>Fig. 2</strong>
            </h5>
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;
