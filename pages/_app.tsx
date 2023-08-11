import React from "react";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, -apple-system,
            BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
            helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
