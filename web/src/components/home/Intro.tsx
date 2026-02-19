import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Intro() {
    return (
        <section className="py-section-lg bg-background">
            <div className="container-fluid">
                <ScrollReveal width="100%">
                    <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
                        <p className="font-serif text-2xl lg:text-3xl text-primary leading-relaxed italic">
                            "Nossa missão é fornecer um espaço seguro e de apoio onde você possa explorar seus pensamentos e sentimentos, e trabalhar em direção a mudanças significativas."
                        </p>
                        <div className="w-24 h-[1px] bg-accent mx-auto"></div>
                        <p className="text-foreground/80 font-sans text-lg leading-loose">
                            Somos uma equipe de psicólogos clínicos e registrados apaixonados por ajudar pessoas a melhorar sua saúde mental e bem-estar. Oferecemos uma variedade de terapias baseadas em evidências, personalizadas para suas necessidades individuais.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
