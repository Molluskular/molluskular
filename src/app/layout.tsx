import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/global.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Molluskular</title>
        <Script id="GA-aysnc" async src="https://www.googletagmanager.com/gtag/js?id=G-8PX3W2B98E"></Script>
        <Script id="GA-gtag" src="/gtag.js">
        </Script>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}