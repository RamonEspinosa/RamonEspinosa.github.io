import { Canvas } from "@react-three/fiber";
import Cloud from "components/Cloud";
import React from "react";
import styles from "./styles.module.scss";

const Background = () => {
  return (
    <div className={styles.background__canvas}>
      <Canvas>
        <ambientLight args={[0xffffff]} />
        <Cloud />
      </Canvas>
    </div>
  );
};

export default Background;
