"use client";

import { state } from "@/store";
import { PerformanceMonitor } from "@react-three/drei";
import { useEffect, useState } from "react";

const Performance = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    // update the FPS value every second
    const interval = setInterval(() => {
      state.fps = fps;
    }, 1000);

    // clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [fps]);

  return <PerformanceMonitor onChange={averageFps => setFps(averageFps.fps)} />;
};

export default Performance;
