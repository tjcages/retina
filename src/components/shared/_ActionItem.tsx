"use client";

import { useIsDesktop } from "@/hooks";
import { state } from "@/store";
import { cn } from "@/utils";

import { Badge, Icon, type Icons } from "@/components/ui";

export interface ActionItemProps {
  index?: number;
  header?: string;
  description?: string;
  icon?: Icons;
  href?: string;
  comingSoon?: boolean;
  disabled?: boolean;
  setHovered?: (index: number | null) => void;
}

const _: React.FC<ActionItemProps> = ({
  index,
  header,
  description,
  icon,
  href,
  comingSoon,
  disabled,
  setHovered
}) => {
  const isDesktop = useIsDesktop(1024);
  const handleClick = () => {
    if (href === "SignUpForm") state.isRulesVisible = true;
    else {
      if (href) window.open(href);
    }
  };
  return header !== undefined ? (
    <div
      className={cn(
        "group relative flex h-full w-full cursor-pointer flex-col items-start justify-start gap-3 overflow-hidden rounded-3xl bg-secondary p-4 text-primary transition-all duration-200 ease-in-out hover:bg-pink-secondary/20 hover:text-pink-primary hover:mix-blend-multiply active:scale-95 md:p-6 lg:max-w-[300px]",
        disabled && "opacity-50 mix-blend-luminosity"
      )}
      onClick={handleClick}
      onMouseEnter={() => setHovered?.(index !== undefined ? index : null)}
      onMouseLeave={() => setHovered?.(null)}
    >
      <div className="mb-6 flex w-full items-center justify-between gap-3">
        {comingSoon ? (
          <Badge variant="secondary" className="-ml-1.5 -mt-1.5 bg-background px-2 pb-0.5 pt-1">
            Coming soon
          </Badge>
        ) : (
          <Icon icon={icon || "NoteText"} className="h-5 w-5 text-inherit" />
        )}
        <Icon icon="ArrowUpRight" className="h-5 w-5 text-inherit" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3>{header}</h3>
        <h5 className="text-pretty text-base text-inherit opacity-50 md:text-xl">{description}</h5>
      </div>
    </div>
  ) : isDesktop ? (
    <div />
  ) : null;
};

export default _;
