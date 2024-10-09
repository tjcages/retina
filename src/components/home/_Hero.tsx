"use client";

import { useInView } from "@/hooks";
import { envClient } from "@/lib";
import { cn, pageTransition } from "@/utils";
import { ArrowRightIcon, CodeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";
import { useRef } from "react";

import { Background, Button, Link } from "@/components/ui";

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
  const isInView = useInView(ref);
  const router = useTransitionRouter();

  const handleClick = (href: string) => {
    window.open(href);
  };

  const handleMainCTAClick = () => {
    // old
    // window.open(envClient.NEXT_PUBLIC_DOCS_URL + "/getting-started", "_blank");
    router.push("builder-toolkit", { onTransitionReady: pageTransition });
    // state.isSignUpVisible = true;
  };

  return (
    <>
      <Background className={cn(!isInView && "hidden")} />
      <section
        ref={ref}
        className="flex items-center bg-transparent pb-8 pt-16 md:min-h-[65vh] md:pb-12 md:pt-16"
      >
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
              <strong>Built</strong> by{" "}
              <Link
                href="http://uniswap.org/"
                variant="ghost"
                className="text-inherit hover:opacity-90"
              >
                Uniswap
              </Link>
              .
            </h1>
          </motion.div>
          <motion.h4
            className="col-span-full row-start-2 md:col-span-10 lg:col-span-9"
            variants={item}
          >
            Unichain is a DeFi-native Ethereum L2, built to be the home for liquidity
            across&nbsp;chains.
          </motion.h4>
          <motion.div className="col-span-7 row-start-3 flex items-center gap-3" variants={item}>
            <Button className="w-full" onClick={handleMainCTAClick}>
              <ArrowRightIcon className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button className="w-full" onClick={() => handleClick(envClient.NEXT_PUBLIC_DOCS_URL)}>
              <CodeIcon className="mr-2 h-5 w-5" />
              Read Docs
            </Button>
          </motion.div>
          <motion.div
            className="col-span-full flex items-start justify-start md:mt-8"
            variants={item}
          >
            {/* <Button
              variant="ghost"
              onClick={() => window.open("https://www.optimism.io/", "_blank")}
            >
              <Icon icon="Superchain" className="h-10 w-auto" />
            </Button> */}
            <Link variant="ghost" href="https://optimism.io/build">
              <h5 className="text-white/70">Built on the Superchain</h5>
            </Link>
          </motion.div>
        </motion.article>
      </section>
    </>
  );
};

export default _;
