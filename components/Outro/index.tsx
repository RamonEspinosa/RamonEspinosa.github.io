import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.scss";
import ContactForm from "components/ContactForm";

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
    <motion.div className={styles.outro}>
      <motion.div
        className={styles.outro__banner}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
      >
        <div className={styles.outro__container}>
          <p className={styles.outro__title}>
            Let&apos;s
            <br />
            <span className={styles.outro__talk}>talk!</span>
          </p>
          <ContactForm />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Outro;
