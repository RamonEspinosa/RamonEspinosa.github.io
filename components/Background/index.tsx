import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./styles.module.scss";

const Background = () => {
  return (
    <div className={styles.background__canvas}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Background;
