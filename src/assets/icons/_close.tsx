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
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.29289 5.96477C5.68342 5.57424 6.31658 5.57424 6.70711 5.96477L12 11.2577L17.2929 5.96477C17.6834 5.57424 18.3166 5.57424 18.7071 5.96477C19.0976 6.35529 19.0976 6.98846 18.7071 7.37898L13.4142 12.6719L18.7071 17.9648C19.0976 18.3553 19.0976 18.9885 18.7071 19.379C18.3166 19.7695 17.6834 19.7695 17.2929 19.379L12 14.0861L6.70711 19.379C6.31658 19.7695 5.68342 19.7695 5.29289 19.379C4.90237 18.9885 4.90237 18.3553 5.29289 17.9648L10.5858 12.6719L5.29289 7.37898C4.90237 6.98846 4.90237 6.35529 5.29289 5.96477Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
