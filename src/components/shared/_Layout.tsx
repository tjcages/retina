"use client";

import { useLocalState } from "@/store";
import { cn } from "@/utils";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const _: React.FC<Props> = ({ children }) => {
  const { controlsOpen } = useLocalState();
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex max-h-screen min-h-screen w-full items-start justify-end overflow-y-scroll bg-background">
      <div
        className={cn(
          "transition-all duration-1000 ease-in-out",
          !controlsOpen && "-translate-y-[5%] translate-x-[20%] opacity-0"
        )}
      >
        {Array.isArray(children) && children.length > 0 ? children[1] : null}
      </div>
      <div
        className={cn(
          "fixed inset-0 origin-left overflow-hidden transition-all duration-1000 ease-in-out",
          controlsOpen && "translate-x-[2.5%] scale-75 rounded-2xl"
        )}
      >
        {Array.isArray(children) ? children[0] : children}
      </div>
    </div>
  );
};

export default _;
