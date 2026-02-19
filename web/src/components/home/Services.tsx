'use client';
import { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight, User, Users, Home, Baby, Shield, ClipboardList, X, Check, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { servicesData } from '@/data/services';

// Map icons to slugs for easy lookup
const iconMap: Record<string, any> = {
    'terapia-individual': User,
    'terapia-casal': Users,
    'terapia-familiar': Home,
    'infantil-adolescente': Baby,
    'trauma-tept': Shield,
    'avaliacoes': ClipboardList
};

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

    return (
        <section className="py-32 bg-muted relative overflow-hidden" id="servicos">
            {/* Subtle background gradient */}
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent pointer-events-none z-0"></div>

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Image
                    src="/background.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container-fluid relative z-10">

                {/* Section Header */}
                <div className="flex flex-col gap-8 mb-24 max-w-3xl">
                    <ScrollReveal>
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary/50 block mb-2">Nossos Serviços</span>
                        <h2 className="font-serif text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
                            Apoio à saúde mental holístico feito para <span className="italic text-primary/60">você.</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData.map((service, index) => {
                        const Icon = iconMap[service.slug] || User;
                        return (
                            <ScrollReveal key={service.slug} delay={index * 0.08} width="100%">
                                <motion.div
                                    onClick={() => setSelectedService(service)}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group relative bg-white p-12 h-full flex flex-col gap-8 cursor-pointer rounded-sm border border-primary/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    {/* Hover gradient overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 opacity-0 group-hover:from-secondary/30 group-hover:to-accent/20 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                                    />

                                    {/* Top section - Icon + Arrow */}
                                    <div className="relative z-10 flex justify-between items-start">
                                        <motion.div
                                            className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center text-primary"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Icon className="w-6 h-6" strokeWidth={1.5} />
                                        </motion.div>

                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary transition-colors duration-500"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                                        </motion.div>
                                    </div>

                                    {/* Content section */}
                                    <div className="relative z-10 flex-1 flex flex-col gap-4">
                                        <h3 className="font-serif text-2xl lg:text-3xl text-primary leading-tight tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="font-sans text-primary/70 text-[15px] leading-relaxed">
                                            {service.shortDesc}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <motion.div
                                        className="relative z-10 h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 w-0 group-hover:w-full transition-all duration-700"
                                    />
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>

            </div>

            {/* FULL SCREEN MODAL */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
                            onClick={() => setSelectedService(null)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`service-${selectedService.slug}`}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white w-full max-w-6xl h-[90vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-primary transition-colors shadow-lg"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Content - Full Width */}
                            <div className="w-full p-8 md:p-12 overflow-y-auto custom-scrollbar bg-white/95 relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-4xl mx-auto"
                                >
                                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-4">
                                        Detalhes do Serviço
                                    </span>
                                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                                        {selectedService.title}
                                    </h2>
                                    <p className="text-lg text-primary/80 leading-relaxed mb-8 border-l-4 border-secondary pl-6">
                                        {selectedService.fullDescription}
                                    </p>

                                    {/* Benefits List */}
                                    <div className="mb-10">
                                        <h4 className="font-sans font-bold text-primary mb-4 flex items-center gap-2">
                                            <Check className="w-5 h-5 text-accent" />
                                            Benefícios
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedService.benefits.map((benefit, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + (i * 0.05) }}
                                                    className="flex items-start gap-3 text-primary/70 text-sm md:text-base"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                                    {benefit}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-xl mb-8">
                                        <div>
                                            <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-accent" />
                                                Duração
                                            </h5>
                                            <p className="text-sm text-primary/70">{selectedService.duration}</p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-accent" />
                                                Frequência
                                            </h5>
                                            <p className="text-sm text-primary/70">{selectedService.frequency}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="font-sans font-bold text-primary mb-2 text-sm uppercase tracking-wider">Abordagem</h4>
                                        <p className="text-sm text-primary/60 italic">
                                            "{selectedService.approach}"
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
