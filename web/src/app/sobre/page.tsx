import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function Sobre() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Sobre Nós"
                subtitle="Dedicados a fornecer um espaço seguro e acolhedor para o seu crescimento pessoal."
                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-4xl text-primary mb-6 leading-tight">
                            Uma abordagem <span className="italic opacity-70">humana</span> e baseada em evidências.
                        </h2>
                        <p className="font-sans text-primary/70 leading-relaxed text-lg mb-6">
                            Na Ilíria Psicologia, acreditamos que cada indivíduo possui uma jornada única. Nossa equipe multidisciplinar combina experiência clínica com empatia genuína para criar um ambiente onde você se sinta ouvido, compreendido e apoiado.
                        </p>
                        <p className="font-sans text-primary/70 leading-relaxed text-lg">
                            Fundada com o propósito de tornar a psicologia de alta qualidade acessível e acolhedora, nossa clínica se tornou referência em atendimento humanizado em São Paulo e região.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="aspect-square bg-secondary rounded-full overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Equipe reunida"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 bg-secondary/30">
                <div className="container-fluid text-center max-w-3xl mx-auto">
                    <ScrollReveal>
                        <h3 className="font-serif text-3xl text-primary mb-8">Nossos Pilares</h3>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Empatia", desc: "Acolhimento sem julgamentos." },
                            { title: "Ciência", desc: "Práticas baseadas em evidências." },
                            { title: "Ética", desc: "Compromisso absoluto com o sigilo." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary font-serif text-2xl italic">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-serif text-xl text-primary">{item.title}</h4>
                                    <p className="font-sans text-sm text-primary/60">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
