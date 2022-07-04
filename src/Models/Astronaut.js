import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei/web";

export default function Astronaut(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/astronaut/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <PresentationControls>
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_106.geometry}
          material={materials["material_2"]}
        />
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/astronaut/scene.gltf");
