import Background from "components/Background";
import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.main}>
      <Background />
      <div className={styles.main__content}>{children}</div>
    </main>
  );
};

export default Main;
