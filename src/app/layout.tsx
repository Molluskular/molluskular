import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/global.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "./Provider";

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
        {process.env.NODE_ENV === "production" && (<Script
          id="GA-aysnc"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8PX3W2B98E"
        ></Script>)}
        {process.env.NODE_ENV === "production" && (<Script id="GA-gtag" src="/scripts/gtagnew.js"></Script> )}
        {process.env.NODE_ENV === "production" && (<Script id="hotjar" src="/scripts/hotjar.js"></Script>)}
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
