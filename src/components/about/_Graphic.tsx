"use client";

import { cn } from "@/utils";
import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  className?: string;
}

function createRoundedSquare(size: number, cornerRadius: number) {
  const shape = new THREE.Shape();
  const radius = Math.min(cornerRadius, size);

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

const WaveEffect: React.FC<Props> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef(false);
  const clickTimeRef = useRef(0);
  const animationRef = useRef<number>();

  // Refs for Three.js objects
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const ringsRef = useRef<THREE.Line[]>([]);
  const imagePlaneRef = useRef<THREE.Mesh | null>(null);

  const handleClick = useCallback(() => {
    isClicked.current = true;
    clickTimeRef.current = Date.now();
  }, []);

  // Move animate function outside of useEffect
  const animate = useCallback(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    animationRef.current = requestAnimationFrame(animate);

    const time = Date.now() * 0.001;
    const elapsedSinceClick = (Date.now() - clickTimeRef.current) / 1000;

    const rippleDuration = 0.25;
    const rippleMaxRadius = 30;
    const overallScale = 7.5;

    ringsRef.current.forEach((ring, index) => {
      const normalScale = 1 + Math.sin(time + index * 0.2) * 0.05;
      let scale = normalScale;

      if (isClicked.current && elapsedSinceClick < rippleDuration) {
        const ringRadius = (1 + index * 0.25) * overallScale;
        if (ringRadius <= rippleMaxRadius) {
          const rippleProgress = elapsedSinceClick / rippleDuration;
          const rippleIntensity = Math.sin(rippleProgress * Math.PI) * 0.1;
          const distanceFactor = 1 - ringRadius / rippleMaxRadius;
          scale += rippleIntensity * distanceFactor;
        }
      }

      ring.scale.set(scale, scale, 1);

      // Adjust opacity
      const baseOpacity = Math.max(
        0,
        1 - index / ringsRef.current.length - Math.sin(time + index * 0.2) * 0.1
      );
      const opacityIncrease = (index / ringsRef.current.length) * 0.01;
      if (ring.material instanceof THREE.Material) {
        ring.material.opacity = Math.min(1, baseOpacity + opacityIncrease);
      }
    });

    // Scale the image plane
    if (imagePlaneRef.current) {
      let imageScale;
      if (isClicked.current && elapsedSinceClick < 0.3) {
        // Bounce effect
        imageScale = 1 + Math.sin((elapsedSinceClick * Math.PI) / 0.3) * 0.2;
      } else {
        // Revert to original animation
        imageScale = 1 + Math.sin(time) * 0.05;
        if (isClicked.current && elapsedSinceClick >= rippleDuration) {
          isClicked.current = false;
        }
      }
      imagePlaneRef.current.scale.set(imageScale, imageScale, 1);
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0xffffff);

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(width, height);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    container.appendChild(rendererRef.current.domElement);

    // Adjust overall line scale
    const overallScale = 7.5;

    // Create a group to hold the image and rings
    const group = new THREE.Group();
    sceneRef.current.add(group);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/assets/icons/about-icon.png", texture => {
      const aspectRatio = texture.image.width / texture.image.height;
      const planeGeometry = new THREE.PlaneGeometry(10 * aspectRatio, 10);
      const planeMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      imagePlaneRef.current = new THREE.Mesh(planeGeometry, planeMaterial);
      imagePlaneRef.current.position.z = 1; // Move the plane slightly forward
      group.add(imagePlaneRef.current);

      // Use the memoized handleClick function
      container.addEventListener("click", handleClick);
    });

    // Wave rings (rounded squares with increasing corner radius)
    const ringCount = 40;
    const ringMaterial = new THREE.LineBasicMaterial({ color: 0xff00ff, transparent: true });

    for (let i = 0; i < ringCount; i++) {
      const size = (1 + i * 0.25) * overallScale;
      const baseCornerRadius = size / 1.5;
      const additionalRadius = (i * 3 * size) / 40;
      const cornerRadius = baseCornerRadius + additionalRadius;
      const shape = createRoundedSquare(size, cornerRadius);
      const points = shape.getPoints(64);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(geometry, ringMaterial.clone());
      ringsRef.current.push(ring);
      group.add(ring);
    }

    // Adjust camera position
    cameraRef.current.position.z = 40; // Adjusted to show more of the scene

    // Start animation
    animate();

    // Handle resizing
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (container && rendererRef.current) container.removeChild(rendererRef.current.domElement);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("click", handleClick);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, handleClick]);

  return <div ref={mountRef} className={cn("h-full w-full bg-white", className)} />;
};

export default WaveEffect;
