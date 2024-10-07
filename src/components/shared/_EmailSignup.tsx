"use client";

import { useIsDesktop } from "@/hooks";
import { state } from "@/store";
import { cn, delay } from "@/utils";
import { AnimatePresence, PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

const _: React.FC<Props> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useIsDesktop();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useTransform([x, y], ([latestX, latestY]) => {
    if ((latestX as number) > 0 && (latestY as number) > 0)
      return 1 - Math.min(1, (Math.abs(latestX as number) + Math.abs(latestY as number)) / 400);
    return 1;
  });

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offsetX = info.offset.x;
    const offsetY = info.offset.y;
    if (offsetX > 100 && offsetY > 100) {
      setIsVisible(false);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleSignUp = () => {
    state.isSignUpVisible = true;
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    delay(1000).then(() => setIsVisible(true));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          style={{ x, y }}
          initial={{ x: isDesktop ? "100%" : "0%", y: "100%", scale: 0.5, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          exit={{ x: "100%", y: "100%", scale: 0.5, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            mass: 1
          }}
          className={cn(
            "absolute bottom-8 right-8 z-20 hidden w-full max-w-sm flex-col gap-5 overflow-hidden rounded-3xl p-5 pt-4 shadow-xl backdrop-blur-md md:flex",
            className
          )}
        >
          <motion.div className="absolute inset-0 z-0 bg-background" style={{ opacity }} />
          <div className="relative flex flex-col gap-1">
            <h5 className="h-6 text-base">Join the community building on Unichain</h5>
            <p>Sign up for Unichain updates and events.</p>
          </div>
          <div className="relative flex w-full gap-3">
            <Button
              type="submit"
              size="md"
              className="w-full bg-pink-secondary-foreground text-base"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              className="w-full text-base"
              onClick={handleDismiss}
            >
              Dismiss
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default _;
