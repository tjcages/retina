"use client";

import { motion } from "framer-motion";

import { Graphic } from "@/components/about";
import { EmailSignup } from "@/components/shared";
import { Image } from "@/components/ui";

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
        <Graphic className="absolute h-full w-full" />
        <Image
          className="relative h-20 w-20 object-contain md:h-32 md:w-32"
          src="/assets/icons/about-icon.png"
          alt="About Unichain Icon"
          width={800}
          height={800}
        />
      </motion.article>
      <EmailSignup />
    </section>
  );
};

export default _;
