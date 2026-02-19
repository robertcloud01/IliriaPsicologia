import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

const team = [
    { name: "Dra. Ana Silva", role: "Psicóloga Clínica", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop" },
    { name: "Dr. Carlos Santos", role: "Psicólogo Cognitivo", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop" },
    { name: "Marina Costa", role: "Psicóloga Infantil", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2261&auto=format&fit=crop" },
    { name: "Roberto Lima", role: "Terapeuta de Casal", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=2187&auto=format&fit=crop" },
    { name: "Juliana Mendes", role: "Neuropsicóloga", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2488&auto=format&fit=crop" },
    { name: "Paulo Ferreira", role: "Psicólogo", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop" }
];

export default function Equipe() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Nossa Equipe"
                subtitle="Profissionais experientes, dedicados ao seu bem-estar."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group cursor-pointer">
                                    <div className="aspect-[3/4] overflow-hidden bg-secondary mb-6 relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <p className="text-white text-xs font-bold uppercase tracking-widest">Ver Perfil Completo</p>
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl text-primary mb-1">{member.name}</h3>
                                    <p className="font-sans text-sm text-primary/60">{member.role}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
