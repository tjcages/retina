"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import AsciiEffect from "./_Ascii";
import Fluid from "./_Fluid";

const _ = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 top-0 min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Canvas className="gradient-mask-tl-0" style={{ width: "100%", minHeight: "100%" }}>
        <color attach="background" args={["white"]} />
        <ambientLight intensity={0.5} />

        <Fluid />
        <AsciiEffect />
      </Canvas>
    </motion.div>
  );
};

export default _;
