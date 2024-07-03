/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PaintSpray = () => {
    const particleCount = 10000;
    const nozzlePosition = useMemo(() => new THREE.Vector3(-1.5, 2.3, 0), []);
    const particles = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Array(particleCount);
        const colors = new Float32Array(particleCount * 3);
        const color = new THREE.Color();

        for (let i = 0; i < particleCount; i++) {
            // Initial position near the nozzle
            positions[i * 3] = nozzlePosition.x;
            positions[i * 3 + 1] = nozzlePosition.y;
            positions[i * 3 + 2] = nozzlePosition.z;

            // Initial velocity
            velocities[i] = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 5, (Math.random() - 0.5) * 2);

            // Color
            color.set('#242020');
            colors.set(color.toArray(), i * 3);
        }

        return { positions, velocities, colors };
    }, [nozzlePosition]);

    const particlesRef = useRef();
    useFrame(() => {
        const positions = particlesRef.current.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 2] += particles.velocities[i].x * 0.1;
            positions[i * 3] += particles.velocities[i].y * 0.1;
            positions[i * 3 + 1] += particles.velocities[i].z * 0.1;

            // Reset particles reaching a certain distance or life span
            if (positions[i * 3 + 1] < -5 || Math.random() > 0.95) {
                positions[i * 3] = nozzlePosition.x;
                positions[i * 3 + 1] = nozzlePosition.y;
                positions[i * 3 + 2] = nozzlePosition.z;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={particlesRef} positions={particles.positions} colors={particles.colors} size={0.03} sizeAttenuation={true} depthWrite={false}>
            <PointMaterial vertexColors transparent size={0.03} sizeAttenuation={true} depthWrite={false} />
        </Points>
    );
};

export default PaintSpray;