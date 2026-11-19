import React, { useEffect, useMemo, useState } from "react";

// ============================================================================
// ÍCONES SVG PERSONALIZADOS (Idênticos à estrutura original)
// ============================================================================
function Icon({ name, className = "w-5 h-5" }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    bookmark: (
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.5 1.8-1.5 3.5h-4c0-1.7-.6-2.8-1.5-3.5Z" />
      </>
    ),
    message: (
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.1 3.2a3.8 3.8 0 0 0 2.4 2.4l3.2 1.1-3.2 1.1a3.8 3.8 0 0 0-2.4 2.4L12 16.4l-1.1-3.2a3.8 3.8 0 0 0-2.4-2.4L5.3 9.7l3.2-1.1a3.8 3.8 0 0 0 2.4-2.4L12 3Z" />
        <path d="m19 16 .5 1.5L21 18l-1.5.5L19 20l-.5-1.5L17 18l1.5-.5L19 16Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    trash: (
      <>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    user: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.sparkles}
    </svg>
  );
}

// ============================================================================
// BASE DE DADOS PEDAGÓGICA (12 Desafios Originais em PT-BR + Traduções)
// ============================================================================
const problems = [
  {
    id: "desinteresse",
    category: "alunos",
    label: "Desinteresse crônico",
    icon: "clock",
    question: "O que faz o aluno perder a curiosidade pelos estudos?",
    answer:
      "O desinteresse aparece quando aprender parece apenas uma obrigação, sem espaço para descoberta, escolha ou conexão com os interesses do aluno. Com o tempo, a curiosidade natural é substituída pela sensação de cumprir tarefas.",
    alternatives: [
      {
        title: "Começar com uma provocação",
        text: "Abra a aula com um mistério, uma pergunta ou uma situação surpreendente.",
      },
      {
        title: "Dar poder de escolha",
        text: "Permita que a turma escolha temas, exemplos ou formatos de entrega.",
      },
      {
        title: "Mapear interesses",
        text: "Descubra assuntos que mobilizam os alunos e conecte-os ao currículo.",
      },
      {
        title: "Celebrar pequenas descobertas",
        text: "Reconheça perguntas interessantes e avanços durante o processo.",
      },
    ],
    action:
      "Faça uma enquete de interesses e use o tema mais votado como contexto da próxima aula.",
  },
  {
    id: "engajamento",
    category: "alunos",
    label: "Falta de engajamento",
    icon: "users",
    question: "Por que os alunos participam tão pouco das aulas?",
    answer:
      "Aulas expositivas muito longas colocam o aluno em uma posição passiva. Sem oportunidades frequentes para falar, decidir, testar e receber retorno, a atenção cai e o conteúdo é retido por menos tempo.",
    alternatives: [
      {
        title: "Alternar a cada 15 minutos",
        text: "Intercale explicação curta, pergunta, prática e compartilhamento.",
      },
      {
        title: "Usar aprendizagem por pares",
        text: "Peça que duplas discutam uma resposta antes de apresentá-la.",
      },
      {
        title: "Criar desafios rápidos",
        text: "Proponha missões curtas com um resultado visível ao final.",
      },
      {
        title: "Variar os canais de participação",
        text: "Combine fala, votação, escrita e murais colaborativos.",
      },
    ],
    action:
      "Na próxima aula, limite a explicação inicial a dez minutos e faça uma atividade em duplas.",
  },
  {
    id: "indisciplina",
    category: "alunos",
    label: "Aumento da indisciplina",
    icon: "message",
    question: "Por que a monotonia aumenta a indisciplina?",
    answer:
      "Quando a aula não oferece estímulos ou participação, os alunos procuram outras fontes de interação. Conversas paralelas e distrações muitas vezes são sintomas de tédio, e não apenas falta de limites.",
    alternatives: [
      {
        title: "Definir combinados com a turma",
        text: "Construa regras claras e explique o propósito de cada uma.",
      },
      {
        title: "Planejar participação frequente",
        text: "Inclua pequenas decisões ou tarefas a cada etapa da aula.",
      },
      {
        title: "Redirecionar com responsabilidade",
        text: "Dê papéis úteis aos alunos mais inquietos durante as atividades.",
      },
      {
        title: "Alternar formatos e ritmos",
        text: "Intercale momentos individuais, em grupo e com movimento.",
      },
    ],
    action:
      "Combine três regras simples e atribua funções de tempo, registro e apresentação aos grupos.",
  },
  {
    id: "memorizacao",
    category: "alunos",
    label: "Memorização temporária",
    icon: "book",
    question: "Por que os alunos esquecem o conteúdo depois da prova?",
    answer:
      "Decorar para uma avaliação gera lembranças frágeis porque o conteúdo não é recuperado, relacionado e aplicado em diferentes situações. Sem significado e revisão espaçada, a informação desaparece rapidamente.",
    alternatives: [
      {
        title: "Praticar recuperação ativa",
        text: "Peça que os alunos recordem ideias sem consultar o material.",
      },
      {
        title: "Revisar de forma espaçada",
        text: "Retome conceitos importantes em intervalos ao longo das semanas.",
      },
      {
        title: "Explicar com palavras próprias",
        text: "Use mapas mentais, exemplos autorais e ensino entre colegas.",
      },
      {
        title: "Conectar conhecimentos",
        text: "Relacione o conteúdo novo ao que a turma já aprendeu.",
      },
    ],
    action:
      "Comece a próxima aula com três perguntas sobre o conteúdo anterior, sem valer nota.",
  },
  {
    id: "aplicacao",
    category: "alunos",
    label: "Aplicação prática",
    icon: "target",
    question: "Por que o aluno não consegue usar o que aprendeu no dia a dia?",
    answer:
      "Quando o conteúdo é apresentado apenas de forma abstrata, o aluno pode até repetir conceitos, mas não reconhece quando e como utilizá-los. É necessário praticar a transferência para contextos reais e variados.",
    alternatives: [
      {
        title: "Trabalhar com problemas reais",
        text: "Transforme situações da comunidade em desafios de aprendizagem.",
      },
      {
        title: "Criar projetos práticos",
        text: "Peça um produto que demonstre o uso concreto do conhecimento.",
      },
      {
        title: "Variar os contextos",
        text: "Aplique o mesmo conceito em cenários e disciplinas diferentes.",
      },
      {
        title: "Trazer profissionais e relatos",
        text: "Mostre como o conhecimento é utilizado fora da escola.",
      },
    ],
    action:
      "Escolha um conceito da semana e crie um problema inspirado na rotina dos alunos.",
  },
  {
    id: "burnout",
    category: "gestao",
    label: "Esgotamento docente",
    icon: "clock",
    question: "Por que repetir o mesmo formato de aula pode gerar burnout?",
    answer:
      "A repetição sem autonomia ou retorno positivo reduz a sensação de propósito do professor. Somada à sobrecarga de planejamento, correções e demandas emocionais, ela pode produzir exaustão e distanciamento do trabalho.",
    alternatives: [
      {
        title: "Compartilhar planejamentos",
        text: "Crie um banco colaborativo de atividades com outros professores.",
      },
      {
        title: "Mudar uma etapa por vez",
        text: "Evite reformular tudo; teste uma estratégia nova em cada sequência.",
      },
      {
        title: "Proteger tempo de recuperação",
        text: "Defina limites de horário e pausas reais na rotina semanal.",
      },
      {
        title: "Priorizar tarefas essenciais",
        text: "Reduza atividades burocráticas que não melhoram a aprendizagem.",
      },
    ],
    action:
      "Escolha uma tarefa repetitiva para simplificar, compartilhar ou automatizar nesta semana.",
  },
  {
    id: "resistencia",
    category: "gestao",
    label: "Resistência à inovação",
    icon: "lightbulb",
    question: "O que dificulta a adoção de novas metodologias?",
    answer:
      "A resistência costuma vir do medo de perder controle, da falta de formação prática e de experiências anteriores frustrantes. Inovar sem tempo, apoio técnico ou objetivo claro transforma a mudança em mais uma cobrança.",
    alternatives: [
      {
        title: "Começar com um piloto",
        text: "Teste a metodologia em uma turma e por um período curto.",
      },
      {
        title: "Mostrar evidências próximas",
        text: "Compartilhe resultados e relatos de colegas da própria escola.",
      },
      {
        title: "Oferecer formação prática",
        text: "Modele uma aula e acompanhe o professor durante a aplicação.",
      },
      {
        title: "Garantir apoio técnico",
        text: "Disponibilize orientação rápida durante o uso de novas ferramentas.",
      },
    ],
    action:
      "Selecione uma prática simples, teste por duas semanas e registre o que funcionou.",
  },
  {
    id: "evasao",
    category: "gestao",
    label: "Altas taxas de evasão",
    icon: "users",
    question: "Como aulas pouco atraentes contribuem para a evasão?",
    answer:
      "A evasão possui causas sociais e econômicas complexas, mas a falta de pertencimento e relevância na experiência escolar pode agravá-la. Quando o aluno não percebe progresso, vínculo ou perspectiva, permanecer perde sentido.",
    alternatives: [
      {
        title: "Monitorar sinais precoces",
        text: "Acompanhe faltas, queda de participação e mudanças de comportamento.",
      },
      {
        title: "Fortalecer vínculos",
        text: "Crie tutoria e momentos regulares de escuta individual.",
      },
      {
        title: "Dar sentido ao percurso",
        text: "Conecte projetos a interesses, profissões e planos de vida.",
      },
      {
        title: "Envolver famílias e comunidade",
        text: "Crie uma rede de apoio antes que as ausências se acumulem.",
      },
    ],
    action:
      "Identifique alunos com faltas crescentes e organize uma conversa de escuta, sem julgamento.",
  },
  {
    id: "personalizacao",
    category: "gestao",
    label: "Dificuldade de personalização",
    icon: "target",
    question: "Por que o modelo único não funciona para todos?",
    answer:
      "Os alunos chegam com repertórios, ritmos e formas de expressão diferentes. Uma única explicação, atividade e prazo tende a favorecer apenas parte da turma e torna invisíveis necessidades importantes.",
    alternatives: [
      {
        title: "Oferecer rotas diferentes",
        text: "Disponibilize apoio, nível essencial e desafio avançado.",
      },
      {
        title: "Variar formas de expressão",
        text: "Aceite texto, apresentação, áudio ou produção visual.",
      },
      {
        title: "Usar dados formativos",
        text: "Adapte grupos e intervenções a partir de checagens rápidas.",
      },
      {
        title: "Flexibilizar tempo e apoio",
        text: "Ofereça recursos extras sem reduzir os objetivos de aprendizagem.",
      },
    ],
    action:
      "Crie duas versões da próxima atividade: uma com apoio e outra com desafio adicional.",
  },
  {
    id: "criatividade",
    category: "cognitivo",
    label: "Bloqueio da criatividade",
    icon: "lightbulb",
    question: "Como respostas padronizadas bloqueiam a criatividade?",
    answer:
      "Quando toda pergunta admite apenas um caminho, o aluno aprende a buscar aprovação em vez de explorar possibilidades. Criatividade exige segurança para experimentar, combinar ideias e tratar o erro como parte do processo.",
    alternatives: [
      {
        title: "Fazer perguntas abertas",
        text: "Proponha desafios com mais de uma solução possível.",
      },
      {
        title: "Valorizar caminhos diferentes",
        text: "Avalie também a originalidade e a justificativa do processo.",
      },
      {
        title: "Criar tempo para protótipos",
        text: "Permita testar, receber retorno e melhorar uma primeira versão.",
      },
      {
        title: "Combinar ideias improváveis",
        text: "Convide os alunos a relacionar conteúdos de áreas diferentes.",
      },
    ],
    action:
      "Transforme uma questão fechada da próxima aula em um desafio com múltiplas respostas.",
  },
  {
    id: "soft-skills",
    category: "cognitivo",
    label: "Baixo desenvolvimento de soft skills",
    icon: "users",
    question: "Por que aulas sem colaboração limitam as habilidades sociais?",
    answer:
      "Liderança, empatia, comunicação e colaboração não se desenvolvem apenas ouvindo explicações. Essas competências precisam de situações reais de negociação, divisão de responsabilidades e reflexão sobre a convivência.",
    alternatives: [
      {
        title: "Definir papéis rotativos",
        text: "Alterne liderança, registro, organização e apresentação nos grupos.",
      },
      {
        title: "Usar avaliação entre pares",
        text: "Ensine a turma a oferecer feedback respeitoso e específico.",
      },
      {
        title: "Debater casos reais",
        text: "Trabalhe escuta, argumentação e empatia com dilemas próximos.",
      },
      {
        title: "Refletir sobre o trabalho em grupo",
        text: "Reserve tempo para avaliar comunicação, liderança e cooperação.",
      },
    ],
    action:
      "Proponha uma tarefa em grupo com papéis claros e cinco minutos de autoavaliação final.",
  },
  {
    id: "autonomia",
    category: "cognitivo",
    label: "Dependência do tutor",
    icon: "book",
    question: "Como ajudar o aluno a aprender com mais autonomia?",
    answer:
      "A dependência cresce quando o professor sempre define o caminho, confirma cada passo e entrega respostas prontas. Autonomia é construída gradualmente com estratégias de estudo, escolhas responsáveis e reflexão sobre o próprio aprendizado.",
    alternatives: [
      {
        title: "Ensinar a planejar",
        text: "Ajude o aluno a definir meta, prazo, recursos e etapas.",
      },
      {
        title: "Usar perguntas de apoio",
        text: "Antes de responder, pergunte o que ele já tentou e o que falta.",
      },
      {
        title: "Criar autoavaliações",
        text: "Peça que identifique avanços, dúvidas e o próximo passo.",
      },
      {
        title: "Disponibilizar recursos de consulta",
        text: "Ensine a buscar, comparar e validar informações com independência.",
      },
    ],
    action:
      "Entregue um roteiro de estudo com escolhas e peça uma breve reflexão ao final.",
  },
];

