export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  address: string;
  bp?: string;
  email: string;
  phone: string;
  phoneRaw: string;
  phones?: string[];
  whatsapp: string;
  director?: string;
  rccm: string;
  niu: string;
  cnps?: string;
  social: {
    whatsapp: string;
    facebook: string;
    linkedin: string;
  };
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface SiteData {
  company: Company;
  announcement: {
    enabled: boolean;
    text: string;
    link: string;
  };
  about: {
    history: string;
    mission: string;
    vision: string;
    values: ValueItem[];
    team?: TeamMember[];
  };
  process: ProcessStep[];
  legal: {
    privacy: string;
    terms: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image: string;
  icon: string;
}

export interface ServiceGroup {
  activitySlug: string;
  title: string;
  services: { name: string; description: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface Realisation {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  image: string;
}

export interface TechnicalSheet {
  id: string;
  title: string;
  product: string;
  file: string;
  description: string;
}
