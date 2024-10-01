"use client";

import { motion } from "framer-motion";

import { EmailSignup } from "@/components/shared";
import { Background } from "@/components/ui";

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
        className="relative min-h-[264px] gap-6 overflow-hidden rounded-[20px] md:min-h-[65vh] md:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Background className="static h-full w-full" />
      </motion.article>
      <EmailSignup />
    </section>
  );
};

export default _;
