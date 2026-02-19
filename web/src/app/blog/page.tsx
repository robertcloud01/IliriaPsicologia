import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Blog() {
    const posts = [
        { title: "Como lidar com a ansiedade no trabalho", category: "Bem-estar", date: "23 Jan, 2026", image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2189&auto=format&fit=crop" },
        { title: "A importância do autoconhecimento", category: "Crescimento", date: "15 Jan, 2026", image: "https://images.unsplash.com/photo-1499209974431-2761e25230d3?q=80&w=2187&auto=format&fit=crop" },
        { title: "Sinais de que você precisa de terapia", category: "Saúde Mental", date: "08 Jan, 2026", image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2076&auto=format&fit=crop" },
        { title: "Mindfulness para iniciantes", category: "Prática", date: "02 Jan, 2026", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2199&auto=format&fit=crop" },
    ];

    return (
        <main className="min-h-screen bg-background">
            <PageHero
                title="Blog & Insights"
                subtitle="Artigos sobre psicologia, bem-estar e desenvolvimento pessoal."
                image="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop"
            />

            <section className="py-24">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.map((post, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group cursor-pointer">
                                    <div className="aspect-video bg-secondary overflow-hidden mb-6 relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <span className="font-sans text-xs text-primary/40 uppercase tracking-widest">{post.date}</span>
                                        <h3 className="font-serif text-3xl text-primary group-hover:text-primary/70 transition-colors">{post.title}</h3>
                                        <Link href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mt-2 group/link">
                                            Ler Artigo <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
