'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Equipe', href: '/equipe' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Valores', href: '/valores' },
        { name: 'Blog', href: '/blog' },
        { name: 'Locais', href: '/locais' },
        { name: 'Contato', href: '/contato' },
    ];

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="text-primary p-2 focus:outline-none"
                aria-label="Open menu"
            >
                <div className="flex items-center gap-2 uppercase font-bold tracking-widest text-xs">
                    <span>Menu</span>
                    <Menu className="w-5 h-5" />
                </div>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] bg-background flex flex-col">
                    <div className="p-5 flex justify-between items-center border-b border-primary/10">
                        <span className="text-2xl font-serif text-primary font-bold">Q Psychology</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-primary"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 justify-center items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-serif text-3xl text-primary hover:text-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="mt-8 bg-secondary text-primary px-10 py-4 font-sans text-lg font-semibold tracking-wide uppercase">
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
