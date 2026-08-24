export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  subtitle: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  fullDescription?: {
    pt: string;
    en: string;
  };
  timelineDate: string;
  year: number;
  category: 'web' | 'mobile' | 'backend' | 'academic' | 'system';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  wireframeImage?: string;
  featured?: boolean;
  metrics?: {
    label: { pt: string; en: string };
    value: string;
  }[];
}

export interface Experience {
  id: string;
  role: {
    pt: string;
    en: string;
  };
  company: string;
  companyUrl?: string;
  period: {
    pt: string;
    en: string;
  };
  type: 'work' | 'academic' | 'extension' | 'event';
  location: string;
  description: {
    pt: string;
    en: string;
  };
  achievements: {
    pt: string[];
    en: string[];
  };
  skills: string[];
}

export interface SkillGroup {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  icon: string;
  skills: {
    name: string;
    category: string;
    proficiency?: number;
    popular?: boolean;
  }[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
