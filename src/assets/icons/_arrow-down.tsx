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
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4999 3.33325C10.9602 3.33325 11.3333 3.70635 11.3333 4.16659L11.3333 13.8214L15.744 9.41066C16.0694 9.08523 16.5971 9.08523 16.9225 9.41066C17.2479 9.7361 17.2479 10.2637 16.9225 10.5892L11.0892 16.4225C10.7637 16.7479 10.2361 16.7479 9.91066 16.4225L4.07733 10.5892C3.75189 10.2637 3.75189 9.7361 4.07733 9.41066C4.40277 9.08523 4.9304 9.08523 5.25584 9.41066L9.66658 13.8214L9.66658 4.16659C9.66658 3.70635 10.0397 3.33325 10.4999 3.33325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
