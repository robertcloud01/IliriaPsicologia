'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle: string;
    image?: string; // Optional now
    align?: 'left' | 'center';
}

export default function PageHero({ title, subtitle, align = 'left' }: PageHeroProps) {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out

    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center bg-[#0f1a18]">

            {/* Interactive Background */}
            {/* Static Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-heros.jpg"
                    alt="Background Texture"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="container-fluid relative z-20 pt-20">
                <motion.div
                    style={{ opacity }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`flex flex-col gap-6 max-w-4xl ${align === 'center' ? 'mx-auto text-center items-center' : ''}`}
                >
                    <div className="w-16 h-[2px] bg-white/50 mb-2"></div>
                    <h1 className="font-serif text-5xl md:text-7xl text-white leading-none tracking-tight">
                        {title}
                    </h1>
                    <p className="font-sans text-xl text-white/70 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
