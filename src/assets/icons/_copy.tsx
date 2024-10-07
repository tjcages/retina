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
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.25 2.5H10C10.4142 2.5 10.75 2.83579 10.75 3.25V8.5C10.75 8.91421 10.4142 9.25 10 9.25H3.25C2.83579 9.25 2.5 8.91421 2.5 8.5V3.25C2.5 2.83579 2.83579 2.5 3.25 2.5ZM1.5 3.25C1.5 2.2835 2.2835 1.5 3.25 1.5H10C10.9665 1.5 11.75 2.2835 11.75 3.25V5.5H12.75C13.7165 5.5 14.5 6.2835 14.5 7.25V11.5C14.5 12.4665 13.7165 13.25 12.75 13.25H7.25C6.2835 13.25 5.5 12.4665 5.5 11.5V10.25H3.25C2.2835 10.25 1.5 9.4665 1.5 8.5V3.25ZM6.5 10.25V11.5C6.5 11.9142 6.83579 12.25 7.25 12.25H12.75C13.1642 12.25 13.5 11.9142 13.5 11.5V7.25C13.5 6.83579 13.1642 6.5 12.75 6.5H11.75V8.5C11.75 9.4665 10.9665 10.25 10 10.25H6.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
