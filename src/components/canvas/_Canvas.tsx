"use client";

import { useLocalState } from "@/store";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { IPhone } from "@/components/canvas/model";
import { Effects, Environment, Grid, Performance } from "@/components/canvas/shared";

export default function App() {
  const { postprocessing } = useLocalState();
  return (
    <Canvas shadows camera={{ position: [0, 8, 5], fov: 45 }}>
      <group position={[0, -0.5, 0]}>
        <Center position={[0, 0.1, 0]} rotation={[-Math.PI / 2, -Math.PI - 0.05, 0.5]}>
          <IPhone position={[0, 0, 0]} url="http://off-brand.studio/" />
        </Center>
        <Grid />
      </group>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.1}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment />
      {postprocessing.enabled && <Effects />}
      <Performance />
    </Canvas>
  );
}
