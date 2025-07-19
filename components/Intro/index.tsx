import React from "react";
import Welcome from "components/Welcome";
import Contact from "components/Contact";
import Image from "next/image";
import styles from "./styles.module.scss";
import profilePic from "public/images/me.webp";
import { useAnimate, m } from "framer-motion";

const Intro = () => {
  const [scope, animate] = useAnimate();
  return (
    <section className={styles.intro__section}>
      <div className={styles.intro__wrapper}>
        <div className={styles.intro__container}>
          <Welcome />
          <Contact />
        </div>
        <m.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          ref={scope}
          className={styles.intro__frame}
        >
          <Image
            className={styles.intro__picture}
            src={profilePic}
            alt="Juan Lopez headshot"
            priority
            sizes="(min-width: 550px) 90vw,  400px"
            onLoad={() => {
              animate([
                [
                  scope.current,
                  {
                    opacity: 1,
                  },
                  {
                    duration: 0.5,
                  },
                ],
                [
                  scope.current,
                  {
                    scale: 1,
                  },
                  {
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.5,
                    damping: 16,
                    at: "<",
                  },
                ],
              ]);
            }}
          />
        </m.div>
      </div>
    </section>
  );
};

export default Intro;
