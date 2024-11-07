"use client";

import { state } from "@/store";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button, Icon } from "@/components/ui";

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
  const ref = useRef<HTMLDivElement>(null);

  const handleMainCTAClick = () => {
    state.isRulesVisible = true;
  };

  return (
    <section ref={ref} className="flex items-center bg-transparent pt-8 md:pb-8 md:pt-16">
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
          <V4 className="pointer-events-auto mb-6 h-auto w-48 lg:w-52" />
          <h2 className="font-mono">
            <strong>{"</"}</strong>Address Challenge<strong>{">"}</strong>
          </h2>
        </motion.div>
        <motion.h4
          className="col-span-full col-start-1 text-center lg:col-span-12 lg:col-start-7 xl:col-span-10 xl:col-start-8"
          variants={item}
        >
          Find a salt value that will deploy the Uniswap V4 protocol to an optimal address.
        </motion.h4>
        <motion.div
          className="col-span-full mt-4 flex items-center justify-center gap-3"
          variants={item}
        >
          <Button onClick={handleMainCTAClick}>
            <Icon icon="Rules" className="mr-2 h-6 w-6" />
            Challenge rules
          </Button>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default _;
