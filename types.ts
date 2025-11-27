import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'UI/UX' | 'Backend' | 'Tools';
}

export interface Project {
  title: string;
  technologies: string[];
  description: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}
