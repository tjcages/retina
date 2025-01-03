"use client";

import { state, useLocalState } from "@/store";

import EffectControl from "./_EffectControl";

const _ = () => {
  const { fps, postprocessing } = useLocalState();
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-white">
      <div className="flex flex-col gap-6">
        <div className="-mt-2 flex w-full items-center justify-between gap-2">
          <p>FPS</p>
          <p>{fps}</p>
        </div>
        <div className="flex flex-col gap-1">
          <hr />
          <hr />
        </div>

        <EffectControl
          name="Postprocessing"
          description="Visual effects for your 3D scenes"
          enabled={postprocessing.enabled}
          statePath="postprocessing.enabled"
        />
        <hr />

        <EffectControl
          name="N8AO Effect"
          enabled={postprocessing.n8ao.enabled}
          statePath="postprocessing.n8ao.enabled"
          sliders={[
            {
              title: "AO Radius",
              value: postprocessing.n8ao.aoRadius,
              min: 0,
              max: 5,
              step: 0.1,
              onChange: value => (state.postprocessing.n8ao.aoRadius = value)
            },
            {
              title: "Intensity",
              value: postprocessing.n8ao.intensity,
              min: 0,
              max: 20,
              step: 0.1,
              onChange: value => (state.postprocessing.n8ao.intensity = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="TiltShift2 Effect"
          enabled={postprocessing.tiltShift.enabled}
          statePath="postprocessing.tiltShift.enabled"
          sliders={[
            {
              title: "Amount",
              value: postprocessing.tiltShift.amount,
              min: 0,
              max: 10,
              step: 0.1,
              onChange: value => (state.postprocessing.tiltShift.amount = value)
            },
            {
              title: "Blur",
              value: postprocessing.tiltShift.blur,
              min: 0,
              max: 1,
              step: 0.1,
              onChange: value => (state.postprocessing.tiltShift.blur = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="Chromatic Aberration Effect"
          enabled={postprocessing.chromaticAberration.enabled}
          statePath="postprocessing.chromaticAberration.enabled"
          sliders={[
            {
              title: "Offset",
              value: postprocessing.chromaticAberration.offset,
              min: 0,
              max: 0.1,
              step: 0.001,
              onChange: value => (state.postprocessing.chromaticAberration.offset = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="HDR Tone Mapping"
          enabled={postprocessing.hdrToneMapping.enabled}
          statePath="postprocessing.hdrToneMapping.enabled"
          sliders={[
            {
              title: "Max Luminance",
              value: postprocessing.hdrToneMapping.maxLuminance,
              min: 0,
              max: 10,
              step: 0.1,
              onChange: value => (state.postprocessing.hdrToneMapping.maxLuminance = value)
            },
            {
              title: "White Point",
              value: postprocessing.hdrToneMapping.whitePoint,
              min: 0,
              max: 1,
              step: 0.01,
              onChange: value => (state.postprocessing.hdrToneMapping.whitePoint = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="Noise Effect"
          enabled={postprocessing.noise.enabled}
          statePath="postprocessing.noise.enabled"
          sliders={[
            {
              title: "Opacity",
              value: postprocessing.noise.opacity,
              min: 0,
              max: 1,
              step: 0.01,
              onChange: value => (state.postprocessing.noise.opacity = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="Vignette Effect"
          enabled={postprocessing.vignette.enabled}
          statePath="postprocessing.vignette.enabled"
          sliders={[
            {
              title: "Offset",
              value: postprocessing.vignette.offset,
              min: 0,
              max: 1,
              step: 0.01,
              onChange: value => (state.postprocessing.vignette.offset = value)
            },
            {
              title: "Darkness",
              value: postprocessing.vignette.darkness,
              min: 0,
              max: 1,
              step: 0.01,
              onChange: value => (state.postprocessing.vignette.darkness = value)
            }
          ]}
        />
        <hr />

        <EffectControl
          name="Fisheye"
          enabled={postprocessing.fisheye.enabled}
          statePath="postprocessing.fisheye.enabled"
          sliders={[
            {
              title: "Strength",
              value: postprocessing.fisheye.strength,
              min: -1,
              max: 1,
              step: 0.01,
              onChange: value => (state.postprocessing.fisheye.strength = value)
            }
          ]}
        />
      </div>
    </div>
  );
};

export default _;
