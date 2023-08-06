import { Canvas } from "@react-three/fiber";
import Cloud from "components/Cloud";
import CustomCameraControls from "components/CustomCameraControls";
import React from "react";
import styles from "./styles.module.scss";

const Background = () => {
  return (
    <div className={styles.background__canvas}>
      <Canvas>
        <color attach="background" args={["black"]} />
        <CustomCameraControls />
        <ambientLight args={[0xffffff]} />
        <Cloud />
      </Canvas>
    </div>
  );
};

export default Background;
