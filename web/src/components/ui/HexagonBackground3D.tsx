'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Color, InstancedMesh, Matrix4 } from 'three';
import { useMemo, useRef } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Grid Configuration
const HEX_SIZE = 1.0;
const GAP = 0.1;
const ROW_COUNT = 40;
const COL_COUNT = 40;

function HexagonGrid() {
    const meshRef = useRef<InstancedMesh>(null);
    const dummy = useMemo(() => new Matrix4(), []);
    const tempColor = useMemo(() => new Color(), []);

    // Base Colors - Dark Tech Theme
    const colorBase = new Color('#1a2e2b');
    const colorHover = new Color('#cbede0'); // Bright Green/Cyan
    const colorNeighbor = new Color('#2e4c47'); // Mid Tone

    // Initialize Position Data
    const particles = useMemo(() => {
        const temp = [];
        // Hexagon positioning math (honeycomb pattern)
        // Width of one hex (flat to flat) = sqrt(3) * size
        // Height of one hex (point to point) = 2 * size
        // Spacing: X = width, Y = height * 0.75

        // Total dim approx
        const hexWidth = HEX_SIZE * 1.732;
        const hexHeight = HEX_SIZE * 2;

        const totalWidth = COL_COUNT * (hexWidth + GAP);
        const totalHeight = ROW_COUNT * (hexHeight * 0.75 + GAP);

        for (let r = 0; r < ROW_COUNT; r++) {
            for (let c = 0; c < COL_COUNT; c++) {
                const xOffset = (r % 2) * ((hexWidth + GAP) / 2);
                const x = c * (hexWidth + GAP) - totalWidth / 2 + xOffset;
                const y = r * (hexHeight * 0.75 + GAP) - totalHeight / 2;

                const z = Math.random() * 0.2; // Minor variation
                temp.push({ x, y, z, originalZ: z });
            }
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Mouse Interaction
        const mouseX = state.mouse.x * 35; // Adjust based on FOV/Dist
        const mouseY = state.mouse.y * 20;

        let i = 0;
        for (let r = 0; r < ROW_COUNT; r++) {
            for (let c = 0; c < COL_COUNT; c++) {
                const p = particles[i];

                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Wave Logic
                let targetZ = p.originalZ;
                if (dist < 8) {
                    const force = (8 - dist) / 8;
                    // Lift towards camera (Positive Z)
                    targetZ = p.originalZ + (force * 3.5);
                    meshRef.current.setColorAt(i, tempColor.lerpColors(colorNeighbor, colorHover, force));
                } else {
                    targetZ = p.originalZ;
                    meshRef.current.setColorAt(i, colorBase);
                }

                // Animation Lerp
                p.z += (targetZ - p.z) * 0.1;

                // --- ORIENTATION FIX ---
                // 1. Position: Move to x,y,z
                const posMatrix = new Matrix4().makeTranslation(p.x, p.y, p.z);

                // 2. Rotate: Cylinder geometry is Y-up. Rotate X 90deg to face Z (Camera).
                const rotMatrix = new Matrix4().makeRotationX(Math.PI / 2);

                // 3. Scale: Flatten the Y-axis (Thickness) NOT the Face axes (X, Z).
                const scaleMatrix = new Matrix4().makeScale(1, 0.2, 1);

                // Order: Scale Object -> Rotate Object -> Move Object
                // But matrix multiply is A * B means Apply A then B is B * A? 
                // ThreeJS multiply: a.multiply(b) sets a = a * b.
                // Transform P = M * v.
                // P = (Pos * Rot * Scale) * v
                dummy.identity()
                    .multiply(posMatrix)
                    .multiply(rotMatrix)
                    .multiply(scaleMatrix);

                // Also rotate Z to make point up/down if desired (optional)
                // dummy.multiply(new Matrix4().makeRotationY(Math.PI/6)); 

                meshRef.current.setMatrixAt(i, dummy);
                i++;
            }
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, particles.length]}>
            {/* Cylinder: radiusTop, radiusBottom, height, segments */}
            <cylinderGeometry args={[HEX_SIZE * 0.95, HEX_SIZE * 0.95, 1, 6]} />
            <meshStandardMaterial
                color="#1a2e2b"
                metalness={0.9}
                roughness={0.1}
                emissive="#000000"
            />
        </instancedMesh>
    );
}

function Scene() {
    return (
        <group rotation={[0, 0, 0]} position={[0, 0, -5]}>
            <HexagonGrid />
            {/* Dramatics Lights */}
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 20]} intensity={2.5} color="#cbede0" distance={60} decay={1.5} />
            <spotLight position={[20, 20, 30]} angle={0.4} penumbra={1} intensity={2} color="#ffffff" />
            <spotLight position={[-20, -20, 30]} angle={0.4} penumbra={1} intensity={1} color="#2e4c47" />
        </group>
    );
}

export default function HexagonBackground3D() {
    return (
        <div className="absolute inset-0 z-0 bg-[#0f1a18]">
            <Canvas camera={{ position: [0, 0, 40], fov: 35 }} dpr={[1, 2]}>
                <Scene />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} intensity={1.2} />
                </EffectComposer>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a18] via-transparent to-[#0f1a18] opacity-60 pointer-events-none"></div>
        </div>
    );
}
