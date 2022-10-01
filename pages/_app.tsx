import React from "react";
import { AppProps } from "next/app";
import { ResetCSS } from "components/ResetCSS";
import Navbar from "components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCSS />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
