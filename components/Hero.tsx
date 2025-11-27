import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-cyan-400 text-sm font-medium mb-6">
              Available for Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
              Frontend Developer & <span className="text-purple-400 font-normal">UI/UX Designer</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              Crafting responsive web pages and seamless user experiences with a strong foundation in modern web technologies and design principles.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="group px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-full transition-all flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-full transition-all flex items-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
           {/* Abstract Visual representation of Hybrid Dev */}
           <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-slate-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-48 h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full opacity-80 blur-xl absolute" />
                 <div className="w-40 h-40 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center relative z-10 shadow-2xl">
                    <span className="text-4xl">👨‍💻</span>
                 </div>
              </div>
              
              {/* Floating skill icons */}
              <div className="absolute -top-4 right-10 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-bounce delay-75">
                <span className="text-cyan-400 font-bold">React</span>
              </div>
              <div className="absolute bottom-10 -left-4 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-bounce delay-150">
                <span className="text-purple-400 font-bold">Figma</span>
              </div>
              <div className="absolute top-1/2 -right-12 bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg animate-bounce delay-300">
                <span className="text-yellow-400 font-bold">JS</span>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
