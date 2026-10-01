import { BrainCircuit, CodeXml, Database, GitBranch, Globe, Network, Sparkles, Workflow } from 'lucide-react'

// Skills are described by context of use — never by percentages.
// `stage` is a short, honest label; `note` explains where the knowledge comes from.
export const skillGroups = [
  {
    id: 'programming',
    icon: CodeXml,
    items: [
      {
        name: 'Python',
        stage: { pt: 'Estudos de IA', en: 'AI studies' },
        note: {
          pt: 'Utilizado especialmente em estudos e aplicações envolvendo IA.',
          en: 'Used especially in studies and applications involving AI.',
        },
      },
      {
        name: 'Java',
        stage: { pt: 'Em estudo · POO', en: 'Studying · OOP' },
        note: {
          pt: 'Conhecimento básico; atualmente estudando Programação Orientada a Objetos.',
          en: 'Basic knowledge; currently studying Object-Oriented Programming.',
        },
      },
      {
        name: 'C',
        stage: { pt: 'Acadêmico', en: 'Academic' },
        note: {
          pt: 'Conhecimento acadêmico, construído nas disciplinas do curso.',
          en: 'Academic knowledge built through coursework.',
        },
      },
      {
        name: 'JavaScript',
        stage: { pt: 'Básico–intermediário', en: 'Basic–intermediate' },
        note: {
          pt: 'Aplicado em interfaces e projetos web.',
          en: 'Applied to interfaces and web projects.',
        },
      },
    ],
  },
  {
    id: 'web',
    icon: Globe,
    items: [
      {
        name: 'HTML',
        stage: { pt: 'Básico–intermediário', en: 'Basic–intermediate' },
        note: {
          pt: 'Estrutura semântica de páginas e projetos web.',
          en: 'Semantic structure for pages and web projects.',
        },
      },
      {
        name: 'CSS',
        stage: { pt: 'Básico–intermediário', en: 'Basic–intermediate' },
        note: {
          pt: 'Estilização e layout de interfaces web.',
          en: 'Styling and layout for web interfaces.',
        },
      },
      {
        name: 'React',
        stage: { pt: 'Em aprendizado', en: 'Learning' },
        note: {
          pt: 'Biblioteca usada na construção deste portfólio.',
          en: 'The library this portfolio is built with.',
        },
      },
      {
        name: 'Vite',
        stage: { pt: 'Em aprendizado', en: 'Learning' },
        note: {
          pt: 'Ferramenta de build usada neste portfólio.',
          en: 'The build tool used in this portfolio.',
        },
      },
    ],
  },
  {
    id: 'data',
    icon: Database,
    items: [
      {
        name: 'SQL',
        stage: { pt: 'Em estudo', en: 'Studying' },
        note: {
          pt: 'Estudando Banco de Dados na graduação.',
          en: 'Studying Databases in my degree.',
        },
      },
      {
        name: 'MySQL',
        stage: { pt: 'Em estudo', en: 'Studying' },
        note: {
          pt: 'SGBD utilizado nos estudos de Banco de Dados.',
          en: 'DBMS used in my database studies.',
        },
      },
    ],
  },
  {
    id: 'tools',
    icon: GitBranch,
    items: [
      {
        name: 'Git',
        stage: { pt: 'Em evolução', en: 'Growing' },
        note: {
          pt: 'Conhecimento de uso para versionamento; desenvolvendo domínio mais avançado.',
          en: 'Working knowledge of version control; building more advanced skills.',
        },
      },
      {
        name: 'GitHub',
        stage: { pt: 'Em evolução', en: 'Growing' },
        note: {
          pt: 'Hospedagem de código e perfil de projetos; aprofundando recursos avançados.',
          en: 'Code hosting and project profile; exploring more advanced features.',
        },
      },
    ],
  },
]

export const interests = [
  { icon: BrainCircuit, label: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' } },
  { icon: Network, label: { pt: 'Dados', en: 'Data' } },
  { icon: Workflow, label: { pt: 'Engenharia de Software', en: 'Software Engineering' } },
  { icon: Sparkles, label: { pt: 'Desenvolvimento Web', en: 'Web Development' } },
]
