import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const Earth = () => {
  const ref = useRef();
  const [earthSurface] = useState(() => {
    const points = [];
    const numPoints = 1000; // Reduced star count
    const radius = 1;
    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2 * Math.PI;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      points.push([x, y, z]);
    }
    return new Float32Array(points.flat());
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 10; // Rotate slowly
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={earthSurface} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#0077ff"
          size={0.03} // Increased star size
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const EarthStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default EarthStarsCanvas;
