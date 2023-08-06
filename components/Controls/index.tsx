import { extend, Object3DNode, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

const Controls = (props) => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} {...props} />;
};
export default Controls;
