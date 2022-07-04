import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei/core";
import { useThree } from "@react-three/fiber";

const Asteroid = () => {
  const { nodes, materials } = useGLTF("/assets/asteroid.glb");
  const { viewport, camera } = useThree();
  const [speed] = useState(() => 0.1 + Math.random() / 10);

  const position = useMemo(() => {
    const z = Math.random() * -30;
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z]);
    return [
      THREE.MathUtils.randFloatSpread(bounds.width * 1.5),
      THREE.MathUtils.randFloatSpread(bounds.height * 1.2),
      z,
    ];
  }, [viewport, camera]);

  return (
    <group receiveShadow position={[0, 0, -2.5]} scale={1}>
      <Float position={position} speed={speed}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asteroid.geometry}
          material={materials["Asteroid"]}
          scale={Math.random() * 1.5}
          rotation={[Math.random(), Math.random(), Math.random()]}
        />
      </Float>
    </group>
  );
};

const Asteroids = () => {
  return Array.from({ length: 120 }, (_, i) => <Asteroid key={i} />);
};
export default Asteroids;

useGLTF.preload("/assets/asteroid.glb");
