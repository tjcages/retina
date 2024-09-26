"use client";

import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Shortcut, ShortcutProps } from "@/components/ui";

interface ItemProps {
  children: React.ReactNode;
  shortcut: ShortcutProps["chars"];
}

const Item: React.FC<ItemProps> = ({ children, shortcut }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 1
      }
    }
  };
  return (
    <motion.div variants={itemVariants}>
      <div className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl bg-secondary p-3 text-pink-primary transition-colors duration-200 ease-in-out hover:bg-pink-secondary/40">
        {children}
        <Shortcut chars={shortcut} />
      </div>
    </motion.div>
  );
};

interface Props {
  trigger?: React.ReactNode;
}

const _: React.FC<Props> = ({ trigger }) => {
  const [isVisible, setIsVisible] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: "5%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delay: 0.25
      }
    }
  };

  const triggerVariants = {
    initial: { y: 0 },
    bounce: {
      y: -4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        mass: 1,
        delay: 0.25
      }
    }
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onPointerEnter={() => setIsVisible(true)}
      onPointerLeave={() => setIsVisible(false)}
    >
      <motion.div variants={triggerVariants} animate={isVisible ? "bounce" : "initial"}>
        {trigger}
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "pointer-events-none absolute top-full hidden min-w-[200px] max-w-sm flex-col gap-1 rounded-2xl bg-background p-1 shadow-xl md:flex",
              isVisible && "pointer-events-auto"
            )}
          >
            <Item shortcut={["g"]}>Get Started</Item>
            <Item shortcut={["d"]}>Developer Docs</Item>
            <Item shortcut={["t"]}>Testnet</Item>
            <Item shortcut={["b"]}>Block Explorer</Item>
            <Item shortcut={["s"]}>Status</Item>
            <Item shortcut={["x"]}>Bug Bounty</Item>
            <Item shortcut={["h"]}>Github</Item>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default _;
