import { servicesData } from '../../../data/services';
import PageHero from '../../../components/ui/PageHero';
import { Check, Clock, Calendar, ArrowRight, Phone, Mail, MapPin, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-4xl text-primary mb-4">Serviço não encontrado</h1>
                    <Link href="/servicos" className="text-primary hover:underline">
                        ← Voltar para serviços
                    </Link>
                </div>
            </div>
        );
    }

    // FAQ data for each service type
    const faqData: Record<string, Array<{ q: string; a: string }>> = {
        'terapia-individual': [
            { q: 'Quanto tempo dura o tratamento?', a: 'A duração varia conforme suas necessidades. Alguns clientes sentem melhoras em poucas semanas, enquanto outros preferem um acompanhamento mais longo para mudanças profundas.' },
            { q: 'As sessões são confidenciais?', a: 'Sim, absolutamente. Seguimos rigorosamente o Código de Ética Profissional do Psicólogo, garantindo total sigilo sobre tudo que é compartilhado nas sessões.' },
            { q: 'Posso fazer terapia online?', a: 'Sim, oferecemos atendimento online com a mesma qualidade e eficácia do presencial, seguindo as diretrizes do Conselho Federal de Psicologia.' },
        ],
        'terapia-casal': [
            { q: 'Precisamos estar em crise para procurar terapia?', a: 'Não! A terapia de casal também é preventiva. Muitos casais buscam fortalecer o relacionamento antes que problemas maiores surjam.' },
            { q: 'E se meu parceiro não quiser participar?', a: 'Idealmente, ambos participam. Porém, você pode iniciar sozinho(a) e, com o tempo, seu parceiro pode se sentir mais confortável para se juntar.' },
            { q: 'Vocês tomam partido de alguém?', a: 'Não. O terapeuta mantém uma postura neutra e imparcial, focando no bem-estar do relacionamento como um todo.' },
        ],
        'terapia-familiar': [
            { q: 'Toda a família precisa participar?', a: 'Não necessariamente. Começamos com quem está disponível e, gradualmente, outros membros podem se juntar conforme se sentirem confortáveis.' },
            { q: 'Como funciona com crianças pequenas?', a: 'Adaptamos a abordagem para cada idade, usando técnicas lúdicas e linguagem apropriada para que todos possam participar de forma significativa.' },
        ],
        'infantil-adolescente': [
            { q: 'Como sei se meu filho precisa de terapia?', a: 'Mudanças de comportamento, dificuldades escolares, isolamento social, ansiedade excessiva ou regressões são sinais importantes. Podemos fazer uma avaliação inicial.' },
            { q: 'Os pais participam das sessões?', a: 'Depende da idade e necessidade. Com crianças pequenas, há maior participação dos pais. Com adolescentes, priorizamos a privacidade, mas mantemos os pais informados.' },
            { q: 'Quanto tempo leva para ver resultados?', a: 'Cada criança é única, mas geralmente observamos mudanças positivas nas primeiras 4-8 semanas de acompanhamento regular.' },
        ],
        'trauma-tept': [
            { q: 'O que é EMDR?', a: 'EMDR (Eye Movement Desensitization and Reprocessing) é uma técnica cientificamente validada que ajuda a processar memórias traumáticas através de estimulação bilateral.' },
            { q: 'Vou ter que reviver o trauma?', a: 'Não da forma tradicional. Trabalhamos em ritmo seguro e controlado, sem necessidade de reviver intensamente a experiência traumática.' },
            { q: 'Quanto tempo leva o tratamento de TEPT?', a: 'Varia conforme a complexidade do trauma. Alguns casos mostram melhora significativa em 8-12 sessões, enquanto traumas complexos podem requerer mais tempo.' },
        ],
        'avaliacoes': [
            { q: 'Quanto tempo leva uma avaliação completa?', a: 'Geralmente entre 3-6 sessões, dependendo do tipo de avaliação. Inclui entrevistas, aplicação de testes e devolutiva detalhada.' },
            { q: 'O laudo é aceito legalmente?', a: 'Sim, nossos laudos seguem as normas do CFP e são aceitos em processos judiciais, escolares e médicos.' },
            { q: 'Preciso de encaminhamento médico?', a: 'Não é obrigatório, mas se você tem um encaminhamento, isso ajuda a direcionar melhor a avaliação.' },
        ],
    };

    const currentFaq = faqData[service.slug] || [];

    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title={service.title}
                subtitle={service.shortDesc}
            />

            <div className="container-fluid py-20">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <Link href="/servicos" className="font-sans text-sm text-primary/60 hover:text-primary transition-colors">
                        ← Voltar para todos os serviços
                    </Link>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content - Left 2 columns */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Full Description */}
                        <section>
                            <h2 className="font-serif text-4xl text-primary mb-6">Sobre este serviço</h2>
                            <p className="font-sans text-lg text-primary/80 leading-relaxed">
                                {service.fullDescription}
                            </p>
                        </section>

                        {/* Process Timeline */}
                        <section>
                            <h2 className="font-serif text-4xl text-primary mb-8">Como funciona</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h3 className="font-serif text-xl text-primary mb-2">Primeiro Contato</h3>
                                        <p className="font-sans text-primary/70">Entre em contato para agendar uma avaliação inicial. Responderemos suas dúvidas e entenderemos suas necessidades.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h3 className="font-serif text-xl text-primary mb-2">Avaliação Inicial</h3>
                                        <p className="font-sans text-primary/70">Na primeira sessão, conhecemos sua história, objetivos e expectativas para criar um plano personalizado.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h3 className="font-serif text-xl text-primary mb-2">Acompanhamento Regular</h3>
                                        <p className="font-sans text-primary/70">Sessões regulares focadas em seus objetivos, com técnicas baseadas em evidências científicas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h3 className="font-serif text-xl text-primary mb-2">Avaliação de Progresso</h3>
                                        <p className="font-sans text-primary/70">Revisamos regularmente seu progresso e ajustamos o plano conforme necessário.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="font-serif text-4xl text-primary mb-8">Benefícios</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="font-sans text-primary/80 leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Who Is It For */}
                        <section>
                            <h2 className="font-serif text-4xl text-primary mb-8">Para quem é indicado</h2>
                            <div className="space-y-3">
                                {service.whoIsItFor.map((person, index) => (
                                    <div key={index} className="flex gap-3 items-center p-4 bg-muted rounded-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <p className="font-sans text-primary/80">{person}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Approach */}
                        <section>
                            <h2 className="font-serif text-4xl text-primary mb-6">Nossa abordagem</h2>
                            <div className="bg-secondary/30 p-8 rounded-sm border-l-4 border-primary">
                                <p className="font-sans text-lg text-primary/80 leading-relaxed italic">
                                    {service.approach}
                                </p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        {currentFaq.length > 0 && (
                            <section>
                                <h2 className="font-serif text-4xl text-primary mb-8">Perguntas Frequentes</h2>
                                <div className="space-y-6">
                                    {currentFaq.map((faq, index) => (
                                        <div key={index} className="border-l-2 border-primary/20 pl-6 py-2">
                                            <div className="flex gap-3 items-start mb-3">
                                                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                <h3 className="font-serif text-xl text-primary">{faq.q}</h3>
                                            </div>
                                            <p className="font-sans text-primary/70 leading-relaxed ml-8">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar - Right column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Info Card */}
                            <div className="bg-white p-8 rounded-sm border border-primary/10 shadow-sm">
                                <h3 className="font-serif text-2xl text-primary mb-6">Informações</h3>

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <Clock className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                        <div>
                                            <p className="font-sans text-sm font-bold text-primary/60 uppercase tracking-wide mb-1">Duração</p>
                                            <p className="font-sans text-primary">{service.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Calendar className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                        <div>
                                            <p className="font-sans text-sm font-bold text-primary/60 uppercase tracking-wide mb-1">Frequência</p>
                                            <p className="font-sans text-primary">{service.frequency}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-primary/10">
                                    <Link href="/contato">
                                        <button className="w-full bg-primary text-white px-8 py-4 min-h-[48px] font-sans text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 rounded-sm shadow-sm hover:shadow-md">
                                            Agendar Consulta
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-secondary/30 p-8 rounded-sm">
                                <h3 className="font-serif text-xl text-primary mb-4">Dúvidas?</h3>
                                <p className="font-sans text-sm text-primary/70 mb-6">
                                    Entre em contato conosco para mais informações sobre este serviço.
                                </p>
                                <div className="space-y-3">
                                    <a href="tel:+5511999999999" className="flex items-center gap-3 text-sm text-primary hover:text-primary/70 transition-colors">
                                        <Phone className="w-4 h-4" />
                                        <span className="font-sans">(11) 99999-9999</span>
                                    </a>
                                    <a href="mailto:contato@clinica.com" className="flex items-center gap-3 text-sm text-primary hover:text-primary/70 transition-colors">
                                        <Mail className="w-4 h-4" />
                                        <span className="font-sans">contato@clinica.com</span>
                                    </a>
                                </div>
                            </div>

                            {/* Other Services */}
                            <div className="bg-muted p-8 rounded-sm">
                                <h3 className="font-serif text-xl text-primary mb-4">Outros serviços</h3>
                                <div className="space-y-2">
                                    {servicesData
                                        .filter((s) => s.slug !== service.slug)
                                        .slice(0, 3)
                                        .map((otherService) => (
                                            <Link
                                                key={otherService.slug}
                                                href={`/servicos/${otherService.slug}`}
                                                className="flex items-center justify-between p-3 hover:bg-white transition-colors rounded-sm group"
                                            >
                                                <span className="font-sans text-sm text-primary/80 group-hover:text-primary">{otherService.title}</span>
                                                <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-primary" />
                                            </Link>
                                        ))}
                                </div>
                                <Link
                                    href="/servicos"
                                    className="block mt-4 text-center font-sans text-sm font-bold text-primary hover:text-primary/70 transition-colors"
                                >
                                    Ver todos os serviços →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
