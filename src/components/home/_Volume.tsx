"use client";

import { useInView } from "@/hooks";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

import { MagneticInfo, Nbsp } from "@/components/ui";

// Make sure to install this package

// Polyfill for forEach
if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this, callback as never);
  };
}

interface Props {
  value: number;
  dollar?: boolean;
  multiple?: string;
  description: string;
}

const NumberAnimator: React.FC<{
  endValue: number;
  format: {
    style: string;
    currency?: string;
    notation: string;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
  };
  shouldAnimate: boolean;
}> = ({ endValue, format, shouldAnimate }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (ref.current && shouldAnimate && !hasAnimated) {
      const formatter = new Intl.NumberFormat("en-US", format as Intl.NumberFormatOptions);
      const startValue = 0;
      const animation = anime({
        targets: { value: startValue },
        value: endValue,
        round: 100,
        easing: "easeOutExpo", // Changed to ease-out
        duration: 3000, // Slightly reduced duration for a snappier feel
        update: function (anim) {
          if (ref.current) {
            const currentValue = parseFloat(anim.animations[0].currentValue);
            ref.current.textContent = formatter.format(currentValue);
          }
        },
        complete: function () {
          setHasAnimated(true);
        }
      });

      return () => animation.pause(); // Clean up animation on unmount
    }
  }, [endValue, format, shouldAnimate, hasAnimated]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat("en-US", format as Intl.NumberFormatOptions).format(
        shouldAnimate ? 0 : endValue
      )}
    </span>
  );
};

const Item: React.FC<Props> = ({ value, dollar = true, multiple, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  const format = dollar
    ? value < 100
      ? {
          style: "currency",
          currency: "USD",
          notation: "standard",
          minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
          maximumFractionDigits: Number.isInteger(value) ? 0 : 2
        }
      : {
          style: "currency",
          currency: "USD",
          notation: "compact",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }
    : {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: "compact"
      };

  return (
    <div ref={ref} className="flex flex-col items-center justify-center md:col-span-8 md:gap-3">
      <h1 className="whitespace-nowrap text-4xl tabular-nums md:text-7xl lg:text-8xl 2xl:text-9xl">
        <strong>
          <NumberAnimator endValue={value} format={format} shouldAnimate={hasBeenInView} />
        </strong>
        <strong className="align-text-bottom leading-[0.8em] md:ml-2">{multiple}+</strong>
      </h1>
      <h5 className="text-base md:text-xl">
        {description.split(" ").map((word, index, array) => (
          <span key={index}>
            {word}
            {index === Math.floor(array.length / 2) - 1 ? (
              <>
                <br className="md:hidden" />
                <Nbsp />
              </>
            ) : (
              " "
            )}
          </span>
        ))}
      </h5>
    </div>
  );
};

const _ = () => {
  return (
    <section className="py-12 md:py-24">
      <article className="gap-y-12 md:gap-y-16 xl:gap-x-12">
        <div className="col-span-full flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-pink col-span-full">
            Expanding the <strong>Uni</strong>verse
          </h2>
          <h3 className="max-w-2xl">
            Informed by our experience building the world&apos;s largest decentralized trading
            protocol.
          </h3>
        </div>
        <MagneticInfo
          tooltip={
            <p className="rounded-xl bg-secondary px-3 py-1.5 shadow-md">
              Last updated on 10/02/2024
            </p>
          }
          className="col-span-full flex cursor-default items-start justify-between gap-6 px-3 text-center md:grid md:grid-cols-subgrid md:gap-3 md:px-0"
        >
          <Item value={2.36} multiple="T" description="Trading Volume" />
          <Item value={25} dollar={false} multiple="M" description="Swapping Wallets" />
          <Item value={465} multiple="M" description="All-Time Trades" />
        </MagneticInfo>
      </article>
    </section>
  );
};

export default _;
