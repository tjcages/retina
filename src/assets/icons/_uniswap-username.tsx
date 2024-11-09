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
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_56_1458)">
        <rect
          x="3.43311"
          y="2.59607"
          width="12"
          height="12"
          rx="1.33333"
          transform="rotate(4 3.43311 2.59607)"
          fill="#FC74FE"
          shape-rendering="crispEdges"
        />
        <rect
          x="3.31063"
          y="2.45518"
          width="12.264"
          height="12.264"
          rx="1.46533"
          transform="rotate(4 3.31063 2.45518)"
          stroke="#FDAFF0"
          stroke-width="0.264001"
          shape-rendering="crispEdges"
        />
        <path
          d="M5.52059 4.99792L7.01694 5.10256L6.5984 11.0879L5.10205 10.9833L5.52059 4.99792Z"
          fill="#FEF4FF"
        />
        <path
          d="M11.5066 5.4161L13.0029 5.52073L12.5844 11.5061L11.088 11.4015L11.5066 5.4161Z"
          fill="#FEF4FF"
        />
        <path
          d="M6.5984 11.0879L12.5844 11.5061L12.4794 13.0028L6.49402 12.5843L6.5984 11.0879Z"
          fill="#FEF4FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_56_1458"
          x="0.124795"
          y="0.584089"
          width="17.7504"
          height="17.7507"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.459416" />
          <feGaussianBlur stdDeviation="1.14854" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.988917 0 0 0 0 0.445833 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_1458" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_56_1458"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default _;
