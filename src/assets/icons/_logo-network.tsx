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
      width="105"
      height="105"
      viewBox="0 0 105 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="105" height="105" rx="20" fill="#F50DB4" />
      <path
        d="M93.9991 51.7099C71.5049 51.7099 53.2892 33.4758 53.2892 11H51.71V51.7099H11V53.2891C33.4942 53.2891 51.71 71.5232 51.71 93.9991H53.2892V53.2891H93.9991V51.7099Z"
        fill="white"
      />
    </svg>
  );
};

export default _;
