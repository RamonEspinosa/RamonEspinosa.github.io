import GradientTextButton from "components/GradientTextButton";
import { NAME_GRADIENT } from "components/GradientTextButton/palettes";
import React from "react";
import styles from "./styles.module.scss";

const Title = () => {
  return (
    <h1 className={styles.welcome__title}>
      Welcome!
      <GradientTextButton palette={NAME_GRADIENT}>I am Juan</GradientTextButton>
    </h1>
  );
};

const Welcome = () => {
  return (
    <div className={styles.welcome__wrapper}>
      <Title />
      <span className={styles.welcome__description}>
        A senior front-end developer
      </span>
    </div>
  );
};

export default Welcome;
