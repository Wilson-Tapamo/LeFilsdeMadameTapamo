export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  category: string;
  type: 'featured' | 'other';
  image?: string;
  technologies: string[];
  demoUrl?: string;
  role?: string;
  metrics?: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
}

export interface PassionCard {
  id: string;
  title: string;
  quote: string;
  details: string;
  symbol: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  author: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessPhase {
  phase: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
}
