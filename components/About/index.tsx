import React from "react";
import Welcome from "components/Welcome";
import Contact from "components/Contact";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <Welcome />
        <Contact />
      </div>
      <div className={styles.about__placeholder} />
    </section>
  );
};

export default About;
