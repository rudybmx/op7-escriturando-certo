export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: Category;
  progress: number; // 0 to 100
  isNew?: boolean;
  coverText?: string;
}

export enum Category {
  ONBOARDING = "Onboarding",
  MARKETING = "Marketing & Performance",
  VENDAS = "Vendas & Prospecção",
  GESTAO = "Gestão & Clientes",
  TECH = "Tecnologia & IA",
  PLAYBOOKS = "Playbooks Oficiais"
}

export interface User {
  name: string;
  role: 'Franqueado' | 'Gestor' | 'Admin';
  avatar: string;
}

export interface Material {
  id: string;
  title: string;
  type: 'PDF' | 'XLSX' | 'PPT';
  size: string;
}