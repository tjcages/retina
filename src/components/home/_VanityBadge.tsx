"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface VanityBadgeProps {
  badges?: Array<"longest" | "blaze" | "four" | "zero" | "general">;
}

const vanityBadges = [
  {
    id: "longest",
    text: "🚜 Longest road",
    color: "#FF4D00",
    borderColor: "#FFE8BC",
    backgroundColor: "#FEF5EA"
  },
  {
    id: "blaze",
    text: "🌿 420 Blaze It",
    color: "#0C8911",
    borderColor: "#C2E7D0",
    backgroundColor: "#EEFBF1"
  },
  {
    id: "four",
    text: "🏇 Four Horsemen",
    color: "#996F01",
    borderColor: "#E2E0CD",
    backgroundColor: "#F7F6F1"
  },
  {
    id: "zero",
    text: "🧊 Zero Proof",
    color: "#0047FF",
    borderColor: "#D0D9F8",
    backgroundColor: "#EFF4FF"
  },
  {
    id: "general",
    text: "✨ Four Star General",
    color: "#9E62FF",
    borderColor: "#E9D8FD",
    backgroundColor: "#FEF4FF"
  }
];

const _: React.FC<VanityBadgeProps> = ({ badges = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badges.map((badgeId, index) => {
        const badge = vanityBadges.find(b => b.id === badgeId);
        if (!badge) return null;

        const isFirst = index === 0;
        const stackPosition = badges.length - index;

        return (
          <motion.div
            key={badge.id}
            className="whitespace-nowrap rounded-[6px] border px-2 pb-0.5 pt-1 text-sm"
            style={{
              color: badge.color,
              borderColor: badge.borderColor,
              backgroundColor: badge.backgroundColor,
              position: isFirst ? "relative" : "absolute",
              zIndex: stackPosition,
              left: 0,
              top: 0
            }}
            initial={
              !isFirst
                ? {
                    rotate: -5 + index * 3,
                    x: -3 + index * 2,
                    y: 2 + index * 1
                  }
                : {}
            }
            animate={
              isHovered
                ? {
                    rotate: 0,
                    x: 0,
                    y: index * -30,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }
                : {
                    rotate: !isFirst ? -5 + index * 3 : 0,
                    x: !isFirst ? -3 + index * 2 : 0,
                    y: !isFirst ? 2 + index * 1 : 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }
            }
          >
            {badge.text}
          </motion.div>
        );
      })}
    </div>
  );
};

export default _;
