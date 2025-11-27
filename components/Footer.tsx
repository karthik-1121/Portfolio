import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm mt-2">
            Designed & Built with React & Tailwind CSS
        </p>
    </footer>
  );
};

export default Footer;
