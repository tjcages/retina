import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import color_frag from "@/components/canvas/glsl/color.frag";
import face_vert from "@/components/canvas/glsl/face.vert";
import { Mouse, Simulation } from "@/components/canvas/modules";

const FluidField = () => {
  const ref = useRef() as React.MutableRefObject<THREE.Mesh>;
  const rootState = useThree();
  const simulationRef = useRef(
    new Simulation(rootState, { mouseForce: 20, cursorSize: 50, bounce: true })
  ) as React.MutableRefObject<Simulation>;

  useFrame(({ gl, scene, camera }) => {
    Mouse.update();
    simulationRef?.current?.update();

    gl.autoClear = false;
    gl.setRenderTarget(null);
    gl.render(scene, camera);
  }, 1);

  useEffect(() => {
    Mouse.init();
  }, []);

  return (
    <mesh ref={ref}>
      <planeGeometry isBufferGeometry={true} args={[2, 2]} />
      <rawShaderMaterial
        uniforms={{
          velocity: {
            value: simulationRef.current.fbos.vel_0
              ? (simulationRef.current.fbos.vel_0 as THREE.WebGLRenderTarget).texture
              : null
          },
          boundarySpace: {
            value: new THREE.Vector2()
          }
        }}
        vertexShader={face_vert}
        fragmentShader={color_frag}
      />
    </mesh>
  );
};

export default FluidField;
