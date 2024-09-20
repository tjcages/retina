"use client";

import Lenis from "@studio-freight/lenis";
import { useCallback, useEffect, useRef, useState } from "react";

export const useLenis = (
  scrollRef: React.MutableRefObject<HTMLDivElement>,
  eventsTarget: (Window & typeof globalThis) | null = typeof window !== "undefined" ? window : null,
  options: {
    infinite?: boolean;
    orientation?: "vertical" | "horizontal";
    gestureOrientataion?: "both" | "vertical" | "horizontal";
  } = {
    infinite: false,
    orientation: "vertical",
    gestureOrientataion: "vertical"
  }
) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const onCompleteRef = useRef<((value: Lenis) => void) | null>(null);

  const buildLenis = useCallback(() => {
    if (!scrollRef.current) return;
    const content = scrollRef.current.children[0] as HTMLDivElement;
    if (!content) return;

    const newLenis = new Lenis({
      wrapper: scrollRef.current,
      content: content,
      eventsTarget: eventsTarget === null ? undefined : eventsTarget,
      ...options
    });

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setLenis(newLenis);

    if (onCompleteRef.current) onCompleteRef.current(newLenis);
  }, [scrollRef, eventsTarget, options]);

  useEffect(() => {
    buildLenis();
    return () => {
      lenis?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  const autoScroll = useCallback(
    (duration = 300) => {
      if (lenis && scrollRef.current?.scrollHeight) {
        lenis.scrollTo(scrollRef.current.scrollHeight, { duration });
      }
    },
    [lenis, scrollRef]
  );

  const onComplete = useCallback((callback: (value: Lenis) => void) => {
    onCompleteRef.current = callback;
  }, []);

  return {
    lenis,
    start,
    stop,
    autoScroll,
    destroyLenis: useCallback(() => lenis?.destroy(), [lenis]),
    onComplete
  };
};
