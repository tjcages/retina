"use client";

import { CaretDown, Discord, Logo, Menu, Twitter } from "@/assets/icons";
import { useLocalState } from "@/store";
import { cn, pageTransition } from "@/utils";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { DropdownMenu, MobileMenu } from "@/components/shared";
import { Button, useScroll } from "@/components/ui";

interface Props {
  variant?: "primary" | "secondary";
}

const _: React.FC<Props> = ({ variant = "primary" }) => {
  const pathname = usePathname();
  const router = useTransitionRouter();
  const { menuVisible } = useLocalState();
  const { scrollOffset } = useScroll();
  const belowFold = scrollOffset > 100;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTrigger = () => {
    if (pathname !== "/") router.push("/", { onTransitionReady: pageTransition });
  };

  return (
    <section
      className={cn(
        "sticky top-0 z-50 select-none border-b border-pink-secondary/0 py-1.5 text-white transition-colors duration-100 ease-in-out md:py-3.5",
        variant === "secondary" && "text-primary",
        belowFold && "border-pink-secondary bg-background text-pink-primary duration-300",
        menuVisible && "text-white"
      )}
    >
      <header>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-3">
          <div
            className={cn(
              "relative z-20 col-span-4 md:col-span-8",
              pathname !== "/" && "cursor-pointer"
            )}
            onClick={handleTrigger}
          >
            <Logo className="h-8 w-auto text-inherit md:h-12" />
          </div>
          <div className="-col-start-1 hidden gap-3 md:flex">
            <div className="flex items-center gap-3">
              <DropdownMenu
                trigger={
                  <Link
                    href="/"
                    className="relative flex items-center justify-center px-4 text-inherit"
                  >
                    Developers <CaretDown className="h-4 w-4 text-inherit" />
                  </Link>
                }
              />
              <Link
                href="/"
                className="mr-2 px-4 text-inherit transition-opacity duration-200 ease-in-out hover:opacity-80 active:opacity-90"
              >
                About
              </Link>
            </div>
            <Link
              href="/"
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
