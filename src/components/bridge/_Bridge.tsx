"use client";

import { Button, Icon, Image } from "@/components/ui";

const _ = () => {
  return (
    <section className="bg-transparent py-12 md:pb-16 md:pt-0">
      <article className="gap-6 md:gap-y-12">
        <div className="group col-span-12 flex cursor-pointer flex-col gap-6 rounded-[20px] bg-secondary p-5">
          <div className="h-auto w-full overflow-hidden rounded-xl">
            <Image
              className="h-auto w-full rounded-xl group-hover:scale-[1.01]"
              src="/assets/graphics/bridgg.png"
              alt="Brid.gg graphic"
              width={800}
              height={800}
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <h3>Brid.gg</h3>
            <div className="flex w-full items-center justify-between gap-6">
              <h5 className="text-secondary-foreground">by Brid.gg</h5>
              <Button variant="ghost" className="text-pink -my-4 -mr-5">
                Let&apos;s Bridge
                <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="group col-span-12 flex cursor-pointer flex-col gap-6 rounded-[20px] bg-secondary p-5">
          <div className="h-auto w-full overflow-hidden rounded-xl">
            <Image
              className="h-auto w-full rounded-xl group-hover:scale-[1.01]"
              src="/assets/graphics/superbridge.png"
              alt="Superbridge graphic"
              width={800}
              height={800}
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <h3>Superbridge</h3>
            <div className="flex w-full items-center justify-between gap-6">
              <h5 className="text-secondary-foreground">by Blob Engineering</h5>
              <Button variant="ghost" className="text-pink -my-4 -mr-5">
                Let&apos;s Bridge
                <Icon icon="ArrowUpRight" className="h-5 w-5 text-[#f94bdf]" />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default _;