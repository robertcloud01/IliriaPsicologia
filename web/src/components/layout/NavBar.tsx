import Link from 'next/link';
import { Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function NavBar() {
    // Hick's Law: Reduced from 7 to 5 items for faster decision making
    const links = [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Equipe', href: '/equipe' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contato', href: '/contato' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[90px] flex items-center bg-white/95 backdrop-blur-sm border-b border-black/5">
            <div className="container-fluid w-full flex justify-between items-center">
                {/* Minimalist Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg italic">
                        i
                    </div>
                    <span className="text-lg font-serif text-primary tracking-tight font-medium group-hover:opacity-70 transition-opacity">Ilíria Psicologia</span>
                </Link>

                {/* Clean Horizontal Menu - Desktop */}
                <div className="hidden lg:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary/80 hover:text-primary transition-colors font-sans text-[14px] font-medium tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Trust Signal: Emergency phone (CVV 188) */}
                    <a
                        href="tel:188"
                        className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors group"
                        title="Em crise? Ligue CVV 188"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-xs font-medium">CVV 188</span>
                    </a>

                    {/* Fitts' Law: Increased to min 48px height for better accessibility */}
                    {/* Von Restorff: High contrast CTA that stands out */}
                    <Link href="/contato" className="bg-primary text-white px-8 py-3 min-h-[48px] font-sans text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 rounded-sm shadow-sm hover:shadow-md flex items-center justify-center">
                        Agendar
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <MobileMenu />
            </div>
        </nav>
    );
}
