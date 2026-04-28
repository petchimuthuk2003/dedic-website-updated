
import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Rocket, 
  Database, 
  Search, 
  Cpu, 
  Layers,
  Zap,
  Shield,
  MessageSquare,
  Users
} from 'lucide-react';
import { Service, TechItem, ProcessStep } from './types';

export const COLORS = {
  primary: '#3b82f6', // Blue
  secondary: '#14b8a6', // Teal
  bg: '#020617', // Slate 950
  accent: '#60a5fa', // Light blue
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'High-converting websites built with React & Next.js that turn visitors into leads and grow your revenue',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Mobile Apps',
    description: 'iOS & Android apps that keep your customers engaged, reduce churn, and open new revenue streams',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'Software Development',
    description: 'Custom business software that eliminates manual work, reduces costs, and scales with your growth',
    icon: 'Code2'
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'SEO & paid ad strategies that bring qualified leads to your door — not just traffic, but buyers',
    icon: 'Search'
  },
  {
    id: '5',
    title: 'UI UX Design',
    description: 'Conversion-focused interfaces that reduce drop-offs and turn more visitors into paying customers',
    icon: 'Users'
  },
  {
    id: '6',
    title: 'Cloud Solutions',
    description: 'Scalable AWS & Azure infrastructure that cuts downtime, reduces costs, and handles any traffic spike',
    icon: 'Database'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React JS', icon: '/Public/tech-stack-images/react-logo.webp', isImage: true },
  { name: 'Angular', icon: '/Public/tech-stack-images/angular-logo.webp', isImage: true },
  { name: 'Next JS', icon: '/Public/tech-stack-images/next-js-logo.webp', isImage: true },
  { name: 'Node JS', icon: '/Public/tech-stack-images/node-js-logo.webp', isImage: true },
  { name: 'Flutter', icon: '/Public/tech-stack-images/flutter-logo.webp', isImage: true },
  { name: 'React Native', icon: '/Public/tech-stack-images/react-logo.webp', isImage: true },
  { name: 'AWS', icon: '/Public/tech-stack-images/aws-logo.webp', isImage: true },  
  { name: 'SQL', icon: '/Public/tech-stack-images/sql-logo.webp', isImage: true },
  { name: 'Mongo DB', icon: '/Public/tech-stack-images/mongodb-logo.webp', isImage: true },
  { name: 'Figma', icon: '/Public/tech-stack-images/figma-logo.webp', isImage: true },
  { name: 'Photoshop', icon: '/Public/tech-stack-images/photoshop-logo.webp', isImage: true },
  { name: 'Illustrator', icon: '/Public/tech-stack-images/illustrator-logo.webp', isImage: true }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Strategize',
    description: 'We study your business goals to create a clear, step-by-step plan for success'
  },
  {
    number: '02',
    title: 'Design',
    description: 'We build beautiful, easy-to-use interfaces that look great and help you get more customers'
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Our team writes clean, high-quality code that is easy to update and manage later'
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'We use automation to launch your product smoothly, ensuring it stays online without interruption'
  }
];

export const IconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Globe,
  Rocket,
  Database,
  Search,
  Cpu,
  Layers,
  Zap,
  Shield,
  MessageSquare,
  Users
};
