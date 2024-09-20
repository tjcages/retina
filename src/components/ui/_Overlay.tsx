import { cn } from "@/utils";

interface Props {
  visible: boolean | null;
}

export const Overlay = ({ visible }: Props) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-20 bg-black/50 opacity-0 transition-opacity delay-100 duration-200 ease-out",
        {
          hidden: visible === null
        },
        {
          "opacity-20 delay-0 ease-in": visible
        }
      )}
    />
  );
};