// ============================================================================
// TRADUÇÕES DOS CONTEÚDOS DOS DESAFIOS (EN & ES)
// ============================================================================
const contentTranslations = {
  en: {
    desinteresse: {
      label: "Chronic disinterest",
      question: "What makes students lose curiosity about studying?",
      answer:
        "Disinterest appears when learning feels like a mere obligation, without room for discovery, choice, or connection to student interests. Over time, natural curiosity is replaced by the feeling of just completing tasks.",
      alternatives: [
        { title: "Start with a provocation", text: "Open the lesson with a mystery, a question, or a surprising situation." },
        { title: "Give power of choice", text: "Allow the class to choose topics, examples, or submission formats." },
        { title: "Map interests", text: "Discover subjects that engage students and connect them to the curriculum." },
        { title: "Celebrate small discoveries", text: "Recognize interesting questions and progress along the way." },
      ],
      action: "Run an interest poll and use the most voted topic as the context for your next lesson.",
    },
    engajamento: {
      label: "Lack of engagement",
      question: "Why do students participate so little in class?",
      answer:
        "Overly long lectures place students in a passive role. Without frequent opportunities to speak, decide, test, and receive feedback, attention drops and content is retained for less time.",
      alternatives: [
        { title: "Switch every 15 minutes", text: "Alternate short explanations, questions, practice, and sharing." },
        { title: "Use peer learning", text: "Ask pairs to discuss an answer before presenting it to the class." },
        { title: "Create quick challenges", text: "Propose short missions with a visible outcome at the end." },
        { title: "Vary participation channels", text: "Combine speaking, voting, writing, and collaborative boards." },
      ],
      action: "In your next class, limit the initial explanation to ten minutes and run a pair activity.",
    },
    indisciplina: {
      label: "Increased indiscipline",
      question: "Why does monotony increase indiscipline?",
      answer:
        "When a lesson offers no stimulation or active participation, students look for other sources of interaction. Side conversations and distractions are often symptoms of boredom, not just lack of boundaries.",
      alternatives: [
        { title: "Set agreements with the class", text: "Build clear rules together and explain the purpose of each one." },
        { title: "Plan frequent participation", text: "Include small decisions or tasks at every stage of the lesson." },
        { title: "Redirect with responsibility", text: "Give useful roles to more restless students during activities." },
        { title: "Alternate formats and paces", text: "Mix individual work, group tasks, and physical movement." },
      ],
      action: "Agree on three simple rules and assign timekeeper, note-taker, and presenter roles to groups.",
    },
    memorizacao: {
      label: "Temporary memorization",
      question: "Why do students forget the content right after the test?",
      answer:
        "Cramming for an exam creates fragile memories because content is not retrieved, connected, and applied in varied situations. Without meaning and spaced review, information fades rapidly.",
      alternatives: [
        { title: "Practice active recall", text: "Ask students to retrieve ideas without looking at their notes." },
        { title: "Review with spacing", text: "Revisit key concepts at intervals over several weeks." },
        { title: "Explain in their own words", text: "Use mind maps, original examples, and peer teaching." },
        { title: "Connect knowledge", text: "Link new content to what the class has already learned." },
      ],
      action: "Start your next class with three ungraded questions about the previous lesson's content.",
    },
    aplicacao: {
      label: "Practical application",
      question: "Why can't students use what they learned in everyday life?",
      answer:
        "When content is presented purely abstractly, students may repeat definitions without recognizing when or how to use them. Transfer must be practiced in real, varied contexts.",
      alternatives: [
        { title: "Work with real problems", text: "Turn community situations into learning challenges." },
        { title: "Create practical projects", text: "Ask for a product that demonstrates concrete use of knowledge." },
        { title: "Vary contexts", text: "Apply the same concept across different scenarios and subjects." },
        { title: "Bring professionals and stories", text: "Show how knowledge is used outside of school." },
      ],
      action: "Pick one concept from this week and create a problem inspired by your students' daily routine.",
    },
    burnout: {
      label: "Teacher burnout",
      question: "Why can repeating the same lesson format lead to burnout?",
      answer:
        "Repetition without autonomy or positive feedback diminishes a teacher's sense of purpose. Combined with heavy planning, grading, and emotional demands, it causes exhaustion and detachment.",
      alternatives: [
        { title: "Share lesson plans", text: "Build a collaborative bank of activities with fellow teachers." },
        { title: "Change one step at a time", text: "Avoid overhauling everything; test one new strategy per sequence." },
        { title: "Protect recovery time", text: "Set clear schedule boundaries and genuine breaks in your weekly routine." },
        { title: "Prioritize essential tasks", text: "Reduce bureaucratic tasks that do not improve student learning." },
      ],
      action: "Choose one repetitive task to simplify, share, or automate this week.",
    },
    resistencia: {
      label: "Resistance to innovation",
      question: "What makes adopting new methodologies difficult?",
      answer:
        "Resistance often stems from fear of losing control, lack of practical training, and past frustrating experiences. Innovating without time, technical support, or a clear goal turns change into another burden.",
      alternatives: [
        { title: "Start with a pilot", text: "Test the methodology in one class over a short period." },
        { title: "Show nearby evidence", text: "Share results and stories from colleagues at your own school." },
        { title: "Offer hands-on training", text: "Model a lesson and support the teacher during implementation." },
        { title: "Ensure technical support", text: "Provide quick guidance while using new tools." },
      ],
      action: "Select one simple practice, test it for two weeks, and record what worked.",
    },
    evasao: {
      label: "High dropout rates",
      question: "How do unengaging classes contribute to student dropout?",
      answer:
        "Dropout has complex social and economic roots, but a lack of belonging and relevance in school exacerbates it. When students see no progress, connection, or future perspective, staying loses meaning.",
      alternatives: [
        { title: "Monitor early warning signs", text: "Track absences, drops in participation, and behavior shifts." },
        { title: "Strengthen bonds", text: "Create mentoring and regular moments for one-on-one listening." },
        { title: "Give meaning to the journey", text: "Connect projects to interests, careers, and life plans." },
        { title: "Involve families and community", text: "Build a support network before absences accumulate." },
      ],
      action: "Identify students with rising absences and organize a non-judgmental listening conversation.",
    },
    personalizacao: {
      label: "Difficulty personalizing",
      question: "Why doesn't a one-size-fits-all model work for everyone?",
      answer:
        "Students arrive with different backgrounds, paces, and ways of expressing themselves. A single explanation, task, and deadline tends to favor only part of the class while hiding key needs.",
      alternatives: [
        { title: "Offer different pathways", text: "Provide scaffolded support, core level, and advanced challenge." },
        { title: "Vary forms of expression", text: "Accept text, presentations, audio, or visual creations." },
        { title: "Use formative data", text: "Adapt groups and interventions based on quick comprehension checks." },
        { title: "Flex time and support", text: "Offer extra resources without lowering learning goals." },
      ],
      action: "Create two versions of your next activity: one with extra scaffolding and one with an added challenge.",
    },
    criatividade: {
      label: "Creativity block",
      question: "How do standardized answers block creativity?",
      answer:
        "When every question has only one accepted path, students learn to seek approval rather than explore possibilities. Creativity requires psychological safety to experiment and treat mistakes as part of learning.",
      alternatives: [
        { title: "Ask open-ended questions", text: "Propose challenges with more than one possible solution." },
        { title: "Value different paths", text: "Assess originality and the reasoning behind the process." },
        { title: "Make time for prototypes", text: "Allow testing, receiving feedback, and improving a first draft." },
        { title: "Combine unlikely ideas", text: "Invite students to connect concepts from different subjects." },
      ],
      action: "Turn one closed question from your next lesson into a challenge with multiple valid answers.",
    },
    "soft-skills": {
      label: "Low soft skills growth",
      question: "Why do classes without collaboration limit social skills?",
      answer:
        "Leadership, empathy, communication, and teamwork do not develop from listening to lectures alone. They require real situations of negotiation, shared responsibility, and reflection on group dynamics.",
      alternatives: [
        { title: "Set rotating roles", text: "Rotate leadership, note-taking, organization, and presenting in groups." },
        { title: "Use peer assessment", text: "Teach the class how to give respectful, specific feedback." },
        { title: "Debate real cases", text: "Practice listening, argumentation, and empathy with relatable dilemmas." },
        { title: "Reflect on teamwork", text: "Set aside time to evaluate communication, leadership, and cooperation." },
      ],
      action: "Assign a group task with clear roles and five minutes of self-assessment at the end.",
    },
    autonomia: {
      label: "Tutor dependency",
      question: "How can we help students learn with greater autonomy?",
      answer:
        "Dependency grows when the teacher always defines the path, confirms every step, and gives ready-made answers. Autonomy is built gradually through study strategies, responsible choices, and self-reflection.",
      alternatives: [
        { title: "Teach how to plan", text: "Help students define goals, deadlines, resources, and steps." },
        { title: "Use guiding questions", text: "Before answering, ask what they have already tried and what is missing." },
        { title: "Create self-assessments", text: "Ask students to identify progress, doubts, and their next step." },
        { title: "Provide reference resources", text: "Teach how to search, compare, and validate information independently." },
      ],
      action: "Hand out a study guide with choices and ask for a brief reflection at the end of class.",
    },
  },
  es: {
    desinteresse: {
      label: "Desinterés crónico",
      question: "¿Qué hace que el alumno pierda la curiosidad por los estudios?",
      answer:
        "El desinterés aparece cuando aprender parece solo una obligación, sin espacio para el descubrimiento, la elección o la conexión con los intereses del alumno. Con el tiempo, la curiosidad natural es reemplazada por cumplir tareas.",
      alternatives: [
        { title: "Empezar con una provocación", text: "Abre la clase con un misterio, una pregunta o una situación sorprendente." },
        { title: "Dar poder de elección", text: "Permite que el grupo elija temas, ejemplos o formatos de entrega." },
        { title: "Mapear intereses", text: "Descubre asuntos que motivan a los alumnos y conéctalos al currículo." },
        { title: "Celebrar pequeños hallazgos", text: "Reconoce preguntas interesantes y avances durante el proceso." },
      ],
      action: "Haz una encuesta de intereses y usa el tema más votado como contexto de la próxima clase.",
    },
    engajamento: {
      label: "Falta de participación",
      question: "¿Por qué los alumnos participan tan poco en las clases?",
      answer:
        "Las clases expositivas muy largas colocan al alumno en una posición pasiva. Sin oportunidades frecuentes para hablar, decidir, probar y recibir retroalimentación, la atención cae y se retiene menos.",
      alternatives: [
        { title: "Alternar cada 15 minutos", text: "Intercala explicación breve, pregunta, práctica y puesta en común." },
        { title: "Usar aprendizaje entre pares", text: "Pide que parejas discutan una respuesta antes de presentarla." },
        { title: "Crear desafíos rápidos", text: "Propón misiones cortas con un resultado visible al final." },
        { title: "Variar canales de participación", text: "Combina habla, votación, escritura y murales colaborativos." },
      ],
      action: "En la próxima clase, limita la explicación inicial a diez minutos y haz una actividad en parejas.",
    },
    indisciplina: {
      label: "Aumento de la indisciplina",
      question: "¿Por qué la monotonía aumenta la indisciplina?",
      answer:
        "Cuando la clase no ofrece estímulos ni participación, los alumnos buscan otras fuentes de interacción. Las charlas paralelas suelen ser síntomas de aburrimiento y no solo falta de límites.",
      alternatives: [
        { title: "Definir acuerdos con el grupo", text: "Construye reglas claras y explica el propósito de cada una." },
        { title: "Planificar participación frecuente", text: "Incluye pequeñas decisiones o tareas en cada etapa de la clase." },
        { title: "Redirigir con responsabilidad", text: "Da roles útiles a los alumnos más inquietos durante las actividades." },
        { title: "Alternar formatos y ritmos", text: "Intercala momentos individuales, en grupo y con movimiento." },
      ],
      action: "Acuerda tres reglas simples y asigna funciones de tiempo, registro y presentación a los grupos.",
    },
    memorizacao: {
      label: "Memorización temporal",
      question: "¿Por qué los alumnos olvidan el contenido después del examen?",
      answer:
        "Memorizar para una evaluación genera recuerdos frágiles porque el contenido no se recupera, relaciona ni aplica en distintas situaciones. Sin significado ni repaso espaciado, la información desaparece rápido.",
      alternatives: [
        { title: "Practicar recuperación activa", text: "Pide que los alumnos recuerden ideas sin consultar el material." },
        { title: "Repasar de forma espaciada", text: "Retoma conceptos clave en intervalos a lo largo de las semanas." },
        { title: "Explicar con palabras propias", text: "Usa mapas mentales, ejemplos propios y enseñanza entre compañeros." },
        { title: "Conectar conocimientos", text: "Relaciona el contenido nuevo con lo que el grupo ya aprendió." },
      ],
      action: "Comienza la próxima clase con tres preguntas sobre el contenido anterior, sin calificación.",
    },
    aplicacao: {
      label: "Aplicación práctica",
      question: "¿Por qué el alumno no logra usar lo aprendido en su día a día?",
      answer:
        "Cuando el contenido se presenta solo de forma abstracta, el alumno repite conceptos pero no reconoce cuándo ni cómo usarlos. Es necesario practicar la transferencia a contextos reales y variados.",
      alternatives: [
        { title: "Trabajar con problemas reales", text: "Transforma situaciones de la comunidad en retos de aprendizaje." },
        { title: "Crear proyectos prácticos", text: "Pide un producto que demuestre el uso concreto del conocimiento." },
        { title: "Variar los contextos", text: "Aplica el mismo concepto en escenarios y asignaturas diferentes." },
        { title: "Traer profesionales y relatos", text: "Muestra cómo se utiliza el conocimiento fuera de la escuela." },
      ],
      action: "Elige un concepto de la semana y crea un problema inspirado en la rutina de los alumnos.",
    },
    burnout: {
      label: "Agotamiento docente",
      question: "¿Por qué repetir el mismo formato de clase puede generar burnout?",
      answer:
        "La repetición sin autonomía ni retorno positivo reduce el sentido de propósito del docente. Sumada a la sobrecarga de planificación y correcciones, produce agotamiento y distanciamiento.",
      alternatives: [
        { title: "Compartir planificaciones", text: "Crea un banco colaborativo de actividades con otros docentes." },
        { title: "Cambiar una etapa a la vez", text: "Evita reformular todo; prueba una estrategia nueva por secuencia." },
        { title: "Proteger tiempo de descanso", text: "Define límites de horario y pausas reales en la rutina semanal." },
        { title: "Priorizar tareas esenciales", text: "Reduce tareas burocráticas que no mejoran el aprendizaje." },
      ],
      action: "Elige una tarea repetitiva para simplificar, compartir o automatizar esta semana.",
    },
    resistencia: {
      label: "Resistencia a la innovación",
      question: "¿Qué dificulta la adopción de nuevas metodologías?",
      answer:
        "La resistencia suele venir del miedo a perder el control, la falta de formación práctica y experiencias previas frustrantes. Innovar sin tiempo ni apoyo técnico convierte el cambio en otra carga.",
      alternatives: [
        { title: "Empezar con un piloto", text: "Prueba la metodología en un grupo y por un período corto." },
        { title: "Mostrar evidencias cercanas", text: "Comparte resultados y relatos de colegas de la propia escuela." },
        { title: "Ofrecer formación práctica", text: "Modela una clase y acompaña al docente durante la aplicación." },
        { title: "Garantizar apoyo técnico", text: "Disponibiliza orientación rápida durante el uso de nuevas herramientas." },
      ],
      action: "Selecciona una práctica simple, pruébala dos semanas y registra qué funcionó.",
    },
    evasao: {
      label: "Altas tasas de deserción",
      question: "¿Cómo influyen las clases poco atractivas en el abandono escolar?",
      answer:
        "La deserción tiene causas sociales y económicas complejas, pero la falta de pertenencia y relevancia escolar la agrava. Cuando el alumno no percibe progreso ni vínculo, permanecer pierde sentido.",
      alternatives: [
        { title: "Monitorear señales tempranas", text: "Observa faltas, caída de participación y cambios de conducta." },
        { title: "Fortalecer vínculos", text: "Crea tutorías y momentos regulares de escucha individual." },
        { title: "Dar sentido al recorrido", text: "Conecta proyectos con intereses, profesiones y planes de vida." },
        { title: "Involucrar familias y comunidad", text: "Crea una red de apoyo antes de que se acumulen las ausencias." },
      ],
      action: "Identifica alumnos con faltas crecientes y organiza una charla de escucha sin juzgar.",
    },
    personalizacao: {
      label: "Dificultad de personalización",
      question: "¿Por qué el modelo único no funciona para todos?",
      answer:
        "Los alumnos llegan con repertorios, ritmos y formas de expresión distintos. Una única explicación, actividad y plazo favorece solo a parte del grupo e invisibiliza necesidades clave.",
      alternatives: [
        { title: "Ofrecer rutas diferentes", text: "Disponibiliza apoyo base, nivel esencial y desafío avanzado." },
        { title: "Variar formas de expresión", text: "Acepta texto, presentación, audio o producción visual." },
        { title: "Usar datos formativos", text: "Adapta grupos e intervenciones mediante chequeos rápidos." },
        { title: "Flexibilizar tiempo y apoyo", text: "Ofrece recursos extra sin reducir los objetivos de aprendizaje." },
      ],
      action: "Crea dos versiones de la próxima actividad: una con apoyo y otra con desafío adicional.",
    },
    criatividade: {
      label: "Bloqueo de la creatividad",
      question: "¿Cómo bloquean la creatividad las respuestas estandarizadas?",
      answer:
        "Cuando cada pregunta admite un solo camino, el alumno busca aprobación en vez de explorar posibilidades. La creatividad exige seguridad para experimentar y ver el error como parte del proceso.",
      alternatives: [
        { title: "Hacer preguntas abiertas", text: "Propón desafíos con más de una solución posible." },
        { title: "Valorar caminos diferentes", text: "Evalúa también la originalidad y la justificación del proceso." },
        { title: "Dar tiempo para prototipos", text: "Permite probar, recibir retorno y mejorar una primera versión." },
        { title: "Combinar ideas improbables", text: "Invita a relacionar contenidos de áreas diferentes." },
      ],
      action: "Transforma una pregunta cerrada de la próxima clase en un reto con múltiples respuestas.",
    },
    "soft-skills": {
      label: "Bajo desarrollo de soft skills",
      question: "¿Por qué las clases sin colaboración limitan habilidades sociales?",
      answer:
        "Liderazgo, empatía, comunicación y colaboración no se desarrollan solo escuchando explicaciones. Requieren situaciones reales de negociación, reparto de responsabilidades y reflexión grupal.",
      alternatives: [
        { title: "Definir roles rotativos", text: "Alterna liderazgo, registro, organización y presentación en los grupos." },
        { title: "Usar evaluación entre pares", text: "Enseña al grupo a dar retroalimentación respetuosa y específica." },
        { title: "Debatir casos reales", text: "Trabaja escucha, argumentación y empatía con dilemas cercanos." },
        { title: "Reflexionar sobre el trabajo grupal", text: "Reserva tiempo para evaluar comunicación y cooperación." },
      ],
      action: "Propón una tarea en grupo con roles claros y cinco minutos de autoevaluación final.",
    },
    autonomia: {
      label: "Dependencia del tutor",
      question: "¿Cómo ayudar al alumno a aprender con más autonomía?",
      answer:
        "La dependencia crece cuando el docente siempre define el camino, confirma cada paso y entrega respuestas listas. La autonomía se construye gradualmente con estrategias de estudio y reflexión.",
      alternatives: [
        { title: "Enseñar a planificar", text: "Ayuda al alumno a definir meta, plazo, recursos y etapas." },
        { title: "Usar preguntas de apoyo", text: "Antes de responder, pregunta qué ya intentó y qué le falta." },
        { title: "Crear autoevaluaciones", text: "Pide que identifique avances, dudas y su próximo paso." },
        { title: "Dar recursos de consulta", text: "Enseña a buscar, comparar y validar información con independencia." },
      ],
      action: "Entrega una guía de estudio con elecciones y pide una breve reflexión al final.",
    },
  },
};

