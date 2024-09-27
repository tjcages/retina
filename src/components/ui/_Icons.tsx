import * as IconComponents from "@/assets/icons";

type IconKey = keyof typeof IconComponents;

export type Icons = IconKey & string;

interface Props {
  id?: string;
  icon: Icons;
  className?: string;
}

export const Icon = ({ id, icon, className }: Props) => {
  const capitalizedIcon = (icon.charAt(0).toUpperCase() + icon.slice(1)) as IconKey;
  // eslint-disable-next-line import/namespace
  const IconComponent = IconComponents[capitalizedIcon];
  return IconComponent ? <IconComponent id={id} className={className} /> : null;
};

// Type guard to check if a string is a valid icon name
export function isValidIcon(icon: string): icon is Icons {
  return icon.toLowerCase() in IconComponents;
}
