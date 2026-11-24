/**
 * SAMBA OCEAN — conteúdos do site
 * ------------------------------------------------------------
 * Todos os textos do site estão neste ficheiro. Para alterar um texto,
 * edite-o aqui e volte a gerar o site (npm run build).
 * As imagens estão em /public/img (os caminhos abaixo começam por /img/).
 * Fonte dos textos: Apresentação Comercial SAMBA OCEAN (2026).
 */

/* ---------- Empresa e contactos ---------- */
export const company = {
  name: 'SAMBA OCEAN',
  legalName: 'SAMBA OCEAN – PRESTAÇÃO DE SERVIÇOS, Lda.',
  footerName: 'SAMBA OCEAN · PRESTAÇÃO DE SERVIÇOS, LDA',
  tagline: 'Movemos Angola. Com força, segurança e pontualidade.',
  closingTagline: 'A força que move o teu negócio.',
  location: 'Talatona · Luanda · Angola',
  pills: ['Logística', 'Transporte', 'Estiva', 'Equipamentos'],
  shortDescription:
    'Soluções logísticas e operacionais para empresas que precisam de mover mercadoria e operar com eficiência em todo o país.',
  year: 2026,
  siteUrl: 'https://www.sambaocean.com',
};

export const contacts = {
  phone: '+244 924 188 376',
  phoneHref: 'tel:+244924188376',
  whatsapp: 'https://wa.me/244924188376',
  whatsappNumber: '244924188376',
  email: 'geral@sambaocean.com',
  emailHref: 'mailto:geral@sambaocean.com',
  website: 'www.sambaocean.com',
  websiteHref: 'https://www.sambaocean.com',
  addressLines: ['Condomínio Boulevard Benfica,', 'Torre B1, Casa nº 502,', 'Talatona – Luanda'],
  address: 'Condomínio Boulevard Benfica, Torre B1, Casa nº 502, Talatona – Luanda',
  mapQuery: 'Talatona, Luanda, Angola',
};

export const officialData = [
  { label: 'NIF', value: '5003456773' },
  { label: 'Matrícula', value: '40138-26/260818' },
  { label: 'Sede', value: 'Talatona, Luanda, Angola' },
];

/* ---------- Navegação ---------- */
export const nav = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/sectores', label: 'Sectores' },
  { to: '/porque-nos', label: 'Porquê Nós' },
  { to: '/contactos', label: 'Contactos' },
];

/* ---------- Metadados (título + descrição por página) ---------- */
export const meta = {
  home: {
    title: 'SAMBA OCEAN · Logística, Transporte, Estiva e Equipamentos em Angola',
    description:
      'Movemos Angola. Com força, segurança e pontualidade. Transporte interprovincial, equipas de estiva e aluguer de máquinas com operador especializado, a partir de Talatona, Luanda.',
  },
  sobre: {
    title: 'Sobre Nós · SAMBA OCEAN',
    description:
      'Conheça a SAMBA OCEAN: sociedade comercial de direito angolano, sediada em Talatona, Luanda. Missão, visão, valores e dados oficiais.',
  },
  servicos: {
    title: 'Serviços · Transporte, Estiva e Aluguer de Máquinas · SAMBA OCEAN',
    description:
      'Transporte interprovincial de Luanda para todas as províncias, equipas de estiva treinadas e aluguer de máquinas com operador especializado.',
  },
  sectores: {
    title: 'Sectores e Capacidade de Resposta · SAMBA OCEAN',
    description:
      'Portos e terminais, indústria e construção civil. Uma rede de motoristas, equipas de estiva e parceiros operacionais distribuídos por Angola.',
  },
  porque: {
    title: 'Porquê a Samba Ocean? · SAMBA OCEAN',
    description:
      'Ponto único de contacto, proposta formal em 24h, cobertura nacional, equipas treinadas, operações seguradas e acompanhamento até à entrega.',
  },
  contactos: {
    title: 'Contactos e Pedido de Proposta · SAMBA OCEAN',
    description:
      'Fale com a SAMBA OCEAN: +244 924 188 376 · geral@sambaocean.com · Condomínio Boulevard Benfica, Torre B1, Casa nº 502, Talatona – Luanda.',
  },
  notFound: {
    title: 'Página não encontrada · SAMBA OCEAN',
    description: 'A página que procura não existe ou foi movida.',
  },
};

