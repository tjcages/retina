import { state } from "@/store";
import { cn } from "@/utils";

import { Button, Slider } from "@/components/ui";

// Define the nested structure of our state
type StateObject = {
  postprocessing: {
    enabled: boolean;
    n8ao: {
      enabled: boolean;
      aoRadius: number;
      intensity: number;
    };
    tiltShift: {
      enabled: boolean;
      amount: number;
      blur: number;
    };
  };
};

interface EffectControlProps {
  name: string;
  description?: string;
  enabled: boolean;
  statePath: string;
  sliders?: {
    title: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
  }[];
}

const EffectControl = ({ name, description, enabled, statePath, sliders }: EffectControlProps) => {
  const updateStateValue = (value: boolean) => {
    const path = statePath.split(".");
    const current = state as unknown as StateObject;

    // Type-safe way to traverse the object
    const lastKey = path.pop()!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target = path.reduce<any>((obj, key) => {
      if (obj && typeof obj === "object") {
        return obj[key];
      }
      return undefined;
    }, current);

    // Update the value
    if (typeof target === "object" && target !== null) {
      target[lastKey] = value;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-2">
          <p>{name}</p>
          <div
            className={cn(
              "transtiion-colors h-3 w-3 rounded-full bg-white/20 duration-500 ease-in-out",
              enabled && "bg-green-500"
            )}
          />
        </div>
        {description && <p className="opacity-40">{description}</p>}
      </div>
      <div className="-my-2 flex w-full items-center justify-between gap-2">
        <Button
          variant="tertiary"
          className={cn("-ml-2", !enabled && "opacity-30")}
          onClick={() => updateStateValue(true)}
        >
          Enabled
        </Button>
        <Button
          variant="tertiary"
          className={cn("-mr-2", enabled && "opacity-30")}
          onClick={() => updateStateValue(false)}
        >
          Disabled
        </Button>
      </div>
      {sliders?.map((slider, index) => <Slider key={index} {...slider} />)}
    </div>
  );
};

export default EffectControl;
