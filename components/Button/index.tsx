import React, { useMemo } from "react";
import { m } from "framer-motion";
import styles from "./styles.module.scss";

interface ButtonProps {
  // use motion.span when part of an HTMLAnchorElement
  as?: typeof m.button | typeof m.span;
  children: React.ReactNode;
  rounded?: boolean;
  size?: "lg" | "md";
  scale?: number;
}

const Button = ({
  as: Renderer = m.button,
  children,
  rounded,
  size = "md",
  scale = 1.05,
  ...props
}: ButtonProps) => {
  const variants = useMemo(
    () => ({
      hovered: {
        scale,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      },
      hoveredText: {
        color: "hsl(44, 98%, 46%)",
        transition: {
          duration: 0.2,
        },
      },
      initial: {
        scale: 1,
        color: "hsl(0, 0%, 100%)",
      },
    }),
    [scale]
  );
  return (
    <Renderer
      variants={variants}
      initial={"initial"}
      whileHover={["hovered", "hoveredText"]}
      className={styles.button}
      data-rounded={rounded}
      data-size={size}
      {...props}
    >
      {children}
    </Renderer>
  );
};

export default Button;
