"use client";

import { cn } from "@/utils";
import { useWindowSize } from "@react-hook/window-size";
import { MotionValue, motion, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { useRafLoop } from "react-use";

interface MarqueeItemProps {
  content: ReactNode;
  speed: MotionValue<number>;
  direction: "left" | "right";
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ content, speed, direction }) => {
  const item = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const x = useRef<number>(0);

  const [width, height] = useWindowSize();

  const setX = () => {
    if (!item.current || !rect.current) return;
    const xPercentage = (x.current / rect.current.width) * 100;
    if (direction === "left") {
      if (xPercentage <= -100) x.current = 0;
      if (xPercentage > 0) x.current = -rect.current.width;
    } else {
      if (xPercentage >= 0) x.current = -rect.current.width;
      if (xPercentage <= -100) x.current = 0;
    }
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    if (item.current) {
      rect.current = item.current.getBoundingClientRect();
    }
  }, [width, height]);

  const loop = () => {
    // Use negative speed for left direction, positive for right
    x.current += direction === "left" ? -speed.get() : speed.get();
    setX();
  };

  useRafLoop(loop, true);

  return (
    <div className="item" ref={item}>
      {content}
    </div>
  );
};

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  threshold?: number;
  dragFactor?: number;
  direction?: "left" | "right";
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className,
  speed = 1,
  threshold = 0.014,
  dragFactor = 1.2,
  direction = "left"
}) => {
  const marquee = useRef<HTMLDivElement>(null);
  const slowDown = useRef<boolean>(false);
  const x = useRef<number>(0);

  const springSpeed = useSpring(speed, {
    damping: 40,
    stiffness: 90,
    mass: 5
  });

  const onDragStart = () => {
    slowDown.current = true;
    marquee.current?.classList.add("drag");
    springSpeed.set(0);
  };

  const onDrag = (e: MouseEvent | PointerEvent, info: { delta: { x: number } }) => {
    // Reverse drag direction for right-moving marquee
    springSpeed.set(dragFactor * (direction === "left" ? -info.delta.x : info.delta.x));
  };

  const onDragEnd = () => {
    slowDown.current = false;
    marquee.current?.classList.remove("drag");
    x.current = direction === "left" ? speed : -speed;
  };

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < threshold) return;
    x.current *= 0.66;
    if (x.current < 0) {
      x.current = Math.min(x.current, 0);
    } else {
      x.current = Math.max(x.current, 0);
    }
    // Apply direction to the speed
    springSpeed.set((direction === "left" ? speed : -speed) + x.current);
  };

  useRafLoop(loop, true);

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      ref={marquee}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      dragElastic={0.000001}
    >
      <MarqueeItem content={children} speed={springSpeed} direction={direction} />
      <MarqueeItem content={children} speed={springSpeed} direction={direction} />
    </motion.div>
  );
};
