'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Canvas } from '@react-three/fiber';
import { BrainHologram } from '../3d/BrainHologram';

export default function Mission() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#050a09] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40 mix-blend-screen pointer-events-none"></div>

            <div className="container-fluid relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: Text Content */}
                    <div className="order-2 lg:order-1 flex flex-col gap-8">
                        <ScrollReveal>
                            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-4">
                                Nossa Missão
                            </span>
                            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.2] mb-6">
                                Um espaço para <span className="italic text-white/60">transformação.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed">
                                <p>
                                    Nossa missão é fornecer um espaço seguro e de apoio onde você possa explorar seus pensamentos e sentimentos, e trabalhar em direção a mudanças significativas.
                                </p>
                                <p>
                                    Somos uma equipe de psicólogos clínicos e registrados apaixonados por ajudar pessoas a melhorar sua saúde mental e bem-estar. Oferecemos uma variedade de terapias baseadas em evidências, personalizadas para suas necessidades individuais.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT SIDE: 3D Hologram */}
                    <div className="order-1 lg:order-2 h-[500px] md:h-[600px] relative flex items-center justify-center">
                        {/* 3D Canvas Container */}
                        <motion.div
                            style={{ y }}
                            className="w-full h-full relative"
                        >
                            <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                                {/* Glow effect behind brain */}
                                <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

                                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                                    <Suspense fallback={null}>
                                        <ambientLight intensity={0.5} />
                                        <pointLight position={[10, 10, 10]} intensity={1} />
                                        <BrainHologram scale={3.2} />
                                    </Suspense>
                                </Canvas>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
