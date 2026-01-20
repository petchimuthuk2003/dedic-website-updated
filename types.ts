
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
  isImage?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
