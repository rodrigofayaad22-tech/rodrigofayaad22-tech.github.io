import {
  Presentation,
  BookOpen,
  Building2,
  ChartColumn,
  ClipboardList,
  Eye,
  FileSpreadsheet,
  FileText,
  Globe,
  History,
  Layers,
  ListChecks,
  MessagesSquare,
  Repeat,
  Search,
  Target,
  Users,
  Workflow,
} from 'lucide-react'
import bpmnFull from '../assets/images/bpmn-as-is-to-be-1536.webp'
import bpmnPreview from '../assets/images/bpmn-as-is-to-be-900.webp'
import bizagiAsIs from '../assets/images/bizagi-as-is.webp'
import bizagiToBe from '../assets/images/bizagi-to-be.webp'

/*
 * Content sources (kept private, not published): the team's 5W2H project document,
 * the class presentation (slides + speaker notes) and the BPMN mapping image.
 * Nothing here describes an implemented system — this was a Requirements Engineering project.
 */

export const caseStudy = {
  title: {
    pt: 'Sistema de Gestão Social — Associação Viver Divino',
    en: 'Social Management System — Associação Viver Divino',
  },
  subtitle: {
    pt: 'Case acadêmico de Engenharia de Requisitos desenvolvido com cliente real para análise e transformação digital de processos de uma associação social.',
    en: 'Academic Requirements Engineering case developed with a real client to analyze and digitally transform the processes of a social association.',
  },
  scopeNote: {
    pt: 'Este case documenta análise, modelagem e especificação da solução. Nenhum software foi implementado: o escopo acadêmico não envolveu programação, implementação de banco de dados ou implantação.',
    en: 'This case documents the analysis, modeling and specification of the solution. No software was implemented: the academic scope did not include programming, database implementation or deployment.',
  },

  meta: [
    {
      label: { pt: 'Cliente', en: 'Client' },
      value: { pt: 'Associação Viver Divino (cliente real)', en: 'Associação Viver Divino (real client)' },
    },
    {
      label: { pt: 'Contato na elicitação', en: 'Elicitation contact' },
      value: { pt: 'Marília Telles, fundadora', en: 'Marília Telles, founder' },
    },
    {
      label: { pt: 'Contexto acadêmico', en: 'Academic context' },
      value: {
        pt: 'Engenharia de Requisitos · Engenharia de Software · CEUB',
        en: 'Requirements Engineering · Software Engineering · CEUB',
      },
    },
    {
      label: { pt: 'Equipe', en: 'Team' },
      value: {
        pt: 'Rodrigo Generoso, Matheus Castro Campos e Davi Kenzo',
        en: 'Rodrigo Generoso, Matheus Castro Campos and Davi Kenzo',
      },
    },
    {
      label: { pt: 'Entregáveis', en: 'Deliverables' },
      value: {
        pt: 'Plano 5W2H · BPMN AS-IS/TO-BE · lista preliminar de funcionalidades · apresentação',
        en: '5W2H plan · AS-IS/TO-BE BPMN · preliminary feature list · presentation',
      },
    },
  ],

  stats: [
    { value: '3', label: { pt: 'integrantes na equipe', en: 'team members' } },
    { value: '2', label: { pt: 'frentes: gestão interna e portal público', en: 'fronts: internal management and public portal' } },
    { value: '17', label: { pt: 'itens na lista preliminar de funcionalidades', en: 'items in the preliminary feature list' } },
    { value: '~90h', label: { pt: 'esforço estimado da equipe (planejamento)', en: 'estimated team effort (planning)' } },
  ],

  chapters: [
    { id: 'context', title: { pt: 'Contexto', en: 'Context' } },
    { id: 'problem', title: { pt: 'Problema', en: 'Problem' } },
    { id: 'discovery', title: { pt: 'Descoberta / Elicitação', en: 'Discovery / Elicitation' } },
    { id: 'as-is', title: { pt: 'Processo atual — AS-IS', en: 'Current process — AS-IS' } },
    { id: 'to-be', title: { pt: 'Processo proposto — TO-BE', en: 'Proposed process — TO-BE' } },
    { id: 'capabilities', title: { pt: 'Funcionalidades propostas', en: 'Proposed capabilities' } },
    { id: 'contribution', title: { pt: 'Minha participação', en: 'My contribution' } },
    { id: 'skills', title: { pt: 'Competências', en: 'Skills applied' } },
    { id: 'learnings', title: { pt: 'Aprendizados', en: 'Learnings' } },
  ],

  // 01
  context: {
    paragraphs: [
      {
        pt: 'A Associação Viver Divino tem como propósito promover dignidade, esperança e oportunidades para jovens e adultos em situação de vulnerabilidade social, articulando ações de capacitação, educação, acolhimento, apoio humano e social e evangelização.',
        en: 'Associação Viver Divino aims to promote dignity, hope and opportunities for young people and adults in socially vulnerable situations, bringing together training, education, shelter, human and social support, and evangelization.',
      },
      {
        pt: 'As famílias costumam conhecer a associação por meio da igreja. Entre os cursos relatados pela fundadora estão costura, informática, estética, culinária e eletricista, além de cursos adaptados à demanda.',
        en: 'Families usually learn about the association through the church. The courses mentioned by the founder include sewing, computing, beauty care, cooking and electrician training, as well as courses adapted to demand.',
      },
      {
        pt: 'Na disciplina de Engenharia de Requisitos, nossa equipe atuou como uma consultoria: compreender o negócio e especificar um Sistema de Gestão Social com Portal Público — antes de qualquer linha de código.',
        en: 'In the Requirements Engineering course, our team acted as a consultancy: understand the business and specify a Social Management System with a Public Portal — before writing a single line of code.',
      },
    ],
    fronts: [
      {
        icon: Building2,
        title: { pt: 'Área interna de gestão', en: 'Internal management area' },
        text: {
          pt: 'Cadastro e acompanhamento de beneficiários e famílias, cursos e atividades, inscrições, atendimentos, encaminhamentos, parceiros e voluntários.',
          en: 'Registration and follow-up of beneficiaries and families, courses and activities, enrollments, support sessions, referrals, partners and volunteers.',
        },
      },
      {
        icon: Globe,
        title: { pt: 'Portal público', en: 'Public portal' },
        text: {
          pt: 'Apresentação da associação, sua missão, projetos, cursos, eventos, campanhas, formas de participação e contato.',
          en: 'Presenting the association, its mission, projects, courses, events, campaigns, ways to get involved and contact details.',
        },
      },
    ],
    note: {
      pt: 'Como a associação estava em fase de estruturação, a equipe precisou separar com cuidado o que já existia, o que estava em planejamento e o que era proposta futura.',
      en: 'Because the association was still being structured, the team had to carefully separate what already existed, what was being planned and what was a future proposal.',
    },
  },

  // 02
  problem: {
    paragraphs: [
      {
        pt: 'Parte das informações sobre famílias, jovens e atividades era registrada em papel e depois transferida para planilhas. Com o crescimento da associação, esse modelo tende a deixar os dados dispersos, difíceis de consultar e sujeitos a retrabalho — e dificulta acompanhar a trajetória de cada beneficiário.',
        en: 'Part of the information about families, young people and activities was recorded on paper and later transferred to spreadsheets. As the association grows, this model tends to leave data scattered, hard to look up and prone to rework — and makes it harder to follow each beneficiary’s journey.',
      },
      {
        pt: 'Havia também a necessidade de um canal público para apresentar a associação, seus projetos, cursos, campanhas, eventos e formas de participação.',
        en: 'There was also a need for a public channel to present the association, its projects, courses, campaigns, events and ways to get involved.',
      },
    ],
    pains: [
      {
        icon: FileText,
        title: { pt: 'Registros manuais', en: 'Manual records' },
        text: { pt: 'Cadastro e chamada feitos em papel.', en: 'Registration and attendance kept on paper.' },
      },
      {
        icon: FileSpreadsheet,
        title: { pt: 'Informação fragmentada', en: 'Fragmented information' },
        text: { pt: 'Dados divididos entre fichas e planilhas.', en: 'Data split between paper forms and spreadsheets.' },
      },
      {
        icon: Repeat,
        title: { pt: 'Retrabalho', en: 'Rework' },
        text: { pt: 'Transcrição do papel para a planilha.', en: 'Transcribing paper records into spreadsheets.' },
      },
      {
        icon: Eye,
        title: { pt: 'Acompanhamento difícil', en: 'Hard to track' },
        text: {
          pt: 'Pouca visibilidade de frequência e histórico.',
          en: 'Little visibility into attendance and history.',
        },
      },
    ],
    challenge: {
      pt: 'Como organizar cadastro, encaminhamento e acompanhamento em um registro único — mantendo a decisão com quem coordena o atendimento?',
      en: 'How can registration, referral and follow-up be organized into a single record — while keeping decisions with the people who coordinate the support?',
    },
  },

  // 03
  discovery: {
    intro: {
      pt: 'A técnica efetivamente aplicada foi uma entrevista com Marília Telles, fundadora da associação. A conversa permitiu entender o processo como ele é relatado por quem coordena o atendimento. Outras técnicas foram propostas como próximas etapas de validação — e não são apresentadas aqui como concluídas.',
      en: 'The technique actually applied was an interview with Marília Telles, the association’s founder. The conversation made it possible to understand the process as described by the person who coordinates the support. Other techniques were proposed as next validation steps — and are not presented here as completed.',
    },
    techniques: [
      {
        status: 'applied',
        icon: MessagesSquare,
        title: { pt: 'Entrevista com Marília Telles', en: 'Interview with Marília Telles' },
        text: { pt: 'Permitiu levantar:', en: 'It made it possible to understand:' },
        items: [
          { pt: 'como as famílias chegam à associação', en: 'how families reach the association' },
          { pt: 'quais dados são coletados no cadastro', en: 'which data is collected at registration' },
          { pt: 'os cursos existentes', en: 'the existing courses' },
          { pt: 'como as necessidades são identificadas', en: 'how needs are identified' },
          { pt: 'o encaminhamento aos cursos', en: 'how people are referred to courses' },
          { pt: 'o acompanhamento dos jovens', en: 'how young people are followed up' },
        ],
      },
      {
        status: 'next',
        icon: FileSpreadsheet,
        title: { pt: 'Análise de fichas e planilhas', en: 'Review of forms and spreadsheets' },
        text: {
          pt: 'Examinar campos e registros reais para confirmar dados obrigatórios, duplicidades e informações usadas na rotina — com cuidado no tratamento de dados pessoais, como CPF.',
          en: 'Examine real fields and records to confirm required data, duplicates and information used day to day — handling personal data such as CPF (Brazilian ID number) with care.',
        },
      },
      {
        status: 'next',
        icon: Eye,
        title: { pt: 'Observação e revisão do fluxo', en: 'Observation and flow review' },
        text: {
          pt: 'Acompanhar um atendimento e revisar os diagramas com a equipe da associação, para detectar exceções e diferenças entre o relato e a prática.',
          en: 'Observe a support session and review the diagrams with the association’s staff, to detect exceptions and gaps between what is described and what actually happens.',
        },
      },
    ],
    questionsTitle: { pt: 'Perguntas em aberto para a validação', en: 'Open questions for validation' },
    questions: [
      { pt: 'Quem atualiza os dados?', en: 'Who updates the records?' },
      { pt: 'Como os dias dos cursos são definidos?', en: 'How are course days defined?' },
      { pt: 'Como o acompanhamento é documentado?', en: 'How is follow-up documented?' },
    ],
  },

  // 04 — lanes: family | association | system
  asIs: {
    intro: {
      pt: 'O processo atual, conforme relatado na entrevista, depende de registros em papel, transcrição para planilhas e acompanhamento manual.',
      en: 'The current process, as described in the interview, relies on paper records, transcription into spreadsheets and manual follow-up.',
    },
    steps: [
      { lane: 'family', text: { pt: 'Família conhece a associação pela igreja', en: 'Family learns about the association through the church' } },
      { lane: 'family', text: { pt: 'Procura a associação em busca de atendimento', en: 'Reaches out to the association for support' } },
      { lane: 'association', text: { pt: 'Responsável recebe e orienta a família sobre o projeto', en: 'The coordinator welcomes the family and explains the project' } },
      { lane: 'association', text: { pt: 'Cadastro é realizado', en: 'Registration takes place' } },
      {
        lane: 'association',
        text: { pt: 'Dados do jovem e dos familiares (incluindo CPF) registrados em papel', en: 'Data on the young person and relatives (including CPF) recorded on paper' },
        pain: { pt: 'Registro manual', en: 'Manual record' },
      },
      {
        lane: 'association',
        text: { pt: 'Informações transferidas para planilha', en: 'Information transferred to a spreadsheet' },
        pain: { pt: 'Retrabalho', en: 'Rework' },
      },
      { lane: 'association', text: { pt: 'Identifica interesses e necessidades do jovem', en: 'Identifies the young person’s interests and needs' } },
      {
        lane: 'association',
        decision: true,
        text: { pt: 'Existe atividade adequada à necessidade?', en: 'Is there a suitable activity for this need?' },
        yes: { pt: 'Encaminha para o curso/atividade', en: 'Refer to the course/activity' },
        no: { pt: 'Busca ou adapta um curso conforme a demanda', en: 'Find or adapt a course to meet the demand' },
      },
      { lane: 'association', text: { pt: 'Encaminhamento do jovem para o curso/atividade', en: 'The young person is referred to the course/activity' } },
      { lane: 'family', text: { pt: 'Jovem participa da atividade/curso', en: 'The young person takes part in the activity/course' } },
      {
        lane: 'association',
        text: { pt: 'Presença registrada por chamada em papel, durante toda a participação', en: 'Attendance taken on paper throughout participation' },
        pain: { pt: 'Acompanhamento difícil', en: 'Hard to track' },
      },
    ],
  },

  // 05
  toBe: {
    intro: {
      pt: 'O cenário proposto considera um Sistema de Gestão Social que centraliza cadastro, encaminhamento e acompanhamento. O sistema apoia o registro; a decisão continua com a equipe da associação.',
      en: 'The proposed scenario considers a Social Management System that centralizes registration, referral and follow-up. The system supports record-keeping; decisions stay with the association’s team.',
    },
    steps: [
      { lane: 'family', text: { pt: 'Família conhece a associação pela igreja ou pelo portal público', en: 'Family learns about the association through the church or the public portal' } },
      { lane: 'family', text: { pt: 'Procura a associação ou manifesta interesse pelo portal', en: 'Reaches out, or registers interest through the portal' } },
      { lane: 'association', text: { pt: 'Administrador/colaborador acessa o sistema', en: 'An administrator/staff member opens the system' } },
      {
        lane: 'association',
        decision: true,
        text: { pt: 'O beneficiário já possui cadastro?', en: 'Is the beneficiary already registered?' },
        yes: { pt: 'Recupera o cadastro existente', en: 'Retrieve the existing record' },
        no: { pt: 'Cadastra o jovem e a família no sistema', en: 'Register the young person and family in the system' },
      },
      { lane: 'association', text: { pt: 'Identifica necessidades e interesses do beneficiário', en: 'Identifies the beneficiary’s needs and interests' } },
      { lane: 'system', text: { pt: 'Sistema apresenta os cursos e atividades disponíveis', en: 'The system lists available courses and activities' } },
      {
        lane: 'association',
        decision: true,
        text: { pt: 'Existe curso adequado e disponível?', en: 'Is there a suitable, available course?' },
        yes: { pt: 'Realiza inscrição/encaminhamento no curso', en: 'Enroll/refer to the course' },
        no: { pt: 'Registra demanda por novo curso/atividade', en: 'Record demand for a new course/activity' },
      },
      { lane: 'family', text: { pt: 'Beneficiário participa do curso/atividade', en: 'The beneficiary takes part in the course/activity' } },
      { lane: 'association', text: { pt: 'Responsável registra presença/falta no sistema', en: 'The coordinator records attendance/absence in the system' } },
      { lane: 'system', text: { pt: 'Sistema calcula a frequência automaticamente', en: 'The system calculates the attendance rate automatically' } },
      {
        lane: 'system',
        decision: true,
        text: { pt: 'Frequência abaixo do limite definido?', en: 'Attendance below the defined threshold?' },
        yes: { pt: 'Gera alerta para os administradores', en: 'Send an alert to administrators' },
        no: { pt: 'Segue o acompanhamento regular', en: 'Regular follow-up continues' },
      },
      { lane: 'association', text: { pt: 'Administrador acompanha a situação do beneficiário — acompanhamento contínuo', en: 'The administrator follows the beneficiary’s situation — ongoing follow-up' } },
    ],
    comparison: [
      {
        aspect: { pt: 'Entrada', en: 'Entry point' },
        asIs: { pt: 'Indicação pela igreja', en: 'Word of mouth through the church' },
        toBe: { pt: 'Igreja ou portal público, com manifestação de interesse', en: 'Church or public portal, with an interest form' },
      },
      {
        aspect: { pt: 'Cadastro', en: 'Registration' },
        asIs: { pt: 'Papel, depois transcrito para planilha', en: 'Paper, later transcribed into a spreadsheet' },
        toBe: { pt: 'Cadastro digital, com recuperação de cadastro existente', en: 'Digital record, retrieving existing registrations' },
      },
      {
        aspect: { pt: 'Cursos', en: 'Courses' },
        asIs: { pt: 'Verificação manual', en: 'Checked manually' },
        toBe: { pt: 'Sistema apresenta cursos e atividades disponíveis', en: 'System lists available courses and activities' },
      },
      {
        aspect: { pt: 'Sem curso adequado', en: 'No suitable course' },
        asIs: { pt: 'Busca ou adapta um curso', en: 'Find or adapt a course' },
        toBe: { pt: 'Registro de demanda por novo curso', en: 'Demand for a new course is recorded' },
      },
      {
        aspect: { pt: 'Presença', en: 'Attendance' },
        asIs: { pt: 'Chamada em papel', en: 'Paper roll call' },
        toBe: { pt: 'Presença e falta registradas no sistema', en: 'Attendance and absences recorded in the system' },
      },
      {
        aspect: { pt: 'Frequência', en: 'Attendance rate' },
        asIs: { pt: 'Acompanhamento manual', en: 'Manual follow-up' },
        toBe: { pt: 'Cálculo automático e alerta abaixo do limite', en: 'Automatic calculation and alert below threshold' },
      },
      {
        aspect: { pt: 'Histórico', en: 'History' },
        asIs: { pt: 'Disperso entre papel e planilhas', en: 'Scattered across paper and spreadsheets' },
        toBe: { pt: 'Histórico centralizado do beneficiário', en: 'Centralized beneficiary history' },
      },
    ],
  },

  diagrams: [
    {
      id: 'bpmn-full',
      src: bpmnFull,
      preview: bpmnPreview,
      width: 1536,
      height: 1024,
      title: {
        pt: 'Mapeamento BPMN — Processo Atual e Proposto',
        en: 'BPMN Mapping — Current and Proposed Process',
      },
      caption: {
        pt: 'Raias, eventos, atividades, gateways e documentos do AS-IS e do TO-BE, com a lista preliminar de funcionalidades derivada do processo proposto.',
        en: 'Lanes, events, tasks, gateways and documents for AS-IS and TO-BE, alongside the preliminary feature list derived from the proposed process.',
      },
      alt: {
        pt: 'Diagrama BPMN com o processo atual (AS-IS), em papel e planilha, e o processo proposto (TO-BE), com Sistema de Gestão Social, cálculo de frequência e alertas. Ao lado, a lista preliminar de 17 funcionalidades e a legenda BPMN.',
        en: 'BPMN diagram showing the current process (AS-IS), on paper and spreadsheets, and the proposed process (TO-BE), with a Social Management System, attendance-rate calculation and alerts. Alongside: the preliminary list of 17 features and the BPMN legend.',
      },
    },
    {
      id: 'bizagi-as-is',
      src: bizagiAsIs,
      preview: bizagiAsIs,
      width: 1940,
      height: 665,
      title: { pt: 'AS-IS — modelo apresentado', en: 'AS-IS — presented model' },
      caption: {
        pt: 'Conferência dos dados e escolha entre curso existente ou opção adaptada.',
        en: 'Data completeness check and choice between an existing course or an adapted option.',
      },
      alt: {
        pt: 'Modelo BPMN do processo atual com raias Família/jovem e Associação: anota dados em papel, transcreve para planilha, verifica dados completos, identifica necessidade, verifica curso disponível, combina dias e local e acompanha manualmente.',
        en: 'BPMN model of the current process with Family/young person and Association lanes: notes data on paper, transcribes to a spreadsheet, checks completeness, identifies need, checks course availability, arranges days and place and follows up manually.',
      },
    },
    {
      id: 'bizagi-to-be',
      src: bizagiToBe,
      preview: bizagiToBe,
      width: 1940,
      height: 665,
      title: { pt: 'TO-BE — modelo apresentado', en: 'TO-BE — presented model' },
      caption: {
        pt: 'Validação dos dados e escolha entre curso existente ou demanda adaptada.',
        en: 'Data validation and choice between an existing course or an adapted demand.',
      },
      alt: {
        pt: 'Modelo BPMN do processo proposto: cadastra família e jovem, valida dados, registra necessidade, consulta cursos no sistema, seleciona curso existente ou registra demanda adaptada, agenda dias e local e registra acompanhamento.',
        en: 'BPMN model of the proposed process: registers family and young person, validates data, records the need, looks up courses in the system, selects an existing course or records an adapted demand, schedules days and place and records follow-up.',
      },
    },
  ],

  // 06
  capabilities: {
    intro: {
      pt: 'Funcionalidades levantadas a partir do TO-BE. Formam uma lista preliminar, a ser validada com a cliente — não são funcionalidades implementadas.',
      en: 'Capabilities derived from the TO-BE process. They form a preliminary list to be validated with the client — they are not implemented features.',
    },
    groups: [
      {
        icon: Users,
        title: { pt: 'Pessoas e acesso', en: 'People & access' },
        items: [
          { pt: 'Cadastro de beneficiários (jovens)', en: 'Beneficiary (youth) registration' },
          { pt: 'Cadastro de famílias', en: 'Family registration' },
          { pt: 'Usuários administrativos com níveis de acesso', en: 'Administrative users with access levels' },
          { pt: 'Cadastro de parceiros', en: 'Partner registry' },
          { pt: 'Cadastro de voluntários', en: 'Volunteer registry' },
        ],
      },
      {
        icon: BookOpen,
        title: { pt: 'Cursos e atividades', en: 'Courses & activities' },
        items: [
          { pt: 'Cadastro de cursos, atividades e serviços', en: 'Courses, activities and services catalog' },
          { pt: 'Inscrição em cursos e atividades', en: 'Enrollment in courses and activities' },
          { pt: 'Demandas por novos cursos ou atividades', en: 'Demand for new courses or activities' },
        ],
      },
      {
        icon: History,
        title: { pt: 'Acompanhamento', en: 'Follow-up' },
        items: [
          { pt: 'Registro de presença e de faltas', en: 'Attendance and absence records' },
          { pt: 'Cálculo automático de frequência', en: 'Automatic attendance-rate calculation' },
          { pt: 'Limite de frequência configurável', en: 'Configurable attendance threshold' },
          { pt: 'Alertas de baixa frequência', en: 'Low-attendance alerts' },
          { pt: 'Histórico do beneficiário', en: 'Beneficiary history' },
          {
            pt: 'Atendimentos e encaminhamentos (psicológico, nutricional, emocional, familiar)',
            en: 'Support sessions and referrals (psychological, nutritional, emotional, family)',
          },
        ],
      },
      {
        icon: ChartColumn,
        title: { pt: 'Gestão e relatórios', en: 'Management & reports' },
        items: [
          {
            pt: 'Relatórios de beneficiários, frequência, participação e cursos',
            en: 'Reports on beneficiaries, attendance, participation and courses',
          },
        ],
      },
      {
        icon: Globe,
        title: { pt: 'Portal público', en: 'Public portal' },
        items: [
          { pt: 'Portal institucional', en: 'Institutional portal' },
          { pt: 'Divulgação de cursos, eventos, campanhas e notícias', en: 'Courses, events, campaigns and news' },
          { pt: 'Formas de participação, apoio e contato', en: 'Ways to participate, support and get in touch' },
          {
            pt: 'Formulário de interesse (potenciais beneficiários ou voluntários)',
            en: 'Interest form (prospective beneficiaries or volunteers)',
          },
        ],
      },
    ],
    outOfScope: {
      title: { pt: 'Fora da fronteira inicial', en: 'Outside the initial boundary' },
      text: {
        pt: 'Contabilidade completa, pagamentos on-line, prontuário clínico detalhado, folha de pagamento e gestão completa de estoque — salvo necessidade identificada e validada posteriormente com a cliente.',
        en: 'Full accounting, online payments, detailed clinical records, payroll and full inventory management — unless a need is later identified and validated with the client.',
      },
    },
  },

  // 07
  contribution: {
    teamNote: {
      pt: 'Trabalho colaborativo. Este case foi desenvolvido em equipe — as entregas foram construídas em conjunto. Abaixo estão as frentes em que contribuí.',
      en: 'Collaborative work. This case was developed as a team — the deliverables were built together. Below are the areas I contributed to.',
    },
    team: [
      { name: 'Rodrigo César de Andrade Fayad Generoso', initials: 'RG', me: true },
      { name: 'Matheus Castro Campos', initials: 'MC' },
      { name: 'Davi Kenzo', initials: 'DK' },
    ],
    items: [
      { icon: Search, text: { pt: 'Análise do problema', en: 'Problem analysis' } },
      { icon: ClipboardList, text: { pt: 'Levantamento e organização das informações', en: 'Gathering and organizing information' } },
      { icon: FileText, text: { pt: 'Documentação', en: 'Documentation' } },
      { icon: ListChecks, text: { pt: 'Requisitos', en: 'Requirements' } },
      { icon: Workflow, text: { pt: 'Construção e revisão dos processos AS-IS e TO-BE', en: 'Building and reviewing the AS-IS and TO-BE processes' } },
      { icon: Target, text: { pt: 'Definição do escopo', en: 'Scope definition' } },
      { icon: Layers, text: { pt: 'Preparação de materiais', en: 'Preparing materials' } },
      { icon: Presentation, text: { pt: 'Apresentação', en: 'Presentation' } },
    ],
  },

  // 08
  skills: [
    { pt: 'Engenharia de Requisitos', en: 'Requirements Engineering' },
    { pt: 'BPMN', en: 'BPMN' },
    { pt: 'AS-IS / TO-BE', en: 'AS-IS / TO-BE' },
    { pt: 'Elicitação de Requisitos', en: 'Requirements Elicitation' },
    { pt: 'Entrevistas', en: 'Interviews' },
    { pt: 'Análise de Processos de Negócio', en: 'Business Process Analysis' },
    { pt: 'Análise de Stakeholders', en: 'Stakeholder Analysis' },
    { pt: '5W2H', en: '5W2H' },
    { pt: 'Requisitos Funcionais', en: 'Functional Requirements' },
    { pt: 'Regras de Negócio', en: 'Business Rules' },
    { pt: 'Documentação Técnica', en: 'Technical Documentation' },
    { pt: 'Modelagem de Processos', en: 'Process Modeling' },
    { pt: 'Trabalho em Equipe', en: 'Teamwork' },
    { pt: 'Comunicação com o Cliente', en: 'Client Communication' },
  ],

  // 09
  learnings: [
    {
      title: { pt: 'Entender antes de especificar', en: 'Understand before specifying' },
      text: {
        pt: 'Modelar o processo atual antes de propor soluções reduz ambiguidades e evita tratar ideias da equipe como necessidades da cliente.',
        en: 'Modeling the current process before proposing solutions reduces ambiguity and avoids treating the team’s ideas as the client’s needs.',
      },
    },
    {
      title: { pt: 'Separar o que existe do que é proposta', en: 'Separate what exists from what is proposed' },
      text: {
        pt: 'Com a associação em estruturação, foi essencial distinguir práticas atuais, planos e propostas futuras na modelagem.',
        en: 'With the association still being structured, it was essential to distinguish current practices, plans and future proposals in the models.',
      },
    },
    {
      title: { pt: 'Tecnologia apoia, pessoas decidem', en: 'Technology supports, people decide' },
      text: {
        pt: 'No TO-BE, o sistema organiza registros, frequência e alertas — mas a decisão sobre encaminhamentos continua com a equipe da associação.',
        en: 'In the TO-BE, the system organizes records, attendance and alerts — but referral decisions stay with the association’s team.',
      },
    },
    {
      title: { pt: 'Dados pessoais exigem cuidado', en: 'Personal data needs care' },
      text: {
        pt: 'Informações como CPF pedem atenção desde a especificação: no acesso, no registro e nos níveis de permissão.',
        en: 'Information such as CPF needs attention from the specification stage: in access, storage and permission levels.',
      },
    },
    {
      title: { pt: 'Validar faz parte do processo', en: 'Validation is part of the process' },
      text: {
        pt: 'Requisitos só ficam confiáveis depois de confirmados com quem vive o processo no dia a dia.',
        en: 'Requirements only become reliable once they are confirmed with the people who live the process every day.',
      },
    },
  ],
  nextStep: {
    pt: 'Próximo passo documentado: validar campos, exceções e o acompanhamento com Marília antes de qualquer implementação.',
    en: 'Documented next step: validate fields, exceptions and follow-up with Marília before any implementation.',
  },
}
