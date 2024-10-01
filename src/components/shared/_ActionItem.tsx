"use client";

import { Icon, type Icons } from "@/components/ui";

export interface ActionItemProps {
  header: string;
  description: string;
  icon: Icons;
  href?: string;
}

const _: React.FC<ActionItemProps> = ({ header, description, icon, href }) => {
  const handleClick = () => {
    if (href) window.open(href);
  };
  return (
    <div
      className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-start gap-3 overflow-hidden rounded-3xl bg-secondary p-4 text-primary transition-all duration-200 ease-in-out hover:bg-pink-secondary/40 hover:text-pink-primary active:scale-95 md:p-6 lg:max-w-[300px]"
      onClick={handleClick}
    >
      <div className="mb-6 flex w-full items-center justify-between gap-3">
        <Icon icon={icon} className="h-5 w-5 text-inherit" />
        <Icon icon="ArrowUpRight" className="h-5 w-5 text-inherit" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3>{header}</h3>
        <p className="text-pretty text-base !leading-none text-inherit opacity-50 md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default _;
