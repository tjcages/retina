import { cn } from "@/utils";

interface Props {
  id?: string;
  className?: string;
}

const _ = ({ id, className }: Props) => {
  return (
    <svg
      id={id}
      className={cn(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" />
      <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" />
    </svg>
  );
};

export default _;
