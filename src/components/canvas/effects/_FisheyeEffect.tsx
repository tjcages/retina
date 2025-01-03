import { extend } from "@react-three/fiber";
import { Effect } from "postprocessing";
import { forwardRef, useEffect, useMemo } from "react";
import { Uniform } from "three";

// Fragment shader for the fisheye effect
const fragmentShader = /* glsl */ `
  uniform float strength;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 center = vec2(0.5, 0.5);
    
    // Convert to -1 to 1 coordinate space
    vec2 coord = (uv - center) * 2.0;
    
    // Calculate the distance from center
    float radius = length(coord);
    
    // Apply non-linear distortion
    float distortion = 1.0 + radius * radius * strength;
    
    // Apply the distortion
    vec2 distortedCoord = coord / distortion;
    
    // Convert back to UV space
    vec2 finalUV = (distortedCoord * 0.5) + center;
    
    if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) {
      outputColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
      outputColor = texture2D(inputBuffer, finalUV);
    }
  }
`;

class FisheyeEffectImpl extends Effect {
  constructor() {
    super("FisheyeEffect", fragmentShader, {
      uniforms: new Map([["strength", new Uniform(0.5)]])
    });
  }

  // Add method to update strength
  updateStrength(value: number) {
    this.uniforms.get("strength")!.value = value;
  }
}

interface FisheyeEffectProps {
  strength?: number;
}

type FisheyeEffectImplProps = {
  ref?: React.Ref<FisheyeEffectImpl>;
  strength?: number;
};

declare module "@react-three/fiber" {
  interface ThreeElements {
    fisheyeEffectImpl: FisheyeEffectImplProps;
  }
}

extend({ FisheyeEffectImpl });

export const FisheyeEffect = forwardRef<FisheyeEffectImpl, FisheyeEffectProps>(
  ({ strength = 0.5 }, ref) => {
    // Create a memoized reference to the effect
    const effect = useMemo(() => new FisheyeEffectImpl(), []);

    // Update the strength uniform when the prop changes
    useEffect(() => {
      effect.updateStrength(-strength);
    }, [effect, strength]);

    return <primitive ref={ref} object={effect} />;
  }
);

FisheyeEffect.displayName = "FisheyeEffect";
