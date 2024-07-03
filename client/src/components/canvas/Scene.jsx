/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./Model";
import PaintSpray from "./PaintSpray";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = (props) => {
  const { setDefaultCamera } = useThree();
  return <PerspectiveCamera makeDefault onUpdate={setDefaultCamera} position={[0, 2, 5]} {...props} />;
};

const Scene = () => {
    // Responsive canvas size
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="overflow-visible" style={{ position: 'absolute', top: 200, left: 0, width: dimensions.width, height: dimensions.height }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Model position={[2.2, 1.2, 0]} scale={0.4} />
                <PaintSpray />
            </Canvas>
        </div>
    );
};

export default Scene;