"use client";

import { useLocalState } from "@/store";
import { cn } from "@/utils";
import { gsap } from "gsap";
import React, { useEffect, useId, useState } from "react";

import { Button, Input, Shortcut, Switch } from "@/components/ui";

interface GroupInputProps {
  label?: string;
  initialValue?: string;
  showSwitch?: boolean;
  showSave?: boolean;
  onSave?: (value: string) => void;
}

export const GroupInput: React.FC<GroupInputProps> = ({
  label,
  initialValue,
  showSwitch,
  showSave,
  onSave
}) => {
  const [value, setValue] = useState(initialValue || "");
  const handleOnSave = () => {
    if (onSave) onSave(value);
  };
  return (
    <div className="flex w-full flex-col gap-1">
      <p className="text-sm">{label}</p>
      <div className="relative flex w-full items-center justify-between gap-6">
        <div className="flex w-full items-center justify-between bg-primary p-2 text-white">
          <Input
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            variant="plain"
            className="text-lg font-medium"
          />
          {showSave !== undefined && showSave && (
            <Button variant="ghost" className="gap-2 border border-white/20 bg-secondary/10">
              Save
              <Shortcut meta chars={["s"]} onTrigger={handleOnSave} className="border-0" />
            </Button>
          )}
        </div>
        {showSwitch !== undefined && showSwitch && <Switch size="sm" />}
      </div>
    </div>
  );
};

interface GroupContainerProps {
  showSwitch?: boolean;
  showSave?: boolean;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const GroupContainer: React.FC<GroupContainerProps> = ({
  showSwitch,
  showSave,
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-[1fr] overflow-hidden border bg-white shadow-xl shadow-[rgba(0,0,0,0.025)]",
        showSwitch && "grid-cols-[1fr_auto]",
        className
      )}
    >
      <div className="flex w-full flex-col items-start justify-start gap-2 p-4">{children}</div>
      {showSwitch !== undefined && showSwitch && (
        <div className="p-4">
          <Switch size="sm" />
        </div>
      )}
      {showSave !== undefined && showSave && (
        <div className="col-span-full flex w-full items-center justify-end gap-2 border-t px-4 py-3">
          <Button variant="default" className="gap-2 pr-2">
            Save
            <Shortcut meta chars={["s"]} className="border-0" />
          </Button>
        </div>
      )}
    </div>
  );
};

interface GroupPromptProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const GroupPrompt: React.FC<GroupPromptProps> = ({ className, children }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-sm border bg-secondary p-3", className)}>
      {children}
      <div className="col-span-full flex w-full items-center justify-end gap-2 border-t px-4 py-3">
        <Button variant="default" className="gap-2 pr-2">
          Save
          <Shortcut meta chars={["s"]} className="border-0" />
        </Button>
      </div>
    </div>
  );
};

export const GroupHeader: React.FC<GroupProps> = ({ children }) => {
  return <h5 className="text-lg font-semibold">{children}</h5>;
};

export const GroupDescription: React.FC<GroupProps> = ({ children }) => {
  return <p>{children}</p>;
};

interface GroupProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Group: React.FC<GroupProps> = ({ className, children }) => {
  const id = useId().replaceAll(":", "");
  const { devModeOn } = useLocalState();
  const [firstHeight, setFirstHeight] = useState(0);
  const [secondHeight, setSecondHeight] = useState(0);

  useEffect(() => {
    const firstComponent = document.querySelector(`#${id}-first-content`);
    const secondComponent = document.querySelector(`#${id}-second-content`);
    if (firstComponent) setFirstHeight(firstComponent.scrollHeight);
    if (secondComponent) setSecondHeight(secondComponent.scrollHeight);
  }, [id, children]);

  useEffect(() => {
    const firstComponent = document.querySelector(`#${id}-first-content`);
    const secondComponent = document.querySelector(`#${id}-second-content`);
    if (firstComponent) {
      gsap.to(firstComponent, {
        y: devModeOn ? -secondHeight : 0,
        duration: 0.6,
        ease: "expo.inOut"
      });
    }
    if (secondComponent) {
      gsap.to(secondComponent, {
        y: devModeOn ? 0 : firstHeight,
        duration: 0.6,
        ease: "expo.inOut"
      });
    }
  }, [id, devModeOn, firstHeight, secondHeight]);

  return (
    <div className={cn("relative flex w-full flex-col gap-1", className)}>
      <div
        className={cn(
          "flex flex-col gap-2 rounded-2xl border p-2 transition-all duration-200 ease-in",
          devModeOn
            ? "border-dashed border-[#fe621b] bg-[#fe621b20]"
            : "border-blue-500 bg-blue-500/10"
        )}
      >
        <div
          id={`${id}-container`}
          className="pointer-events-auto flex w-full flex-col items-start justify-start gap-4 overflow-auto rounded-lg border bg-white p-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
