import React from "react";
import { m, Variants } from "framer-motion";

import styles from "./styles.module.scss";
import ContactForm from "components/ContactForm";
import GradientTextButton from "components/GradientTextButton";
import { NAME_GRADIENT } from "components/GradientTextButton/palettes";

const variants: Variants = {
  offscreen: {
    y: "99%",
    opacity: 0.8,
  },
  onscreen: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Outro = () => {
  return (
    <div className={styles.outro}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
        className={styles.outro__wrapper}
      >
        <div className={styles.outro__container}>
          <GradientTextButton palette={NAME_GRADIENT}>
            Let&apos;s
            <br />
            <span className={styles.outro__talk}>talk!</span>
          </GradientTextButton>

          <ContactForm />
        </div>
      </m.div>
    </div>
  );
};

export default Outro;
