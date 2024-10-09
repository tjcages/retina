"use client";

import { motion } from "framer-motion";

import { useScroll } from "@/components/ui";

export default function PolicyContent() {
  const { scrollProgress } = useScroll();

  return (
    <div className="absolute -left-6 bottom-3 top-5 ml-[0.25px] hidden w-1 overflow-hidden rounded-full text-black lg:block">
      <motion.div
        className="absolute inset-0 origin-bottom rounded-full bg-pink-secondary"
        style={{ scaleY: 1 - scrollProgress / 0.85 }}
      />
    </div>
  );
}
