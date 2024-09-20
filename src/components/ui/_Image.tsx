"use client";

import { cn } from "@/utils";
import { default as DefaultImage, type ImageProps } from "next/image";
import React, { useState } from "react";

interface FadeInImageProps extends Omit<ImageProps, "onLoad"> {
  fadeInDuration?: number;
}

export const Image = React.forwardRef<HTMLImageElement, FadeInImageProps>(
  ({ className, alt, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <DefaultImage
        className={cn(
          "transition-opacity duration-300 ease-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        ref={ref}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";
