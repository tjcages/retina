"use client";

import { cn } from "@/utils";
import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { Image } from "@/components/ui";

interface GridProps {
  squareSize: number;
  gap: number;
  maxRadius?: number;
  influenceRadius: number;
  lerpFactor: number;
  squareColor: [number, number, number]; // RGB values for square color
  backgroundColor: [number, number, number]; // RGB values for background color
  variant?: "primary" | "secondary";
  className?: string;
  gridLines?: boolean;
  border?: boolean;
  pixelRatio?: number;
}

export const GridComponent: React.FC<GridProps> = ({
  squareSize,
  gap,
  maxRadius = squareSize / 2,
  influenceRadius,
  lerpFactor,
  squareColor,
  backgroundColor,
  variant = "primary",
  className,
  gridLines = false,
  border = false,
  pixelRatio
}) => {
  const renderer = useRef<THREE.WebGLRenderer>();
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.OrthographicCamera>();
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<THREE.Vector2>(new THREE.Vector2(500, 0));
  const prevMousePosition = useRef<THREE.Vector2>(new THREE.Vector2(500, 0));
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const lerpMousePosition = useCallback(() => {
    if (materialRef.current) {
      const currentMousePos = materialRef.current.uniforms.uMousePosition.value;
      const newPos = currentMousePos.lerp(mousePosition, lerpFactor);
      prevMousePosition.current.copy(currentMousePos);
      materialRef.current.uniforms.uMousePosition.value.copy(newPos);

      document.documentElement.style.setProperty("--x", (newPos.x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty("--y", (newPos.y / window.innerHeight).toFixed(2));
    }

    if (!renderer.current || !scene.current || !camera.current) return;
    renderer.current.render(scene.current, camera.current);
  }, [mousePosition, lerpFactor, materialRef]);

  useAnimationFrame(() => {
    lerpMousePosition();
  });

  const onMouseMove = useCallback((event: MouseEvent) => {
    if (!mountRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(rect.height - (event.clientY - rect.top), rect.height));
    setMousePosition(new THREE.Vector2(x, y));
  }, []);

  const onResize = useCallback(() => {
    if (
      !materialRef.current ||
      !renderer.current ||
      !scene.current ||
      !camera.current ||
      !mountRef.current
    )
      return;
    const rect = mountRef.current.getBoundingClientRect();
    const newWidth = rect.width;
    const newHeight = rect.height;

    // Update camera
    camera.current.left = -newWidth / 2;
    camera.current.right = newWidth / 2;
    camera.current.top = newHeight / 2;
    camera.current.bottom = -newHeight / 2;
    camera.current.updateProjectionMatrix();

    // Update renderer
    renderer.current.setSize(newWidth, newHeight);

    // Update material uniforms
    materialRef.current.uniforms.uResolution.value.set(newWidth, newHeight);

    // Update mesh geometry
    const mesh = scene.current.children[0] as THREE.Mesh;
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(newWidth, newHeight);

    // Render the scene
    renderer.current.render(scene.current, camera.current);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    scene.current = new THREE.Scene();
    camera.current = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(width, height);
    renderer.current.setPixelRatio(pixelRatio !== undefined ? pixelRatio : window.devicePixelRatio);
    mountRef.current.appendChild(renderer.current.domElement);

    const geometry = new THREE.PlaneGeometry(width, height);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uSquareSize: { value: squareSize },
        uGap: { value: gap },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMousePosition: { value: new THREE.Vector2(0, 0) },
        uMaxRadius: { value: maxRadius },
        uInfluenceRadius: { value: influenceRadius },
        uSquareColor: { value: new THREE.Vector3(...squareColor) },
        uBackgroundColor: { value: new THREE.Vector3(...backgroundColor) },
        uVariant: { value: variant === "primary" ? 0 : 1 },
        uBorderWidth: { value: 0.75 }, // Adjust this value to change border thickness
        uGridLines: { value: gridLines ? 1 : 0 },
        uBorder: { value: border ? 1 : 0 }, // Add this line
        uBorderColor: { value: new THREE.Vector4(245 / 255, 13 / 255, 180 / 255, 1.0) } // Add this line
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uSquareSize;
        uniform float uGap;
        uniform vec2 uResolution;
        uniform vec2 uMousePosition;
        uniform float uMaxRadius;
        uniform float uInfluenceRadius;
        uniform vec3 uSquareColor;
        uniform vec3 uBackgroundColor;
        uniform int uVariant;
        uniform float uBorderWidth;
        uniform int uGridLines;
        uniform int uBorder;
        uniform vec4 uBorderColor;
        varying vec2 vUv;

        float sdRoundBox(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + vec2(r);
          return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
        }

        float cubicExponential(float x) {
          return 1.0 - pow(1.0 - x, 3.0);
        }

        void main() {
          vec2 position = vUv * uResolution;
          vec2 squareIndex = floor(position / (uSquareSize + uGap));
          vec2 squareCenter = (squareIndex + 0.5) * (uSquareSize + uGap);
          vec2 relativePos = position - squareCenter;

          float distToMouse = distance(squareCenter, uMousePosition);
          float normalizedDist = clamp(distToMouse / uInfluenceRadius, 0.0, 1.0);
          float influence = cubicExponential(1.0 - normalizedDist);
          float radius = uMaxRadius * influence;

          float d = sdRoundBox(relativePos, vec2(uSquareSize * 0.5), radius);

          if (uVariant == 0) {
            // Primary variant: filled squares
            if (d <= 0.0) {
              gl_FragColor = vec4(uSquareColor, 1.0);
            } else {
              gl_FragColor = vec4(uBackgroundColor, 1.0);
            }
          } else {
            // Secondary variant: bordered squares
            float borderD = sdRoundBox(relativePos, vec2(uSquareSize * 0.5 - uBorderWidth), radius - uBorderWidth);
            if (d <= 0.0 && borderD > 0.0) {
              gl_FragColor = vec4(uBackgroundColor, 1.0);
            } else {
              gl_FragColor = vec4(uSquareColor, 1.0);
            }
          }

          // Add border
          if (uBorder == 1) {
            float borderThickness = 1.0;
            if (abs(d) < borderThickness) {
              gl_FragColor = uBorderColor;
            }
          }

          // Add grid lines
          if (uGridLines == 1) {
            float gridLineWidth = 0.75;
            vec2 gridPosition = mod(position, uSquareSize + uGap);
            if (gridPosition.x < gridLineWidth || gridPosition.y < gridLineWidth) {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Black color for grid lines
            }
          }
        }
      `
    });

    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.current.add(mesh);

    camera.current.position.z = 5;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const mount = mountRef.current;

    return () => {
      if (!renderer.current || !scene.current || !camera.current) return;
      if (mount) mount.removeChild(renderer.current.domElement);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.current.dispose();
    };
  }, [
    squareSize,
    gap,
    maxRadius,
    influenceRadius,
    squareColor,
    backgroundColor,
    variant,
    onMouseMove,
    onResize,
    gridLines,
    border,
    pixelRatio
  ]);

  return (
    <div
      ref={mountRef}
      className={cn(
        "absolute bottom-0 left-0 right-0 top-0 opacity-40 mix-blend-overlay",
        variant === "secondary" && "opacity-20",
        className
      )}
    />
  );
};

interface Props {
  variant?: "primary" | "secondary";
  gridLines?: boolean;
  border?: boolean; // Add this line
}

export const Background: React.FC<Props> = ({
  variant = "primary",
  gridLines = false,
  border = false // Add this line
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-0 h-screen w-full">
      {variant === "primary" && (
        <Image
          priority
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/assets/noise-texture.webp"
          alt="Pink noise texture"
          width={4000}
          height={3000}
        />
      )}
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_75%,#F50DB400,#F50DB4CC)] from-pink-primary to-pink-secondary opacity-0 transition-opacity duration-1000 ease-in",
          isMounted && "opacity-100",
          variant === "secondary" && "bg-[radial-gradient(circle_at_75%,#FFFFFF00,#FFFFFFCC)]"
        )}
      />
      <GridComponent
        squareSize={50}
        gap={variant === "primary" ? 0.75 : 0}
        influenceRadius={400}
        lerpFactor={0.05}
        squareColor={
          variant === "primary"
            ? [0.9647058824, 0.0941176471, 0.7254901961]
            : [1.0, 1.0, 0.9960784314]
        }
        backgroundColor={
          variant === "primary"
            ? [1.0, 1.0, 0.9960784314]
            : [0.9647058824, 0.0941176471, 0.7254901961]
        }
        variant={variant}
        gridLines={gridLines}
        border={border} // Add this line
      />
    </div>
  );
};
