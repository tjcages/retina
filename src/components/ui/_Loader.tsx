"use client";

import { cn } from "@/utils";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useId, useState } from "react";

gsap.registerPlugin(Flip);

interface Props {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export const Loader: React.FC<Props> = ({
  isLoading = true,
  size = "md",
  color = "#ffffff",
  className
}) => {
  const id = useId().replaceAll(":", "");
  const [loaderPosition, setLoaderPosition] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const loader = document.getElementById(`loader-circle-${id}`);
    if (!loader) return;
    const state = Flip.getState(loader);

    const loader0 = "left-[32.5%] top-[15%] bottom-auto right-auto";
    const loader1 = "left-auto top-auto bottom-[10%] right-[10%]";
    const loader2 = "left-[10%] top-auto bottom-[10%] right-auto";

    if (loaderPosition === 0) {
      loader.classList.remove(...loader1.split(" "));
      loader.classList.remove(...loader2.split(" "));
      loader.classList.add(...loader0.split(" "));
    } else if (loaderPosition === 1) {
      loader.classList.remove(...loader0.split(" "));
      loader.classList.remove(...loader2.split(" "));
      loader.classList.add(...loader1.split(" "));
    } else if (loaderPosition === 2) {
      loader.classList.remove(...loader0.split(" "));
      loader.classList.remove(...loader1.split(" "));
      loader.classList.add(...loader2.split(" "));
    }

    Flip.from(state, {
      duration: 1,
      ease: "expo.inOut",
      onComplete: () => {
        if (isLoading) setLoaderPosition(l => (l === 0 ? 1 : l === 1 ? 2 : 0));
      }
    });
  }, [id, isLoading, loaderPosition]);

  useEffect(() => {
    const loader = document.getElementById(`loader-circle-2-${id}`);
    if (!loader) return;
    const state = Flip.getState(loader);

    const loader0 = "left-auto top-auto bottom-[10%] right-[10%]";
    const loader1 = "left-[10%] top-auto bottom-[10%] right-auto";
    const loader2 = "left-[32.5%] top-[15%] bottom-auto right-auto";

    if (loaderPosition === 0) {
      loader.classList.remove(...loader1.split(" "));
      loader.classList.remove(...loader2.split(" "));
      loader.classList.add(...loader0.split(" "));
    } else if (loaderPosition === 1) {
      loader.classList.remove(...loader0.split(" "));
      loader.classList.remove(...loader2.split(" "));
      loader.classList.add(...loader1.split(" "));
    } else if (loaderPosition === 2) {
      loader.classList.remove(...loader0.split(" "));
      loader.classList.remove(...loader1.split(" "));
      loader.classList.add(...loader2.split(" "));
    }

    Flip.from(state, {
      duration: 1,
      ease: "expo.inOut"
    });
  }, [id, loaderPosition]);

  useEffect(() => {
    if (isLoading) {
      gsap.set(`#loader-${id}`, { rotate: 0 });
      gsap.to(`#loader-${id}`, {
        rotate: 360,
        duration: 3,
        ease: "linear",
        repeat: -1
      });
    } else gsap.to(`#loader-${id}`, { rotate: 720, duration: 1, overwrite: true });
  }, [id, isLoading]);

  return (
    <div
      className={cn(
        "scale-0 opacity-0 mix-blend-screen transition-all duration-500 ease-in-out",
        isLoading && "scale-100 opacity-100"
      )}
    >
      <div
        id={`loader-${id}`}
        className={cn(
          "pointer-events-auto relative overflow-hidden",
          size === "sm" && "h-10 w-10 scale-[0.6]",
          size === "md" && "h-16 w-16 scale-[0.8]",
          size === "lg" && "h-24 w-24",
          className
        )}
      >
        <div
          className="absolute left-0 top-0 h-full w-full bg-white"
          style={{
            filter:
              size === "sm"
                ? "blur(2px) contrast(12) invert(1)"
                : "blur(3px) contrast(12) invert(1)"
          }}
        >
          <div className="absolute left-1/2 top-[15%] aspect-square h-[35%] -translate-x-1/2 rounded-full bg-black opacity-70" />
          <div className="absolute bottom-[10%] right-[10%] aspect-square h-[35%] rounded-full bg-black opacity-60" />
          <div className="absolute bottom-[10%] left-[10%] aspect-square h-[35%] rounded-full bg-black opacity-65" />
          <div
            id={`loader-circle-${id}`}
            className="absolute left-1/2 top-[15%] aspect-square h-[35%] rounded-full bg-black"
          />
          <div
            id={`loader-circle-2-${id}`}
            className="absolute bottom-[10%] left-auto right-[10%] top-auto aspect-square h-[35%] rounded-full bg-black"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-1 z-10 mix-blend-multiply"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};
