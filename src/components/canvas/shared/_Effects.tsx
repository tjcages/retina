"use client";

import { useLocalState } from "@/store";
import {
  ChromaticAberration,
  EffectComposer,
  N8AO,
  Noise,
  TiltShift2,
  ToneMapping,
  Vignette
} from "@react-three/postprocessing";
import { Vector2 } from "three";

import { FisheyeEffect } from "@/components/canvas/effects";

const Effects = () => {
  const { postprocessing } = useLocalState();
  return (
    <EffectComposer>
      {postprocessing.fisheye.enabled ? (
        <FisheyeEffect strength={postprocessing.fisheye.strength} />
      ) : (
        <></>
      )}
      {postprocessing.n8ao.enabled ? (
        <N8AO aoRadius={postprocessing.n8ao.aoRadius} intensity={postprocessing.n8ao.intensity} />
      ) : (
        <></>
      )}
      {postprocessing.tiltShift.enabled ? (
        <TiltShift2
          samples={postprocessing.tiltShift.amount}
          blur={postprocessing.tiltShift.blur}
        />
      ) : (
        <></>
      )}
      {postprocessing.chromaticAberration.enabled ? (
        <ChromaticAberration
          offset={
            new Vector2(
              postprocessing.chromaticAberration.offset,
              postprocessing.chromaticAberration.offset
            )
          }
          radialModulation={false}
          modulationOffset={0}
        />
      ) : (
        <></>
      )}
      {postprocessing.hdrToneMapping.enabled ? (
        <ToneMapping
          maxLuminance={postprocessing.hdrToneMapping.maxLuminance}
          whitePoint={postprocessing.hdrToneMapping.whitePoint}
        />
      ) : (
        <></>
      )}
      {postprocessing.noise.enabled ? <Noise opacity={postprocessing.noise.opacity} /> : <></>}
      {postprocessing.vignette.enabled ? (
        <Vignette
          offset={postprocessing.vignette.offset}
          darkness={postprocessing.vignette.darkness}
        />
      ) : (
        <></>
      )}
      {/* <HueSaturation saturation={-1} /> */}
    </EffectComposer>
  );
};

export default Effects;
