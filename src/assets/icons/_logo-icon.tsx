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
      width="116"
      height="115"
      viewBox="0 0 116 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M115.476 56.406C84.3089 56.406 59.07 31.1416 59.07 0H56.8819V56.406H0.47583V58.594C31.6429 58.594 56.8819 83.8584 56.8819 115H59.07V58.594H115.476V56.406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;