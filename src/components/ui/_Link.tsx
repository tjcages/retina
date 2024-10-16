"use client";

import { cn, pageTransition } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { useTransitionRouter } from "next-view-transitions";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";

const linkVariants = cva(
  "group relative inline-flex items-center justify-center px-3 -mx-3 py-2 -my-2 cursor-pointer transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "text-pink hover:opacity-80",
        ghost: "text-primary hover:opacity-60"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    NextLinkProps,
    VariantProps<typeof linkVariants> {
  routed?: boolean;
  href: string;
  blank?: boolean;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, routed, href, blank = true, children, ...props }, ref) => {
    const router = useTransitionRouter();

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (routed) {
          e.preventDefault();
          router.push(href, { onTransitionReady: pageTransition });
        }
      },
      [routed, router, href]
    );

    const renderLine = () => (
      <div className="absolute bottom-2 left-3 right-3 h-[1.5px] origin-right scale-x-0 bg-gradient-to-r from-pink-primary to-pink-secondary transition-transform duration-200 ease-in-out group-hover:origin-left group-hover:scale-x-100" />
    );

    return (
      <NextLink
        ref={ref}
        href={href}
        target={blank && !routed ? "_blank" : undefined}
        className={cn(linkVariants({ variant, className }))}
        onClick={handleClick}
        {...props}
      >
        {children}
        {variant !== "ghost" && renderLine()}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

export { Link };
