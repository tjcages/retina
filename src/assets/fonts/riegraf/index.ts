import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./Riegraf-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./Riegraf-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./Riegraf-Italic.ttf",
      weight: "400",
      style: "italic"
    }
  ],
  variable: "--font-riegraf"
});

export default _;
