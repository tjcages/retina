"use client";

import { motion } from "framer-motion";

import { Graphic } from "@/components/about";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1
  }
};

const _ = () => {
  return (
    <section className="flex h-[264px] snap-start items-center pt-8 md:h-[364px] md:max-h-[600px] lg:h-[45vh] xl:h-[65vh]">
      <motion.article
        className="relative flex h-full items-center justify-center gap-6 overflow-hidden rounded-[20px] border border-pink-secondary md:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Graphic className="pointer-events-auto absolute h-full w-full" />
      </motion.article>
    </section>
  );
};

export default _;
