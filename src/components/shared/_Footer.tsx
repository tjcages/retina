"use client";

import { useInView } from "@/hooks";
import { envClient } from "@/lib";
import { state } from "@/store";
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
    <section ref={ref} className="z-10 overflow-visible bg-background py-6 md:py-12">
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#F50DB433] opacity-0 transition-opacity duration-1000 ease-in",
          isInView && "opacity-50"
        )}
      />
      <footer>
        <div className="col-span-full grid grid-cols-subgrid gap-3">
          <div className="col-span-full mb-6 flex h-full flex-col items-start md:col-[1_/_span_15] md:mb-0">
            <h5 className="md:mb-1">Looking for more?</h5>
            <div
              className="-mx-3 -my-2 cursor-pointer px-3 py-2 text-secondary-foreground transition-all duration-200 ease-in-out hover:opacity-60"
              onClick={() => (state.isSignUpVisible = true)}
            >
              Sign up for updates and events
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/about">About</LinkItem>
            <LinkItem href={envClient.NEXT_PUBLIC_DOCS_URL}>Docs</LinkItem>
            {/* <LinkItem href="/">Blog</LinkItem> */}
            <LinkItem href="/builder-toolkit">Builder Toolkit</LinkItem>
            <LinkItem href="/brand-kit">Brand Kit</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="https://discord.gg/uniswap">Discord</LinkItem>
            <LinkItem href="https://x.com/unichain">Twitter/X</LinkItem>
          </div>
          <div className="col-span-3 mt-3 flex flex-col items-start justify-start md:mt-0">
            <LinkItem href="/privacy">Privacy Policy</LinkItem>
            <LinkItem href="/terms">Terms of Service</LinkItem>
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
