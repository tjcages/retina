import localFont from "next/font/local";

const sfMono = localFont({
  src: [
    {
      path: "./SF-Mono-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./SF-Mono-LightItalic.otf",
      weight: "300",
      style: "italic"
    },
    {
      path: "./SF-Mono-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./SF-Mono-RegularItalic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./SF-Mono-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./SF-Mono-MediumItalic.otf",
      weight: "500",
      style: "italic"
    },
    {
      path: "./SF-Mono-Semibold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./SF-Mono-SemiboldItalic.otf",
      weight: "600",
      style: "italic"
    },
    {
      path: "./SF-Mono-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./SF-Mono-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },
    {
      path: "./SF-Mono-Heavy.otf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./SF-Mono-HeavyItalic.otf",
      weight: "800",
      style: "italic"
    }
  ],
  variable: "--font-sf-mono"
});

export default sfMono;
