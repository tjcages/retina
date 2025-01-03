"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  title: string;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  title,
  onChange
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!sliderRef.current || !onChange) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const position = (clientX - rect.left) / rect.width;
      const newValue = Math.min(max, Math.max(min, min + position * (max - min)));
      const steppedValue = Math.round(newValue / step) * step;

      onChange(steppedValue);
    },
    [min, max, step, onChange]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      handleDrag(e);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleDrag]);

  const getProgressBarStyles = useCallback(() => {
    const range = max - min;
    const zeroPosition = min < 0 ? (Math.abs(min) / range) * 100 : 0;
    const valuePosition = ((value - min) / range) * 100;

    if (value >= 0) {
      return {
        left: `${min < 0 ? zeroPosition : 0}%`,
        width: `${valuePosition - (min < 0 ? zeroPosition : 0)}%`,
        transformOrigin: "left"
      };
    } else {
      return {
        right: `${100 - zeroPosition}%`,
        width: `${zeroPosition - valuePosition}%`,
        transformOrigin: "right"
      };
    }
  }, [min, max, value]);

  return (
    <div
      className="flex w-full cursor-e-resize flex-col gap-2 uppercase"
      onMouseDown={e => {
        setIsDragging(true);
        handleDrag(e.nativeEvent);
      }}
      onTouchStart={e => {
        setIsDragging(true);
        handleDrag(e.nativeEvent);
      }}
    >
      <div className="flex w-full items-center justify-between">
        <p>{title}</p>
        <p>{value.toFixed(Math.max(2, -Math.floor(Math.log10(step))))}</p>
      </div>
      <div ref={sliderRef} className="relative h-[1.5px] w-full bg-white/10">
        <div className="absolute h-full bg-white" style={getProgressBarStyles()} />
      </div>
    </div>
  );
};
