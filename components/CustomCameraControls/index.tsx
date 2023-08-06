import { useFrame } from "@react-three/fiber";

const CustomCameraControls = () => {
  useFrame(({ camera, mouse }) => {
    const scale = 0.1;
    camera.position.x = mouse.x * scale;
    camera.position.y = mouse.y * scale;
  });
  return null;
};

export default CustomCameraControls;
