import React from "react";
import Welcome from "components/Welcome";
import Contact from "components/Contact";
import Image from "next/image";
import styles from "./styles.module.scss";
import profilePic from "public/images/me.webp";

const About = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <Welcome />
        <Contact />
      </div>
      <div className={styles.about__frame}>
        <Image
          src={profilePic}
          alt="Juan Lopez headshot"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default About;
