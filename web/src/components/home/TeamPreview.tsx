import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function TeamPreview() {
    const teamMembers = [
        {
            name: "Dra. Ana Carolina Silva",
            crp: "CRP 06/123456",
            specialty: "Terapia Cognitivo-Comportamental",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2376&auto=format&fit=crop",
            bio: "Especialista em ansiedade e depressão com 10 anos de experiência clínica.",
            education: "Doutora em Psicologia Clínica - USP"
        },
        {
            name: "Dr. Rafael Mendes",
            crp: "CRP 06/234567",
            specialty: "Psicanálise e Trauma",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2370&auto=format&fit=crop",
            bio: "Especializado em EMDR e tratamento de TEPT com abordagem humanizada.",
            education: "Mestre em Neuropsicologia - UNIFESP"
        },
        {
            name: "Dra. Mariana Costa",
            crp: "CRP 06/345678",
            specialty: "Psicologia Infantil",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2488&auto=format&fit=crop",
            bio: "Ludoterapeuta com foco em desenvolvimento infantil e orientação parental.",
            education: "Especialista em Psicologia do Desenvolvimento"
        },
        {
            name: "Dr. Lucas Oliveira",
            crp: "CRP 06/456789",
            specialty: "Terapia de Casal e Família",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop",
            bio: "Terapeuta sistêmico com expertise em mediação de conflitos familiares.",
            education: "Mestre em Terapia Familiar - PUC-SP"
        }
    ];

    return (
        <section className="py-32 bg-background">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Text Side - Editorial Style */}
                    <div className="lg:col-span-5 flex flex-col gap-10 lg:pr-10">
                        <ScrollReveal>
                            <div className="w-12 h-[1px] bg-primary mb-6"></div>
                            <h2 className="font-serif text-5xl lg:text-6xl text-primary leading-[1.1]">
                                Conheça nossa <br />
                                <span className="italic text-primary/60">equipe acolhedora.</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <p className="text-primary/70 font-sans text-lg leading-relaxed">
                                Encontrar o psicólogo certo é pessoal. Nossa equipe de triagem trabalha para conhecer você, garantindo que seja atendido pelo profissional que melhor se adapta à sua personalidade e necessidades.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="flex gap-12 pt-4">
                                <div>
                                    <p className="font-serif text-4xl text-primary mb-1">20+</p>
                                    <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Psicólogos</p>
                                </div>
                                <div>
                                    <p className="font-serif text-4xl text-primary mb-1">15+</p>
                                    <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Anos de experiência</p>
                                </div>
                                <div>
                                    <p className="font-serif text-4xl text-primary mb-1">3</p>
                                    <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Unidades</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="pt-6">
                                <Link href="/equipe">
                                    <button className="bg-primary text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                                        Conheça os Profissionais
                                    </button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Team Cards Grid */}
                    <div className="lg:col-span-7 relative">
                        <div className="grid grid-cols-2 gap-6">
                            {teamMembers.map((member, index) => (
                                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                                    <div className={`group relative ${index === 0 ? 'mt-20' : index === 3 ? 'mt-20' : ''}`}>
                                        {/* Card Container */}
                                        <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
                                            {/* Image */}
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                                            {/* Content - Always Visible */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                {/* Name */}
                                                <h3 className="font-serif text-xl mb-1 transform transition-transform duration-500 group-hover:-translate-y-2">
                                                    {member.name}
                                                </h3>

                                                {/* CRP */}
                                                <p className="font-sans text-xs text-white/80 mb-2 flex items-center gap-2">
                                                    <Award className="w-3 h-3" />
                                                    {member.crp}
                                                </p>

                                                {/* Specialty */}
                                                <p className="font-sans text-sm text-white/90 font-medium mb-3">
                                                    {member.specialty}
                                                </p>

                                                {/* Hover Content - Bio & Education */}
                                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                                    <div className="pt-3 border-t border-white/20 space-y-2">
                                                        <p className="font-sans text-xs text-white/90 leading-relaxed">
                                                            {member.bio}
                                                        </p>
                                                        <p className="font-sans text-xs text-white/70 flex items-center gap-2">
                                                            <GraduationCap className="w-3 h-3" />
                                                            {member.education}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover Border Effect */}
                                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
