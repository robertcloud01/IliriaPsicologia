'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CanvasBackground from '@/components/ui/CanvasBackground';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#0f1a18] pt-20 overflow-hidden">

            {/* Interactive Background */}
            {/* Static Background Image */}
            {/* Animated Canvas Background */}
            <CanvasBackground />

            <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="w-16 h-[2px] bg-white/50 origin-left"
                    ></motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
                    >
                        Psicologia para <br />
                        mudanças <span className="italic text-[#cbede0] opacity-90">significativas.</span>
                    </motion.h1>



                    {/* Trust Signals: Professional credentials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center gap-6 text-white/60 text-sm font-sans"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/60"></div>
                            <span>CRP Registrado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/60"></div>
                            <span>20+ psicólogos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/60"></div>
                            <span>Atendimento seguro</span>
                        </div>
                    </motion.div>

                    {/* Hick's Law: Simplified to 1 primary + 1 secondary CTA only */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                    >
                        {/* Von Restorff + Fitts' Law: High contrast, 48px height CTA */}
                        <Link href="/contato" className="bg-white text-primary px-10 py-4 min-h-[48px] font-sans text-sm font-bold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                            Agende Hoje
                        </Link>

                        {/* Secondary action - less prominent */}
                        <Link href="/equipe" className="text-white border-2 border-white/30 px-10 py-4 min-h-[48px] font-sans text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 rounded-sm inline-flex items-center justify-center">
                            Conheça a equipe
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side - Welcoming Image */}
                <div className="lg:col-span-5 h-full min-h-[400px] flex items-center justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 1.2 }}
                        className="w-3/4 aspect-[4/5] rounded-t-[100px] shadow-2xl shadow-black/40 relative overflow-hidden border border-white/10"
                    >
                        <img
                            src="/hero-image.png"
                            alt="Espaço acolhedor da clínica"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay with quote */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-8">
                            <div className="text-center text-white">
                                <p className="font-serif text-2xl lg:text-3xl italic opacity-90 mb-4">"Inclusivo, acolhedor e profissional"</p>
                                <div className="w-8 h-[1px] bg-white/40 mx-auto"></div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#cbede0] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