/* ---------- Imagens (largura/altura reais para evitar saltos de layout) ---------- */
export const images = {
  hero: { src: '/img/hero.webp', w: 1860, h: 1600, alt: 'Descarga de contentor acompanhada pela equipa SAMBA OCEAN' },
  camiaoEquipa: { src: '/img/camiao-equipa.webp', w: 1600, h: 1200, alt: 'Camião amarelo com contentor e dois colaboradores da SAMBA OCEAN em armazém' },
  equipaArmazem: { src: '/img/equipa-armazem.webp', w: 1280, h: 960, alt: 'Dois colaboradores da SAMBA OCEAN, com colete e capacete, em frente a mercadoria paletizada' },
  transporteCamiao: { src: '/img/transporte-camiao.webp', w: 1600, h: 1200, alt: 'Camião com semirreboque de contentor e colaborador de colete refletor' },
  operacaoContentor: { src: '/img/operacao-contentor.webp', w: 1600, h: 1200, alt: 'Colaborador da SAMBA OCEAN junto a camião com contentor em armazém' },
  estivaDescarga: { src: '/img/estiva-descarga.webp', w: 960, h: 1280, alt: 'Colaborador da equipa de operações da SAMBA OCEAN a acompanhar a descarga de um camião' },
  estivaCarga: { src: '/img/estiva-carga.webp', w: 960, h: 1280, alt: 'Colaborador de colete SAMBA OCEAN a manusear fardos de mercadoria em armazém' },
  armazemEstiva: { src: '/img/armazem-estiva.webp', w: 1600, h: 1200, alt: 'Equipa de estiva a organizar mercadoria em armazém' },
  armazemCarga: { src: '/img/armazem-carga.webp', w: 1600, h: 1200, alt: 'Armazém com mercadoria organizada e equipa em operação' },
  supervisao: { src: '/img/supervisao.webp', w: 960, h: 1280, alt: 'Responsável da SAMBA OCEAN com prancheta a supervisionar uma operação' },
  responsavelCamiao: { src: '/img/responsavel-camiao.webp', w: 960, h: 1280, alt: 'Responsável de operações da SAMBA OCEAN junto a um camião' },
  equipaCamiao: { src: '/img/equipa-camiao.webp', w: 960, h: 1280, alt: 'Dois colaboradores da SAMBA OCEAN junto a um camião amarelo' },
  colaborador: { src: '/img/colaborador-colete.webp', w: 960, h: 1280, alt: 'Colaborador da SAMBA OCEAN de colete refletor em armazém' },
  maquinasCarregadora: { src: '/img/maquinas-carregadora.webp', w: 1040, h: 600, alt: 'Pá carregadora em estaleiro com operador' },
  maquinasOperadora: { src: '/img/maquinas-operadora.webp', w: 1650, h: 1150, alt: 'Profissional de capacete com prancheta junto a um empilhador em armazém' },
  sectorPortos: { src: '/img/sector-portos.webp', w: 1054, h: 725, alt: 'Terminal portuário com gruas e contentores' },
  sectorIndustria: { src: '/img/sector-industria.webp', w: 1040, h: 725, alt: 'Profissional de colete refletor num pavilhão industrial' },
  sectorConstrucao: { src: '/img/sector-construcao.webp', w: 1040, h: 725, alt: 'Trabalhadores de capacete numa obra de construção civil' },
};

/* ---------- Quem somos ---------- */
export const about = {
  eyebrow: '01 — Quem Somos',
  title: 'Quem Somos',
  text:
    'A SAMBA OCEAN é uma sociedade comercial de direito angolano, sediada em Talatona, Luanda, especializada em soluções logísticas e operacionais para empresas que precisam de mover mercadoria e operar com eficiência em todo o país.',
  quote:
    'Não somos apenas transportadores. Somos parceiros operacionais que actuam na resolução de desafios logísticos críticos.',
  quoteHighlights: ['parceiros operacionais'],
};

