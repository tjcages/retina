"use client";

import { Close } from "@/assets/icons";
import { state, useLocalState } from "@/store";
import { cn, delay, pageTransition } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";

import { Button } from "@/components/ui";

interface ItemProps {
  children: React.ReactNode;
  href?: string;
}

const Item: React.FC<ItemProps> = ({ children, href }) => {
  const router = useTransitionRouter();

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

  const handleTrigger = () => {
    state.menuVisible = false;
    delay(400).then(() => router.push(href || "/", { onTransitionReady: pageTransition }));
  };

  return (
    <motion.div variants={itemVariants}>
      <div
        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl bg-secondary px-4 py-3 text-lg text-pink-primary transition-colors duration-200 ease-in-out hover:bg-pink-secondary/40"
        onClick={handleTrigger}
      >
        {children}
      </div>
    </motion.div>
  );
};

interface Props {
  trigger?: React.ReactNode;
  className?: string;
}

const _: React.FC<Props> = ({ trigger, className }) => {
  const { menuVisible } = useLocalState();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delay: 0.25
      }
    }
  };

  const handleOpen = () => {
    state.menuVisible = true;
  };

  const handleDismiss = () => {
    state.menuVisible = false;
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <motion.div onClick={handleOpen}>{trigger}</motion.div>
      <AnimatePresence>
        <div
          className={cn(
            "pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-10 bg-[#fb27ce] opacity-0 backdrop-blur-lg transition-opacity duration-300 ease-in-out",
            menuVisible && "pointer-events-auto opacity-100"
          )}
          onClick={handleDismiss}
        />
        {menuVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col gap-3 p-5 pt-1"
            )}
          >
            <div
              className={cn(
                "flex max-h-full w-full items-center justify-end gap-3 overflow-scroll opacity-0 transition-opacity delay-0 duration-200 ease-in-out",
                menuVisible && "opacity-100 delay-1000 duration-500"
              )}
            >
              <Button variant="ghost" className="-mr-4" onClick={handleDismiss}>
                <Close className="h-6 w-6 text-white" />
              </Button>
            </div>
            <div className="pointer-events-auto flex flex-col gap-1 overflow-hidden rounded-2xl bg-background p-1">
              <Item href="https://blog.uniswap.org/v4-deployment-challenge-rules.pdf">Rules</Item>
            </div>
            <div className="pointer-events-auto flex flex-col gap-1 overflow-hidden rounded-2xl bg-background p-1">
              <Item href="https://x.com/uniswap">Twitter/X</Item>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default _;
