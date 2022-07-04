import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
import Sun from "./Models/Sun";
import styled from "styled-components";
import { Suspense } from "react";
import { Float, OrbitControls, Stars } from "@react-three/drei/core";

import Asteroids from "./Asteroids";
import { Text } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei/web";
import Astronaut from "./AstronaughtWave";

function App() {
  return (
    <div className="App">
      <Canvas
        className="canvas"
        shadows
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <ambientLight intensity={1} position={[0, 0, 0]} />

        <Suspense fallback={null}>
          <Sun />

          <Caption>{`WELCOME\nTO MY\nWORLD.`}</Caption>

          <Float>
            {" "}
            <Asteroids />
            <Astronaut />
          </Float>
        </Suspense>

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      color="darkgray"
    >
      {children}
    </Text>
  );
}

export default App;
