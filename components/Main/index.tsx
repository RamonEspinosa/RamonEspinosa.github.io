import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Canvas } from "@react-three/fiber";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.main}>
      <div className={styles.main__canvas}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className={styles.main__content}>{children}</div>
    </main>
  );
};

export default Main;
