import { Basel, Jomhuria, Riegraf } from "@/assets/fonts";
import { seo } from "@/seo";
import { cn } from "@/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";

import { SignUpForm } from "@/components/shared";

import "@/styles/global.scss";

export const metadata: Metadata = seo;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fb27ce"
};

console.log("Made with ❤️ by @tjcages");

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={cn(Basel.className, Basel.variable, Jomhuria.variable, Riegraf.variable)}>
          <main>{children}</main>
          <SignUpForm />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
