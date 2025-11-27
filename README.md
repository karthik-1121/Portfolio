# 👨‍💻 Karthik K - Professional Portfolio

> A modern, responsive, and animated portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/1200x630/0f172a/06b6d4?text=Karthik+K+Portfolio)
*(Replace the link above with a screenshot of your actual website once deployed)*

## 📖 About The Project

This portfolio serves as a digital resume and showcase for **Karthik K**, a Hybrid Frontend Developer & UI/UX Designer. It is designed to be visually engaging, highly performant, and fully responsive across all devices.

The site features a sleek dark theme with neon accents (Cyan & Purple), smooth scroll animations using Framer Motion, and a clean, modular architecture.

### ✨ Key Features

*   **🎨 Modern UI/UX:** Dark mode aesthetic with glassmorphism effects and gradient text.
*   **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.
*   **⚡ High Performance:** Built with React 19 and Vite/Create React App for speed.
*   **🎬 Smooth Animations:** Scroll-triggered entrance animations using Framer Motion.
*   **🧩 Modular Architecture:** Component-based structure for easy maintenance.
*   **📄 Data-Driven Content:** All text, skills, and projects are managed via a centralized `constants.tsx` file.

## 🛠️ Tech Stack

*   **Frontend Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
├── index.html              # Entry point
├── index.tsx               # React root
├── App.tsx                 # Main layout
├── types.ts                # TypeScript interfaces
├── constants.tsx           # Data (Resume, Skills, Projects)
└── components/             # Reusable UI Components
    ├── Hero.tsx            # Landing section
    ├── About.tsx           # Bio & Education
    ├── Skills.tsx          # Technical skills bars
    ├── Experience.tsx      # Timeline of work history
    ├── Projects.tsx        # Project showcase
    ├── Contact.tsx         # Contact form & details
    ├── Navbar.tsx          # Responsive navigation
    └── AnimatedSection.tsx # Animation wrapper
