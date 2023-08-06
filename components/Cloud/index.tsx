import { useFrame, useLoader, MeshProps } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { getRandomElement } from "utils/array";

const elements = Array.from({ length: 90 }).map((_, i) => i);

interface SmokeRef {
  props: MeshProps;
  direction: -1 | 1;
}

const textures = Array.from({ length: 5 }).map(
  (_, index) => `textures/smoke/blackSmoke${String(index).padStart(2, "0")}.png`
);

const Cloud = () => {
  const smokeTextures = useLoader(THREE.TextureLoader, textures);
  const smokeGeometry = new THREE.PlaneGeometry(2, 2);
  const smokeMaterial = new THREE.MeshLambertMaterial({
    map: getRandomElement(smokeTextures),
    opacity: 0.3,
    transparent: true,
  });
  const elementRefs = useRef<SmokeRef[]>([]);

  useFrame((state, delta) => {
    elementRefs.current.forEach(({ props, direction }) =>
      props.rotateZ(delta * 0.1 * direction)
    );
  });

  return (
    <>
      {elements.map((key) => {
        const x = (Math.random() - 0.5) * (15 * Math.sin(key));
        const y = (Math.random() - 0.5) * (4 * Math.cos(key));
        const z = Math.random() * -2;
        return (
          <motion.mesh
            key={key}
            ref={(meshProps) =>
              (elementRefs.current[key] = {
                props: meshProps,
                direction: key % 2 === 0 ? -1 : 1,
              })
            }
            args={[smokeGeometry, smokeMaterial]}
            position={[x, y, z]}
            material={smokeMaterial}
            geometry={smokeGeometry}
            whileHover={{
              scale: 1.05,
            }}
          />
        );
      })}
    </>
  );
};

export default Cloud;
