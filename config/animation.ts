import { MotionProps } from "framer-motion";

export const ARTICLE_ANIMATION: MotionProps = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  whileInView: {
    opacity: 1,
    y: "0%",
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};
