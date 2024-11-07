"use client";

// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { AsciiEffect } from "three-stdlib";

// Add interface for AsciiRenderer props
interface AsciiRendererProps {
  renderIndex?: number;
  characters?: string;
  invert?: boolean;
}

function _({
  renderIndex = 1,
  characters = "44.-+*=%@#!#$%&'()*/;>?@[]^_`",
  invert = false
}: AsciiRendererProps) {
  const { size, gl, scene, camera } = useThree();

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, {
      invert: invert
    });
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color = "#FF02D7";
    effect.domElement.style.backgroundColor = "white";
    effect.domElement.style.pointerEvents = "none";
    return effect;
  }, [gl, characters, invert]);

  // Append on mount, remove on unmount
  useEffect(() => {
    const parentNode = gl.domElement.parentNode;
    if (parentNode) {
      parentNode.appendChild(effect.domElement);
      return () => parentNode.removeChild(effect.domElement);
    }
    return () => {};
  }, [effect, gl]);

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Take over render-loop (that is what the index is for)
  useFrame(() => {
    effect.render(scene, camera);
  }, renderIndex);

  return null;
}

export default _;
