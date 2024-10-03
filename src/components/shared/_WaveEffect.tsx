"use client";

import { cn } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;

#define time iTime

const float arrow_density = 4.5;
const float arrow_length = 0.45;
const float scale = 3.0;
const float velocity_x = 0.1;
const float velocity_y = 0.2;
const float mode_2_speed = 1.5;
const float mode_1_detail = 100.0;
const float mode_1_twist = 25.0;

vec3 colorA = vec3(0.980, 0.349, 0.918); // #FA59EA
vec3 colorB = vec3(0.961, 0.051, 0.706); // #F50DB4
vec3 colorC = vec3(1.0, 1.0, 1.0); // white

float f(in vec2 p)
{
    return sin(p.x + sin(p.y + time * velocity_x)) * sin(p.y * p.x * 0.1 + time * velocity_y);
}

vec3 getColor(float t) {
    vec3 color = mix(colorA, colorB, t);
    color = mix(color, colorC, t * t);
    return color;
}

struct Field {
    vec2 vel;
    vec2 pos;
};

Field field(in vec2 p)
{
    Field field;
    vec2 ep = vec2(0.05, 0.);
    vec2 rz = vec2(0);
    for (int i = 0; i < 20; i++)
    {
        float t0 = f(p);
        float t1 = f(p + ep.xy);
        float t2 = f(p + ep.yx);
        vec2 g = vec2((t1 - t0), (t2 - t0)) / ep.xx;
        vec2 t = vec2(-g.y, g.x);
        p += (mode_1_twist * 0.01) * t + g * (1. / mode_1_detail);
        p.x = p.x + sin(time * mode_2_speed / 10.) / 10.;
        p.y = p.y + cos(time * mode_2_speed / 10.) / 10.;
        rz = g;
    }
    field.vel = rz;
    return field;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = fragCoord.xy / iResolution.xy - 0.5;
    p.x *= iResolution.x / iResolution.y;
    p *= scale;
    
    Field fld = field(p);
    vec2 vel = fld.vel;
    
    float t = (vel.x + vel.y) * 0.5 + 0.5;
    t = clamp(t, 0.0, 1.0);
    
    vec3 color = getColor(t);
    
    fragColor = vec4(color, 0.5);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

interface Props {
  className?: string;
}

const GradientShader: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resizeHandler = () => {
      const { clientWidth, clientHeight } = canvasRef.current!;
      renderer.setSize(clientWidth, clientHeight);
      uniforms.iResolution.value.set(clientWidth, clientHeight);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    const animate = (time: number) => {
      uniforms.iTime.value = time / 1000;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Set isLoaded to true after a short delay to ensure the shader is running
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "h-full w-full transition-opacity delay-500 duration-1000 gradient-mask-t-0",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
};

export default GradientShader;
