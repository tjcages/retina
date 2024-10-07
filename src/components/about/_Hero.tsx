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
    <section className="flex snap-start items-center pt-8">
      <motion.article
        className="relative flex h-[264px] items-center justify-center gap-6 overflow-hidden rounded-[20px] border border-pink-secondary md:min-h-[65vh] md:gap-12"
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