const categories = [
  { id: "alunos", icon: "users" },
  { id: "gestao", icon: "home" },
  { id: "cognitivo", icon: "lightbulb" },
];

const languages = [
  { id: "pt-BR", label: "Português (Brasil)", short: "PT-BR" },
  { id: "en", label: "English", short: "EN" },
  { id: "es", label: "Español", short: "ES" },
  { id: "pt-PT", label: "Português (Portugal)", short: "PT-PT" },
];

const copy = {
  "pt-BR": {
    hello: "Olá, professor",
    assistant: "Assistente pedagógico",
    title: "Como posso ajudar sua aula hoje?",
    subtitle: "Escolha um desafio para receber causas e soluções práticas.",
    area: "Área do problema",
    challenge: "Escolha um desafio",
    other: "Outro",
    question: "Pergunta",
    ai: "Resposta da IA",
    recommendations: "Soluções recomendadas",
    alternatives: "Tente uma destas alternativas",
    next: "Próximo passo sugerido",
    plan: "Criar plano de aula",
    save: "Salvar solução",
    savedLabel: "Salvo",
    remove: "Remover",
    openSolution: "Ver solução",
    noSavedTitle: "Nenhuma solução salva ainda",
    noSavedDesc: "Salve os desafios mais importantes para acessá-los rapidamente antes da aula.",
    exploreChallenges: "Explorar desafios",
    profileTitle: "Seu painel pedagógico",
    profileSubtitle: "Acompanhe suas estratégias e personalize o idioma do aplicativo.",
    statsExplored: "Desafios explorados",
    statsPlans: "Planos gerados",
    statsSaved: "Soluções salvas",
    language: "Idioma do aplicativo",
    close: "Fechar",
    plannerTitle: "Criar plano de aula",
    plannerIntro: "Personalize a proposta antes de gerar o plano.",
    subject: "Disciplina",
    subjectPlaceholder: "Ex.: Matemática",
    content: "Conteúdo",
    contentPlaceholder: "Ex.: Frações e porcentagens",
    planObjective: "Objetivo da aula",
    objectivePlaceholder: "O que os alunos deverão aprender?",
    studentCount: "Quantidade de alunos",
    availableResources: "Recursos disponíveis",
    resourceOptions: ["Internet", "Computadores", "Materiais impressos", "Espaço para grupos"],
    noResources: "O plano será adaptado aos recursos selecionados.",
    duration: "Duração da aula",
    classLevel: "Nível da turma",
    levels: ["Fundamental I", "Fundamental II", "Ensino médio"],
    includedStrategies: "Estratégias incluídas",
    generatePlan: "Gerar plano de aula",
    planReady: "Seu plano está pronto",
    planFor: "Plano para",
    studentsUnit: "alunos",
    objective: "Objetivo",
    opening: "Abertura",
    development: "Desenvolvimento",
    closing: "Encerramento",
    assessment: "Avaliação",
    resources: "Recursos",
    totalTime: "Tempo total",
    concreteExample: "Aplicação concreta",
    copyPlan: "Copiar plano",
    copied: "Plano copiado",
    pasteHint: "Abra o Bloco de Notas ou Google Docs e pressione Ctrl + V para colar.",
    editPlan: "Editar configurações",
    describeProblem: "Descrever outro problema",
    describeProblemIntro: "Conte o que está acontecendo para receber sugestões específicas.",
    problemName: "Nome do problema",
    problemNamePlaceholder: "Ex.: Dificuldade de trabalhar em grupo",
    problemDetails: "O que está acontecendo?",
    problemDetailsPlaceholder: "Descreva a situação, a turma e o que já tentou.",
    addProblem: "Analisar problema",
    customQuestion: "Como podemos melhorar esta situação?",
    customAction: "Teste uma estratégia de cada vez e registre as mudanças observadas.",
    customStrategies: [
      ["Ouvir a turma", "Faça perguntas curtas para compreender como os alunos percebem a situação."],
      ["Testar uma mudança pequena", "Altere uma etapa da aula e observe o resultado antes de ampliar."],
      ["Acompanhar evidências", "Registre participação, dúvidas e avanços ao longo de duas aulas."],
      ["Rever com os alunos", "Converse sobre o que funcionou e ajuste a próxima tentativa."],
    ],
    templates: {
      objective: "Compreender o desafio e aplicar estratégias práticas sobre",
      opening: "Apresente a pergunta à turma e recolha respostas rápidas, sem corrigir neste primeiro momento:",
      development: "Organize a turma para experimentar estas estratégias aplicadas ao tema:",
      closing: "Convide os grupos a compartilhar o que descobriram e a definir uma ação para a próxima aula.",
      assessment: "Observe participação, colaboração e capacidade de relacionar a atividade com o conteúdo trabalhado.",
      resources: "Quadro, folhas de registro, marcadores e cronômetro.",
    },
    categories: ["Impacto nos alunos", "Gestão e professores", "Desenvolvimento cognitivo"],
    tabs: ["Início", "Soluções", "Salvos", "Perfil"],
  },
  en: {
    hello: "Hello, teacher",
    assistant: "Teaching assistant",
    title: "How can I help your class today?",
    subtitle: "Choose a challenge to get causes and practical solutions.",
    area: "Problem area",
    challenge: "Choose a challenge",
    other: "Other",
    question: "Question",
    ai: "AI response",
    recommendations: "Recommended solutions",
    alternatives: "Try one of these alternatives",
    next: "Suggested next step",
    plan: "Create lesson plan",
    save: "Save solution",
    savedLabel: "Saved",
    remove: "Remove",
    openSolution: "View solution",
    noSavedTitle: "No saved solutions yet",
    noSavedDesc: "Save your most relevant challenges for quick access before class.",
    exploreChallenges: "Explore challenges",
    profileTitle: "Your teaching dashboard",
    profileSubtitle: "Track your explored strategies and customize the app language.",
    statsExplored: "Challenges explored",
    statsPlans: "Plans generated",
    statsSaved: "Saved solutions",
    language: "App language",
    close: "Close",
    plannerTitle: "Create lesson plan",
    plannerIntro: "Customize the proposal before generating the plan.",
    subject: "Subject",
    subjectPlaceholder: "E.g. Mathematics",
    content: "Content",
    contentPlaceholder: "E.g. Fractions and percentages",
    planObjective: "Lesson objective",
    objectivePlaceholder: "What should students learn?",
    studentCount: "Number of students",
    availableResources: "Available resources",
    resourceOptions: ["Internet", "Computers", "Printed materials", "Space for groups"],
    noResources: "The plan will be adapted to the selected resources.",
    duration: "Lesson duration",
    classLevel: "Class level",
    levels: ["Elementary school", "Middle school", "High school"],
    includedStrategies: "Included strategies",
    generatePlan: "Generate lesson plan",
    planReady: "Your plan is ready",
    planFor: "Plan for",
    studentsUnit: "students",
    objective: "Objective",
    opening: "Opening",
    development: "Development",
    closing: "Closing",
    assessment: "Assessment",
    resources: "Resources",
    totalTime: "Total time",
    concreteExample: "Practical application",
    copyPlan: "Copy plan",
    copied: "Plan copied",
    pasteHint: "Open Notepad or Google Docs and press Ctrl + V to paste.",
    editPlan: "Edit settings",
    describeProblem: "Describe another problem",
    describeProblemIntro: "Tell us what is happening to receive specific suggestions.",
    problemName: "Problem name",
    problemNamePlaceholder: "E.g. Difficulty working in groups",
    problemDetails: "What is happening?",
    problemDetailsPlaceholder: "Describe the situation, the class, and what you have already tried.",
    addProblem: "Analyze problem",
    customQuestion: "How can we improve this situation?",
    customAction: "Test one strategy at a time and record the changes you observe.",
    customStrategies: [
      ["Listen to the class", "Ask short questions to understand how students see the situation."],
      ["Test one small change", "Change one lesson stage and observe the result before expanding it."],
      ["Track evidence", "Record participation, questions, and progress across two lessons."],
      ["Review with students", "Discuss what worked and adjust the next attempt."],
    ],
    templates: {
      objective: "Understand the challenge and apply practical strategies to teach",
      opening: "Present this question to the class and collect quick answers without correcting them yet:",
      development: "Organize the class to try these strategies applied to the topic:",
      closing: "Invite groups to share what they discovered and define one action for the next lesson.",
      assessment: "Observe participation, collaboration, and the ability to connect the activity to the lesson content.",
      resources: "Board, note sheets, markers, and a timer.",
    },
    categories: ["Impact on students", "Management and teachers", "Cognitive development"],
    tabs: ["Home", "Solutions", "Saved", "Profile"],
  },
  es: {
    hello: "Hola, profesor",
    assistant: "Asistente pedagógico",
    title: "¿Cómo puedo ayudar a tu clase hoy?",
    subtitle: "Elige un desafío para recibir causas y soluciones prácticas.",
    area: "Área del problema",
    challenge: "Elige un desafío",
    other: "Otro",
    question: "Pregunta",
    ai: "Respuesta de la IA",
    recommendations: "Soluciones recomendadas",
    alternatives: "Prueba una de estas alternativas",
    next: "Próximo paso sugerido",
    plan: "Crear plan de clase",
    save: "Guardar solución",
    savedLabel: "Guardado",
    remove: "Eliminar",
    openSolution: "Ver solución",
    noSavedTitle: "Aún no hay soluciones guardadas",
    noSavedDesc: "Guarda los desafíos más útiles para consultarlos rápido antes de clase.",
    exploreChallenges: "Explorar desafíos",
    profileTitle: "Tu panel pedagógico",
    profileSubtitle: "Sigue tus estrategias exploradas y personaliza el idioma de la app.",
    statsExplored: "Desafíos explorados",
    statsPlans: "Planes generados",
    statsSaved: "Soluciones guardadas",
    language: "Idioma de la aplicación",
    close: "Cerrar",
    plannerTitle: "Crear plan de clase",
    plannerIntro: "Personaliza la propuesta antes de generar el plan.",
    subject: "Asignatura",
    subjectPlaceholder: "Ej.: Matemáticas",
    content: "Contenido",
    contentPlaceholder: "Ej.: Fracciones y porcentajes",
    planObjective: "Objetivo de la clase",
    objectivePlaceholder: "¿Qué deberán aprender los alumnos?",
    studentCount: "Cantidad de alumnos",
    availableResources: "Recursos disponibles",
    resourceOptions: ["Internet", "Ordenadores", "Materiales impresos", "Espacio para grupos"],
    noResources: "El plan se adaptará a los recursos seleccionados.",
    duration: "Duración de la clase",
    classLevel: "Nivel del grupo",
    levels: ["Primaria", "Secundaria básica", "Secundaria superior"],
    includedStrategies: "Estrategias incluidas",
    generatePlan: "Generar plan de clase",
    planReady: "Tu plan está listo",
    planFor: "Plan para",
    studentsUnit: "alumnos",
    objective: "Objetivo",
    opening: "Apertura",
    development: "Desarrollo",
    closing: "Cierre",
    assessment: "Evaluación",
    resources: "Recursos",
    totalTime: "Tiempo total",
    concreteExample: "Aplicación concreta",
    copyPlan: "Copiar plan",
    copied: "Plan copiado",
    pasteHint: "Abre el Bloc de notas o Google Docs y presiona Ctrl + V para pegar.",
    editPlan: "Editar configuración",
    describeProblem: "Describir otro problema",
    describeProblemIntro: "Cuéntanos qué ocurre para recibir sugerencias específicas.",
    problemName: "Nombre del problema",
    problemNamePlaceholder: "Ej.: Dificultad para trabajar en grupo",
    problemDetails: "¿Qué está ocurriendo?",
    problemDetailsPlaceholder: "Describe la situación, el grupo y lo que ya intentaste.",
    addProblem: "Analizar problema",
    customQuestion: "¿Cómo podemos mejorar esta situación?",
    customAction: "Prueba una estrategia cada vez y registra los cambios observados.",
    customStrategies: [
      ["Escuchar al grupo", "Haz preguntas breves para entender cómo perciben la situación."],
      ["Probar un cambio pequeño", "Cambia una etapa y observa el resultado antes de ampliarlo."],
      ["Registrar evidencias", "Anota participación, dudas y avances durante dos clases."],
      ["Revisar con los alumnos", "Hablen sobre lo que funcionó y ajusten el próximo intento."],
    ],
    templates: {
      objective: "Comprender el desafío y aplicar estrategias prácticas sobre",
      opening: "Presenta esta pregunta al grupo y recoge respuestas rápidas sin corregirlas todavía:",
      development: "Organiza el grupo para probar estas estrategias aplicadas al tema:",
      closing: "Invita a los grupos a compartir lo que descubrieron y definir una acción para la próxima clase.",
      assessment: "Observa la participación, la colaboración y la capacidad de relacionar la actividad con el contenido.",
      resources: "Pizarra, hojas de registro, marcadores y cronómetro.",
    },
    categories: ["Impacto en los alumnos", "Gestión y profesores", "Desarrollo cognitivo"],
    tabs: ["Inicio", "Soluciones", "Guardados", "Perfil"],
  },
  "pt-PT": {
    hello: "Olá, professor",
    assistant: "Assistente pedagógico",
    title: "Como posso ajudar a sua aula hoje?",
    subtitle: "Escolha um desafio para receber causas e soluções práticas.",
    area: "Área do problema",
    challenge: "Escolha um desafio",
    other: "Outro",
    question: "Pergunta",
    ai: "Resposta da IA",
    recommendations: "Soluções recomendadas",
    alternatives: "Experimente uma destas alternativas",
    next: "Próximo passo sugerido",
    plan: "Criar plano de aula",
    save: "Guardar solução",
    savedLabel: "Guardado",
    remove: "Remover",
    openSolution: "Ver solução",
    noSavedTitle: "Nenhuma solução guardada ainda",
    noSavedDesc: "Guarde os desafios mais importantes para os consultar rapidamente antes da aula.",
    exploreChallenges: "Explorar desafios",
    profileTitle: "O seu painel pedagógico",
    profileSubtitle: "Acompanhe as suas estratégias e personalize o idioma da aplicação.",
    statsExplored: "Desafios explorados",
    statsPlans: "Planos gerados",
    statsSaved: "Soluções guardadas",
    language: "Idioma da aplicação",
    close: "Fechar",
    plannerTitle: "Criar plano de aula",
    plannerIntro: "Personalize a proposta antes de gerar o plano.",
    subject: "Disciplina",
    subjectPlaceholder: "Ex.: Matemática",
    content: "Conteúdo",
    contentPlaceholder: "Ex.: Frações e percentagens",
    planObjective: "Objetivo da aula",
    objectivePlaceholder: "O que deverão os alunos aprender?",
    studentCount: "Número de alunos",
    availableResources: "Recursos disponíveis",
    resourceOptions: ["Internet", "Computadores", "Materiais impressos", "Espaço para grupos"],
    noResources: "O plano será adaptado aos recursos selecionados.",
    duration: "Duração da aula",
    classLevel: "Nível da turma",
    levels: ["1.º ciclo", "2.º e 3.º ciclos", "Ensino secundário"],
    includedStrategies: "Estratégias incluídas",
    generatePlan: "Gerar plano de aula",
    planReady: "O seu plano está pronto",
    planFor: "Plano para",
    studentsUnit: "alunos",
    objective: "Objetivo",
    opening: "Abertura",
    development: "Desenvolvimento",
    closing: "Encerramento",
    assessment: "Avaliação",
    resources: "Recursos",
    totalTime: "Tempo total",
    concreteExample: "Aplicação concreta",
    copyPlan: "Copiar plano",
    copied: "Plano copiado",
    pasteHint: "Abra o Bloco de Notas e prima Ctrl + V para colar.",
    editPlan: "Editar configurações",
    describeProblem: "Descrever outro problema",
    describeProblemIntro: "Conte o que está a acontecer para receber sugestões específicas.",
    problemName: "Nome do problema",
    problemNamePlaceholder: "Ex.: Dificuldade em trabalhar em grupo",
    problemDetails: "O que está a acontecer?",
    problemDetailsPlaceholder: "Descreva a situação, a turma e o que já tentou.",
    addProblem: "Analisar problema",
    customQuestion: "Como podemos melhorar esta situação?",
    customAction: "Teste uma estratégia de cada vez e registe as mudanças observadas.",
    customStrategies: [
      ["Ouvir a turma", "Faça perguntas curtas para compreender como os alunos veem a situação."],
      ["Testar uma pequena mudança", "Altere uma etapa e observe o resultado antes de ampliar."],
      ["Acompanhar evidências", "Registe participação, dúvidas e progressos ao longo de duas aulas."],
      ["Rever com os alunos", "Converse sobre o que funcionou e ajuste a próxima tentativa."],
    ],
    templates: {
      objective: "Compreender o problema e aplicar estratégias práticas sobre",
      opening: "Apresente a pergunta à turma e recolha respostas rápidas, sem corrigir neste primeiro momento:",
      development: "Organize a turma para experimentar estas estratégias aplicadas ao tema:",
      closing: "Convide os grupos a partilhar o que descobriram e a definir uma ação para a próxima aula.",
      assessment: "Observe a participação, a colaboração e a capacidade de relacionar a atividade com o conteúdo.",
      resources: "Quadro, folhas de registo, marcadores e cronómetro.",
    },
    categories: ["Impacto nos alunos", "Gestão e professores", "Desenvolvimento cognitivo"],
    tabs: ["Início", "Soluções", "Guardados", "Perfil"],
  },
};

