"use client";

import { useInView } from "@/hooks";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Badge, Button, Image } from "@/components/ui";

interface Props {
  index?: number;
  header: string;
  description: string;
  graphic?: string;
  video?: string;
  cta?: string;
  comingSoon?: boolean;
}

const Item: React.FC<Props> = ({ index, header, description, graphic, video, cta, comingSoon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div className="col-span-full col-start-1 -col-end-1 grid grid-cols-subgrid items-center gap-6 lg:col-start-2 lg:-col-end-2 xl:col-start-4 xl:-col-end-4">
      <div className="col-span-full flex flex-col items-start gap-3 md:col-span-12 lg:col-span-11 xl:col-span-9">
        {comingSoon && <Badge>Coming soon</Badge>}
        <h3>{header}</h3>
        <h5 className="text-secondary-foreground">{description}</h5>
        {cta !== undefined && (
          <Button variant="ghost" className="text-pink -ml-5 -mt-3 outline-none">
            Learn more
          </Button>
        )}
      </div>
      <div
        ref={ref}
        className={`col-span-full row-start-1 aspect-[4/3] overflow-hidden rounded-2xl bg-secondary ${(index || 0) % 2 === 0 ? "md:row-start-1" : "md:row-start-auto"} md:col-span-12 lg:col-span-11 xl:col-span-9`}
      >
        {video !== undefined && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <video
              className="pointer-events-none h-full w-full select-none object-cover"
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
            >
              <source src={video} type="video/mp4" />
              {graphic !== undefined && (
                <Image
                  className="h-full w-full object-cover"
                  src={graphic}
                  alt={header}
                  width={800}
                  height={800}
                />
              )}
            </video>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const sections: Props[] = [
  {
    header: "Open Source Innovations for the Superchain",
    description:
      "Unichain is built on the OP Stack. Technical innovations introduced by Unichain are open source, and available for any rollup to adopt.",
    graphic: "/assets/graphics/superchain.png",
    video: "/assets/videos/superchain.mp4"
  },
  {
    header: "Community Verification Service",
    description:
      "A network of full nodes monitor and verify the actions of the sequencer, bringing faster settlement and more decentralization to Unichain.",
    graphic: "/assets/graphics/sequencer.png",
    video: "/assets/videos/sequencer.mp4",
    cta: "",
    comingSoon: true
  },
  {
    header: "Provable Block Building",
    description:
      "Block building will be delegated to a trusted execution environment developed by Flashbots, enabling trustless transaction ordering.",
    graphic: "/assets/graphics/execution.png",
    video: "/assets/videos/execution.mp4",
    cta: "",
    comingSoon: true
  }
];

const _ = () => {
  return (
    <section className="py-12 md:py-24">
      <article className="gap-6">
        <div className="col-span-full flex items-center justify-center">
          <h2 className="text-pink col-span-full text-center md:col-span-10">
            Built to <strong>scale</strong> Ethereum
          </h2>
        </div>
        {sections.map((section, index) => (
          <Item key={index} index={index} {...section} />
        ))}
      </article>
    </section>
  );
};

export default _;
