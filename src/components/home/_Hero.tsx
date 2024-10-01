"use client";

import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { EmailSignup } from "@/components/shared";
import { Button } from "@/components/ui";

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
    <section className="flex snap-start items-center pb-8 pt-16 md:min-h-[75vh] md:py-24">
      <motion.article
        className="gap-6 text-white md:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="col-span-full row-start-1 flex flex-col md:col-[1_/_span_20]"
          variants={item}
        >
          <h1>
            <strong>Designed</strong> for DeFi.
          </h1>
          <h1>
            <strong>Built</strong> by Uniswap&nbsp;Labs.
          </h1>
        </motion.div>
        <motion.h4
          className="col-span-full row-start-2 md:col-span-10 lg:col-span-9"
          variants={item}
        >
          Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity
          across&nbsp;chains.
          <br />
          <strong>Powered</strong> by the Superchain.
        </motion.h4>
        <motion.div className="col-span-7 row-start-3 flex items-center gap-3" variants={item}>
          <Button className="w-full">
            <ArrowRightIcon className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button className="w-full">
            <CodeIcon className="mr-2 h-5 w-5" />
            Read Docs
          </Button>
        </motion.div>
      </motion.article>
      <EmailSignup />
    </section>
  );
};

export default _;
