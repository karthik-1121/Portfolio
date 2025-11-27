import { 
  Code, 
  Palette, 
  Database, 
  Terminal, 
  Home, 
  User, 
  Briefcase, 
  Cpu, 
  Mail 
} from 'lucide-react';
import { NavItem, Skill, Project, Experience, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Karthik K",
  role: "Hybrid Frontend Developer & UI/UX Designer",
  location: "Coimbatore, India",
  email: "karthikcz2821@gmail.com",
  phone: "+91 8760798725",
  linkedin: "https://linkedin.com/in/karthik-k-k021",
  summary: "Entry-level Hybrid Frontend Developer & UI/UX Designer skilled in building responsive web pages, crafting user-friendly interfaces, and creating seamless user experiences. Strong foundation in HTML, CSS, JavaScript, MySQL, and basic React, with hands-on exposure to UI wireframing and layout design. Eager to contribute to real-world UI development and front-end engineering projects."
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: Cpu },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const SKILLS: Skill[] = [
  { name: "HTML & CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "ReactJS (Basic)", level: 60, category: "Frontend" },
  { name: "Responsive Design", level: 85, category: "Frontend" },
  { name: "Figma (Wireframing)", level: 80, category: "UI/UX" },
  { name: "Prototyping", level: 75, category: "UI/UX" },
  { name: "MySQL", level: 70, category: "Backend" },
  { name: "Node.js (Basics)", level: 50, category: "Backend" },
  { name: "Git & VS Code", level: 80, category: "Tools" },
  { name: "MATLAB", level: 65, category: "Tools" },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "TAP Academy, Bengaluru",
    role: "Java Full Stack Trainee",
    duration: "Jun 2024 - Feb 2025",
    description: [
      "Completed an extensive Java Full Stack Web Development program covering frontend, backend, and database technologies.",
      "Gained hands-on experience with HTML, CSS, JavaScript, SQL, Core Java, JDBC, Servlets, and project development workflows.",
      "Built small modules and practiced real-world coding tasks as part of the full-stack curriculum, strengthening understanding of web application architecture.",
      "Earned a valid course completion certificate after successfully clearing all required assessments."
    ]
  },
  {
    company: "Techvolt Software Pvt. Ltd., Coimbatore",
    role: "Web Development Intern",
    duration: "Jul 2022 – Aug 2022",
    description: [
      "Gained hands-on experience in building static and dynamic webpages.",
      "Worked with HTML, CSS, JavaScript, and MySQL.",
      "Learned industry practices in UI layout design and page structuring."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Webpage for Consulting Company",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    description: [
      "Developed a multi-page responsive website with clean UI components and consistent layout.",
      "Built login and signup workflows and connected them to a MySQL database.",
      "Improved page loading and reduced CSS clutter through modular structuring."
    ]
  },
  {
    title: "Fuzzy-Based Prediction for Solar Thermal Desalination",
    technologies: ["MATLAB", "AI Tools"],
    description: [
      "Implemented fuzzy logic for predicting yield in a solar thermal desalination system.",
      "Used MATLAB for data modeling and project simulation.",
      "Strengthened understanding of algorithm design and predictive systems."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Java Full Stack Web Development", issuer: "Tap Academy", year: "2024" },
  { name: "Full Stack Web Development Internship", issuer: "Techvolt Software Pvt. Ltd.", year: "2022" },
  { name: "Internet of Things", issuer: "NPTEL Certification", year: "2023" },
  { name: "Business English Certificate Preliminary", issuer: "Cambridge", year: "2022" },
];

export const EDUCATION: Education[] = [
  { degree: "B.E. – Computer Science & Engineering", institution: "Sri Ramakrishna Institute of Technology", year: "2020–2024", score: "73%" },
  { degree: "HSC", institution: "Lisieux Matriculation Higher Secondary School", year: "Completed", score: "57%" },
  { degree: "SSLC", institution: "Lisieux Matriculation Higher Secondary School", year: "Completed", score: "83%" },
];
