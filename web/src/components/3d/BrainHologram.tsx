'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export function BrainHologram(props: any) {
    const gltf = useGLTF('/brain_hologram.glb');
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            // Gentle floating/breathing scale
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group {...props} dispose={null}>
            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
                floatingRange={[-0.1, 0.1]}
            >
                {/* CENTERED POSITION */}
                <group ref={meshRef} position={[0, 0, 0]}>
                    <primitive object={gltf.scene} />
                </group>
            </Float>

            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            {/* Holographic sparkles effect - Purple Base */}
            <Sparkles
                count={40}
                scale={5}
                size={4}
                speed={0.4}
                opacity={0.5}
                color="#8b5cf6"
            />

            {/* NEW: Green Sparkles for "Active Points" */}
            <Sparkles
                count={35}
                scale={3.5}
                size={5}
                speed={0.8}
                opacity={0.9}
                color="#4ade80" // Green
            />

            <Environment preset="city" />
        </group>
    );
}

useGLTF.preload('/brain_hologram.glb');
