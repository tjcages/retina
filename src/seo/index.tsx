import { Metadata } from "next";

export const seo = {
  title: "Uniswap v4",
  description: "Find a salt value that will deploy the Uniswap V4 protocol to an optimal address.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uniswap.org",
    title: "Uniswap v4",
    description:
      "Find a salt value that will deploy the Uniswap V4 protocol to an optimal address.",
    images: [
      {
        url: "https://uniswap--v4.vercel.app/preview.png",
        width: 1600,
        height: 826,
        alt: "Uniswap v4 preview"
      }
    ]
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico"
    }
  ]
} as Metadata;
