// src/CubeAnimation.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cube = () => {
  return (
    <mesh rotation={[90, 0, 20]} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

const CubeAnimation = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#000' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};

export default CubeAnimation;