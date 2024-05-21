// import React, { useRef, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import random from "random";
// import styled from "styled-components";

// const StyledCanvasWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   position: absolute;
//   inset: 0;
// `;

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => {
//     const points = new Array(5000)
//       .fill(0)
//       .map(() => [
//         random.float(-1.2, 1.2),
//         random.float(-1.2, 1.2),
//         random.float(-1.2, 1.2),
//       ]);
//     return new Float32Array(points.flat());
//   });

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StyledStarsCanvas = () => {
//   return (
//     <StyledCanvasWrapper>
//       <Canvas camera={{ position: [0, 0, 0] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </StyledCanvasWrapper>
//   );
// };

// export default StyledStarsCanvas;

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import random from "random";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = ({ color = "#f272c8", size = 0.002, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const points = new Array(5000)
      .fill(0)
      .map(() => [
        random.float(-1.2, 1.2),
        random.float(-1.2, 1.2),
        random.float(-1.2, 1.2),
      ]);
    return new Float32Array(points.flat());
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = ({ color, size }) => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={null}>
          <Stars color={color} size={size} />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
