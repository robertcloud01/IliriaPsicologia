import { Phone } from 'lucide-react';

export default function Announcement() {
    return (
        <div className="bg-primary text-white py-3 flex justify-center items-center">
            <div className="container-fluid flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <p className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase opacity-90">
                    Aceitando novos pacientes em São Paulo e Online
                </p>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50"></span>

                {/* Trust Building: Emergency support prominently displayed */}
                <a
                    href="tel:188"
                    className="flex items-center gap-2 font-sans text-[11px] font-bold tracking-[0.1em] uppercase bg-white/10 px-4 py-2 rounded-sm hover:bg-white/20 transition-all"
                    title="Em crise? Ligue CVV 188 - Centro de Valorização da Vida"
                >
                    <Phone className="w-3 h-3" />
                    <span>Em Crise? CVV 188</span>
                </a>
            </div>
        </div>
    );
}
