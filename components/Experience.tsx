import React from 'react';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-700 pl-8 ml-4 md:ml-0 space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Dot on timeline */}
                <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 font-medium flex items-center mt-1">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-slate-400 border border-slate-700 mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <span className="text-cyan-500 mr-2 mt-1.5 text-xs">●</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
