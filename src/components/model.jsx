import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

const GLBModel = () => {
  const gltf = useGLTF("/iitj/ct.glb");
    const meshRef = useRef();

    // useFrame(() => {
    //   meshRef.current.rotation.x += 0.01;
    //   meshRef.current.rotation.y += 0.01;
    //   meshRef.current.rotation.z += 0.01;
    // });

  const scale = 0.25;
  const rotation = [Math.PI / 4, 0, 0];

  return (
    <mesh ref={meshRef}>
      <primitive
        object={gltf.scene}
        scale={[scale, scale, scale]}
        rotation={rotation}
      />
    </mesh>

  );
};

const Model = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GLBModel />
    </Canvas>
  );
};

export default Model;
