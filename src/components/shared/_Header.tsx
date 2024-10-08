"use client";

import { Discord, Logo, Menu, Twitter } from "@/assets/icons";
import { envClient } from "@/lib";
import { state, useLocalState } from "@/store";
import { cn, interpolateColors, pageTransition } from "@/utils";
import { useAnimationFrame } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { LogoBrandMenu, MobileMenu } from "@/components/shared";
import { Button, useScroll } from "@/components/ui";

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
  const { menuVisible } = useLocalState();
  const { scrollOffset, scrollToTop } = useScroll();
  const belowFold = scrollOffset > 100;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const interpolatedColorsLinear = interpolateColors([251, 39, 206], [255, 255, 255], duration); // #fb27ce -> #ffffff
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

    const targetProgress = menuVisible ? 0 : belowFold ? 1 : 0;
    const newProgress = Math.max(
      0,
      Math.min(
        1,
        targetProgress === 1
          ? transitionProgress + timeDiff / duration
          : transitionProgress - timeDiff / duration
      )
    );

    // Check if we've reached the target color
    if (newProgress === targetProgress) {
      return; // Exit the function if we've reached the target color
    }

    setTransitionProgress(newProgress);

    // Apply ease-in-out function to the progress
    const easedProgress = easeInOut(newProgress);

    const colorIndex = Math.floor(easedProgress * (interpolatedColorsLinear.length - 1));
    const color = interpolatedColorsLinear[colorIndex];
    metaTag.setAttribute("content", `rgb(${color.join(",")})`);
  }, [menuVisible, transitionProgress, belowFold, interpolatedColorsLinear]);

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
        "sticky top-0 z-50 select-none border-b border-pink-secondary/0 bg-transparent py-1.5 text-white transition-colors duration-300 ease-in-out md:py-3.5",
        variant === "secondary" && "text-primary",
        belowFold && "border-pink-secondary bg-background text-pink-primary",
        menuVisible && "text-white"
      )}
    >
      <header>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-3">
          <LogoBrandMenu>
            <div
              className={cn(
                "relative z-20 col-span-4 md:col-span-8",
                pathname !== "/" && "cursor-pointer"
              )}
              onClick={handleTrigger}
            >
              <Logo className="h-8 w-auto text-inherit md:h-12" />
            </div>
          </LogoBrandMenu>

          <div className="-col-start-1 hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-3">
              {/* <DropdownMenu>
                <div className="relative flex cursor-pointer items-center justify-center px-4 py-2 text-inherit">
                  Developers <CaretDown className="h-4 w-4 text-inherit" />
                </div>
              </DropdownMenu> */}
              <div
                className="mr-2 cursor-pointer px-4 py-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
                onClick={() => router.push(envClient.NEXT_PUBLIC_DOCS_URL)}
              >
                Docs
              </div>
              <div
                className="mr-2 cursor-pointer whitespace-nowrap px-4 py-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
                onClick={() => router.push("/builder-toolkit")}
              >
                Builder Toolkit
              </div>
              <div
                className="mr-2 cursor-pointer px-4 py-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
                onClick={() => router.push("/bridge")}
              >
                Bridge
              </div>
              <div
                className="mr-2 cursor-pointer px-4 py-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
                onClick={() => router.push("/about")}
              >
                About
              </div>
            </div>
            <Link
              href="https://x.com/unichain"
              className="flex items-center px-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
            >
              <Twitter className="h-[17px] w-[17px] text-inherit" />
            </Link>
            <Link
              href="/"
              className="px-2 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
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
