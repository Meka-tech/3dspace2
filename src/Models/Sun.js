import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

const Sun = (props) => {
  const sunRef = useRef();
  useFrame(({ clock }) => {
    const elaspedTime = clock.getElapsedTime();
    sunRef.current.rotation.x = elaspedTime / 10;
  });
  return (
    <group
      ref={sunRef}
      dispose={null}
      {...props}
      position={[0, 5, -40]}
      scale={10}
    >
      <ambientLight intensity={1} />
      <pointLight color="white" intensity={1000} />
      <mesh>
        <sphereBufferGeometry args={[1.01, 200, 200]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

export default Sun;
