import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