export const mission = {
  eyebrow: '02 — Norteadores Estratégicos',
  title: 'Missão e Visão',
  mission:
    'A missão da SAMBA OCEAN – PRESTAÇÃO DE SERVIÇOS, Lda. é oferecer soluções integradas de logística, transporte rodoviário de mercadorias, estiva e aluguer de equipamentos, pautadas pela qualidade, eficiência, segurança e inovação, garantindo respostas rápidas e personalizadas às necessidades dos clientes e contribuindo para a optimização dos seus resultados.',
  vision:
    'Ser uma empresa de referência e excelência, a nível nacional e continental, nos sectores da logística, transporte rodoviário de mercadorias, estiva e aluguer de equipamentos, reconhecida pela qualidade dos serviços, eficiência operacional, inovação e capacidade de oferecer soluções competitivas e sustentáveis.',
};

export const values = {
  eyebrow: '02 — Missão, Visão e Valores',
  title: 'Os Nossos Valores',
  intro: 'A SAMBA OCEAN orienta a sua actuação com base nos seguintes valores fundamentais.',
  items: [
    { icon: 'star', title: 'Excelência', text: 'Qualidade e melhoria contínua.' },
    { icon: 'scale', title: 'Integridade', text: 'Ética, transparência e honestidade.' },
    { icon: 'checkCircle', title: 'Responsabilidade', text: 'Rigoroso cumprimento das obrigações.' },
    { icon: 'handshake', title: 'Compromisso com o Cliente', text: 'Soluções personalizadas e respostas eficazes.' },
  ],
};

/* ---------- Serviços / Áreas de Actuação ---------- */
export const servicesIntro = {
  eyebrow: '03 — Áreas de Actuação',
  title: 'Áreas de Actuação',
  text:
    'O portfólio da SAMBA OCEAN combina transporte, mobilização e suporte técnico, permitindo-nos actuar em diferentes fases da cadeia logística angolana.',
};

export const services = [
  {
    id: 'transporte',
    number: '01',
    icon: 'truck',
    eyebrow: '03 — Transporte Rodoviário',
    title: 'Transporte Interprovincial',
    short: 'De Luanda para todas as províncias e vice-versa.',
    intro:
      'Transportamos mercadorias de Luanda para todas as províncias e vice-versa, com foco em segurança e acompanhamento rigoroso.',
    items: [
      { icon: 'box', title: 'Cargas Gerais e Contentorizadas', text: 'Capacidade para mover diversos tipos de mercadorias com segurança.' },
      { icon: 'warehouse', title: 'Distribuição Estratégica', text: 'Logística directa para empresas, armazéns e obras em todo o país.' },
      { icon: 'route', title: 'Gestão de Rotas', text: 'Planeamento optimizado e acompanhamento em tempo real da carga.' },
    ],
    highlight: { label: 'Cobertura', text: 'De Luanda para todas as províncias' },
    image: images.camiaoEquipa,
    cardImage: images.transporteCamiao,
  },
  {
    id: 'estiva',
    number: '02',
    icon: 'team',
    eyebrow: '03 — Estiva',
    title: 'Equipas de Estiva',
    short: 'Carga e descarga com máxima segurança e rapidez.',
    intro: 'Disponibilizamos equipas treinadas para operações de carga e descarga com máxima segurança e rapidez.',
    items: [
      { icon: 'container', title: 'Carga e descarga de camiões e contentores' },
      { icon: 'package', title: 'Manuseamento de mercadoria pesada e delicada' },
      { icon: 'warehouse', title: 'Organização logística em armazéns e obras' },
    ],
    highlight: { label: 'Equipas treinadas', text: 'Carga e descarga com máxima segurança e rapidez' },
    image: images.estivaDescarga,
    cardImage: images.estivaCarga,
  },
  {
    id: 'maquinas',
    number: '03',
    icon: 'loader',
    eyebrow: '03 — Equipamentos',
    title: 'Aluguer de Máquinas',
    short: 'Equipamento com operador especializado.',
    intro: 'Apoie a sua operação sem necessidade de investimento em activos fixos.',
    items: [
      { icon: 'forklift', title: 'Movimentação de carga em armazéns e portos' },
      { icon: 'helmet', title: 'Apoio logístico em obras' },
      { icon: 'operator', title: 'Equipamento com operador especializado' },
    ],
    highlight: { label: 'Equipamentos', text: 'Equipamento entregue com operador especializado' },
    image: images.maquinasOperadora,
    cardImage: images.maquinasCarregadora,
  },
];

