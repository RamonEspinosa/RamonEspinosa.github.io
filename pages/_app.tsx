import React from "react";
import { AppProps } from "next/app";
import { ResetCSS } from "components/ResetCSS";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCSS />
      <Component {...pageProps} />
    </>
  );
}
