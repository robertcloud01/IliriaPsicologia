// Service data structure with detailed information
export interface Service {
    slug: string;
    title: string;
    shortDesc: string;
    Icon: any;
    fullDescription: string;
    benefits: string[];
    whoIsItFor: string[];
    approach: string;
    duration: string;
    frequency: string;
}

export const servicesData: Service[] = [
    {
        slug: 'terapia-individual',
        title: 'Terapia Individual',
        shortDesc: 'Suporte personalizado para crescimento pessoal.',
        Icon: null, // Will be set in component
        fullDescription: 'A terapia individual é um espaço seguro e confidencial onde você pode explorar seus pensamentos, sentimentos e comportamentos com um psicólogo qualificado. Trabalhamos juntos para identificar padrões, desenvolver estratégias de enfrentamento e promover mudanças significativas em sua vida.',
        benefits: [
            'Autoconhecimento profundo e desenvolvimento pessoal',
            'Manejo de ansiedade, depressão e estresse',
            'Melhora nas relações interpessoais',
            'Desenvolvimento de habilidades de enfrentamento',
            'Suporte em momentos de transição e crise',
            'Fortalecimento da autoestima e confiança'
        ],
        whoIsItFor: [
            'Pessoas que buscam autoconhecimento',
            'Quem enfrenta ansiedade, depressão ou estresse',
            'Indivíduos em momentos de transição de vida',
            'Quem deseja desenvolver habilidades emocionais',
            'Pessoas lidando com traumas ou perdas'
        ],
        approach: 'Utilizamos abordagens baseadas em evidências, incluindo Terapia Cognitivo-Comportamental (TCC), Psicanálise, e Terapia Centrada na Pessoa, adaptadas às suas necessidades individuais.',
        duration: '50 minutos por sessão',
        frequency: 'Semanal ou quinzenal, conforme necessidade'
    },
    {
        slug: 'terapia-casal',
        title: 'Terapia de Casal',
        shortDesc: 'Navegando relacionamentos com empatia e cuidado.',
        Icon: null,
        fullDescription: 'A terapia de casal oferece um espaço neutro e seguro para casais trabalharem suas dificuldades, melhorarem a comunicação e fortalecerem o vínculo. Nosso objetivo é ajudar vocês a entenderem melhor um ao outro e construírem um relacionamento mais saudável.',
        benefits: [
            'Melhora significativa na comunicação do casal',
            'Resolução construtiva de conflitos',
            'Fortalecimento da intimidade emocional e física',
            'Reconstrução de confiança',
            'Alinhamento de objetivos e valores',
            'Prevenção de crises futuras'
        ],
        whoIsItFor: [
            'Casais com dificuldades de comunicação',
            'Relacionamentos em crise ou conflito',
            'Casais que desejam fortalecer o vínculo',
            'Parceiros lidando com infidelidade ou perda de confiança',
            'Casais em transição (casamento, filhos, mudanças)'
        ],
        approach: 'Trabalhamos com abordagens sistêmicas e TCC para casais, focando em padrões de interação, comunicação não-violenta e reconstrução de vínculos.',
        duration: '60-75 minutos por sessão',
        frequency: 'Semanal ou quinzenal'
    },
    {
        slug: 'terapia-familiar',
        title: 'Terapia Familiar',
        shortDesc: 'Construindo conexões mais fortes na família.',
        Icon: null,
        fullDescription: 'A terapia familiar trabalha com toda a família para melhorar a comunicação, resolver conflitos e fortalecer os laços afetivos. Reconhecemos que os desafios de um membro afetam todo o sistema familiar e trabalhamos juntos para criar um ambiente mais saudável.',
        benefits: [
            'Melhora na comunicação familiar',
            'Resolução de conflitos e tensões',
            'Fortalecimento dos vínculos afetivos',
            'Compreensão de papéis e dinâmicas familiares',
            'Suporte em momentos de crise familiar',
            'Desenvolvimento de resiliência familiar'
        ],
        whoIsItFor: [
            'Famílias com conflitos recorrentes',
            'Pais com dificuldades na criação dos filhos',
            'Famílias passando por transições (separação, luto)',
            'Famílias com membros com necessidades especiais',
            'Grupos familiares que desejam fortalecer laços'
        ],
        approach: 'Utilizamos terapia sistêmica familiar, focando em padrões de interação, comunicação e reorganização de dinâmicas disfuncionais.',
        duration: '75-90 minutos por sessão',
        frequency: 'Quinzenal ou mensal'
    },
    {
        slug: 'infantil-adolescente',
        title: 'Psicologia Infantil e Adolescente',
        shortDesc: 'Apoio especializado para mentes jovens.',
        Icon: null,
        fullDescription: 'Oferecemos atendimento psicológico especializado para crianças e adolescentes, utilizando técnicas lúdicas e adaptadas a cada faixa etária. Trabalhamos questões emocionais, comportamentais e de desenvolvimento, sempre com a participação ativa da família.',
        benefits: [
            'Desenvolvimento emocional saudável',
            'Manejo de ansiedade e medos infantis',
            'Melhora no comportamento e autocontrole',
            'Suporte em dificuldades escolares',
            'Desenvolvimento de habilidades sociais',
            'Processamento de traumas e perdas'
        ],
        whoIsItFor: [
            'Crianças com dificuldades emocionais ou comportamentais',
            'Adolescentes enfrentando ansiedade ou depressão',
            'Jovens com dificuldades escolares',
            'Crianças e adolescentes em transições (mudança, separação dos pais)',
            'Jovens que passaram por eventos traumáticos'
        ],
        approach: 'Utilizamos ludoterapia, terapia cognitivo-comportamental infantil e técnicas narrativas, sempre adaptadas à idade e necessidades específicas.',
        duration: '45-50 minutos por sessão',
        frequency: 'Semanal'
    },
    {
        slug: 'trauma-tept',
        title: 'Terapia para Trauma e TEPT',
        shortDesc: 'Processamento seguro e baseado em evidências.',
        Icon: null,
        fullDescription: 'Oferecemos tratamento especializado para traumas e Transtorno de Estresse Pós-Traumático (TEPT), utilizando técnicas baseadas em evidências científicas. Criamos um ambiente seguro para processar experiências difíceis e recuperar o controle sobre sua vida.',
        benefits: [
            'Redução de sintomas de TEPT',
            'Processamento seguro de memórias traumáticas',
            'Diminuição de flashbacks e pesadelos',
            'Recuperação do senso de segurança',
            'Desenvolvimento de estratégias de regulação emocional',
            'Retomada da qualidade de vida'
        ],
        whoIsItFor: [
            'Vítimas de violência ou abuso',
            'Sobreviventes de acidentes graves',
            'Pessoas que passaram por perdas traumáticas',
            'Profissionais expostos a situações traumáticas',
            'Qualquer pessoa com sintomas de TEPT'
        ],
        approach: 'Utilizamos EMDR (Eye Movement Desensitization and Reprocessing), TCC para Trauma, e Terapia de Exposição, sempre em ritmo seguro e controlado.',
        duration: '60 minutos por sessão',
        frequency: 'Semanal, com possibilidade de sessões mais frequentes em casos agudos'
    },
    {
        slug: 'avaliacoes',
        title: 'Avaliações Psicológicas',
        shortDesc: 'Clareza diagnóstica e compreensão.',
        Icon: null,
        fullDescription: 'Realizamos avaliações psicológicas completas e especializadas para diversos fins: diagnóstico clínico, orientação vocacional, avaliação neuropsicológica, laudos para processos judiciais, entre outros. Utilizamos instrumentos validados e reconhecidos cientificamente.',
        benefits: [
            'Diagnóstico preciso e fundamentado',
            'Compreensão profunda de questões emocionais e cognitivas',
            'Orientação para tratamento adequado',
            'Laudos técnicos reconhecidos',
            'Identificação de potencialidades e dificuldades',
            'Base para intervenções personalizadas'
        ],
        whoIsItFor: [
            'Pessoas que buscam diagnóstico clínico',
            'Jovens em dúvida sobre carreira profissional',
            'Crianças com dificuldades de aprendizagem',
            'Adultos com suspeita de déficits cognitivos',
            'Necessidade de laudos para processos legais',
            'Avaliação pré-cirúrgica (bariátrica, etc.)'
        ],
        approach: 'Utilizamos bateria completa de testes psicológicos validados, entrevistas clínicas estruturadas e observação comportamental, com devolutiva detalhada.',
        duration: 'Variável (múltiplas sessões de 60-90 minutos)',
        frequency: 'Conforme protocolo de avaliação (geralmente 3-6 sessões)'
    }
];