/* ---------- Como actuamos ---------- */
export const process = {
  eyebrow: '04 — Como Actuamos nas Operações',
  title: 'Como Actuamos',
  intro: 'Actuamos como um único ponto de contacto, integrando serviços para simplificar a sua coordenação logística.',
  steps: [
    { number: '01', icon: 'search', title: 'Diagnóstico da necessidade do cliente' },
    { number: '02', icon: 'fileClock', title: 'Proposta comercial formal em 24h', featured: true },
    { number: '03', icon: 'team', title: 'Mobilização logística e de equipas' },
    { number: '04', icon: 'eye', title: 'Execução da operação com acompanhamento' },
    { number: '05', icon: 'flag', title: 'Conclusão e confirmação de entrega' },
  ],
};

export const insurance = {
  title: 'Protecção e responsabilidade operacional',
  text:
    'As nossas operações contam com cobertura de seguros aplicável. Assumimos a responsabilidade pelos danos comprovadamente causados à mercadoria e a terceiros, nos termos da legislação em vigor e das condições das respectivas apólices.',
};

/* ---------- Sectores ---------- */
export const sectors = {
  eyebrow: '05 — Sectores de Actuação',
  title: 'Sectores de Actuação',
  intro:
    'As nossas soluções são desenhadas para responder às exigências críticas de sectores fundamentais da economia nacional.',
  items: [
    {
      number: '01',
      icon: 'anchor',
      title: 'Portos e Terminais',
      text: 'Movimentação e descarga de contentores.',
      related: ['Equipas de Estiva', 'Aluguer de Máquinas'],
      image: images.sectorPortos,
    },
    {
      number: '02',
      icon: 'factory',
      title: 'Indústria',
      text: 'Abastecimento e distribuição de mercadoria.',
      related: ['Transporte Interprovincial', 'Equipas de Estiva'],
      image: images.sectorIndustria,
    },
    {
      number: '03',
      icon: 'helmet',
      title: 'Construção Civil',
      text: 'Apoio logístico e equipamentos em obra.',
      related: ['Aluguer de Máquinas', 'Transporte Interprovincial'],
      image: images.sectorConstrucao,
    },
  ],
};

/* ---------- Capacidade de resposta e rede ---------- */
export const capacity = {
  eyebrow: '06 — Capacidade de Resposta e Rede',
  title: 'Capacidade de Resposta e Rede',
  paragraphs: [
    'A nossa capacidade operacional é apoiada por uma rede de motoristas, equipas de estiva e parceiros operacionais distribuídos por Angola.',
    'Esta estrutura permite-nos mobilizar meios em diferentes regiões e assegurar o cumprimento de prazos em operações complexas ou urgentes.',
  ],
  items: [
    { icon: 'steering', title: 'Motoristas', text: 'Rede de motoristas para o transporte de Luanda para todas as províncias e vice-versa.' },
    { icon: 'team', title: 'Estiva', text: 'Equipas treinadas para carga e descarga com máxima segurança e rapidez.' },
    { icon: 'handshake', title: 'Parceiros', text: 'Parceiros operacionais distribuídos por Angola.' },
    { icon: 'globe', title: 'Cobertura nacional', text: 'Mobilização de meios em diferentes regiões do país.' },
  ],
  coverage:
    'Acesso a meios adequados, documentação completa e uma operação acompanhada pela SAMBA OCEAN até à entrega final da mercadoria.',
};

