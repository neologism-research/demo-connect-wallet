import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const amazingFont = localFont({
  src: "../font/AmazingViews/Amazing Views.ttf",
  variable: "--font-amazing-views"
});

export const metadata: Metadata = {
  title: "Neologism Connect Wallet Demo",
  description: "Neologism Connect Wallet Demo"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, montserrat.variable, amazingFont.variable)}>{children}</body>
    </html>
  );
}
