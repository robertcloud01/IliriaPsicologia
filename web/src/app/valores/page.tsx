import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Valores() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Valores e Reembolso"
                subtitle="Transparência e acessibilidade em saúde mental."
                image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid max-w-4xl mx-auto">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl text-primary mb-12 text-center">Investimento</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white p-10 border border-primary/10 rounded-sm">
                                <h3 className="font-serif text-2xl text-primary mb-2">Consulta Psicológica</h3>
                                <p className="font-sans text-sm text-primary/60 mb-6">50 minutos</p>
                                <p className="font-serif text-4xl text-primary mb-4">R$ 350</p>
                                <p className="font-sans text-primary/70 leading-relaxed text-sm">
                                    Atendimento individual para adolescentes e adultos. Disponível presencialmente ou online.
                                </p>
                            </div>

                            <div className="bg-white p-10 border border-primary/10 rounded-sm">
                                <h3 className="font-serif text-2xl text-primary mb-2">Terapia de Casal</h3>
                                <p className="font-sans text-sm text-primary/60 mb-6">60 minutos</p>
                                <p className="font-serif text-4xl text-primary mb-4">R$ 480</p>
                                <p className="font-sans text-primary/70 leading-relaxed text-sm">
                                    Sessões conjuntas focadas na dinâmica do relacionamento e resolução de conflitos.
                                </p>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-10 rounded-sm border-l-4 border-primary">
                            <h3 className="font-serif text-2xl text-primary mb-4">Reembolso (Plano de Saúde)</h3>
                            <p className="font-sans text-primary/70 leading-relaxed">
                                Trabalhamos com sistema de reembolso. Emitimos nota fiscal para que você possa solicitar o ressarcimento junto ao seu convênio médico, conforme as regras do seu plano. Consulte sua operadora para saber os valores de reembolso para consultas psicológicas.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
