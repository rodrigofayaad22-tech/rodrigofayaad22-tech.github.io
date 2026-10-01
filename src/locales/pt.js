// Português (Brasil). Mesma estrutura de en.js — mantenha as duas em sincronia.
const pt = {
  meta: {
    home: {
      title: 'Rodrigo Generoso | Portfólio de Engenharia de Software',
      description:
        'Estudante de Engenharia de Software com foco em Inteligência Artificial, Dados e Desenvolvimento de Software.',
    },
    caseStudy: {
      title: 'Case Viver Divino | Rodrigo Generoso',
      description:
        'Case acadêmico de Engenharia de Requisitos com cliente real: elicitação, modelagem BPMN AS-IS/TO-BE e especificação preliminar de um Sistema de Gestão Social. Trabalho em equipe no CEUB.',
    },
  },

  common: {
    skipToContent: 'Pular para o conteúdo',
    language: 'Idioma',
    switchTo: { pt: 'Mudar para português', en: 'Switch to English' },
    newTab: '(abre em nova aba)',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    primaryNav: 'Navegação principal',
    mobileNav: 'Navegação móvel',
    backToPortfolio: 'Voltar ao portfólio',
    backToTop: 'Voltar ao topo',
    liveDemo: 'Ver online',
    code: 'Código',
    readCase: 'Ler o case completo',
    downloadCv: 'Baixar currículo',
    homeLink: 'Rodrigo Generoso — início',
  },

  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Competências',
    projects: 'Projetos',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Contato',
  },

  hero: {
    status: 'Aberto a estágios',
    role: 'Estudante de Engenharia de Software',
    focus: ['IA', 'Dados', 'Desenvolvimento de Software'],
    typing: ['Eu construo software.', 'Eu exploro dados.', 'Eu estudo IA.', 'Eu resolvo problemas.'],
    typingPause: 'Pausar animação do texto',
    typingPlay: 'Retomar animação do texto',
    tagline: 'Construindo minha trajetória com software, dados e inteligência artificial.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Fale comigo',
    photoAlt: 'Foto de Rodrigo Generoso',
    scrollCue: 'Rolar para a seção Sobre',
  },

  about: {
    eyebrow: 'sobre',
    title: 'Sobre mim',
    paragraphs: [
      'Sou estudante de Engenharia de Software no CEUB, com interesse especial em Inteligência Artificial, Dados e no desenvolvimento de soluções tecnológicas.',
      'Tenho usado programação e ferramentas de inteligência artificial para transformar ideias e necessidades reais em aplicações e experiências digitais — de plataformas de estudo para colegas de turma a uma página web para uma clínica odontológica.',
      'Na graduação, venho estudando programação, banco de dados, orientação a objetos, desenvolvimento de interfaces e Engenharia de Requisitos. Também participei, em equipe, de um case acadêmico com cliente real, analisando e modelando os processos de uma associação social.',
      'Hoje, meu objetivo é conquistar uma oportunidade de estágio em tecnologia — de preferência em Inteligência Artificial, Dados ou Desenvolvimento de Software — onde eu possa aprender com profissionais experientes e, ao mesmo tempo, aplicar o que venho construindo.',
    ],
    snapshotTitle: 'Em resumo',
    snapshot: [
      { label: 'Curso', value: 'Engenharia de Software' },
      { label: 'Instituição', value: 'CEUB — Centro Universitário de Brasília' },
      { label: 'Turno', value: 'Noturno' },
      { label: 'Foco', value: 'IA · Dados · Software' },
      { label: 'Buscando', value: 'Estágio em tecnologia' },
    ],
    pillars: [
      {
        title: 'Problemas reais primeiro',
        text: 'Meus projetos partem de necessidades concretas: colegas estudando para provas, uma clínica apresentando seus serviços, uma associação organizando seus processos.',
      },
      {
        title: 'IA como ferramenta de construção',
        text: 'Uso desenvolvimento assistido por IA para transformar ideias em aplicações publicadas, enquanto aprofundo os fundamentos da engenharia de software.',
      },
      {
        title: 'Aprendizado contínuo',
        text: 'Sou estudante em formação: cada projeto é uma oportunidade de aprender algo novo, receber feedback e evoluir.',
      },
    ],
  },

  skills: {
    eyebrow: 'competências',
    title: 'Competências e tecnologias',
    lead: 'Tecnologias e áreas com as quais venho trabalhando, descritas pelo contexto real de uso — sem porcentagens, porque ainda estou em formação.',
    categories: {
      programming: 'Programação',
      web: 'Web',
      data: 'Dados',
      tools: 'Ferramentas',
      interests: 'Áreas de interesse',
    },
    interestsLead: 'Onde quero construir minha carreira.',
    learningNow: 'Estudando agora',
    learningNowItems: ['Programação Orientada a Objetos (Java)', 'Banco de Dados (SQL · MySQL)'],
  },

  projects: {
    eyebrow: 'projetos',
    title: 'Projetos em destaque',
    lead: 'Aplicações publicadas a partir de necessidades reais e um case de Engenharia de Requisitos desenvolvido em equipe com um cliente real.',
    caseLabel: 'Case study · Engenharia de Requisitos',
    caseTeam: 'Trabalho em equipe',
    otherTitle: 'Aplicações web',
    processNoteTitle: 'Sobre o processo',
    processNote:
      'Estes projetos foram construídos com AI-assisted development (vibe coding): ferramentas de IA fazem parte do processo de construção, a partir de necessidades reais que identifiquei. Estão hospedados na Hostinger, em domínios provisórios.',
    techLabel: 'Tecnologias',
    screenshotAlt: 'Captura de tela do projeto',
  },

  experience: {
    eyebrow: 'experiência',
    title: 'Experiência',
    lead: 'Experiências anteriores em atendimento, logística, estoque e organização, com contato direto com clientes e com a rotina de operação.',
    activitiesLabel: 'Atividades',
    takeawayTitle: 'O que levo para a tecnologia',
    takeaway:
      'Comunicação com pessoas, organização de informações e atenção aos processos do dia a dia — competências que continuam valendo no desenvolvimento de software.',
  },

  education: {
    eyebrow: 'formação',
    title: 'Formação',
    degree: 'Graduação em Engenharia de Software',
    institution: 'CEUB — Centro Universitário de Brasília',
    scheduleLabel: 'Turno',
    schedule: 'Noturno',
    statusLabel: 'Status',
    status: 'Em andamento',
    topicsTitle: 'Temas estudados até aqui',
    topics: [
      'Programação',
      'Banco de Dados',
      'Orientação a Objetos',
      'Desenvolvimento de Interfaces',
      'Engenharia de Requisitos',
      'Álgebra Linear',
    ],
    highlightTitle: 'Destaque acadêmico',
    highlightText:
      'Case de Engenharia de Requisitos desenvolvido em equipe com um cliente real — a Associação Viver Divino.',
    highlightCta: 'Ver o case',
  },

  contact: {
    eyebrow: 'contato',
    title: 'Vamos conversar?',
    lead: 'Estou em busca de oportunidades de estágio em Inteligência Artificial, Dados ou Desenvolvimento de Software. Se quiser conversar sobre uma vaga, um projeto ou trocar ideias, será um prazer receber sua mensagem.',
    channels: {
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
    },
    actions: {
      email: 'Enviar e-mail',
      linkedin: 'Ver perfil',
      github: 'Ver repositórios',
      whatsapp: 'Iniciar conversa',
    },
    copyEmail: 'Copiar e-mail',
    copied: 'E-mail copiado',
    availability: 'Disponível para estágio',
  },

  footer: {
    credit: 'Projetado e desenvolvido por Rodrigo Generoso',
    tagline: 'Feito com curiosidade, código e aprendizado contínuo.',
    social: 'Redes e contato',
  },

  viewer: {
    dialogLabel: 'Visualizador de diagramas',
    zoomIn: 'Aproximar',
    zoomOut: 'Afastar',
    fit: 'Ajustar à tela',
    close: 'Fechar',
    openOriginal: 'Abrir imagem original',
    hint: 'Arraste para mover · role ou use +/− para zoom · Esc para fechar',
    hintTouch: 'Pinça para zoom · arraste para mover · toque duplo para aproximar',
    diagrams: 'Diagramas',
    counter: (n, total) => `${n} de ${total}`,
  },

  case: {
    backToProjects: 'Voltar aos projetos',
    kicker: 'Case study · Engenharia de Requisitos',
    chaptersLabel: 'Capítulos do case',
    progressLabel: 'Progresso de leitura',
    scopeTitle: 'Escopo deste case',
    viewFullProcess: 'Ver processo completo',
    viewDiagram: 'Ampliar diagrama',
    bpmnSource: 'Fonte: mapeamento BPMN elaborado pela equipe.',
    presentedModels: 'Modelos apresentados na disciplina',
    legendTitle: 'Legenda BPMN',
    legend: {
      start: 'Evento de início',
      end: 'Evento de fim',
      task: 'Atividade/tarefa',
      gateway: 'Gateway (decisão)',
      document: 'Documento',
      flow: 'Fluxo de informação',
    },
    viewAsIsModel: 'Ver modelo AS-IS apresentado',
    lanesTitle: 'Raias',
    painsTitle: 'Pontos de dor mapeados',
    systemTitle: 'Onde o sistema apoia',
    systemItems: ['Cadastro digital único', 'Consulta de cursos', 'Registro de demandas', 'Cálculo de frequência', 'Alertas automáticos'],
    teamTitle: 'Equipe',
    contributionTitle: 'Onde contribuí',
    compareTitle: 'Do AS-IS ao TO-BE',
    compareAspect: 'Aspecto',
    lane: { family: 'Família', association: 'Associação', system: 'Sistema' },
    decision: 'Decisão',
    yes: 'Sim',
    no: 'Não',
    painLegend: 'Ponto de dor',
    proposedBadge: 'Proposta',
    applied: 'Aplicada',
    nextValidation: 'Próxima validação',
    me: 'eu',
    ctaTitle: 'Quer conversar sobre este case?',
    ctaText: 'Posso detalhar o processo de elicitação, as decisões de modelagem e o que aprendemos com a cliente.',
    ctaContact: 'Entrar em contato',
    ctaProjects: 'Ver outros projetos',
  },
}

export default pt
