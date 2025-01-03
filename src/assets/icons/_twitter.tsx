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
      width="100%"
      height="100%"
      viewBox="0 0 300 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M178.57 127.15L290.27 0H263.81L166.78 110.38L89.34 0H0L117.13 166.93L0 300.25H26.46L128.86 183.66L210.66 300.25H300"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
