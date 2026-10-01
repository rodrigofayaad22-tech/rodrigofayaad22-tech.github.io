import { Package, Store } from 'lucide-react'

// Previous hands-on experience. No official job titles, dates or metrics are listed on purpose.
export const experiences = [
  {
    id: 'banca-central',
    place: 'Banca Central',
    location: 'Formosa — Goiás',
    icon: Store,
    area: { pt: 'Atendimento e logística', en: 'Customer service & logistics' },
    activities: [
      { pt: 'Atendimento ao cliente e no balcão', en: 'Customer and counter service' },
      { pt: 'Apoio às atividades de logística', en: 'Support for logistics activities' },
      { pt: 'Utilização de Excel', en: 'Working with Excel' },
      { pt: 'Organização de informações', en: 'Organizing information' },
    ],
    tags: [
      { pt: 'Atendimento', en: 'Customer service' },
      { pt: 'Logística', en: 'Logistics' },
      { pt: 'Excel', en: 'Excel' },
      { pt: 'Organização', en: 'Organization' },
    ],
  },
  {
    id: 'cantina-colegio-visao',
    place: 'Cantina do Colégio Visão',
    location: 'Formosa — Goiás',
    icon: Package,
    area: { pt: 'Atendimento e estoque', en: 'Customer service & inventory' },
    activities: [
      { pt: 'Atendimento ao cliente', en: 'Customer service' },
      { pt: 'Controle e organização de estoque', en: 'Inventory control and organization' },
      { pt: 'Apoio às operações da cantina', en: "Support for the cafeteria's operations" },
    ],
    tags: [
      { pt: 'Atendimento', en: 'Customer service' },
      { pt: 'Estoque', en: 'Inventory' },
      { pt: 'Operações', en: 'Operations' },
    ],
  },
]
