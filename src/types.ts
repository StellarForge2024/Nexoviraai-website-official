export type ServiceId = 
  | 'software-development'
  | 'web-development'
  | 'data-intelligence'
  | 'crm-erp-development'
  | 'ai-agents'
  | 'custom-ai-tools'
  | 'micro-saas-development';

export interface ServiceItem {
  id: ServiceId;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  overview: string;
  iconName: string;
  businessProblems: string[];
  keyCapabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  exampleUseCases: {
    title: string;
    scenario: string;
    solution: string;
  }[];
  businessBenefits: {
    metric: string;
    benefit: string;
  }[];
  developmentApproach: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  iconName: string;
  challenges: string[];
  customSolutions: {
    title: string;
    description: string;
  }[];
  deliverableExamples: string[];
}

export interface ConceptDemo {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
}
