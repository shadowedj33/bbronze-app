/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PaintSpray = () => {
    const particleCount = 1000;
    const nozzlePosition = useMemo(() => new THREE.Vector3(1.7, 2.1, 0), []);
    const particles = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Array(particleCount);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount); // Array for particle sizes
        const color = new THREE.Color();
    
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = nozzlePosition.x;
            positions[i * 3 + 1] = nozzlePosition.y;
            positions[i * 3 + 2] = nozzlePosition.z;
    
            velocities[i] = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 5, (Math.random() - 0.5) * 2);
    
            color.set('#242020');
            colors.set(color.toArray(), i * 3);
    
            sizes[i] = Math.random() * 0.5 + 0.1; // Randomize particle size for a more natural look
        }
    
        return { positions, velocities, colors, sizes };
    }, [nozzlePosition]);

    const particlesRef = useRef();
    useFrame(() => {
        const positions = particlesRef.current.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 2] += particles.velocities[i].x * 0.001;
            positions[i * 3] -= particles.velocities[i].y * 0.01;
            positions[i * 3 + 1] += particles.velocities[i].z * 0.01;

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
        <Points ref={particlesRef} positions={particles.positions} colors={particles.colors} size={0.02} sizeAttenuation={true} depthWrite={false}>
            <PointMaterial vertexColors transparent size={0.02} sizeAttenuation={true} depthWrite={false} />
        </Points>
    );
};

export default PaintSpray;