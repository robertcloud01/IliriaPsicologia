'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Smile, ShieldCheck, Sparkles, User } from 'lucide-react';

interface ChatProps {
    onClose: () => void;
}

export default function PremiumChat({ onClose }: ChatProps) {
    const [messages, setMessages] = useState<{ id: number, text: string, sender: 'user' | 'agent' }[]>([
        { id: 1, text: "Olá! Bem-vindo à Ilíria Psicologia.", sender: 'agent' },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting sequence
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: 2,
                    text: "Sou a assistente virtual da clínica. Como posso ajudar você hoje?",
                    sender: 'agent'
                }]);
                setIsTyping(false);
            }, 1500);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Auto scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMsg = { id: Date.now(), text: inputValue, sender: 'user' as const };
        setMessages(prev => [...prev, newMsg]);
        setInputValue("");

        // Mock Agent Response
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Entendi. Um de nossos especialistas humanos entrará em contato em breve para continuar este atendimento.",
                sender: 'agent'
            }]);
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
        >
            {/* Backdrop with Blur */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Chat Container - Obsidian Glass Style */}
            <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative w-full max-w-2xl h-[80vh] bg-[#0a0a0a] rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5 backdrop-blur-md relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#cbede0] to-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                <Sparkles className="w-6 h-6 text-[#0a0a0a]" />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></span>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-white tracking-wide">Atendimento Digital</h3>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3 text-green-400" />
                                <span className="text-xs text-white/50 font-sans uppercase tracking-wider">Conexão Segura</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505] custom-scrollbar">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`
                                    max-w-[80%] p-4 rounded-2xl text-sm md:text-base leading-relaxed
                                    ${msg.sender === 'user'
                                        ? 'bg-white text-black rounded-tr-sm shadow-lg shadow-white/5'
                                        : 'bg-white/10 text-white/90 rounded-tl-sm border border-white/5'
                                    }
                                `}
                            >
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
                    <div className="relative flex items-center gap-3">
                        <button className="p-3 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>

                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Digite sua mensagem..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-sans"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                                <Smile className="w-5 h-5" />
                            </button>
                        </div>

                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="p-4 rounded-full bg-white text-black hover:bg-[#cbede0] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:scale-100 transition-all duration-300 shadow-lg shadow-white/10"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}
