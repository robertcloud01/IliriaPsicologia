'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HexagonBackground() {
    const [hexagons, setHexagons] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Determine number of hexagons based on screen size to fill cover
        // This is a simplified grid approximation
        const calculateGrid = () => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();
            const hexSize = 60; // Approximate width
            const cols = Math.ceil(width / hexSize);
            const rows = Math.ceil(height / (hexSize * 0.8));
            setHexagons(Array.from({ length: cols * rows }));
        };

        calculateGrid();
        window.addEventListener('resize', calculateGrid);
        return () => window.removeEventListener('resize', calculateGrid);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-[#1a2e2b] flex flex-wrap content-start opacity-100">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2e2b] z-20 pointer-events-none"></div>

            <div className="flex flex-wrap -ml-4 -mt-4 w-[120%] h-[120%]">
                {hexagons.map((_, i) => (
                    <Hexagon key={i} />
                ))}
            </div>
        </div>
    );
}

function Hexagon() {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                filter: "brightness(1.5)",
                zIndex: 10
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative w-16 h-16 -mr-2 -mb-2"
            style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                backgroundColor: "rgba(100, 255, 218, 0.1)", // Weak neon green/teal
                boxShadow: "0 0 10px rgba(100, 255, 218, 0.05)",
                margin: '2px',
                cursor: 'crosshair',
            }}
        >
            <div className="absolute inset-[1px] bg-[#1a2e2b]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                {/* Inner Content - Subtle Glow */}
                <div className="w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-secondary/20"></div>
            </div>
        </motion.div>
    )
}
