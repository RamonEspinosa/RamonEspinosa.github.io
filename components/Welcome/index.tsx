import React from "react";
import styles from "./styles.module.scss";

const Welcome = () => {
  return (
    <div className={styles.welcome__wrapper}>
      <h1 className={styles.welcome__title}>
        Welcome!
        <span className={styles.welcome__name}>I am Juan</span>
      </h1>
      <span className={styles.welcome__description}>
        A senior full-stack developer
      </span>
    </div>
  );
};

export default Welcome;
