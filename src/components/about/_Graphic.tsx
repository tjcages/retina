"use client";

import { cn } from "@/utils";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  className?: string;
}

const WaveEffect: React.FC<Props> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Use container dimensions instead of window dimensions
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Increase overall scale
    const overallScale = 10; // 500% of original size

    // Wave rings (rounded squares with increasing corner radius)
    const rings: THREE.Line[] = [];
    const ringCount = 40;
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0xff00ff, transparent: true });

    function createRoundedSquare(size: number, cornerRadius: number) {
      const shape = new THREE.Shape();
      const radius = Math.min(cornerRadius, size); // Prevent radius from exceeding half of the size

      shape.moveTo(-size + radius, -size);
      shape.lineTo(size - radius, -size);
      shape.quadraticCurveTo(size, -size, size, -size + radius);
      shape.lineTo(size, size - radius);
      shape.quadraticCurveTo(size, size, size - radius, size);
      shape.lineTo(-size + radius, size);
      shape.quadraticCurveTo(-size, size, -size, size - radius);
      shape.lineTo(-size, -size + radius);
      shape.quadraticCurveTo(-size, -size, -size + radius, -size);

      return shape;
    }

    for (let i = 0; i < ringCount; i++) {
      const size = (1 + i * 0.25) * overallScale;
      // Make the corner radius increase more dramatically
      const baseCornerRadius = size / 1.5; // Reduced from 0.8 to 0.2
      const additionalRadius = (i * 3 * size) / 40; // Factor of i that increases at a rate of 3
      const cornerRadius = baseCornerRadius + additionalRadius;
      const shape = createRoundedSquare(size, cornerRadius);
      const points = shape.getPoints(64);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geometry, ringMaterial.clone());
      rings.push(ring);
      scene.add(ring);
    }

    // Adjust camera position based on container size and overall scale
    camera.position.z = (Math.max(width, height) / 20) * overallScale;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      rings.forEach((ring, index) => {
        const time = Date.now() * 0.001;
        const scale = (1 + Math.sin(time + index * 0.2) * 0.05) * overallScale;
        ring.scale.set(scale, scale, 1);

        // Increase opacity on outer lines more dramatically
        const baseOpacity = Math.max(0, 1 - index / ringCount - Math.sin(time + index * 0.2) * 0.1);
        const opacityIncrease = (index / ringCount) * 0.01; // More dramatic increase
        if (ring.material instanceof THREE.Material) {
          ring.material.opacity = Math.min(1, baseOpacity + opacityIncrease);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (container) container.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className={cn("h-full w-full bg-white", className)} />;
};

export default WaveEffect;
