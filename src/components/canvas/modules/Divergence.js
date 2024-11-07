import divergence_frag from "@/components/canvas/glsl/divergence.frag.js";
import face_vert from "@/components/canvas/glsl/face.vert.js";

import ShaderPass from "./ShaderPass";

export default class Divergence extends ShaderPass {
  constructor(simProps, rootState) {
    super(
      {
        material: {
          vertexShader: face_vert,
          fragmentShader: divergence_frag,
          uniforms: {
            boundarySpace: {
              value: simProps.boundarySpace
            },
            velocity: {
              value: simProps.src.texture
            },
            px: {
              value: simProps.cellScale
            },
            dt: {
              value: simProps.dt
            }
          }
        },
        output: simProps.dst
      },
      rootState
    );

    this.init();
  }

  update({ vel }) {
    this.uniforms.velocity.value = vel.texture;
    super.update();
  }
}
