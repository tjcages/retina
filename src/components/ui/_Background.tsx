"use client";

import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { Image } from "@/components/ui";

interface GridProps {
  squareSize: number;
  gap: number;
  maxRadius: number;
  influenceRadius: number;
  lerpFactor: number;
}

const GridComponent: React.FC<GridProps> = ({
  squareSize,
  gap,
  maxRadius,
  influenceRadius,
  lerpFactor
}) => {
  const renderer = useRef<THREE.WebGLRenderer>();
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.OrthographicCamera>();
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<THREE.Vector2>(new THREE.Vector2(0, 0));
  const prevMousePosition = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const lerpMousePosition = useCallback(() => {
    if (materialRef.current) {
      const currentMousePos = materialRef.current.uniforms.uMousePosition.value;
      const newPos = currentMousePos.lerp(mousePosition, lerpFactor);
      prevMousePosition.current.copy(currentMousePos);
      materialRef.current.uniforms.uMousePosition.value.copy(newPos);
    }

    if (!renderer.current || !scene.current || !camera.current) return;
    renderer.current.render(scene.current, camera.current);
  }, [mousePosition, lerpFactor, materialRef]);

  useAnimationFrame(() => {
    lerpMousePosition();
  });

  const onMouseMove = useCallback((event: MouseEvent) => {
    const x = event.clientX;
    const y = window.innerHeight - event.clientY; // Invert the y-coordinate
    setMousePosition(new THREE.Vector2(x, y));
  }, []);

  const onResize = () => {
    if (!materialRef.current || !renderer.current || !scene.current || !camera.current) return;
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.current.left = -newWidth / 2;
    camera.current.right = newWidth / 2;
    camera.current.top = newHeight / 2;
    camera.current.bottom = -newHeight / 2;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(newWidth, newHeight);
    materialRef.current.uniforms.uResolution.value.set(newWidth, newHeight);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    scene.current = new THREE.Scene();
    camera.current = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.current.domElement);

    const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uSquareSize: { value: squareSize },
        uGap: { value: gap },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMousePosition: { value: new THREE.Vector2(0, 0) },
        uMaxRadius: { value: maxRadius },
        uInfluenceRadius: { value: influenceRadius }
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

          if (d <= 0.0) {
            gl_FragColor = vec4(0.9647058824, 0.0941176471, 0.7254901961, 1.0); // White square/circle
          } else {
            gl_FragColor = vec4(1.0, 1.0, 0.9960784314, 1.0); // Black gap
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
  }, [squareSize, gap, maxRadius, influenceRadius, onMouseMove]);

  return (
    <div ref={mountRef} className="absolute inset-0 h-full w-full opacity-40 mix-blend-overlay" />
  );
};

export const Background = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-0 h-screen w-full">
      <Image
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/assets/noise-texture.webp"
        alt="Pink noise texture"
        width={4000}
        height={3000}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%,#F50DB400,#F50DB4CC)] from-pink-primary to-pink-secondary" />
      <GridComponent
        squareSize={50}
        gap={0.75}
        maxRadius={25}
        influenceRadius={400}
        lerpFactor={0.01}
      />
    </div>
  );
};