function toEuropeanPortuguese(text) {
  const replacements = [
    [/\bplanejamento\b/gi, "planeamento"],
    [/\bplanejamentos\b/gi, "planeamentos"],
    [/\bplaneje\b/gi, "planeie"],
    [/\benquete\b/gi, "sondagem"],
    [/\bcompartilhamento\b/gi, "partilha"],
    [/\bcompartilhar\b/gi, "partilhar"],
    [/\bcompartilhe\b/gi, "partilhe"],
    [/\baprendizado\b/gi, "aprendizagem"],
    [/\baprendizados\b/gi, "aprendizagens"],
    [/\btreino\b/gi, "prática"],
    [/\bregistre\b/gi, "registe"],
    [/\bregistro\b/gi, "registo"],
    [/\bcronômetro\b/gi, "cronómetro"],
    [/\bfeedback\b/gi, "retorno"],
  ];

  return replacements.reduce(
    (translated, [pattern, replacement]) =>
      translated.replace(pattern, replacement),
    text
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL: APP
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState("inicio"); // inicio | solucoes | salvos | perfil
  const [selectedId, setSelectedId] = useState("desinteresse");
  const [activeCategory, setActiveCategory] = useState("alunos");
  const [saved, setSaved] = useState(["desinteresse", "engajamento"]);
  const [exploredIds, setExploredIds] = useState(["desinteresse"]);
  const [plansGeneratedCount, setPlansGeneratedCount] = useState(0);
  const [language, setLanguage] = useState("pt-BR");
  const [languageOpen, setLanguageOpen] = useState(false);

  // Estado do Modal de Problema Personalizado
  const [customProblemOpen, setCustomProblemOpen] = useState(false);
  const [customProblem, setCustomProblem] = useState(null);
  const [customProblemName, setCustomProblemName] = useState("");
  const [customProblemDetails, setCustomProblemDetails] = useState("");

  // Estado do Gerador de Plano de Aula
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [plannerStep, setPlannerStep] = useState("config"); // config | result
  const [copiedPlan, setCopiedPlan] = useState(false);
  const [planForm, setPlanForm] = useState({
    subject: "",
    content: "",
    objective: "",
    studentCount: "30",
    duration: "50",
    levelIndex: 1,
    resources: [0, 2], // índices de resourceOptions
  });

  const t = copy[language];

  // Função auxiliar para traduzir um problema conforme o idioma ativo
  const localizeProblem = (prob) => {
    if (!prob) return null;
    if (prob.id === "custom") return prob;

    if (language === "pt-BR") return prob;

    if (language === "pt-PT") {
      return {
        ...prob,
        label: toEuropeanPortuguese(prob.label),
        question: toEuropeanPortuguese(prob.question),
        answer: toEuropeanPortuguese(prob.answer),
        alternatives: prob.alternatives.map((alt) => ({
          title: toEuropeanPortuguese(alt.title),
          text: toEuropeanPortuguese(alt.text),
        })),
        action: toEuropeanPortuguese(prob.action),
      };
    }

    const translated = contentTranslations[language]?.[prob.id];
    if (!translated) return prob;
    return {
      ...prob,
      ...translated,
    };
  };

  const allProblems = useMemo(() => {
    const base = problems.map(localizeProblem);
    return customProblem ? [customProblem, ...base] : base;
  }, [language, customProblem]);

  const activeProblem = useMemo(() => {
    if (selectedId === "custom" && customProblem) return customProblem;
    return (
      allProblems.find((p) => p.id === selectedId) ||
      allProblems.find((p) => p.category === activeCategory) ||
      allProblems[0]
    );
  }, [selectedId, allProblems, customProblem, activeCategory]);

  const categoryProblems = useMemo(() => {
    return allProblems.filter(
      (p) => p.category === activeCategory || p.id === "custom"
    );
  }, [allProblems, activeCategory]);

  // Atualiza histórico de explorados ao mudar desafio
  useEffect(() => {
    if (activeProblem?.id && !exploredIds.includes(activeProblem.id)) {
      setExploredIds((prev) => [...prev, activeProblem.id]);
    }
  }, [activeProblem?.id]);

  // Selecionar categoria e ajustar desafio ativo
  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    const firstInCat = allProblems.find((p) => p.category === catId);
    if (firstInCat) {
      setSelectedId(firstInCat.id);
    }
  };

  // Selecionar desafio e ir para Soluções
  const handleSelectChallenge = (probId) => {
    setSelectedId(probId);
    setActiveTab("solucoes");
  };

  // Salvar / Remover dos favoritos
  const toggleSave = (probId) => {
    setSaved((prev) =>
      prev.includes(probId)
        ? prev.filter((id) => id !== probId)
        : [...prev, probId]
    );
  };

  // Criar diagnóstico para problema personalizado
  const handleCreateCustomProblem = (e) => {
    e.preventDefault();
    if (!customProblemName.trim()) return;

    const title = customProblemName.trim();
    const details =
      customProblemDetails.trim() ||
      (language === "en"
        ? "A recurring classroom challenge observed during daily lessons."
        : language === "es"
        ? "Un desafío recurrente observado durante las clases diarias."
        : "Um desafio recorrente observado na dinâmica diária da turma.");

    const generated = {
      id: "custom",
      category: activeCategory,
      label: title,
      icon: "sparkles",
      question: `${t.customQuestion} (${title})`,
      answer: `${details} — ${
        language === "en"
          ? "To address this effectively, it helps to combine clear expectations, active student involvement, and short feedback cycles."
          : language === "es"
          ? "Para abordarlo con eficacia, conviene combinar expectativas claras, participación activa y ciclos cortos de retroalimentación."
          : language === "pt-PT"
          ? "Para abordar esta situação com eficácia, ajuda combinar expectativas claras, participação ativa dos alunos e ciclos curtos de retorno."
          : "Para lidar com essa situação de forma eficaz, vale combinar expectativas claras, participação ativa dos alunos e ciclos curtos de feedback."
      }`,
      alternatives: t.customStrategies.map(([stTitle, stText]) => ({
        title: stTitle,
        text: stText,
      })),
      action: t.customAction,
    };

    setCustomProblem(generated);
    setSelectedId("custom");
    setCustomProblemOpen(false);
    setActiveTab("solucoes");
  };

  // Abrir gerador de plano de aula
  const handleOpenPlanner = () => {
    setPlannerStep("config");
    setCopiedPlan(false);
    setPlannerOpen(true);
  };

  // Alternar recursos selecionados no plano
  const toggleResourceIndex = (idx) => {
    setPlanForm((prev) => ({
      ...prev,
      resources: prev.resources.includes(idx)
        ? prev.resources.filter((i) => i !== idx)
        : [...prev.resources, idx],
    }));
  };

  // Gerar plano de aula
  const handleGeneratePlan = (e) => {
    e.preventDefault();
    setPlansGeneratedCount((c) => c + 1);
    setPlannerStep("result");
  };

  // Cálculo dos tempos e textos do plano gerado
  const generatedPlan = useMemo(() => {
    const totalMins = Math.max(20, parseInt(planForm.duration, 10) || 50);
    const openMins = Math.max(5, Math.round(totalMins * 0.2));
    const closeMins = Math.max(5, Math.round(totalMins * 0.2));
    const devMins = Math.max(10, totalMins - openMins - closeMins);

    const subjectText =
      planForm.subject.trim() ||
      (language === "en"
        ? "General Subjects"
        : language === "es"
        ? "Asignatura General"
        : "Disciplina Geral");
    const contentText =
      planForm.content.trim() || activeProblem?.label || "Tema da aula";
    const levelText = t.levels[planForm.levelIndex] || t.levels[1];
    const studentsNum = planForm.studentCount || "30";

    const chosenResources =
      planForm.resources.length > 0
        ? planForm.resources.map((i) => t.resourceOptions[i]).join(", ")
        : t.templates.resources;

    const objectiveText =
      planForm.objective.trim() ||
      `${t.templates.objective} "${contentText}", superando o desafio de ${activeProblem?.label.toLowerCase()}.`;

    const hasDigital =
      planForm.resources.includes(0) || planForm.resources.includes(1);
    const hasGroups = planForm.resources.includes(3);

    const concreteApp = hasDigital
      ? language === "en"
        ? `Students work in ${hasGroups ? "small groups" : "pairs"} using digital research or interactive polls to solve a real scenario involving "${contentText}".`
        : language === "es"
        ? `Los alumnos trabajan en ${hasGroups ? "grupos pequeños" : "parejas"} usando encuestas o búsqueda digital para resolver un caso real sobre "${contentText}".`
        : `Os alunos trabalham em ${hasGroups ? "pequenos grupos" : "duplas"} usando pesquisa rápida ou enquete digital para resolver uma situação real envolvendo "${contentText}".`
      : language === "en"
      ? `Using printed cards and board mapping, students analyze a practical everyday problem related to "${contentText}" and propose solutions.`
      : language === "es"
      ? `Con tarjetas impresas y esquemas en la pizarra, los alumnos analizan un problema práctico cotidiano sobre "${contentText}" y proponen soluciones.`
      : `Com fichas impressas e mapeamento no quadro, os alunos analisam uma situação prática do cotidiano ligada a "${contentText}" e propõem soluções.`;

    return {
      subjectText,
      contentText,
      levelText,
      studentsNum,
      totalMins,
      openMins,
      devMins,
      closeMins,
      objectiveText,
      chosenResources,
      concreteApp,
    };
  }, [planForm, activeProblem, t, language]);

  // Copiar plano formatado para área de transferência
  const handleCopyPlan = async () => {
    const p = generatedPlan;
    const strategiesList = activeProblem.alternatives
      .map((a, i) => `  ${i + 1}. ${a.title}: ${a.text}`)
      .join("\n");

    const plainText = `MUDA AULA — ${t.plannerTitle.toUpperCase()}
==================================================
${t.subject}: ${p.subjectText}
${t.content}: ${p.contentText}
${t.classLevel}: ${p.levelText} | ${p.studentsNum} ${t.studentsUnit}
${t.totalTime}: ${p.totalMins} min
${t.challenge}: ${activeProblem.label}

1. ${t.objective.toUpperCase()}
${p.objectiveText}

2. ${t.opening.toUpperCase()} (${p.openMins} min)
${t.templates.opening}
"${activeProblem.question}"

3. ${t.development.toUpperCase()} (${p.devMins} min)
${t.templates.development}
${strategiesList}

${t.concreteExample}:
${p.concreteApp}

4. ${t.closing.toUpperCase()} (${p.closeMins} min)
${t.templates.closing}
${t.next}: ${activeProblem.action}

5. ${t.assessment.toUpperCase()}
${t.templates.assessment}

6. ${t.resources.toUpperCase()}
${p.chosenResources}
`;

    try {
      await navigator.clipboard.writeText(plainText);
      setCopiedPlan(true);
      setTimeout(() => setCopiedPlan(false), 4000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = plainText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedPlan(true);
      setTimeout(() => setCopiedPlan(false), 4000);
    }
  };

  const isSaved = saved.includes(activeProblem?.id);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* ====================================================================
          CABEÇALHO SUPERIOR
         ==================================================================== */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          {/* Identidade / Saudação */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setActiveTab("inicio")}
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-sm shadow-teal-600/20 shrink-0 hover:scale-105 transition-transform"
              aria-label="Muda Aula"
            >
              <Icon name="sparkles" className="w-5 h-5" />
            </button>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                  Muda Aula
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200/70">
                  {t.assistant}
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate">{t.hello}</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/70">
            {[
              { id: "inicio", label: t.tabs[0], icon: "home" },
              { id: "solucoes", label: t.tabs[1], icon: "lightbulb" },
              { id: "salvos", label: t.tabs[2], icon: "bookmark", count: saved.length },
              { id: "perfil", label: t.tabs[3], icon: "user" },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-white text-teal-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon name={tab.icon} className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {typeof tab.count === "number" && tab.count > 0 && (
                    <span
                      className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${
                        active
                          ? "bg-teal-100 text-teal-800"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Seletor de Idioma */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((o) => !o)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold transition-colors border border-slate-200/80"
              aria-label={t.language}
            >
              <Icon name="globe" className="w-4 h-4 text-teal-600" />
              <span>
                {languages.find((l) => l.id === language)?.short || "PT-BR"}
              </span>
            </button>

            {languageOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setLanguageOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-40">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {t.language}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.id);
                        setLanguageOpen(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-left text-sm flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        language === lang.id
                          ? "text-teal-700 font-semibold bg-teal-50/50"
                          : "text-slate-700"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.id && (
                        <Icon name="check" className="w-4 h-4 text-teal-600" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ====================================================================
          CONTEÚDO PRINCIPAL
         ==================================================================== */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 pb-28 md:pb-12">
        {/* ------------------------------------------------------------------
            ABA 1: INÍCIO (Seleção de Área e Desafio)
           ------------------------------------------------------------------ */}
        {activeTab === "inicio" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Banner */}
            <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-teal-900/10 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-medium text-teal-50 mb-3">
                  <Icon name="sparkles" className="w-3.5 h-3.5" />
                  {t.assistant}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
                  {t.title}
                </h1>
                <p className="mt-2 text-teal-50/90 text-sm sm:text-base leading-relaxed">
                  {t.subtitle}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-10 -bottom-12 w-52 h-52 rounded-full bg-white/10 blur-xl pointer-events-none"
              />
            </section>

            {/* Passo 1: Área do Problema */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  1. {t.area}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center sm:flex-col sm:items-start gap-3.5 ${
                        isActive
                          ? "bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20"
                          : "bg-white text-slate-800 border-slate-200 hover:border-teal-300 hover:bg-teal-50/30"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-teal-50 text-teal-600"
                        }`}
                      >
                        <Icon name={cat.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base leading-snug">
                          {t.categories[idx]}
                        </div>
                        <div
                          className={`text-xs mt-0.5 ${
                            isActive ? "text-teal-100" : "text-slate-500"
                          }`}
                        >
                          {
                            problems.filter((p) => p.category === cat.id)
                              .length
                          }{" "}
                          {language === "en"
                            ? "challenges"
                            : language === "es"
                            ? "desafíos"
                            : "desafios"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Passo 2: Escolha um Desafio */}
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  2. {t.challenge}
                </h2>
                <button
                  type="button"
                  onClick={() => setCustomProblemOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Icon name="plus" className="w-4 h-4" />
                  <span>{t.other}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryProblems.map((item) => {
                  const isSelected = activeProblem?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectChallenge(item.id)}
                      className={`group p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-white border-teal-500 ring-2 ring-teal-500/20 shadow-sm"
                          : "bg-white border-slate-200 hover:border-teal-300 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            item.id === "custom"
                              ? "bg-amber-100 text-amber-700"
                              : isSelected
                              ? "bg-teal-600 text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-600"
                          }`}
                        >
                          <Icon name={item.icon} className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mt-1">
                            {item.question}
                          </p>
                        </div>
                      </div>
                      <Icon
                        name="chevron"
                        className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    </button>
                  );
                })}

                {/* Card "+ Outro" para descrever problema personalizado */}
                <button
                  type="button"
                  onClick={() => setCustomProblemOpen(true)}
                  className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-teal-400 bg-slate-50/70 hover:bg-teal-50/40 text-left transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon name="plus" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-teal-700 text-sm sm:text-base">
                      {t.describeProblem}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {t.describeProblemIntro}
                    </div>
                  </div>
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------
            ABA 2: SOLUÇÕES (Diagnóstico, Alternativas e Gerador de Plano)
           ------------------------------------------------------------------ */}
        {activeTab === "solucoes" && activeProblem && (
          <div className="space-y-6 animate-fadeIn">
            {/* Barra superior da solução */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("inicio")}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                <span className="rotate-180 inline-flex">
                  <Icon name="arrow" className="w-4 h-4" />
                </span>
                <span>{t.challenge}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleSave(activeProblem.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                  isSaved
                    ? "bg-amber-50 text-amber-800 border-amber-200"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                <Icon
                  name={isSaved ? "check" : "bookmark"}
                  className={`w-4 h-4 ${
                    isSaved ? "text-amber-600" : "text-slate-500"
                  }`}
                />
                <span>{isSaved ? t.savedLabel : t.save}</span>
              </button>
            </div>

            {/* Card Principal: Pergunta e Resposta da IA */}
            <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Icon name={activeProblem.icon} className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {activeProblem.label}
                  </span>
                  <h1 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {activeProblem.question}
                  </h1>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                  <Icon name="sparkles" className="w-4 h-4" />
                  <span>{t.ai}</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeProblem.answer}
                </p>
              </div>
            </section>

            {/* Soluções Recomendadas (4 Alternativas) */}
            <section className="space-y-3">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.recommendations}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t.alternatives}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeProblem.alternatives.map((alt, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {alt.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8.5">
                      {alt.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Próximo Passo Sugerido + CTA Criar Plano de Aula */}
            <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-teal-200/80 p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="target" className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    {t.next}
                  </span>
                  <p className="text-slate-800 font-medium text-sm sm:text-base mt-1 leading-relaxed">
                    {activeProblem.action}
                  </p>
                </div>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleOpenPlanner}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md shadow-teal-600/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Icon name="book" className="w-5 h-5" />
                  <span>{t.plan}</span>
                  <Icon name="arrow" className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------
            ABA 3: SALVOS
           ------------------------------------------------------------------ */}
        {activeTab === "salvos" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.tabs[2]}
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                {saved.length}{" "}
                {language === "en"
                  ? "saved items"
                  : language === "es"
                  ? "elementos guardados"
                  : "itens salvos"}
              </p>
            </div>

            {saved.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Icon name="bookmark" className="w-7 h-7" />
                </div>
                <div className="max-w-sm mx-auto">
                  <h2 className="font-bold text-slate-900 text-base">
                    {t.noSavedTitle}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">{t.noSavedDesc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("inicio")}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>{t.exploreChallenges}</span>
                  <Icon name="arrow" className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {saved.map((id) => {
                  const item = allProblems.find((p) => p.id === id);
                  if (!item) return null;
                  return (
                    <div
                      key={id}
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-teal-300 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon name={item.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">
                            {item.label}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            {item.action}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          type="button"
                          onClick={() => handleSelectChallenge(item.id)}
                          className="px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold text-xs sm:text-sm transition-colors"
                        >
                          {t.openSolution}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSave(item.id)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          aria-label={t.remove}
                          title={t.remove}
                        >
                          <Icon name="trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------
            ABA 4: PERFIL E CONFIGURAÇÕES
           ------------------------------------------------------------------ */}
        {activeTab === "perfil" && (
          <div className="space-y-6 animate-fadeIn">
            <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shrink-0">
                <Icon name="user" className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                  {t.profileTitle}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {t.profileSubtitle}
                </p>
              </div>
            </section>

            {/* Estatísticas */}
            <section className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-teal-600">
                  {exploredIds.length}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.statsExplored}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600">
                  {plansGeneratedCount}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.statsPlans}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">
                  {saved.length}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.statsSaved}
                </div>
              </div>
            </section>

            {/* Preferência de Idioma */}
            <section className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {t.language}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setLanguage(lang.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      language === lang.id
                        ? "border-teal-600 bg-teal-50/70 text-teal-900 font-semibold"
                        : "border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <span className="text-sm">{lang.label}</span>
                    {language === lang.id && (
                      <Icon name="check" className="w-4 h-4 text-teal-600" />
                    )}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* ====================================================================
          BARRA DE NAVEGAÇÃO INFERIOR (Mobile)
         ==================================================================== */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5">
        <div className="grid grid-cols-4 gap-1">
          {[
            { id: "inicio", label: t.tabs[0], icon: "home" },
            { id: "solucoes", label: t.tabs[1], icon: "lightbulb" },
            { id: "salvos", label: t.tabs[2], icon: "bookmark", count: saved.length },
            { id: "perfil", label: t.tabs[3], icon: "user" },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center justify-center py-2 rounded-xl text-[11px] font-semibold transition-colors ${
                  active
                    ? "text-teal-700 bg-teal-50/80"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Icon name={tab.icon} className="w-5 h-5 mb-0.5" />
                <span>{tab.label}</span>
                {typeof tab.count === "number" && tab.count > 0 && (
                  <span className="absolute top-1.5 right-5 w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] flex items-center justify-center">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ====================================================================
          MODAL: DESCREVER OUTRO PROBLEMA
         ==================================================================== */}
      {customProblemOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900 text-lg">
                  {t.describeProblem}
                </h2>
                <p className="text-xs text-slate-500">
                  {t.describeProblemIntro}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomProblemOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label={t.close}
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomProblem} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {t.problemName} *
                </label>
                <input
                  type="text"
                  required
                  value={customProblemName}
                  onChange={(e) => setCustomProblemName(e.target.value)}
                  placeholder={t.problemNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {t.problemDetails}
                </label>
                <textarea
                  rows={4}
                  value={customProblemDetails}
                  onChange={(e) => setCustomProblemDetails(e.target.value)}
                  placeholder={t.problemDetailsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setCustomProblemOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  {t.close}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-sm flex items-center gap-2"
                >
                  <Icon name="sparkles" className="w-4 h-4" />
                  <span>{t.addProblem}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL: GERADOR DE PLANO DE AULA
         ==================================================================== */}
      {plannerOpen && activeProblem && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/55 backdrop-blur-xs">
          <div className="bg-white w-full sm:max-w-2xl max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Cabeçalho do Modal */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  {activeProblem.label}
                </span>
                <h2 className="font-bold text-slate-900 text-lg">
                  {plannerStep === "config" ? t.plannerTitle : t.planReady}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setPlannerOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label={t.close}
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            {/* Corpo rolável do Modal */}
            <div className="p-6 overflow-y-auto flex-1">
              {plannerStep === "config" ? (
                <form
                  id="lesson-plan-form"
                  onSubmit={handleGeneratePlan}
                  className="space-y-5"
                >
                  <p className="text-sm text-slate-500">{t.plannerIntro}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.subject}
                      </label>
                      <input
                        type="text"
                        value={planForm.subject}
                        onChange={(e) =>
                          setPlanForm({ ...planForm, subject: e.target.value })
                        }
                        placeholder={t.subjectPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.content}
                      </label>
                      <input
                        type="text"
                        value={planForm.content}
                        onChange={(e) =>
                          setPlanForm({ ...planForm, content: e.target.value })
                        }
                        placeholder={t.contentPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {t.planObjective}
                    </label>
                    <input
                      type="text"
                      value={planForm.objective}
                      onChange={(e) =>
                        setPlanForm({ ...planForm, objective: e.target.value })
                      }
                      placeholder={t.objectivePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.studentCount}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="200"
                        value={planForm.studentCount}
                        onChange={(e) =>
                          setPlanForm({
                            ...planForm,
                            studentCount: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.duration} (min)
                      </label>
                      <select
                        value={planForm.duration}
                        onChange={(e) =>
                          setPlanForm({ ...planForm, duration: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-sm bg-white"
                      >
                        <option value="40">40 min</option>
                        <option value="45">45 min</option>
                        <option value="50">50 min</option>
                        <option value="60">60 min</option>
                        <option value="90">90 min</option>
                        <option value="100">100 min</option>
                      </select>
                    </div>
                  </div>

                  {/* Nível da Turma */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {t.classLevel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {t.levels.map((lvl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setPlanForm({ ...planForm, levelIndex: idx })
                          }
                          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                            planForm.levelIndex === idx
                              ? "bg-teal-600 text-white border-teal-600"
                              : "bg-white text-slate-700 border-slate-200 hover:border-teal-300"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recursos Disponíveis */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {t.availableResources}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {t.resourceOptions.map((res, idx) => {
                        const checked = planForm.resources.includes(idx);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleResourceIndex(idx)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                              checked
                                ? "bg-teal-50 text-teal-800 border-teal-400"
                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <Icon
                              name={checked ? "check" : "plus"}
                              className="w-3.5 h-3.5"
                            />
                            <span>{res}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">
                      {t.noResources}
                    </p>
                  </div>

                  {/* Estratégias incluídas */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      {t.includedStrategies}
                    </div>
                    <ul className="space-y-1.5">
                      {activeProblem.alternatives.map((alt, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-700 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                          <span>{alt.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </form>
              ) : (
                /* RESULTADO DO PLANO GERADO */
                <div className="space-y-5">
                  {/* Resumo do Cabeçalho do Plano */}
                  <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-teal-700">
                        {t.planFor} {generatedPlan.levelText} •{" "}
                        {generatedPlan.studentsNum} {t.studentsUnit}
                      </div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        {generatedPlan.subjectText}: {generatedPlan.contentText}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-teal-800 font-bold text-xs border border-teal-200">
                      <Icon name="clock" className="w-4 h-4 text-teal-600" />
                      {t.totalTime}: {generatedPlan.totalMins} min
                    </span>
                  </div>

                  {/* Objetivo */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      1. {t.objective}
                    </h4>
                    <p className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      {generatedPlan.objectiveText}
                    </p>
                  </div>

                  {/* Abertura */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        2. {t.opening}
                      </h4>
                      <span className="text-xs font-semibold text-teal-700">
                        {generatedPlan.openMins} min
                      </span>
                    </div>
                    <div className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1.5">
                      <p>{t.templates.opening}</p>
                      <p className="font-semibold text-teal-800">
                        “{activeProblem.question}”
                      </p>
                    </div>
                  </div>

                  {/* Desenvolvimento */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        3. {t.development}
                      </h4>
                      <span className="text-xs font-semibold text-teal-700">
                        {generatedPlan.devMins} min
                      </span>
                    </div>
                    <div className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-3">
                      <p>{t.templates.development}</p>
                      <ul className="space-y-2">
                        {activeProblem.alternatives.map((alt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <span className="font-semibold text-slate-900">
                                {alt.title}:{" "}
                              </span>
                              <span className="text-slate-700">{alt.text}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-slate-200/80">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                          {t.concreteExample}
                        </span>
                        <p className="text-slate-700">
                          {generatedPlan.concreteApp}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Encerramento */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        4. {t.closing}
                      </h4>
                      <span className="text-xs font-semibold text-teal-700">
                        {generatedPlan.closeMins} min
                      </span>
                    </div>
                    <div className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                      <p>{t.templates.closing}</p>
                      <p className="text-xs text-teal-800 font-medium pt-1">
                        {t.next}: {activeProblem.action}
                      </p>
                    </div>
                  </div>

                  {/* Avaliação e Recursos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        5. {t.assessment}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700">
                        {t.templates.assessment}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        6. {t.resources}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700">
                        {generatedPlan.chosenResources}
                      </p>
                    </div>
                  </div>

                  {copiedPlan && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-3 text-xs sm:text-sm flex items-center gap-2">
                      <Icon
                        name="check"
                        className="w-4 h-4 text-emerald-600 shrink-0"
                      />
                      <span>{t.pasteHint}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Rodapé do Modal */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3 shrink-0">
              {plannerStep === "config" ? (
                <>
                  <button
                    type="button"
                    onClick={() => setPlannerOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200/70"
                  >
                    {t.close}
                  </button>
                  <button
                    type="submit"
                    form="lesson-plan-form"
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white shadow-sm flex items-center gap-2"
                  >
                    <Icon name="sparkles" className="w-4 h-4" />
                    <span>{t.generatePlan}</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setPlannerStep("config")}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100"
                  >
                    {t.editPlan}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyPlan}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm flex items-center gap-2 transition-colors ${
                      copiedPlan
                        ? "bg-emerald-600"
                        : "bg-teal-600 hover:bg-teal-700"
                    }`}
                  >
                    <Icon
                      name={copiedPlan ? "check" : "copy"}
                      className="w-4 h-4"
                    />
                    <span>{copiedPlan ? t.copied : t.copyPlan}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}