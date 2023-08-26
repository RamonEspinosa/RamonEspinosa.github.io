import React from "react";
import Welcome from "components/Welcome";
import Contact from "components/Contact";
import Image from "next/image";
import styles from "./styles.module.scss";
import profilePic from "public/images/me.webp";

const Intro = () => {
  return (
    <section className={styles.intro__section}>
      <div className={styles.intro__wrapper}>
        <div className={styles.intro__container}>
          <Welcome />
          <Contact />
        </div>
        <div className={styles.intro__frame}>
          <Image
            className={styles.intro__picture}
            src={profilePic}
            alt="Juan Lopez headshot"
            priority
            sizes="(min-width: 550px) 90vw,  400px"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
