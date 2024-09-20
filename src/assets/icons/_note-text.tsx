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
        d="M11.3334 14.5H4.66669C3.05469 14.5 2.16669 13.612 2.16669 12V4C2.16669 2.388 3.05469 1.5 4.66669 1.5H11.3334C12.9454 1.5 13.8334 2.388 13.8334 4V12C13.8334 13.612 12.9454 14.5 11.3334 14.5ZM4.66669 2.5C3.61535 2.5 3.16669 2.94867 3.16669 4V12C3.16669 13.0513 3.61535 13.5 4.66669 13.5H11.3334C12.3847 13.5 12.8334 13.0513 12.8334 12V4C12.8334 2.94867 12.3847 2.5 11.3334 2.5H4.66669ZM11.1667 8C11.1667 7.724 10.9427 7.5 10.6667 7.5H5.33335C5.05735 7.5 4.83335 7.724 4.83335 8C4.83335 8.276 5.05735 8.5 5.33335 8.5H10.6667C10.9427 8.5 11.1667 8.276 11.1667 8ZM9.16669 10.6667C9.16669 10.3907 8.94269 10.1667 8.66669 10.1667H5.33335C5.05735 10.1667 4.83335 10.3907 4.83335 10.6667C4.83335 10.9427 5.05735 11.1667 5.33335 11.1667H8.66669C8.94269 11.1667 9.16669 10.9427 9.16669 10.6667ZM11.1667 5.33333C11.1667 5.05733 10.9427 4.83333 10.6667 4.83333H5.33335C5.05735 4.83333 4.83335 5.05733 4.83335 5.33333C4.83335 5.60933 5.05735 5.83333 5.33335 5.83333H10.6667C10.9427 5.83333 11.1667 5.60933 11.1667 5.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;