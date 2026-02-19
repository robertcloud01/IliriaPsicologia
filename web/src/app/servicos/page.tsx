import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight, Clock, Users, Heart, Brain, Shield, FileCheck } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";

export default function Servicos() {
    // Icon mapping for each service
    const iconMap: Record<string, any> = {
        'terapia-individual': Heart,
        'terapia-casal': Users,
        'terapia-familiar': Users,
        'infantil-adolescente': Heart,
        'trauma-tept': Shield,
        'avaliacoes': FileCheck,
    };

    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Nossos Serviços"
                subtitle="Abordagens baseadas em evidências para todas as fases da vida."
                image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Introduction */}
            <section className="py-16 border-b border-primary/10">
                <div className="container-fluid">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                            Cuidado Personalizado para Cada Necessidade
                        </h2>
                        <p className="font-sans text-lg text-primary/70 leading-relaxed">
                            Oferecemos uma ampla gama de serviços psicológicos, todos fundamentados em evidências científicas
                            e adaptados às suas necessidades individuais. Cada jornada é única, e estamos aqui para apoiá-lo
                            em cada passo do caminho.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, i) => {
                            const IconComponent = iconMap[service.slug] || Brain;

                            return (
                                <ScrollReveal key={service.slug} delay={i * 0.1}>
                                    <Link href={`/servicos/${service.slug}`}>
                                        <div className="group border border-primary/10 p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer bg-white h-full flex flex-col">
                                            {/* Header with Icon and Number */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                                                    <IconComponent className="w-7 h-7 text-primary" />
                                                </div>
                                                <span className="font-serif text-3xl text-primary/20 italic group-hover:text-primary/40 transition-colors">
                                                    0{i + 1}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-serif text-2xl text-primary mb-3 group-hover:text-primary/90 transition-colors">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="font-sans text-primary/70 leading-relaxed mb-6 flex-grow">
                                                {service.shortDesc}
                                            </p>

                                            {/* Meta Information */}
                                            <div className="space-y-2 pt-4 border-t border-primary/10">
                                                <div className="flex items-center gap-2 text-sm text-primary/60">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="font-sans">{service.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-primary/60">
                                                    <FileCheck className="w-4 h-4" />
                                                    <span className="font-sans">{service.frequency}</span>
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-primary/10">
                                                <span className="font-sans text-sm font-bold text-primary uppercase tracking-wider group-hover:text-primary/80 transition-colors">
                                                    Saiba mais
                                                </span>
                                                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container-fluid">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                            Não encontrou o que procura?
                        </h2>
                        <p className="font-sans text-lg text-primary/70 leading-relaxed mb-8">
                            Entre em contato conosco para discutir suas necessidades específicas.
                            Estamos aqui para ajudar você a encontrar o suporte adequado.
                        </p>
                        <Link href="/contato">
                            <button className="bg-primary text-white px-10 py-4 min-h-[56px] font-sans text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Fale Conosco
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
