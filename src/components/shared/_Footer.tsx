"use client";

import { useInView } from "@/hooks";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { WaveEffect } from "@/components/shared";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="whitespace-nowrap py-1.5 text-secondary-foreground">
      {children}
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
            <Image
              className="mb-6 h-12 w-auto md:mb-auto"
              src="/assets/logo-secondary.webp"
              alt="Unichain logo"
              width={400}
              height={100}
            />
            <h5 className="md:mb-1">Looking for more?</h5>
            <p>Sign up for updates and events</p>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">About</LinkItem>
            <LinkItem href="/">Docs</LinkItem>
            {/* <LinkItem href="/">Blog</LinkItem> */}
            <LinkItem href="/">Brand Kit</LinkItem>
          </div>
          <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">Discord</LinkItem>
            <LinkItem href="https://x.com/unichain">Twitter/X</LinkItem>
          </div>
          {/* <div className="col-span-3 flex flex-col items-start justify-start">
            <LinkItem href="/">Status</LinkItem>
            <LinkItem href="/">Bug Bounty</LinkItem>
            <LinkItem href="/">Github</LinkItem>
            <LinkItem href="/">Brand Kit</LinkItem>
          </div> */}
          <div className="col-span-3 mt-3 flex flex-col items-start justify-start md:mt-0">
            <LinkItem href="/">Privacy Policy</LinkItem>
            <LinkItem href="/">Terms of Service</LinkItem>
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
