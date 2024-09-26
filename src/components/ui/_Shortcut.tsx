"use client";

import { cn } from "@/utils";
import * as React from "react";

interface PrimativeProps {
  keyTrigger: Exclude<KeyboardEvent["key"], "Meta" | "Enter">;
  meta?: boolean;
  triggered: boolean;
  setTriggered: (triggered: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const ShortcutPrimitive = React.forwardRef<HTMLSpanElement, PrimativeProps>(
  ({ keyTrigger, triggered, setTriggered, children, className, ...props }, ref) => {
    const handleKeyPress = React.useCallback(
      (event: KeyboardEvent) => {
        if (event.key === keyTrigger) setTriggered(true);
      },
      [keyTrigger, setTriggered]
    );

    const handleKeyUp = React.useCallback(
      (event: KeyboardEvent) => {
        if (event.key === keyTrigger) setTriggered(false);
      },
      [keyTrigger, setTriggered]
    );

    // Detect key press
    React.useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [handleKeyPress, handleKeyUp, keyTrigger, setTriggered]);

    return (
      <kbd
        className={cn(
          "uppercase opacity-70 transition-opacity duration-200 ease-in",
          { "opacity-100": triggered },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);
ShortcutPrimitive.displayName = "ShortcutPrimitive";

interface ShortcutProps {
  meta?: boolean;
  enter?: boolean;
  chars?: (
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v"
    | "w"
    | "x"
    | "y"
    | "z"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "`"
  )[];
  disabled?: boolean;
  onTrigger?: () => void;
}

const Shortcut = ({
  meta,
  enter,
  chars,
  disabled,
  onTrigger,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & ShortcutProps) => {
  // turn chars into an object with keys as the chars and values as booleans
  const keyTriggers = React.useMemo(() => {
    const keyTriggers: { [key: string]: boolean } = {};
    if (chars !== undefined) {
      chars.forEach(char => {
        keyTriggers[char] = false;
      });
    }
    if (enter) keyTriggers["enter"] = false;
    if (meta) keyTriggers["meta"] = false;
    return keyTriggers;
  }, [chars, enter, meta]);
  const [triggers, setTriggers] = React.useState(keyTriggers);

  React.useEffect(() => {
    // Reduce triggers to only keys that are true
    const reducedTriggers = Object.keys(triggers).reduce(
      (acc, key) => {
        if (triggers[key]) acc[key] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    );

    // If all keys are true, console log the keys
    if (!disabled && Object.keys(reducedTriggers).length === Object.keys(triggers).length)
      onTrigger && onTrigger();
  }, [onTrigger, disabled, triggers]);

  return (
    <div
      className={cn(
        "ml-auto flex h-5 w-5 items-center justify-center overflow-hidden rounded-[4px] bg-[rgba(34,34,34,0.08)] leading-none text-secondary-foreground",
        className
      )}
      {...props}
    >
      {meta && (
        <ShortcutPrimitive
          keyTrigger="Meta"
          triggered={!disabled && triggers["meta"]}
          setTriggered={isTriggered => {
            setTriggers(prevTriggers => {
              const newTriggers = { ...prevTriggers };
              newTriggers["meta"] = isTriggered;
              return newTriggers;
            });
          }}
        >
          ⌘
        </ShortcutPrimitive>
      )}
      {enter && (
        <ShortcutPrimitive
          keyTrigger="Enter"
          className="-translate-y-0.5"
          triggered={!disabled && triggers["enter"]}
          setTriggered={isTriggered => {
            setTriggers(prevTriggers => {
              const newTriggers = { ...prevTriggers };
              newTriggers["enter"] = isTriggered;
              return newTriggers;
            });
          }}
        >
          ↵
        </ShortcutPrimitive>
      )}
      {chars !== undefined &&
        chars.map(char => (
          <ShortcutPrimitive
            key={char}
            keyTrigger={char}
            className="text-xs"
            triggered={!disabled && triggers[char]}
            setTriggered={isTriggered => {
              setTriggers(prevTriggers => {
                const newTriggers = { ...prevTriggers };
                newTriggers[char] = isTriggered;
                return newTriggers;
              });
            }}
          >
            {char}
          </ShortcutPrimitive>
        ))}
    </div>
  );
};
Shortcut.displayName = "Shortcut";

export { Shortcut };
export type { ShortcutProps };
