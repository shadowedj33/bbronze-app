/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "./Model";
import PaintSpray from "./PaintSpray";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = (props) => {
  const { setDefaultCamera } = useThree();
  return <PerspectiveCamera makeDefault onUpdate={setDefaultCamera} position={[0, 2, 5]} {...props} />;
};

const Scene = () => {
    return (
        <div className="overflow-visible" style={{ position: 'absolute', top: 300, left: 400, right: 0, height: '60vh' }}>
            <Canvas>
                <Camera fov={75} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Model />
                <PaintSpray />
            </Canvas>
        </div>
    );
};

export default Scene;