import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";

const linkVariants = cva(
  "group relative inline-flex items-center justify-center px-3 -mx-3 py-2 -my-2 transition-all duration-200 ease-in-out",
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
  href: string;
  blank?: boolean;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, blank = true, children, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        target={blank ? "_blank" : undefined}
        className={cn(linkVariants({ variant, className }))}
        {...props}
      >
        {children}
        {variant !== "ghost" && (
          <div className="absolute bottom-2 left-3 right-3 h-[1.5px] origin-right scale-x-0 bg-gradient-to-r from-pink-primary to-pink-secondary transition-transform duration-200 ease-in-out group-hover:origin-left group-hover:scale-x-100" />
        )}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

export { Link };
