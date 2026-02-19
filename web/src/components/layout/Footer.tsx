import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12">
            <div className="container-fluid grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-20">

                {/* Brand Column */}
                <div className="md:col-span-4 flex flex-col gap-8">
                    <span className="font-serif text-3xl italic">Ilíria Psicologia</span>
                    <p className="font-sans text-white/60 leading-relaxed max-w-sm">
                        Serviços psicológicos baseados em evidências, entregues com calor humano, profissionalismo e cuidado.
                    </p>
                </div>

                {/* Links Columns */}
                <div className="md:col-span-2 md:col-start-7 flex flex-col gap-6">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#d4cdc3]">Menu</h4>
                    <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
                        <li><Link href="#" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Nossa Equipe</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Serviços</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Valores e Reembolso</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Contato</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2 flex flex-col gap-6">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#d4cdc3]">Conexão</h4>
                    <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
                        <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2 flex flex-col gap-6">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#d4cdc3]">Ajuda</h4>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <p className="font-sans text-xs text-white/60 mb-2">Em Crise?</p>
                        <p className="font-serif text-xl mb-4">188</p>
                        <a href="tel:188" className="text-xs font-bold uppercase tracking-widest border-b border-white/30 hover:border-white transition-all pb-1">Ligar CVV</a>
                    </div>
                </div>

            </div>

            <div className="container-fluid flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-sans uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Ilíria Psicologia</p>
                <div className="flex gap-8 items-center">
                    <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
                    <Link href="#" className="hover:text-white transition-colors">Termos</Link>
                    <span className="hidden md:block text-white/20">|</span>
                    <a
                        href="https://my-portif-lio-three.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center gap-2"
                    >
                        Desenvolvido por <span className="font-bold">VALHALLAS.DEV</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
