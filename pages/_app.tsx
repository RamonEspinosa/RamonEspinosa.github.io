import React from "react";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "styles/global.scss";
import { LazyMotion, domAnimation } from "framer-motion";

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
      <LazyMotion strict features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}
console.log(
  `
Hello there! 👋
Want to see me in action as I build this website from scratch, step by step? 👷‍♂️
I've put together an awesome video just for you. Click the link below to watch the magic happen! 🎥🚀
https://www.youtube.com/watch?v=dQw4w9WgXcQ
  `
);
