import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

const clinics = [
    { name: "Paulista", address: "Av. Paulista, 1230 - Bela Vista", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" },
    { name: "Pinheiros", address: "Rua dos Pinheiros, 45 - Pinheiros", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop" },
];

export default function Locais() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Nossas Unidades"
                subtitle="Ambientes projetados para o seu conforto e privacidade."
                image="https://images.unsplash.com/photo-1497215842964-222b430dc0a1?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid">
                    {clinics.map((clinic, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                                <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <h2 className="font-serif text-4xl text-primary mb-4">{clinic.name}</h2>
                                    <p className="font-sans text-lg text-primary/70 mb-8">{clinic.address}</p>
                                    <p className="font-sans text-primary/70 leading-relaxed max-w-lg mb-8">
                                        Nossa unidade {clinic.name} oferece salas com isolamento acústico, ambiente climatizado e acessibilidade completa. Localizada estrategicamente próxima ao metrô para sua conveniência.
                                    </p>
                                    <button className="text-primary border-b border-primary pb-1 uppercase tracking-widest font-sans text-xs font-bold hover:text-opacity-70 transition-all">
                                        Ver no Google Maps
                                    </button>
                                </div>
                                <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="aspect-video bg-secondary overflow-hidden">
                                        <img
                                            src={clinic.image}
                                            alt={`Clinica ${clinic.name}`}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
