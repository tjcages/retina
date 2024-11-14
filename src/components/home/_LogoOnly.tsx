"use client";

import { motion } from "framer-motion";

import V4 from "./_V4";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const _ = () => {
  return (
    <section className="flex items-center bg-transparent pt-8 md:pb-8 md:pt-16">
      <motion.article
        className="gap-6 md:gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="col-span-full row-start-1 flex flex-col items-center"
          variants={item}
        >
          <V4 className="pointer-events-auto mb-6 h-auto w-48 md:w-52 lg:w-64" />
        </motion.div>
      </motion.article>
    </section>
  );
};

export default _;
