"use client";

import { useInView } from "@/hooks";
import { cn } from "@/utils";
import { useRef } from "react";

import { WaveEffect } from "@/components/shared";
import { Link } from "@/components/ui";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link
      routed
      href={href}
      variant="ghost"
      className="-my-0.5 whitespace-nowrap text-secondary-foreground"
    >
      <p>{children}</p>
    </Link>
  );
};

const _ = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <section
      ref={ref}
      className="z-10 overflow-visible bg-background/90 py-6 backdrop-blur-sm md:py-12"
    >
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#F50DB433] opacity-0 transition-opacity duration-1000 ease-in",
          isInView && "opacity-50"
        )}
      />
      <footer>
        <div className="pointer-events-auto col-span-full grid grid-cols-subgrid gap-3">
          <div className="col-span-full mb-6 flex h-full flex-col items-start md:col-[1_/_span_15] md:mb-0">
            <h5 className="md:mb-1">Looking for more?</h5>
            <Link
              className="-mx-3 -my-2 cursor-pointer px-3 py-2 text-secondary-foreground transition-all duration-200 ease-in-out hover:opacity-60"
              href="https://x.com/uniswap"
            >
              Follow us on Twitter/X
            </Link>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="https://blog.uniswap.org/v4-deployment-challenge-rules.pdf">
              Rules
            </LinkItem>
            <LinkItem href="/about">About</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            {/* <LinkItem href="https://discord.com/invite/uniswap">Discord</LinkItem> */}
            <LinkItem href="https://x.com/uniswap">Twitter/X</LinkItem>
          </div>
          <div className="col-span-3 mt-3 flex flex-col items-start justify-start md:mt-0">
            <LinkItem href="https://support.uniswap.org/hc/en-us/articles/30934457771405-Uniswap-Labs-Privacy-Policy">
              Privacy Policy
            </LinkItem>
            <LinkItem href="https://support.uniswap.org/hc/en-us/articles/30935100859661-Uniswap-Labs-Terms-of-Service">
              Terms of Service
            </LinkItem>
          </div>
        </div>
      </footer>
      <WaveEffect
        className={cn("absolute bottom-0 left-0 right-0 -z-10 h-[70vh]", !isInView && "opacity-0")}
      />
    </section>
  );
};

export default _;
