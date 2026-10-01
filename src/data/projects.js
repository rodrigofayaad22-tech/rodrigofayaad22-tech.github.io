import { CASE_STUDY_URL } from '../lib/paths.js'
import bd2Lg from '../assets/images/project-bd2-1200.webp'
import bd2Sm from '../assets/images/project-bd2-640.webp'
import algebraLg from '../assets/images/project-algebra-1200.webp'
import algebraSm from '../assets/images/project-algebra-640.webp'
import odontoLg from '../assets/images/project-odonto-1200.webp'
import odontoSm from '../assets/images/project-odonto-640.webp'
import bpmnPreview from '../assets/images/bpmn-as-is-to-be-900.webp'
import bpmnFull from '../assets/images/bpmn-as-is-to-be-1536.webp'

/**
 * HOW TO ADD A PROJECT
 * Copy one object below, save a screenshot in src/assets/images (≈1200px wide, .webp),
 * import it at the top and fill in the fields. Bilingual fields use { pt, en }.
 * `githubUrl: null` hides the GitHub button. `featured: false` hides the project.
 */
const screenshot = (lg, sm) => ({
  src: lg,
  srcSet: `${sm} 640w, ${lg} 1200w`,
  width: 1200,
  height: 750,
})

export const projects = [
  {
    id: 'bd2',
    title: { pt: 'Plataforma de Estudos — Banco de Dados II', en: 'Study Platform — Databases II' },
    category: { pt: 'Educação · Aplicação web', en: 'Education · Web app' },
    description: {
      pt: 'Aplicação web criada para ajudar colegas da minha turma de Engenharia de Software a se preparar para a avaliação de Banco de Dados II. Transforma o conteúdo da disciplina em uma experiência de estudo organizada e acessível, com aulas, exercícios, simulados, flashcards e revisões rápidas.',
      en: 'Web application built to help my Software Engineering classmates prepare for the Databases II exam. It turns course content into an organized, accessible study experience with lessons, exercises, mock exams, flashcards and quick reviews.',
    },
    highlight: { pt: '61 aulas · 237 questões · 130 flashcards', en: '61 lessons · 237 questions · 130 flashcards' },
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI-assisted development'],
    image: screenshot(bd2Lg, bd2Sm),
    liveUrl: 'https://chocolate-cat-280681.hostingersite.com/',
    githubUrl: null,
    hosting: 'Hostinger',
    featured: true,
  },
  {
    id: 'algebra',
    title: { pt: 'Plataforma de Estudos — Álgebra Linear', en: 'Study Platform — Linear Algebra' },
    category: { pt: 'Educação · Aplicação web', en: 'Education · Web app' },
    description: {
      pt: 'Aplicação educacional criada para apoiar colegas universitários nos conceitos fundamentais da primeira avaliação de Álgebra Linear. Apresenta conteúdos e exercícios de forma visual e estruturada, com conferência de resposta, resolução passo a passo e progresso salvo no navegador.',
      en: 'Educational application built to support fellow university students with the core concepts of the first Linear Algebra exam. It presents content and exercises in a visual, structured way, with answer checking, step-by-step solutions and progress saved in the browser.',
    },
    highlight: { pt: '96 exercícios organizados em módulos', en: '96 exercises organized into modules' },
    technologies: ['HTML', 'CSS', 'JavaScript', 'MathJax', 'AI-assisted development'],
    image: screenshot(algebraLg, algebraSm),
    liveUrl: 'https://blanchedalmond-clam-628704.hostingersite.com/',
    githubUrl: null,
    hosting: 'Hostinger',
    featured: true,
  },
  {
    id: 'odonto',
    title: { pt: 'Página Web — Odontologia', en: 'Web Page — Dental Clinic' },
    category: { pt: 'Negócio local · Página institucional', en: 'Local business · Institutional page' },
    description: {
      pt: 'Página web desenvolvida para uma clínica odontológica de Formosa, Goiás. Reúne de forma organizada e acessível as informações sobre a clínica, tratamentos, convênios e localização, com acesso direto ao agendamento pelo WhatsApp.',
      en: 'Web page built for a dental clinic in Formosa, Goiás. It brings together, in an organized and accessible way, information about the clinic, its treatments, accepted insurance plans and location, with direct access to scheduling via WhatsApp.',
    },
    highlight: { pt: 'Navegação por seções e menu mobile', en: 'Section navigation and mobile menu' },
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI-assisted development'],
    image: screenshot(odontoLg, odontoSm),
    liveUrl: 'https://mistyrose-pelican-931937.hostingersite.com/',
    githubUrl: null,
    hosting: 'Hostinger',
    featured: true,
  },
]

// The Viver Divino case gets its own page; this is the teaser shown in the Projects section.
export const featuredCase = {
  id: 'viver-divino',
  title: {
    pt: 'Sistema de Gestão Social — Associação Viver Divino',
    en: 'Social Management System — Associação Viver Divino',
  },
  subtitle: {
    pt: 'Case acadêmico de Engenharia de Requisitos desenvolvido com cliente real para análise e transformação digital de processos de uma associação social.',
    en: 'Academic Requirements Engineering case developed with a real client to analyze and digitally transform the processes of a social association.',
  },
  meta: [
    { pt: 'Cliente real', en: 'Real client' },
    { pt: 'Equipe de 3', en: 'Team of 3' },
    { pt: 'BPMN · AS-IS / TO-BE', en: 'BPMN · AS-IS / TO-BE' },
    { pt: 'Análise e especificação — sem implementação', en: 'Analysis & specification — no implementation' },
  ],
  image: {
    src: bpmnPreview,
    srcSet: `${bpmnPreview} 900w, ${bpmnFull} 1536w`,
    width: 900,
    height: 600,
    alt: {
      pt: 'Mapeamento BPMN dos processos atual (AS-IS) e proposto (TO-BE) da Associação Viver Divino',
      en: 'BPMN mapping of the current (AS-IS) and proposed (TO-BE) processes of Associação Viver Divino',
    },
  },
  url: CASE_STUDY_URL,
}
