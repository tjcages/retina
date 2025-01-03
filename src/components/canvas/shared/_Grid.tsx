"use client";

import { Instance, Instances } from "@react-three/drei";
import { memo } from "react";

interface Props {
  number?: number;
  lineWidth?: number;
  height?: number;
}

const color = "#707070";

const Grid = memo(({ number = 23, lineWidth = 0.026, height = 0.5 }: Props) => (
  <group position={[0, -0.1, 0]}>
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#222222" metalness={0.75} roughness={0.5} />
    </mesh>
    <Instances scale={0.2} position={[0, 0.1, 0]}>
      <planeGeometry args={[lineWidth, height]} />
      <meshBasicMaterial color={color} />
      {Array.from({ length: number }, (_, y) =>
        Array.from({ length: number }, (_, x) => (
          <group
            key={x + ":" + y}
            position={[
              x * 2 - Math.floor(number / 2) * 2,
              -0.01,
              y * 2 - Math.floor(number / 2) * 2
            ]}
          >
            <Instance rotation={[-Math.PI / 2, 0, 0]} />
            <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          </group>
        ))
      )}
      <gridHelper args={[100, 100, color, color]} position={[0, -0.01, 0]} />
    </Instances>
  </group>
));
Grid.displayName = "Grid";

export default Grid;
