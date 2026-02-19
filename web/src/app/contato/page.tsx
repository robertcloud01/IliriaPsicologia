import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Entre em Contato"
                subtitle="Estamos aqui para ouvir você. Agende sua consulta ou tire suas dúvidas."
                image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <ScrollReveal>
                        <div className="flex flex-col gap-10">
                            <h2 className="font-serif text-3xl text-primary">Canais de Atendimento</h2>
                            <p className="font-sans text-primary/70 leading-relaxed max-w-md">
                                Nossa equipe de atendimento está disponível para auxiliar no agendamento e responder suas perguntas sobre nossos serviços.
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Telefone</p>
                                        <p className="font-serif text-xl text-primary">(11) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Email</p>
                                        <p className="font-serif text-xl text-primary">contato@iliriapsicologia.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-sans text-xs uppercase tracking-widest text-primary/50">Sede</p>
                                        <p className="font-serif text-xl text-primary">Av. Paulista, 1230 - SP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal delay={0.2}>
                        <form className="bg-white p-10 border border-primary/10 rounded-sm shadow-xl shadow-primary/5">
                            <h3 className="font-serif text-2xl text-primary mb-8">Envie uma mensagem</h3>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">Nome</label>
                                    <input type="text" className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">Email</label>
                                    <input type="email" className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" />
                                </div>
                                <div>
                                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">Mensagem</label>
                                    <textarea rows={4} className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent"></textarea>
                                </div>
                                <button type="button" className="bg-primary text-white py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all mt-4">
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
