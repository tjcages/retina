import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./Basel-Book.otf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-basel"
});

export default _;
