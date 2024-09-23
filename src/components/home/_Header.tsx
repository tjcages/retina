"use client";

import { Logo, Menu } from "@/assets/icons";
import { cn } from "@/utils";
import Link from "next/link";

import { Button } from "@/components/ui";
import { useScroll } from "@/components/ui/_Scroll";

const _ = () => {
  const { scrollOffset } = useScroll();
  console.log("scrollProgress:", scrollOffset);
  const belowFold = scrollOffset > 100;

  return (
    <section
      className={cn(
        "sticky top-0 z-50 border-b border-pink-secondary/0 py-3 text-white transition-colors duration-100 ease-in-out md:py-6",
        belowFold && "border-pink-secondary bg-background text-pink-primary duration-300"
      )}
    >
      <header>
        <div className="col-span-full grid grid-cols-subgrid items-center gap-3">
          <Logo className="col-span-4 h-8 w-auto text-inherit md:col-span-8 md:h-12" />
          <div className="-col-start-8 hidden md:block">
            <Link href="/" className="text-inherit">
              Developers
            </Link>
          </div>
          <div className="-col-start-6 hidden md:block">
            <Link href="/" className="text-inherit">
              About
            </Link>
          </div>
          <div className="-col-start-4 hidden md:block">
            <Link href="/" className="text-inherit">
              Twitter/X
            </Link>
          </div>
          <div className="-col-start-1 hidden md:block">
            <Link href="/" className="text-inherit">
              Discord
            </Link>
          </div>
          <Button variant="ghost" className="col-span-3 -col-start-1 text-inherit md:hidden">
            <Menu className="h-6 min-h-6 w-6 min-w-6 text-inherit" />
          </Button>
        </div>
      </header>
    </section>
  );
};

export default _;
