import React, { useState, useEffect } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  palette: string[];
}

const GradientTextButton = ({ children, palette }: Props) => {
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
    palette.map((_, i) => i),
    palette
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className={styles.button}
        style={{ backgroundImage }}
        onClick={() => {
          setGradient((value) => {
            const next = value + 1;
            return next > palette.length - 1 ? 0 : next;
          });
        }}
      >
        {children}
      </m.button>
    </LazyMotion>
  );
};

export default GradientTextButton;
