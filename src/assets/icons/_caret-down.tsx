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
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.65099 7.698L8.84093 5.10095C9.20893 4.66445 8.89697 4 8.32397 4H3.67602C3.10302 4 2.79105 4.66495 3.15905 5.10095L5.34899 7.698C5.68849 8.1005 6.31149 8.1005 6.65099 7.698Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
