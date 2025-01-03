"use client";

import { useEffect, useState } from "react";
import { proxy, snapshot, subscribe, useSnapshot } from "valtio";

interface State {
  // General States
  controlsOpen: boolean;

  // Canvas States
  fps: number;
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
    chromaticAberration: {
      enabled: boolean;
      offset: number;
    };
    hdrToneMapping: {
      enabled: boolean;
      maxLuminance: number;
      whitePoint: number;
    };
    noise: {
      enabled: boolean;
      opacity: number;
    };
    vignette: {
      enabled: boolean;
      offset: number;
      darkness: number;
    };
    fisheye: {
      enabled: boolean;
      strength: number;
    };
  };
}

const defaultState: State = {
  // General States
  controlsOpen: false,

  // Canvas States
  fps: 0,
  postprocessing: {
    enabled: true,
    n8ao: {
      enabled: true,
      aoRadius: 1,
      intensity: 6
    },
    tiltShift: {
      enabled: true,
      amount: 5,
      blur: 0.1
    },
    chromaticAberration: {
      enabled: false,
      offset: 0.006
    },
    hdrToneMapping: {
      enabled: true,
      maxLuminance: 1,
      whitePoint: 1
    },
    noise: {
      enabled: false,
      opacity: 0.5
    },
    vignette: {
      enabled: false,
      offset: 0.5,
      darkness: 0.5
    },
    fisheye: {
      enabled: false,
      strength: 1.0
    }
  }
};

// Define which keys should not be persisted
const nonPersistentKeys: (keyof State)[] = ["fps", "postprocessing"];

const state = proxy<State>(defaultState);

const readonly = <T>(value: T): Readonly<T> => {
  return value as Readonly<T>;
};

function loadState(): Partial<State> {
  if (typeof window === "undefined") return {};

  try {
    const savedState = localStorage.getItem("persistentState");
    if (!savedState) return {};

    const parsedState = JSON.parse(savedState) as Partial<State>;
    return Object.fromEntries(
      Object.entries(parsedState).filter(([key]) => !nonPersistentKeys.includes(key as keyof State))
    ) as Partial<State>;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return {};
  }
}

function saveState(stateToSave: State): void {
  if (typeof window === "undefined") return;

  try {
    const persistentState = Object.fromEntries(
      Object.entries(stateToSave).filter(([key]) => !nonPersistentKeys.includes(key as keyof State))
    );
    localStorage.setItem("persistentState", JSON.stringify(persistentState));
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
}

// Custom hook for using state with automatic loading
function useLocalState(): State {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadedState = loadState();
    Object.assign(state, loadedState);
    setIsLoaded(true);

    const unsubscribe = subscribe(state, () => {
      const currentState = snapshot(state);
      saveState(currentState as State);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const snapshotState = useSnapshot(state);

  // Return the default state while loading to ensure type consistency
  return isLoaded ? readonly(Object.assign(snapshotState) as State) : readonly(defaultState);
}

export { state, useLocalState };
export type { State };
