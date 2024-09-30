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
        d="M8.00016 0.833496C4.04816 0.833496 0.833496 4.04816 0.833496 8.00016C0.833496 11.9522 4.04816 15.1668 8.00016 15.1668C11.9522 15.1668 15.1668 11.9522 15.1668 8.00016C15.1668 4.04816 11.9522 0.833496 8.00016 0.833496ZM8.00016 14.1668C4.5995 14.1668 1.8335 11.4008 1.8335 8.00016C1.8335 4.5995 4.5995 1.8335 8.00016 1.8335C11.4008 1.8335 14.1668 4.5995 14.1668 8.00016C14.1668 11.4008 11.4008 14.1668 8.00016 14.1668ZM11.6868 6.31348C11.8822 6.50881 11.8822 6.8255 11.6868 7.02083L9.82483 8.88281C9.37083 9.33748 8.63016 9.33813 8.1755 8.88346L7.11616 7.82682C7.05083 7.76149 6.9455 7.76149 6.88017 7.82682L5.0195 9.6875C4.92216 9.78483 4.79416 9.83415 4.66616 9.83415C4.53816 9.83415 4.41016 9.7855 4.31283 9.6875C4.1175 9.49217 4.1175 9.17548 4.31283 8.98014L6.17349 7.11947C6.62816 6.6648 7.36816 6.66482 7.82283 7.11882L8.88216 8.17546C8.9475 8.24012 9.05283 8.24012 9.11816 8.17546L10.9802 6.31348C11.1755 6.11814 11.4915 6.11814 11.6868 6.31348Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default _;
