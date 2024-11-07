"use client";

import { CaretDown, Discord, Menu, Twitter } from "@/assets/icons";
import { state, useLocalState } from "@/store";
import { cn, interpolateColors, pageTransition } from "@/utils";
import { useAnimationFrame } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { DropdownMenu, LogoBrandMenu, MobileMenu } from "@/components/shared";
import { Button, Link, useScroll } from "@/components/ui";

interface Props {
  variant?: "primary" | "secondary";
}

const duration = 250;

// Ease-in-out function (cubic bezier approximation)
const easeInOut = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const _: React.FC<Props> = ({ variant = "primary" }) => {
  const pathname = usePathname();
  const router = useTransitionRouter();
  const { menuVisible, isRulesVisible } = useLocalState();
  const { scrollOffset, scrollToTop } = useScroll();
  const belowFold = scrollOffset > 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const interpolatedColorsLinear = interpolateColors([251, 39, 206], [255, 255, 255], duration); // #fb27ce -> #ffffff
  const interpolatedColorsLinearWhiteToDim = interpolateColors(
    [255, 255, 255],
    [106, 110, 109],
    duration
  ); // #ffffff -> #6a6e6d
  const [transitionProgress, setTransitionProgress] = useState(0);
  const lastScrollTime = useRef(Date.now());

  const handleTrigger = () => {
    if (pathname !== "/") router.push("/", { onTransitionReady: pageTransition });
    else scrollToTop();
  };

  const updateThemeColor = useCallback(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (!metaTag) return;

    const now = Date.now();
    const timeDiff = now - lastScrollTime.current;
    lastScrollTime.current = now;

    let targetProgress: number;
    let currentInterpolation: number[][];

    if (isRulesVisible) {
      targetProgress = 1;
      currentInterpolation = interpolatedColorsLinearWhiteToDim;
    } else if (menuVisible) {
      targetProgress = 0;
      currentInterpolation = interpolatedColorsLinear;
    } else if (belowFold) {
      targetProgress = 1;
      currentInterpolation = interpolatedColorsLinear;
    } else {
      targetProgress = variant === "primary" ? 0 : 1;
      currentInterpolation = interpolatedColorsLinear;
    }

    const newProgress = Math.max(
      0,
      Math.min(
        1,
        targetProgress === 1
          ? transitionProgress + timeDiff / duration
          : transitionProgress - timeDiff / duration
      )
    );

    setTransitionProgress(newProgress);

    // Apply ease-in-out function to the progress
    const easedProgress = easeInOut(newProgress);

    const colorIndex = Math.floor(easedProgress * (currentInterpolation.length - 1));
    const color = currentInterpolation[colorIndex];
    metaTag.setAttribute("content", `rgb(${color.join(",")})`);
  }, [
    menuVisible,
    belowFold,
    variant,
    transitionProgress,
    interpolatedColorsLinear,
    interpolatedColorsLinearWhiteToDim,
    isRulesVisible
  ]);

  useEffect(() => {
    lastScrollTime.current = Date.now();
  }, [belowFold]);

  useAnimationFrame(() => {
    updateThemeColor();
  });

  useEffect(() => {
    state.isBelowFold = belowFold;
  }, [belowFold]);

  return (
    <section
      className={cn(
        "sticky top-0 z-50 select-none border-b border-pink-secondary/0 bg-transparent py-1.5 text-primary transition-colors duration-300 ease-in-out md:py-3.5",
        variant === "secondary" && "text-primary",
        belowFold && "border-pink-secondary bg-background text-pink-primary",
        menuVisible && "text-white"
      )}
    >
      <header>
        <div className="pointer-events-auto col-span-full grid grid-cols-subgrid items-center gap-3">
          <LogoBrandMenu>
            <div
              className={cn(
                "relative z-20 col-span-4 md:col-span-8",
                pathname !== "/" && "cursor-pointer"
              )}
              onClick={handleTrigger}
            >
              <h4 className="whitespace-nowrap">Uniswap v4</h4>
            </div>
          </LogoBrandMenu>

          <div className="-col-start-1 hidden items-center gap-3 md:flex">
            <DropdownMenu>
              <div className="relative flex cursor-pointer items-center justify-center px-4 py-2 text-inherit">
                Developers <CaretDown className="h-4 w-4 text-inherit" />
              </div>
            </DropdownMenu>
            <Link
              variant="ghost"
              href="/about"
              className="mx-0 cursor-pointer px-4 py-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
            >
              About
            </Link>
            <Link
              variant="ghost"
              href="https://x.com/unichain"
              className="mx-0 flex items-center px-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
            >
              <Twitter className="h-[17px] w-[17px] text-inherit" />
            </Link>
            <Link
              variant="ghost"
              href="https://discord.com/invite/uniswap"
              className="mx-0 px-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
            >
              <Discord className="h-7 w-7 text-inherit" />
            </Link>
          </div>
          <MobileMenu
            className="col-span-3 -col-start-1 md:hidden"
            trigger={
              <Button
                variant="ghost"
                className="text-inherit"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 min-h-6 w-6 min-w-6 text-inherit" />
              </Button>
            }
          />
        </div>
      </header>
    </section>
  );
};

export default _;
