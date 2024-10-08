"use client";

import { svgContent } from "@/assets/icons/_logo";
import { cn, pageTransition } from "@/utils";
import { saveAs } from "file-saver";
import { AnimatePresence, motion } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Shortcut, ShortcutProps } from "@/components/ui";

interface ItemProps {
  children: React.ReactNode;
  href?: string;
  shortcut: ShortcutProps["chars"];
}

const Item: React.FC<ItemProps> = ({ children, href, shortcut }) => {
  const pathname = usePathname();
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

  const downloadSVG = () => {
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    saveAs(blob, "unichain-logo.svg");
  };

  const handleTrigger = () => {
    if (href) {
      if (pathname !== href) router.push(href, { onTransitionReady: pageTransition });
    } else {
      // Handle download SVG
      downloadSVG();
    }
  };

  return (
    <motion.div variants={itemVariants}>
      <div
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl bg-secondary p-3 text-pink-primary transition-all duration-200 ease-in-out hover:bg-pink-secondary/40 active:scale-95",
          pathname === href && "bg-pink-secondary/30"
        )}
        onClick={handleTrigger}
      >
        {children}
        <Shortcut chars={shortcut} onTrigger={handleTrigger} />
      </div>
    </motion.div>
  );
};

interface Props {
  children?: React.ReactNode;
}

const _: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); // Prevent the default context menu
    setIsVisible(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: "5%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.05
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
        mass: 1
      }
    }
  };

  return (
    <div
      className="relative z-20 md:flex md:items-center md:justify-center"
      onMouseLeave={() => setIsVisible(false)}
    >
      <motion.div
        variants={triggerVariants}
        animate={isVisible ? "bounce" : "initial"}
        onContextMenu={handleRightClick}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "pointer-events-none absolute top-full hidden min-w-[200px] max-w-sm flex-col gap-1 overflow-hidden rounded-2xl bg-background p-1 shadow-xl md:flex",
              isVisible && "pointer-events-auto"
            )}
          >
            <Item shortcut={["k"]} href="/brand-kit">
              Brand Kit
            </Item>
            <Item shortcut={["d"]}>Download SVG</Item>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default _;