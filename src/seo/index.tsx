import { Metadata } from "next";

export const seo = {
  title: "Unichain",
  description: "Designed for DeFi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unichain.com",
    title: "Unichain",
    description: "Designed for DeFi",
    images: [
      {
        url: "https://unichain-website.vercel.app/preview.png",
        width: 1600,
        height: 826,
        alt: "Unichain logo"
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