/* ---------- Qualidade e execução ---------- */
export const quality = {
  eyebrow: '07 — Qualidade, Segurança e Execução',
  title: 'Qualidade e Execução',
  statement:
    'O nosso compromisso é com a qualidade do serviço, segurança na execução e cumprimento total dos acordos.',
  statementHighlights: ['qualidade do serviço', 'segurança na execução', 'cumprimento total'],
  items: [
    { icon: 'star', title: 'Qualidade do serviço', text: 'Melhoria contínua em cada operação.' },
    { icon: 'shield', title: 'Segurança na execução', text: 'Equipas treinadas e cobertura de seguros.' },
    { icon: 'checkCircle', title: 'Cumprimento dos acordos', text: 'Rigor nos prazos e nas obrigações assumidas.' },
  ],
};

/* ---------- Porquê a Samba Ocean ---------- */
export const why = {
  eyebrow: '08 — Porquê a Samba Ocean?',
  title: 'Porquê a Samba Ocean?',
  intro: 'Seis razões para confiar a sua operação logística à SAMBA OCEAN.',
  items: [
    {
      icon: 'target',
      title: 'Ponto único de contacto',
      text: 'Serviços integrados para simplificar a sua coordenação logística.',
      detail:
        'Transporte, estiva e equipamentos coordenados por uma só equipa: do diagnóstico da necessidade à confirmação de entrega, fala sempre com a SAMBA OCEAN.',
    },
    {
      icon: 'fileClock',
      title: 'Proposta formal em 24h',
      text: 'Resposta comercial rápida e personalizada a cada necessidade.',
      detail:
        'Depois do diagnóstico da sua necessidade, recebe uma proposta comercial formal em 24h, ajustada à sua operação.',
    },
    {
      icon: 'globe',
      title: 'Cobertura nacional',
      text: 'Rede de motoristas, estiva e parceiros distribuídos por Angola.',
      detail:
        'De Luanda para todas as províncias e vice-versa, com capacidade para mobilizar meios em diferentes regiões do país.',
    },
    {
      icon: 'team',
      title: 'Equipas treinadas',
      text: 'Carga e descarga com máxima segurança e rapidez.',
      detail:
        'Equipas preparadas para a carga e descarga de camiões e contentores e para o manuseamento de mercadoria pesada e delicada.',
    },
    {
      icon: 'shield',
      title: 'Operações seguradas',
      text: 'Cobertura de seguros e responsabilidade nos termos da lei.',
      detail:
        'As nossas operações contam com cobertura de seguros aplicável, nos termos da legislação em vigor e das condições das respectivas apólices.',
    },
    {
      icon: 'flag',
      title: 'Acompanhamento até à entrega',
      text: 'Operação seguida de perto até à entrega final da mercadoria.',
      detail:
        'Execução da operação com acompanhamento, documentação completa e conclusão com confirmação de entrega.',
    },
  ],
};

/* ---------- Chamada para acção ---------- */
export const cta = {
  eyebrow: '09 — Contactos',
  title: 'Proposta formal em 24h',
  text: 'Conte-nos o que precisa de mover. Fazemos o diagnóstico da sua necessidade e enviamos uma proposta comercial formal em 24h.',
};

/* ---------- Formulário: serviços e províncias ---------- */
export const formServices = [
  'Transporte Interprovincial',
  'Equipas de Estiva',
  'Aluguer de Máquinas (com operador)',
  'Solução integrada (vários serviços)',
  'Outro',
];

export const provinces = [
  'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando', 'Cubango', 'Cuanza Norte', 'Cuanza Sul',
  'Cunene', 'Huambo', 'Huíla', 'Icolo e Bengo', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje',
  'Moxico', 'Moxico Leste', 'Namibe', 'Uíge', 'Zaire',
];
