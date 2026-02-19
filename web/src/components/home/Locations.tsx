'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import PremiumChat from '@/components/chat/PremiumChat';

const locations = [
    { name: 'Paulista', address: 'Av. Paulista, 1230 - Bela Vista', type: 'physical' },
    { name: 'Pinheiros', address: 'Rua dos Pinheiros, 45 - Pinheiros', type: 'physical' },
    { name: 'Online', address: 'Atendimento Remoto Seguro', type: 'online' },
];

export default function Locations() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <section className="py-32 bg-secondary/30">
            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-8">
                    <h2 className="font-serif text-5xl text-primary">Nossas Clínicas</h2>
                    <p className="font-sans text-primary/60 max-w-md text-lg">
                        Espaços acessíveis, confortáveis e profissionais projetados para sua segurança e privacidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-primary/10">
                    {locations.map((loc, index) => (
                        <div
                            key={loc.name}
                            onClick={() => loc.type === 'online' ? setIsChatOpen(true) : null}
                            className="group border-b border-r border-primary/10 p-12 flex flex-col justify-between gap-12 cursor-pointer bg-transparent hover:bg-white transition-colors duration-500 relative overflow-hidden"
                        >
                            <div>
                                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary/40 block mb-6">Unidade 0{index + 1}</span>
                                <h3 className="font-serif text-3xl text-primary mb-3">
                                    {loc.name}
                                </h3>
                                <p className="font-sans text-primary/60 text-lg">{loc.address}</p>
                            </div>

                            <div className="flex justify-between items-end relative z-10">
                                <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {loc.type === 'online' ? 'Iniciar Chat' : 'Ver Mapa'}
                                </span>
                                <div className={`w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 ${loc.type === 'online' ? 'group-hover:scale-110' : ''}`}>
                                    {loc.type === 'online' ? (
                                        <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    ) : (
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Overlay */}
            <AnimatePresence>
                {isChatOpen && <PremiumChat onClose={() => setIsChatOpen(false)} />}
            </AnimatePresence>
        </section>
    );
}
