import { Category, Course, Material } from "./types";

export const FEATURED_COURSE: Course = {
  id: "feat-001",
  title: "A Nova Era da Performance",
  description: "Entenda a metodologia exclusiva Escriturando Certo e como potencializamos os resultados da sua franquia contábil com processos e alta performance. O ponto de partida para o seu sucesso.",
  thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
  duration: "45 min",
  category: Category.ONBOARDING,
  progress: 0,
  isNew: true
};

export const COURSES: Course[] = [
  // Onboarding
  {
    id: "onb-1",
    title: "Bem-vindo à Escriturando Certo",
    description: "Visão geral da cultura, missão e valores da rede Escriturando Certo.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    coverText: "BEM-VINDO",
    duration: "15 min",
    category: Category.ONBOARDING,
    progress: 100
  },
  {
    id: "onb-2",
    title: "Configuração Inicial",
    description: "Passo a passo para configurar suas ferramentas e acessos.",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    coverText: "RECURSOS",
    duration: "30 min",
    category: Category.ONBOARDING,
    progress: 45
  },
  
  // Marketing
  {
    id: "mkt-1",
    title: "Meta Ads Avançado",
    description: "Estratégias de tráfego pago focadas em conversão.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    coverText: "META ADS",
    duration: "1h 20min",
    category: Category.MARKETING,
    progress: 0,
    isNew: true
  },
  {
    id: "mkt-2",
    title: "Google Ads para Franquias",
    description: "Como dominar a rede de pesquisa localmente.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    coverText: "GOOGLE ADS",
    duration: "55 min",
    category: Category.MARKETING,
    progress: 10
  },
  {
    id: "mkt-3",
    title: "Copywriting Persuasivo",
    description: "Escrita que vende: técnicas aplicadas aos anúncios.",
    thumbnail: "https://images.unsplash.com/photo-1455309014342-96b6f58be519?auto=format&fit=crop&w=800&q=80",
    coverText: "COPYWRITING",
    duration: "40 min",
    category: Category.MARKETING,
    progress: 0
  },

  // Vendas
  {
    id: "sales-1",
    title: "Prospecção B2B Ativa",
    description: "Metodologia de Cold Calling e Social Selling.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80",
    coverText: "PROSPECÇÃO",
    duration: "50 min",
    category: Category.VENDAS,
    progress: 0
  },
  {
    id: "sales-2",
    title: "Negociação e Fechamento",
    description: "Técnicas para contornar objeções e fechar contratos.",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    coverText: "FECHAMENTO",
    duration: "1h 10min",
    category: Category.VENDAS,
    progress: 0
  },

  // Tech & IA
  {
    id: "tech-1",
    title: "IA no Dia a Dia",
    description: "Automatizando processos operacionais com IA Generativa.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    coverText: "INTELIGÊNCIA",
    duration: "35 min",
    category: Category.TECH,
    progress: 0,
    isNew: true
  },
  {
    id: "tech-2",
    title: "Dashboards de Performance",
    description: "Como ler e interpretar os dados no Power BI.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    coverText: "ANALYTICS",
    duration: "45 min",
    category: Category.TECH,
    progress: 0
  }
];

export const MATERIALS: Material[] = [
  { id: "mat-1", title: "Playbook de Vendas 2024", type: "PDF", size: "2.4 MB" },
  { id: "mat-2", title: "Calculadora de ROI", type: "XLSX", size: "1.1 MB" },
  { id: "mat-3", title: "Apresentação Institucional", type: "PPT", size: "15 MB" }
];