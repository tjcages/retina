"use client";

import { state } from "@/store";

const _ = () => {
  return (
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-md bg-white px-4 py-3 text-black">
      <button onClick={() => (state.controlsOpen = !state.controlsOpen)}>Open Controls</button>
    </div>
  );
};

export default _;
