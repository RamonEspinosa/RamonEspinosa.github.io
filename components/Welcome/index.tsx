import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import gradients from "./gradients";

const Title = () => {
  const [gradient, setGradient] = useState(0);
  const motionValue = useMotionValue(gradient);

  const spring = useSpring(motionValue, {
    bounce: 0,
  });

  useEffect(() => {
    motionValue.set(gradient);
  }, [gradient, motionValue]);

  const backgroundImage = useTransform(
    spring,
    gradients.map((_, i) => i),
    gradients
  );

  return (
    <LazyMotion features={domAnimation}>
      <h1 className={styles.welcome__title}>
        Welcome!
        <m.button
          className={styles.welcome__name}
          style={{ backgroundImage }}
          onClick={() => {
            setGradient((value) => {
              const next = value + 1;
              return next > gradients.length - 1 ? 0 : next;
            });
          }}
        >
          I am Juan
        </m.button>
      </h1>
    </LazyMotion>
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
