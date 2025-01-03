"use client";

import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { memo } from "react";

const Shadows = memo(() => (
  <AccumulativeShadows
    frames={100}
    temporal
    alphaTest={0.8}
    opacity={1.25}
    scale={1}
    position={[0, 0, 0]}
    color="red"
  >
    <RandomizedLight amount={8} radius={4} position={[1, 5.5, 1]} />
  </AccumulativeShadows>
));
Shadows.displayName = "Shadows";

export default Shadows;
